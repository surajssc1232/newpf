import { useState } from 'react';
import { commands } from './data/content';

function App() {
  const [commandHistory, setCommandHistory] = useState([]);
  const [currentInput, setCurrentInput] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      processCommand(currentInput);
    }
  };

  const processCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const response = commands[trimmedCmd] || 'Command not found. Type "help" for available commands.';
    const newEntry = {
      command: cmd,
      response: response
    };

    setCommandHistory([...commandHistory, newEntry]);
    setCurrentInput('');
  };

  return (
    <div className="app">
      <div className="terminal">
        {commandHistory.map((entry, index) => (
          <div key={index} className="command-block">
            <div className="prompt-container">
              <span>visitor@portfolio:~$ {entry.command}</span>
            </div>
            <div className="response">{entry.response}</div>
          </div>
        ))}
        <div className="prompt-container">
          <span>visitor@portfolio:~$</span>
          <input
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="command-input"
            autoFocus
          />
          <span className="cursor"></span>
        </div>
      </div>
    </div>
  );
}

export default App;