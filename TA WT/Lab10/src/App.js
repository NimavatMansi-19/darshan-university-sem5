import React from 'react';
import Welcome from './Welcome';
import EventHandling from './EventHandling';
import Message from './Display';


function App() {
  return (
    <div>
      {/* <Welcome name="Darshan" course="ReactJS" />
      <Welcome name="ram" course="JavaScript" /> */}
      {/* <EventHandling /> */}
       {/* Message will be displayed */}
      <Message isDisplay={true} />

      {/* Message will not be displayed */}
      {/* <Message isDisplay={false} /> */}
    </div>
  );
}

export default App;
