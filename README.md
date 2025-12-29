# Flask + Express Dockerized Application 🚀

This project demonstrates a **full-stack application** where a **Flask backend** and an **Express (Node.js) frontend** are containerized using **Docker** and connected together using **Docker Compose**.

The frontend contains a form/UI that sends requests to the Flask backend API and displays the processed response.

---

## 📁 Project Structure

```text
flask-express-docker-assignment/
│
├── backend/
│   ├── app.py
│   ├── business.py
│   ├── requirements.txt
│   └── __pycache__/
│
├── frontend/
│   ├── app.js
│   ├── package.json
│   ├── package-lock.json
│   ├── views/
│   │   └── index.ejs
│   └── node_modules/
│
├── dockerfile-backend
├── dockerfile-frontend
├── docker-compose.yml
├── .dockerignore
├── .gitignore
└── README.md
🧰 Technologies Used
Backend: Python, Flask

Frontend: Node.js, Express, EJS

Containerization: Docker

Orchestration: Docker Compose

Version Control: Git & GitHub

⚙️ Features
Flask backend API running on port 8000

Express frontend running on port 3000

Frontend communicates with backend via REST API

Separate Dockerfiles for frontend and backend

Docker Compose used to run both services on the same network

🐳 Docker Setup
Build and Run the Application
Make sure Docker Desktop is running, then execute:

bash
Copy code
docker compose up
🌐 Application URLs
Frontend: http://localhost:3000

Backend API: http://localhost:8000/api

🧪 How It Works
User interacts with the frontend (Express + EJS).

Frontend sends a request to the Flask backend API.

Backend processes the request and sends a response.

Frontend displays the response on the UI.

🛡️ .gitignore
The project uses .gitignore to exclude unnecessary files such as:

node_modules/

__pycache__/

.vscode/

Environment files

This keeps the repository clean and professional.

📌 Assignment Objective
This project was created as part of a Docker & DevOps assignment to demonstrate:

Frontend–backend separation

Containerization using Docker

Multi-container management using Docker Compose

Real-world full-stack deployment workflow

👤 Author
Harshil Bhardwaj
