# 🚀 HostelMed — AI Health Assistant for Students

> 🧠 *Your hostel’s personal AI doctor — anytime, anywhere.*

HostelMed is an AI-powered health assistant designed to help hostel students quickly understand their symptoms, assess urgency, and take the right action — without needing immediate access to a doctor.

---

## 🚀 Live Demo

👉 https://ai-health-assistant-two.vercel.app/

---

## Screeenshot
<img width="680" height="910" alt="image" src="https://github.com/user-attachments/assets/10173fec-4a55-4b0f-9929-04d25f307dbe" />
<br>

<img width="817" height="896" alt="image" src="https://github.com/user-attachments/assets/caafda8a-0f5c-4c05-80b1-2d8a126e8d6d" />


## 💡 Problem Statement

Hostel students frequently face common health issues such as:

* Fever, cold, headaches
* Food poisoning from mess food
* Stress and fatigue

### ⚠️ Challenges:

* No immediate medical support
* Lack of awareness about symptom severity
* Delayed or ignored treatment

---

## ✅ Our Solution

HostelMed provides a **smart AI-based health guidance system** that:

* 🩺 Analyzes symptoms instantly
* 🚦 Detects urgency level (Low / Medium / High)
* 💊 Suggests basic remedies
* 🏥 Recommends when to seek medical help

---

## 🌟 Key Features

### 🤖 AI Symptom Analysis

* Natural language input (e.g., *"I have fever and headache"*)
* AI returns structured and understandable results

### 🚨 Urgency Detection

* 🟢 Low — Home care sufficient
* 🟡 Medium — Monitor condition
* 🔴 High — Seek immediate medical help

### 💡 Smart Recommendations

* Basic remedies
* Precautions
* Next steps

### 🎯 Hostel-Centric Design

* Mess-related illness detection
* Student lifestyle-focused suggestions

---

## 🏗️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS

### Backend

* Node.js
* Express.js

### AI Integration

* groq API

---

## 📂 Project Structure

```
ai-health-assistant/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env.example
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
        │   ├── ChatBox.jsx
        │   └── MessageBubble.jsx
        └── hooks/
            └── useChat.js
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd ai-health-assistant
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env` file:

```
GROQ_API_KEY=your-api-key
PORT=5000
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

## 🔄 How It Works

1. User enters symptoms in chat
2. Frontend sends request to backend (`POST /api/symptom`)
3. Backend processes input using AI
4. AI returns structured response:

   * Urgency level
   * Possible condition
   * Remedies
5. Frontend displays results in a clean UI

---

## 🧪 Demo Inputs (For Hackathon)

Use these to showcase your project:

* "Fever and headache since morning, 101°F"
* "Loose motions after eating hostel food"
* "Chest pain while breathing deeply"
* "Mild cold and runny nose"

---

## ⚠️ Common Errors & Fixes

| Problem             | Solution                     |
| ------------------- | ---------------------------- |
| Invalid API key     | Check `.env` file            |
| Backend not running | Run `npm run dev` in backend |
| Blank frontend      | Check browser console        |
| Port already in use | Change port in `.env`        |

---

## 🚀 Future Scope

* 📱 Mobile app (Android/iOS)
* 🏥 Nearby hospital locator
* 📊 Health history tracking
* 🔔 Emergency alert system
* 🎙️ Voice-based assistant

---

## 🏆 Why This Project Stands Out

* ✅ Solves a real-world student problem
* ✅ AI-powered decision support
* ✅ Clean and user-friendly interface
* ✅ Scalable for colleges & institutions
* ✅ Strong hackathon + startup potential

---

## 📌 Tagline

> “From symptoms to solutions — instantly.”

---

## 👨‍💻 Built by

Amarnath (panditgupta01)

GitHub: https://github.com/panditgupta01 <br>
LinkedIn: https://linkedin.com/in/panditgupta01 <br>
Twitter/X: https://twitter.com/panditgupta01 <br>
Instagram: https://www.instagram.com/panditgupta01 <br>

...

##⭐ Support

If you like this project, give it a ⭐ on GitHub — it helps a lot!
