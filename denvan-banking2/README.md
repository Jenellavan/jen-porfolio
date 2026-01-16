# Denvan Banking

A modern, secure banking web application built with React and Node.js.

## 🏦 Features

- **User Authentication**: Secure login/signup with JWT tokens
- **Account Dashboard**: View account balance, transactions, and account details
- **Money Transfer**: Send money to other users
- **Transaction History**: Track all your financial activities
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Security**: Password hashing, JWT authentication, input validation

## 🚀 Tech Stack

### Frontend
- React 18
- React Router for navigation
- Axios for API calls
- CSS3 with modern design patterns
- Context API for state management

### Backend
- Node.js with Express
- MongoDB with Mongoose ODM
- JWT for authentication
- bcrypt for password hashing
- Express Validator for input validation
- CORS enabled

## 📁 Project Structure

```
denvan-banking/
├── frontend/               # React frontend application
│   ├── public/
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── context/       # Context providers
│   │   ├── services/      # API services
│   │   └── App.js
│   └── package.json
├── backend/               # Node.js backend API
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── controllers/      # Route controllers
│   ├── config/           # Configuration files
│   ├── server.js         # Entry point
│   └── package.json
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file in backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/denvan-banking
JWT_SECRET=your_super_secret_jwt_key_here_change_this_in_production
NODE_ENV=development
```

4. Start the backend server:
```bash
npm start
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file in frontend directory:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

4. Start the frontend development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## 🔐 Security Features

- Password hashing with bcrypt (10 rounds)
- JWT token-based authentication
- Protected API routes with auth middleware
- Input validation and sanitization
- CORS configuration
- Environment variables for sensitive data

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### User
- `GET /api/users/profile` - Get user profile (protected)
- `PUT /api/users/profile` - Update user profile (protected)

### Accounts
- `GET /api/accounts` - Get user accounts (protected)
- `GET /api/accounts/:id` - Get specific account (protected)

### Transactions
- `GET /api/transactions` - Get user transactions (protected)
- `POST /api/transactions/transfer` - Make a transfer (protected)

## 🎨 Design Features

- Modern, clean UI with professional banking aesthetics
- Smooth animations and transitions
- Responsive grid layouts
- Card-based design system
- Color-coded transaction types
- Interactive hover effects

## 🧪 Testing

### Backend Testing
```bash
cd backend
npm test
```

### Frontend Testing
```bash
cd frontend
npm test
```

## 📦 Deployment

### Backend Deployment (Example: Heroku)
```bash
cd backend
heroku create denvan-banking-api
git push heroku main
```

### Frontend Deployment (Example: Vercel)
```bash
cd frontend
vercel deploy
```

### Environment Variables for Production
Make sure to set these in your hosting platform:
- `MONGODB_URI` - Your MongoDB connection string
- `JWT_SECRET` - Strong secret key for JWT
- `NODE_ENV=production`

## 🔧 Development

### Running in Development Mode

Terminal 1 (Backend):
```bash
cd backend
npm run dev
```

Terminal 2 (Frontend):
```bash
cd frontend
npm start
```

## 📱 Features Roadmap

- [ ] Bill payments
- [ ] Loan applications
- [ ] Investment portfolio
- [ ] Budget tracking
- [ ] Credit card management
- [ ] Mobile app (React Native)
- [ ] Two-factor authentication
- [ ] Email notifications
- [ ] Transaction receipts
- [ ] Account statements (PDF)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Contact

For questions or support, please open an issue in the GitHub repository.

## ⚠️ Important Notes

1. **Change default credentials**: Update JWT_SECRET and database credentials before deployment
2. **Database setup**: Ensure MongoDB is running before starting the backend
3. **CORS**: Update CORS settings in production to only allow your frontend domain
4. **HTTPS**: Always use HTTPS in production
5. **Rate limiting**: Consider adding rate limiting for production use
6. **Data backup**: Implement regular database backups

## 🎯 Default Test Credentials (Development Only)

After seeding the database, you can use:
- Email: demo@denvan.com
- Password: Demo123!

**Note**: Remove or change these in production!

---

Built with ❤️ by the Denvan Team
