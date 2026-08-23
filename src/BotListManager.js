import React, { useState } from 'react';

const BotListManager = () => {
  const [bots, setBots] = useState([
    { id: 1, name: "Email Extractor", status: "Running", task: "Extracting emails" },
    { id: 2, name: "Notification Sender", status: "Completed", task: "Sending notifications" },
    { id: 3, name: "Data Analyzer", status: "Stopped", task: "Analyzing data" }
  ]);

  const [searchInput, setSearchInput] = useState("")

  const [newBots, setNewBots] = useState({ id: "", botName: "", status: "" })

  const handleDelete = (id) => {
    setBots(bots.filter((bot) => bot.id !== id))
    //Only filters none same id
  }

  const addBotToList = () => {
    if (newBots.id.trim() !== "" && newBots.botName.trim() !== "" && newBots.status.trim() !== "") {
      setBots([...bots, newBots])
      setNewBots({ id: "", botName: "", status: "" })
    }
  }

  const triggerJob = (id) => {
    setBots(bots.map((bot) => (bot.id === id ? { ...bot, status: "Processing" } : bot)))
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

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value)
  }

  const handleSearchResult = () => {

    setBots(bots.filter(bot => bot.status === searchInput))
  }

  /*Change Object to prop*/
  return (
    <div className="bot-list-manager">
      <h1>Bot List Manager</h1>
      <div>
      <input 
      type="text" 
      placeholder='Enter Status'
      onChange={handleSearchInput}/>
      <button onClick={handleSearchResult}>Search</button>
      </div>
      <input type="text" value={newBots.id} onChange={(e) => setNewBots({ ...newBots, id: e.target.value })} placeholder='Bot Id' />
      <input type="text" value={newBots.botName} onChange={(e) => setNewBots({ ...newBots, botName: e.target.value })} placeholder='Bot Name' />
      <input type="text" value={newBots.status} onChange={(e) => setNewBots({ ...newBots, status: e.target.value })} placeholder='Bot Status' />
      <button onClick={addBotToList}>Add bot</button>
      <ul>
        {bots.map((bot) => <li key={bot.id} style={colorChange(bot.status)}>{bot.id}-{bot.name}-{bot.status}
          <button onClick={() => triggerJob(bot.id)}>Trigger Job</button><button onClick={()=>{handleDelete(bot.id)}}>Remove Item</button></li>)}
      </ul>
    </div>
  );
};

export default BotListManager;