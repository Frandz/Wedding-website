const terminalLines = [
    "> CONNECTING TO PROXY...",
    "> BYPASSING FIREWALL...",
    "> [SUCCESS] DATABASE ACCESSED",
    "> DOWNLOADING USER_CREDENTIALS.DB...",
    ">> WARNING: SYSTEM TRACE DETECTED <<"
];

function startHacking() {
    const body = document.querySelector('.terminal-body');
    body.innerHTML = ''; // Clear previous text
    
    let i = 0;
    const interval = setInterval(() => {
        if (i < terminalLines.length) {
            const p = document.createElement('p');
            p.className = 'hacker-text' + (terminalLines[i].includes('WARNING') ? ' warning' : '');
            p.textContent = terminalLines[i];
            body.appendChild(p);
            i++;
        } else {
            clearInterval(interval);
            // Add the blinking cursor at the end
            const cursor = document.createElement('div');
            cursor.className = 'cursor';
            body.appendChild(cursor);
        }
    }, 600); // Speed of "hacking"
}

// Trigger when modal opens
document.getElementById('hackerTrigger').onclick = () => {
    document.getElementById('hackerModal').style.display = 'flex';
    startHacking();
};
