/**
 * Interactive Client Terminal CLI Emulator
 */
(function() {
  const cliOutput = document.getElementById('cliOutput');
  const cliInput = document.getElementById('cliInput');
  const cliContainer = document.querySelector('.interactive-cli-box');

  if (!cliOutput || !cliInput) return;

  const commands = {
    help: `
<span class="code-keyword">Available commands:</span>
  <span class="code-var">skills</span>     - View tech stack & skill breakdown
  <span class="code-var">projects</span>   - List featured portfolio projects
  <span class="code-var">contact</span>    - Show direct contact information & social links
  <span class="code-var">hire</span>       - Check availability & hiring status
  <span class="code-var">about</span>      - Developer background summary
  <span class="code-var">whoami</span>     - Inspect your current session details
  <span class="code-var">date</span>       - Display system timestamp
  <span class="code-var">clear</span>      - Clear terminal screen
`,
    skills: `
<span class="code-keyword">⚡ Core Technical Stack (AMSearth):</span>
  <span class="code-func">Frontend:</span>    JavaScript (ES6+), React.js, Dart, Flutter, HTML5, CSS3
  <span class="code-func">Backend:</span>     Python (FastAPI), PHP, Java (OOP), REST APIs
  <span class="code-func">Databases:</span>   MySQL, Relational Data Schemas
  <span class="code-func">Tools & Ops:</span> Git, GitHub Actions, Lua (Neovim), Machine Learning (Jupyter/Python), C
`,
    projects: `
<span class="code-keyword">🚀 Featured Projects (AMSearth):</span>
  <span class="code-var">[1] Dev Tracker</span>      - Full-stack task & progress tracker (React + FastAPI)
  <span class="code-var">[2] Club Manager</span>     - Member & event management web system (PHP + MySQL)
  <span class="code-var">[3] Streak Tracker</span>   - Habit logging & streak tracker (Java)
  <span class="code-var">[4] Milk Muster</span>      - Mobile dairy yield & collection app (Dart + Flutter)
  <span class="code-comment">Scroll to Featured Projects section or visit github.com/AMSearth!</span>
`,
    contact: `
<span class="code-keyword">📫 Direct Contact:</span>
  <span class="code-func">Email:</span>    ajinkya.manoj.shinde@gmail.com
  <span class="code-func">WhatsApp:</span> +91 8177890371
  <span class="code-func">GitHub:</span>   github.com/AMSearth
  <span class="code-func">LinkedIn:</span> linkedin.com/in/ajinkya-shinde-b8136b27b
  <span class="code-func">Status:</span>   <span class="code-str">🟢 Open for Freelance & Contract Projects</span>
`,
    hire: `
<span class="code-keyword">💼 Work & Collaboration:</span>
  <span class="code-str">✓ Available for Full-Time, Contract, & Project-Based roles.</span>
  <span class="code-comment">Fast delivery, clean code architecture, and high performance guaranteed.</span>
  <span class="code-var">Fill out the contact form below or email directly to get started!</span>
`,
    about: `
<span class="code-keyword">👨‍💻 About Ajinkya:</span>
  Senior Web Developer with 5+ years crafting pixel-perfect, lightning-fast web applications.
  Specialized in custom modern UIs, responsive web systems, and high-conversion client platforms.
`,
    whoami: `
  <span class="code-str">user@client-browser (Visitor)</span> - Welcome to Ajinkya's Developer Terminal!
`,
    date: () => `  <span class="code-var">${new Date().toString()}</span>`,
    sudo: `  <span class="code-func" style="color: var(--accent-red)">Permission denied: You are already logged in with full client permissions!</span>`
  };

  cliInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      const inputVal = cliInput.value.trim().toLowerCase();
      cliInput.value = '';

      if (!inputVal) return;

      // Echo input
      const inputLine = document.createElement('div');
      inputLine.className = 'cli-line';
      inputLine.innerHTML = `<span class="cli-prompt">visitor@tokyo-night:~$</span> <span>${escapeHtml(inputVal)}</span>`;
      cliOutput.appendChild(inputLine);

      // Process command
      if (inputVal === 'clear') {
        cliOutput.innerHTML = '';
        return;
      }

      const responseLine = document.createElement('div');
      responseLine.className = 'cli-line';

      if (commands[inputVal]) {
        const res = typeof commands[inputVal] === 'function' ? commands[inputVal]() : commands[inputVal];
        responseLine.innerHTML = res;
      } else {
        responseLine.innerHTML = `<span style="color: var(--accent-red)">Command not found: '${escapeHtml(inputVal)}'. Type '<span class="code-var">help</span>' for available commands.</span>`;
      }

      cliOutput.appendChild(responseLine);
      const cliBody = document.querySelector('.cli-body');
      cliBody.scrollTop = cliBody.scrollHeight;
    }
  });

  function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
})();
