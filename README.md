# NestJS BullMQ Application

This is a **NestJS** application that uses **BullMQ** and **Redis** for background job processing. The app is containerized using **Docker** for easy deployment.

---

## 🚀 Features
- Job queue management with **BullMQ**
- Background job processing with automatic retries
- Redis integration
- Docker and Docker Compose setup
- Rate-limiting, priority, and delayed job execution

---

## 🖇️ Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## ⚡ Getting Started

### 🔨 **Clone the repository**
```bash
git clone <your-repo-url>
cd nestjs-bullmq-app
```

### 🏗 **Run the app with Docker**
```bash
docker-compose up --build
```
The app will be available at [http://localhost:3000](http://localhost:3000).

### 💻 **Run locally (without Docker)**
```bash
npm install
npm run build
npm run start:prod
```

---

## 🎯 Usage

### ➕ **Add a Job to the Queue**
```bash
curl -X POST http://localhost:3000/product \
     -H "Content-Type: application/json" \
     -d '{"name":"Laptop","price":1200,"description":"High-end gaming laptop", "category": "Electronics" }'
```

---

## ⚙️ Docker Configuration

### **Dockerfile**
- Installs dependencies
- Compiles the TypeScript code
- Starts the application using Node.js

### **docker-compose.yml**
- Defines `app` (NestJS) and `redis` (Redis server) services
- Redis exposed on port `6379`
- App exposed on port `3000`

---

## 🌐 API Endpoints
| Method | Endpoint   | Description          |
|--------|------------|----------------------|
| POST   | /product   | Add a product into the queue|



---

## ⚡ Job Features
- **Retry Logic:** Retries failed jobs up to 3 times with exponential backoff.
- **Rate Limiting:** Processes up to 5 jobs per second.
- **Delayed Execution:** Jobs execute after a 5-second delay.
- **Priority Handling:** High-priority jobs processed first.

---

## 📝 License
This project is licensed under the **MIT License**.

---

## ❤️ Acknowledgments
- [NestJS](https://nestjs.com/)
- [BullMQ](https://docs.bullmq.io/)
- [Redis](https://redis.io/)

---
