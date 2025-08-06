# Step 1: Import necessary libraries
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
import warnings
from flask import Flask, request, render_template_string
import re  # Imported for parsing the uploaded file
import os  # Imported for handling file paths

# Suppress warnings for a cleaner output
warnings.filterwarnings('ignore')

# --- DATA LOADING AND MODEL TRAINING (This runs once when the app starts) ---

# Step 2: Load the dataset from the CSV file
try:
    # IMPORTANT: Make sure this path is correct for your system.
    file_path = r'D:\Sem5\DM\Project/heart.csv'
    df = pd.read_csv(file_path)
    print(f"--- Successfully loaded data from {file_path} ---")
except FileNotFoundError:
    print(f"Error: File not found at '{file_path}'. Please make sure the path is correct.")
    # Create a dummy dataframe if file not found, so the app can still start
    # to demonstrate UI, but prediction will fail.
    dummy_data = {'age': [], 'sex': [], 'cp': [], 'trestbps': [], 'chol': [], 'fbs': [],
                  'restecg': [], 'thalach': [], 'exang': [], 'oldpeak': [], 'slope': [],
                  'ca': [], 'thal': [], 'target': []}
    df = pd.DataFrame(dummy_data)
    print("--- Created a dummy DataFrame as a fallback. Predictions will not work without the real data. ---")


# Step 3: Prepare the data
# Ensure the dataframe is not empty before proceeding
if not df.empty:
    X = df.drop('target', axis=1)
    y = df['target']
    X_train, _, y_train, _ = train_test_split(X, y, test_size=0.2, random_state=42)

    # Step 4: Initialize and train the machine learning model
    print("\n--- Training the Logistic Regression model... ---")
    model = LogisticRegression(max_iter=1000)
    model.fit(X_train, y_train)
    print("--- Model training complete. Ready to accept requests. ---")
else:
    X = pd.DataFrame(columns=[c for c in df.columns if c != 'target'])
    model = None
    print("\n--- Model training skipped due to data loading failure. ---")


# --- WEB APPLICATION SETUP (Using Flask) ---

# Step 5: Initialize the Flask application
app = Flask(__name__)

# --- Helper function to parse uploaded report ---
def parse_report_data(report_content):
    """
    Parses the text content of a patient report to extract feature values.
    The expected format is 'key: value' or 'key = value' on each line.
    """
    data = {}
    # Use regex to find key-value pairs, ignoring case for keys
    # Allows for ':' or '=' as a separator, with optional spaces
    for line in report_content.splitlines():
        match = re.match(r'^\s*([a-zA-Z_]+)\s*[:=]\s*(.+)\s*$', line)
        if match:
            key = match.group(1).lower().strip()
            value = match.group(2).strip()
            if key in X.columns:
                data[key] = value
    return data


# Step 6: Define the HTML template for the user interface
# This is a complete webpage contained within a Python string.
HTML_TEMPLATE = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Heart Disease Predictor</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; }
        .tab-button.active { border-color: #3b82f6; color: #3b82f6; }
        .tab-content { display: none; }
        .tab-content.active { display: block; }
        .result-card { transition: all 0.3s ease-in-out; }
    </style>
</head>
<body class="bg-gray-100 flex items-center justify-center min-h-screen p-4">

    <div class="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <div class="text-center mb-8">
            <h1 class="text-3xl md:text-4xl font-bold text-gray-800">Heart Disease Predictor</h1>
            <p class="text-gray-500 mt-2">Enter patient details manually or upload a report to predict heart disease likelihood.</p>
        </div>

        <div class="border-b border-gray-200 mb-6">
            <nav class="flex -mb-px space-x-6" id="tab-nav">
                <button class="tab-button active py-4 px-1 border-b-2 font-medium text-lg" data-tab="manual">Manual Entry</button>
                <button class="tab-button py-4 px-1 border-b-2 font-medium text-lg text-gray-500" data-tab="upload">Upload Report</button>
            </nav>
        </div>

        <div id="tab-manual" class="tab-content active">
            <form method="POST">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div><label for="age" class="block text-sm font-medium text-gray-700 mb-1">Age</label><input type="number" id="age" name="age" required class="w-full p-3 border border-gray-300 rounded-lg" placeholder="e.g., 52"></div>
                    <div><label for="sex" class="block text-sm font-medium text-gray-700 mb-1">Sex</label><select id="sex" name="sex" required class="w-full p-3 border border-gray-300 rounded-lg"><option value="1">Male</option><option value="0">Female</option></select></div>
                    <div><label for="cp" class="block text-sm font-medium text-gray-700 mb-1">Chest Pain Type</label><select id="cp" name="cp" required class="w-full p-3 border border-gray-300 rounded-lg"><option value="0">Typical Angina</option><option value="1">Atypical Angina</option><option value="2">Non-anginal Pain</option><option value="3">Asymptomatic</option></select></div>
                    <div><label for="trestbps" class="block text-sm font-medium text-gray-700 mb-1">Resting BP</label><input type="number" id="trestbps" name="trestbps" required class="w-full p-3 border border-gray-300 rounded-lg" placeholder="mm Hg"></div>
                    <div><label for="chol" class="block text-sm font-medium text-gray-700 mb-1">Cholesterol</label><input type="number" id="chol" name="chol" required class="w-full p-3 border border-gray-300 rounded-lg" placeholder="mg/dl"></div>
                    <div><label for="fbs" class="block text-sm font-medium text-gray-700 mb-1">Fasting BS > 120</label><select id="fbs" name="fbs" required class="w-full p-3 border border-gray-300 rounded-lg"><option value="1">True</option><option value="0">False</option></select></div>
                    <div><label for="restecg" class="block text-sm font-medium text-gray-700 mb-1">Resting ECG</label><select id="restecg" name="restecg" required class="w-full p-3 border border-gray-300 rounded-lg"><option value="0">Normal</option><option value="1">ST-T abnormality</option><option value="2">Probable LVH</option></select></div>
                    <div><label for="thalach" class="block text-sm font-medium text-gray-700 mb-1">Max Heart Rate</label><input type="number" id="thalach" name="thalach" required class="w-full p-3 border border-gray-300 rounded-lg" placeholder="e.g., 168"></div>
                    <div><label for="exang" class="block text-sm font-medium text-gray-700 mb-1">Exercise Angina</label><select id="exang" name="exang" required class="w-full p-3 border border-gray-300 rounded-lg"><option value="1">Yes</option><option value="0">No</option></select></div>
                    <div><label for="oldpeak" class="block text-sm font-medium text-gray-700 mb-1">Oldpeak</label><input type="number" step="0.1" id="oldpeak" name="oldpeak" required class="w-full p-3 border border-gray-300 rounded-lg" placeholder="e.g., 1.0"></div>
                    <div><label for="slope" class="block text-sm font-medium text-gray-700 mb-1">Slope</label><select id="slope" name="slope" required class="w-full p-3 border border-gray-300 rounded-lg"><option value="0">Upsloping</option><option value="1">Flat</option><option value="2">Downsloping</option></select></div>
                    <div><label for="ca" class="block text-sm font-medium text-gray-700 mb-1">Major Vessels</label><input type="number" id="ca" name="ca" required class="w-full p-3 border border-gray-300 rounded-lg" placeholder="0-4"></div>
                    <div><label for="thal" class="block text-sm font-medium text-gray-700 mb-1">Thalassemia</label><select id="thal" name="thal" required class="w-full p-3 border border-gray-300 rounded-lg"><option value="0">Normal</option><option value="1">Fixed Defect</option><option value="2">Reversible Defect</option><option value="3">Unknown</option></select></div>
                </div>
                <div class="mt-8"><button type="submit" name="submit_manual" value="predict" class="w-full bg-blue-600 text-white p-4 rounded-lg text-lg font-bold hover:bg-blue-700">Predict from Manual Entry</button></div>
            </form>
        </div>

        <div id="tab-upload" class="tab-content">
            <form method="POST" enctype="multipart/form-data">
                <div class="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300">
                    <h3 class="text-lg font-semibold text-gray-800">Upload Patient Report</h3>
                    <p class="text-gray-600 mt-1">Upload a <code class="bg-gray-200 p-1 rounded">.txt</code> file with patient data.</p>
                    <input type="file" name="report_file" accept=".txt" required class="mt-4 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100">
                    <div class="mt-4 text-xs text-gray-500">
                        <p class="font-bold">Required Format:</p>
                        <pre class="bg-white p-2 mt-1 rounded border">age: 52
sex: 1
cp: 0
trestbps: 125
chol: 212
fbs: 0
restecg: 1
thalach: 168
exang: 0
oldpeak: 1.0
slope: 2
ca: 2
thal: 3</pre>
                    </div>
                </div>
                 <div class="mt-8"><button type="submit" name="submit_upload" value="predict" class="w-full bg-green-600 text-white p-4 rounded-lg text-lg font-bold hover:bg-green-700">Predict from Uploaded File</button></div>
            </form>
        </div>

        {% if prediction_text %}
        <div id="result-container" class="mt-8">
             <div class="result-card text-center p-6 rounded-lg {{ 'bg-red-100 border-red-300' if 'High' in prediction_text else 'bg-green-100 border-green-300' }}">
                <h2 class="text-2xl font-bold {{ 'text-red-800' if 'High' in prediction_text else 'text-green-800' }}">{{ prediction_text }}</h2>
                {% if probability_text %}
                    <p class="text-lg mt-2 {{ 'text-red-700' if 'High' in prediction_text else 'text-green-700' }}">{{ probability_text }}</p>
                {% endif %}
             </div>
             {% if extracted_values %}
             <div class="mt-4 p-4 bg-gray-50 rounded-lg">
                <h3 class="font-bold text-gray-700">Values Used for Prediction:</h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-1 text-sm text-gray-600 mt-2">
                    {% for key, value in extracted_values.items() %}
                        <span><strong class="capitalize">{{ key }}:</strong> {{ value }}</span>
                    {% endfor %}
                </div>
             </div>
             {% endif %}
        </div>
        {% endif %}
    </div>

<script>
    const tabNav = document.getElementById('tab-nav');
    const tabs = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabNav.addEventListener('click', (e) => {
        if (e.target.matches('.tab-button')) {
            tabs.forEach(tab => tab.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            e.target.classList.add('active');
            const tabId = e.target.dataset.tab;
            document.getElementById(`tab-${tabId}`).classList.add('active');
        }
    });
</script>
</body>
</html>
"""

# Step 7: Define the main route for the web application
@app.route('/', methods=['GET', 'POST'])
def home():
    prediction_text = None
    probability_text = None
    extracted_values = None

    if model is None:
        return render_template_string(HTML_TEMPLATE, prediction_text="Error: Model is not trained due to a data loading issue. Please check the server logs.")

    if request.method == 'POST':
        try:
            features = []
            
            # --- HANDLE FILE UPLOAD ---
            if 'submit_upload' in request.form:
                if 'report_file' not in request.files or not request.files['report_file'].filename:
                    raise ValueError("No file selected for upload.")
                
                file = request.files['report_file']
                
                # Read file content
                report_content = file.read().decode('utf-8')
                
                # Parse data using the helper function
                parsed_data = parse_report_data(report_content)
                extracted_values = parsed_data.copy() # For display

                if len(parsed_data) != len(X.columns):
                    missing_keys = set(X.columns) - set(parsed_data.keys())
                    raise ValueError(f"File is missing required data: {', '.join(missing_keys)}")

                # Order the features correctly according to the model's training columns
                features = [float(parsed_data[key]) for key in X.columns]

            # --- HANDLE MANUAL FORM SUBMISSION ---
            elif 'submit_manual' in request.form:
                # Get data from the form
                features = [float(request.form.get(key)) for key in X.columns]
                extracted_values = {key: request.form.get(key) for key in X.columns}


            # --- MAKE PREDICTION (if features were populated) ---
            if features:
                prediction = model.predict([features])[0]
                probability = model.predict_proba([features])[0]

                if prediction == 1:
                    prediction_text = 'Result: High Risk of Heart Disease'
                else:
                    prediction_text = 'Result: Low Risk of Heart Disease'
                
                probability_text = f'Confidence: {max(probability) * 100:.2f}%'

        except (ValueError, TypeError) as e:
            prediction_text = f"Error: {e}"
        except Exception as e:
            prediction_text = f"An unexpected error occurred: {e}"

    # Render the page with the result (if any)
    return render_template_string(HTML_TEMPLATE, 
                                  prediction_text=prediction_text, 
                                  probability_text=probability_text,
                                  extracted_values=extracted_values)

# Step 8: Run the Flask application
if __name__ == '__main__':
    # The app will run on http://127.0.0.1:5000 by default
    app.run(debug=True)