import { commands } from './commands.js';
import { TerminalRenderer } from './renderer.js';

export class Terminal {
  constructor() {
    this.terminal = document.getElementById('terminal');
    this.output = document.getElementById('output');
    this.input = document.querySelector('.input');
    this.prompt = document.querySelector('.prompt');
    this.cursor = document.querySelector('.cursor');
    
    this.initializeTerminal();
  }

  initializeTerminal() {
    this.updateTimestamp();
    this.setupEventListeners();
    this.focusInput();
    this.startCursorBlink();
  }

  updateTimestamp() {
    const timestamp = document.querySelector('.timestamp');
    timestamp.textContent = new Date().toLocaleString();
  }

  setupEventListeners() {
    this.input.addEventListener('keydown', (e) => this.handleInput(e));
    this.terminal.addEventListener('click', () => this.focusInput());
  }

  handleInput(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const command = this.input.textContent.trim().toLowerCase();
      this.executeCommand(command);
    }
  }

  executeCommand(command) {
    this.appendToOutput(`${this.prompt.textContent} ${command}`);
    
    if (commands[command]) {
      const response = commands[command]();
      if (response.type === 'clear') {
        this.output.innerHTML = '';
      } else {
        this.appendToOutput(TerminalRenderer.renderOutput(response));
      }
    } else if (command !== '') {
      this.appendToOutput(`Command not found: ${command}. Type 'help' for available commands.`);
    }
    
    this.input.textContent = '';
    this.terminal.scrollTop = this.terminal.scrollHeight;
  }

  appendToOutput(content) {
    const outputLine = document.createElement('div');
    outputLine.className = 'output-line';
    outputLine.innerHTML = content;
    this.output.appendChild(outputLine);
  }

  focusInput() {
    this.input.focus();
  }

  startCursorBlink() {
    this.cursor.classList.add('blink');
  }
}