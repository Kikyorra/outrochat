A realtime chat application built with JavaScript, ASP.NET Core and SignalR.

This project was created as a fullstack practice project focused on learning realtime communication, frontend/backend integration and websocket architecture.

---

🚀 Features
Realtime messaging
Multiple users connected simultaneously
Automatic reconnection
Dynamic message rendering
Enter key to send messages
Auto scroll chat
Online status UI
Responsive interface
Modern chat design
Message timestamps
SignalR websocket communication

---

🛠️ Technologies Used

Frontend
HTML5
CSS3
JavaScript
Backend
ASP.NET Core
SignalR
C#

---

📂 Project Structure
RealtimeChat/
│
├── backend/
│   └── RealtimeChatAPI/
│       ├── Hubs/
│       │   └── ChatHub.cs
│       ├── Program.cs
│       └── RealtimeChatAPI.csproj
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md

---

⚡ How It Works

The frontend connects to the ASP.NET backend through SignalR.

SignalR keeps a persistent realtime connection between client and server, allowing instant communication without refreshing the page.

Flow:

Frontend ↔ SignalR Hub ↔ Backend ↔ Connected Users

Messages sent by one user are instantly broadcast to all connected clients.

---

🧠 What I Learned

This project helped me practice and understand:

realtime communication
websocket concepts
SignalR architecture
frontend/backend integration
async/await
DOM manipulation
event handling
reconnection systems
CORS configuration
realtime rendering
client-server architecture
debugging connection issues

---

🤖 AI Assistance & Learning Process

This project was developed with AI assistance as part of the learning process.

I used AI tools to:

understand SignalR architecture
learn realtime communication concepts
debug backend/frontend connection issues
understand websocket flow
improve project structure
learn best practices
understand how each part of the code works

The main goal was not simply generating code, but using AI as a learning assistant to better understand fullstack realtime applications and modern development workflows.

All code was studied, modified and tested during development.

---

👨‍💻 Author

Made by Lucas Lima / Kikyo
