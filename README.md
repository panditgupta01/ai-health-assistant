<<<<<<< HEAD
# HostelMed — AI Health Assistant

A hackathon-ready AI health chatbot for hostel students. Built with React + Vite, Node.js + Express, and OpenAI.

---
<img width="817" height="896" alt="image" src="https://github.com/user-attachments/assets/a9ed4ee0-1c50-49ca-a2e8-fdd35261628c" />

## Folder Structure

```
ai-health-assistant/
├── backend/
│   ├── server.js          ← Express server + OpenAI integration
│   ├── package.json
│   └── .env.example       ← Copy this to .env and add your API key
│
└── frontend/
    ├── index.html
    ├── vite.config.js
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── package.json
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── index.css
        ├── components/
        │   ├── ChatBox.jsx        ← Main chat UI
        │   └── MessageBubble.jsx  ← Message rendering
        └── hooks/
            └── useChat.js         ← State + API logic
```

---

## Step 1 — Get an OpenAI API Key

1. Go to https://platform.openai.com/api-keys
2. Click "Create new secret key"
3. Copy the key (starts with `sk-...`)

---

## Step 2 — Setup the Backend

Open a terminal and run these commands:

```bash
# Navigate to backend folder
cd ai-health-assistant/backend

# Install dependencies
npm install

# Create your .env file
cp .env.example .env
```

Now open `backend/.env` in any text editor and replace the placeholder:

```
OPENAI_API_KEY=sk-your-actual-key-here
PORT=5000
```

---

## Step 3 — Run the Backend

```bash
# Still inside the backend folder
npm run dev
```

You should see:
```
✅ Server running at http://localhost:5000
📋 POST /api/symptom — ready
```

Leave this terminal open.

---

## Step 4 — Setup the Frontend

Open a **new terminal** and run:

```bash
# Navigate to frontend folder
cd ai-health-assistant/frontend

# Install dependencies
npm install
```

---

## Step 5 — Run the Frontend

```bash
# Still inside the frontend folder
npm run dev
```

You should see:
```
  ➜  Local:   http://localhost:3000/
```

Open http://localhost:3000 in your browser. The app should be running!

---

## How It Works

1. User types symptoms in the chat box
2. Frontend sends `POST /api/symptom` to the backend
3. Backend sends the message to OpenAI with a hostel-specific prompt
4. OpenAI returns structured JSON with urgency level, remedies, etc.
5. Frontend displays the response as a formatted health card

---

## Common Errors & Fixes

**Error: "Invalid OpenAI API key"**
→ Open `backend/.env` and make sure your key is correct (no spaces, no quotes around it)

**Error: "Connection failed. Is the backend running on port 5000?"**
→ Make sure you started the backend first with `npm run dev` in the backend folder

**Error: "Cannot find module 'openai'"**
→ Run `npm install` again inside the backend folder

**Frontend shows blank screen**
→ Check the browser console (F12) for errors. Make sure you ran `npm install` in the frontend folder.

**Port 5000 already in use**
→ Change PORT in `backend/.env` to 5001 and update `frontend/vite.config.js` proxy target to `http://localhost:5001`

---

## For the Hackathon Demo

Test these inputs to show judges:
- "I have fever and headache since morning, 101 degrees"
- "Stomach pain and loose motions after eating mess food"
- "Chest pain while breathing deeply" (shows HIGH urgency)
- "Mild cold and runny nose" (shows LOW urgency)
=======
# ai-health-assistant
>>>>>>> f407207e78e81817d4377bf288844238a1622956
