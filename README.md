# 💬 Full Stack Real-Time Chat Application

A modern, full-stack real-time chat application built during my internship.  
This project supports **instant messaging**, **real-time updates**, **user authentication**, and a clean, responsive **UI**.

🚀 **Live Demo:** [Click Here](https://online-chat-app-1m2e.onrender.com)

---

## 📌 Features

### 👥 User Features
- 🔐 Secure Authentication (Login / Register)
- 💬 Real-time One-to-One Chat
- 👀 Online / Offline Status Indicator
- 📸 Send Images (optional, if used)
- 🕒 Typing Indicator
- 🗂️ Chat History & Last Message Preview
- 🎨 Responsive UI (Mobile / Desktop)

### 🛠️ Admin / Backend Features
- JWT / Session-based Authentication
- RESTful API Endpoints
- Real-time events powered by WebSockets
- Secure password hashing
- Chat stored in database

---

## 🧰 Tech Stack

### **Frontend**
- React.js
- Tailwind CSS 
- Axios

### **Backend**
- Node.js  
- Express.js  
- WebSockets (Socket.io)

### **Database**
- MongoDB

### **Tools & Services**
- Git & GitHub
- Postman (API testing)
- Cloud Deployment (Render)

---

## 📁 Project Structure

root/
├── frontend
│ ├── public/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ ├── constants/
│ │ ├── lib/
│ │ ├── pages/
│ │ ├── store/
│ ├── eslint.config.js
│ ├── index.html
│ ├── package.json
│ ├── package-lock.json
│ ├── postcss.config.js
│ ├── tailwind.config.js
│ ├── vite.config.js
│
├── backend
│ ├── src/
│ │ ├── controllers/
│ │ ├── lib/
│ │ ├── models/
│ │ ├── middleware/
│ │ ├── routes/
│ │ └── server.js
│ ├── package.json
│ ├── package-lock.json
│
├── .gitignore
├── README.md
└── package.json

## ⚙️ Installation & Setup

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/aniket-yalamalli/your-repo-name.git
cd your-repo-name
