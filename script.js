function createInputLine() {
    const inputContainer = document.createElement('div');
    inputContainer.className = 'input-container';
    
    const prompt = document.createElement('span');
    prompt.className = 'prompt';
    prompt.textContent = '$ ';
    
    const textarea = document.createElement('textarea');
    textarea.id = 'input-box';
    textarea.rows = 1;
    
    // Auto-grow textarea
    textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    });
    
    // Handle Enter key
    textarea.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            const command = this.value.trim();
            if (command) {
                processCommand(command);
                this.value = '';
                this.style.height = 'auto';
            }
        }
    });
    
    inputContainer.appendChild(prompt);
    inputContainer.appendChild(textarea);
    
    return inputContainer;
}

function addOutput(output) {
    // Create a new output container
    const outputContainer = document.createElement('div');
    outputContainer.className = 'output-container';
    
    // Add the output text
    const outputElement = document.createElement('div');
    outputElement.className = 'output-line';
    outputElement.textContent = output;
    outputContainer.appendChild(outputElement);
    
    // Get the terminal content
    const terminalContent = document.querySelector('.terminal-content');
    
    // Remove the old input container
    const oldInputContainer = document.querySelector('.input-container');
    oldInputContainer.remove();
    
    // Add the output and new input line
    terminalContent.appendChild(outputContainer);
    terminalContent.appendChild(createInputLine());
    
    // Focus and scroll
    const newInput = document.getElementById('input-box');
    newInput.focus();
    newInput.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Initialize the terminal
function initTerminal() {
    const container = document.getElementById('container');
    
    // Create terminal content wrapper
    const terminalContent = document.createElement('div');
    terminalContent.className = 'terminal-content';
    container.appendChild(terminalContent);
    
    const inputLine = createInputLine();
    terminalContent.appendChild(inputLine);
    document.getElementById('input-box').focus();
}

// Initialize terminal when page loads
document.addEventListener('DOMContentLoaded', initTerminal);
