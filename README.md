# Portfolio Website

A full-stack portfolio website built with MongoDB, Express.js, React.js, and Node.js featuring Redux state management and a contact system.

##  Tech Stack

- **Frontend:** React.js, Redux Toolkit, CSS Modules
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Features:** Dark/Light theme, Responsive design, Contact form

##  Quick Start

### Prerequisites
- Node.js (v16+)
- MongoDB

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sumesh-s-dev/mern-portfolio.git
   cd mern-portfolio
   ```

2. **Install dependencies**
   ```bash
   # Backend
   cd server
   npm install

   # Frontend
   cd ../client
   npm install
   ```

3. **Environment Setup**
   
   Create `server/.env`:
   ```env
   MONGODB_URI=mongodb://localhost:27017/portfolio
   PORT=5000
   ```

4. **Run the application**
   ```bash
   # Start backend (terminal 1)
   cd server
   npm start

   # Start frontend (terminal 2)
   cd client
   npm start
   ```

5. **Access**
   - Frontend: `http://localhost:3000`
   - API: `http://localhost:5000`

##  API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | Get all contacts |
| GET | `/api/health` | Health check |

##  Project Structure

```
mern-portfolio/
├── client/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── redux/
├── server/          # Express backend
│   ├── models/
│   ├── routes/
│   └── controllers/
└── README.md
```

##  Features

- Responsive design with dark/light theme
- Redux state management
- MongoDB contact form storage
- Express.js REST API
- Input validation and error handling

##  Contact

**Sumesh S.**
- LinkedIn: [s-sumesh-759132308](https://www.linkedin.com/in/s-sumesh-759132308/)
- Email: sumesh2003nov5@gmail.com
- GitHub: [@sumesh-s-dev](https://github.com/sumesh-s-dev)
