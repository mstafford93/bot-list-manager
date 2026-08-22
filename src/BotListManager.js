import React, { useState } from 'react';

const BotListManager = () => {
  const [bots, setBots] = useState([
    { id: 1, name: "Email Extractor", status: "Running", task: "Extracting emails" },
    { id: 2, name: "Notification Sender", status: "Completed", task: "Sending notifications" },
    { id: 3, name: "Data Analyzer", status: "Stopped", task: "Analyzing data" }
  ]);

  const triggerJob = (id) => {
    setBots(bots.map((bot) => (bot.id === id ? {...bot, status: "Processing"} : bot)))
    console.log(id)
    
  };

  const colorChange = (status) => {
    console.log(status);
    if (status === "Completed") {
      return ({
                backgroundColor: "rgb(12, 250, 63)",
            })
    } else if (status === "Stopped") {
      return ({
                backgroundColor: "rgb(255, 21, 21)",
            })
    } else {
      return ({
        backgroundColor: "rgb(91, 21, 255)",
        color: "white"
      })
    }
  }

  /*Change Object to prop*/
  return (
    <div className="bot-list-manager">
      <h1>Bot List Manager</h1>
      <ul>
        {bots.map((bot) => <li key={bot.id} style={colorChange(bot.status)}>{bot.id}-{bot.name}-{bot.status}
          <button onClick={() => triggerJob(bot.id)}>Trigger Job</button></li>)}
      </ul>
    </div>
  );
};

export default BotListManager;