export const API_BASE_URL = 'http://localhost:5085/api/Sport';

class ApiService {
  async fetchSports() {
    try {
      const response = await fetch(`${API_BASE_URL}/All`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching sports:', error);
      throw error;
    }
  }
}

const apiService = new ApiService();
export default apiService;