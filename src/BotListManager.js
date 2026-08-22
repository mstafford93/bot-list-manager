import React, { useState } from 'react';

const BotListManager = () => {
  const [bots, setBots] = useState([
    { id: 1, name: "Email Extractor", status: "Running", task: "Extracting emails" },
    { id: 2, name: "Notification Sender", status: "Completed", task: "Sending notifications" },
    { id: 3, name: "Data Analyzer", status: "Stopped", task: "Analyzing data" }
  ]);

  const triggerJob = (id) => {
    console.log(id)
  };

  return (
    <div className="bot-list-manager">
      <h1>Bot List Manager</h1>
      <ul>
        {bots.map(({id, name, status}) => <li key={id}>{id}-{name}-{status} <button onClick={() => triggerJob({id})}>Trigger Job</button></li>)}
      </ul>
    </div>
  );
};

export default BotListManager;