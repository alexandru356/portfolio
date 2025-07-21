// === DOM Elements ===
const input = document.getElementById("command-input");
const output = document.getElementById("output");

// === Command Registry ===
const commands = {
  help: () => `
Available commands: whoami, projects, stack, resume, experience, clear, date, echo, sudo, neofetch`,
  whoami: () => `
<span class="text-300">Alexandru Ciuca,</span>  
CS student from Montreal.  
Passionate about backend, dev tools, and systems.  
Enjoys building tools, shipping projects, and learning deeply.`,

  projects: () => `
<pre>
projects/
├── <span class="text-blue-400">gotorrent</span>       BitTorrent client
│   └── <a href="https://github.com/alexandru356/gotorrent" class="text-blue-400" target="_blank">[GitHub]</a>
├── <span class="text-blue-400">media-lib</span>       JavaFX media manager
│   └── <a href="https://github.com/alexandru356/Projet-Mediatheque" class="text-blue-400" target="_blank">[GitHub]</a>
└── <span class="text-blue-400">wanner-site</span>     Static business website
    └── <a href="https://wannerpeinture.com" class="text-blue-400" target="_blank">[Live]</a>
</pre>`,

  resume: () => `
Download resume: 
<a href="assets/resume.pdf" class="underline text-blue-400" target="_blank">resume.pdf</a>`,

  experience: () => `
<pre>
experience/
└── <span class="text-blue-400">Nomadis</span> – Software Developer Intern
    ├── Location: Montreal, QC
    ├── Role: Part of the QA team using C# and selenium
    └── Period: Summer 2025
</pre>`,

  exp: () => commands.experience(),
  clear: () => "__CLEAR__",

  echo: (args) => args,

  sudo: () => {
    printOutput("[sudo] password for alex:");
    setTimeout(() => {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    }, 500);
    return null;
  },
  neofetch: () => `
<pre>
       <span class="text-yellow-400">.--.</span>
      <span class="text-yellow-400">|o_o |</span>      <span class="text-cyan-300">Alexandru Ciuca</span>
      <span class="text-yellow-400">|:_/ |</span>      ---------------------
     <span class="text-yellow-400">//   \\\\</span>     <span class="text-gray-300">OS:</span> Linux 
    <span class="text-yellow-400">(|     |)</span>    <span class="text-gray-300">Shell:</span> ~/terminal
   <span class="text-yellow-400">/'\\_   _/\\'</span>   <span class="text-gray-300">Uptime:</span> ∞
   <span class="text-yellow-400">\\___)=(___/</span>
</pre>
`,
  stack: () => `
<div class="space-y-2">
  <div class="flex items-center space-x-3">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" class="h-6 w-6 border border-green-400 p-0.5 rounded" alt="Python" />
    <span>Python</span>
  </div>
  <div class="flex items-center space-x-3">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" class="h-6 w-6 border border-green-400 p-0.5 rounded" alt="Go" />
    <span>Go</span>
  </div>
  <div class="flex items-center space-x-3">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" class="h-6 w-6 border border-green-400 p-0.5 rounded" alt="React" />
    <span>React</span>
  </div>
  <div class="flex items-center space-x-3">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" class="h-6 w-6 border border-green-400 p-0.5 rounded" alt="C#" />
    <span>C#</span>
  </div>
  <div class="flex items-center space-x-3">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" class="h-6 w-6 border border-green-400 p-0.5 rounded" alt="PostgreSQL" />
    <span>PostgreSQL</span>
  </div>
  <div class="flex items-center space-x-3">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" class="h-6 w-6 border border-green-400 p-0.5 rounded" alt="Docker" />
    <span>Docker</span>
  </div>
  <div class="flex items-center space-x-3">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" class="h-6 w-6 border border-green-400 p-0.5 rounded" alt="Git" />
    <span>Git</span>
  </div>

</div>
`,
  date: () => {
    const now = new Date();
    const formatted = now.toLocaleString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    return `<span class="text-gray-300">${formatted}</span>`;
  },
};

function printOutput(html) {
  if (!html) return;
  const div = document.createElement("div");
  div.classList.add("mb-2");
  div.innerHTML = html;
  output.appendChild(div);
  window.scrollTo(0, document.body.scrollHeight);
}

function handleCommand(rawInput) {
  const trimmed = rawInput.trim();
  const [cmd, ...args] = trimmed.split(" ");
  const argString = args.join(" ");

  printOutput(
    `<span class="text-green-400">alex@ciuca:~$</span> <span class="text-green-400">${trimmed}</span>`,
  );

  if (commands[cmd]) {
    const result = commands[cmd](argString);
    if (result === "__CLEAR__") {
      output.innerHTML = "";
    } else {
      printOutput(result);
    }
  } else {
    printOutput(`<span class="text-red-500">${cmd}: command not found</span>`);
  }
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleCommand(input.value);
    input.value = "";
  }
});

document.addEventListener("click", () => {
  input.focus();
});

window.onload = () => {
  input.focus();
};
