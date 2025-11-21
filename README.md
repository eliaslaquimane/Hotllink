# HotlLink - Hotel Booking Platform

A modern, full-stack hotel booking application built with React and Node.js, featuring user authentication, hotel browsing, and booking management.

## 🚀 Features

- **User Authentication**: Secure registration and login with session management
- **Hotel Discovery**: Browse hotels with advanced filtering (price, rating, location)
- **Detailed Hotel Views**: Rich hotel information with amenities and descriptions
- **Booking System**: Complete booking flow with date selection and guest management
- **User Dashboard**: View and manage your bookings
- **Persistent Storage**: MongoDB database for all data
- **Professional Backend**: MVC architecture with Express.js
- **Responsive Design**: Beautiful, mobile-friendly UI with Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- **React** 18.3 with TypeScript
- **React Router** for navigation
- **Axios** for API requests
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Vite** as build tool

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **dotenv** for environment configuration
- **CORS** enabled

## 📁 Project Structure

```
HotlLink/
├── HOTLLINK/                  # Frontend React application
│   ├── src/
│   │   ├── api/              # API configuration (Axios)
│   │   ├── components/       # React components
│   │   │   ├── auth/        # ProtectedRoute component
│   │   │   └── layout/      # Navbar, Footer, etc.
│   │   ├── context/         # React Context (AuthContext)
│   │   ├── pages/           # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── Hotels.tsx
│   │   │   ├── HotelDetails.tsx
│   │   │   ├── Booking.tsx
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   └── Dashboard.tsx
│   │   └── App.tsx
│   └── package.json
│
└── backend-hotllink/         # Backend Node.js application
    ├── src/
    │   ├── config/          # Database configuration
    │   ├── controllers/     # Route handlers
    │   │   ├── authController.js
    │   │   ├── hotelController.js
    │   │   ├── bookingController.js
    │   │   └── serviceController.js
    │   ├── models/          # Mongoose schemas
    │   │   ├── User.js
    │   │   ├── Hotel.js
    │   │   └── Booking.js
    │   ├── routes/          # API routes
    │   │   ├── authRoutes.js
    │   │   ├── hotelRoutes.js
    │   │   ├── bookingRoutes.js
    │   │   └── serviceRoutes.js
    │   ├── data/            # Initial/mock data
    │   └── app.js           # Express app setup
    ├── seed.js              # Database seeding script
    ├── server.js            # Entry point
    └── package.json
```

## 🔧 Setup Instructions

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)

### 1. Clone the Repository
```bash
git clone <repository-url>
cd HotlLink
```

### 2. Backend Setup

```bash
cd backend-hotllink
npm install
```

#### Environment Variables
Create a `.env` file in the `backend-hotllink` directory:

```env
MONGO_URI=mongodb://localhost:27017/hotllink_db
PORT=5000
```

**Note**: If using MongoDB Atlas, replace `MONGO_URI` with your connection string:
```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/hotllink_db
```

#### Start MongoDB (if using local)
```bash
# Windows
net start MongoDB

# macOS/Linux
sudo systemctl start mongod
```

#### Seed the Database
Populate the database with initial hotel data:
```bash
node seed.js
```

#### Start Backend Server
```bash
npm run dev
```

Server will run on `http://localhost:5000`

### 3. Frontend Setup

```bash
cd ../HOTLLINK
npm install
```

#### Start Frontend Development Server
```bash
npm run dev
```

Frontend will run on `http://localhost:5173` (or the port shown in terminal)

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

### Hotels
- `GET /api/hotels` - Get all hotels
- `GET /api/hotels/:id` - Get hotel by ID

### Bookings
- `POST /api/bookings` - Create new booking
- `GET /api/bookings?userId=<id>` - Get user bookings

### Services
- `GET /api/cars` - Get car rental options
- `GET /api/translators` - Get translators
- `GET /api/city-guide` - Get city guide information
- `POST /api/trip-planner` - Submit trip planning request
- `POST /api/contact` - Submit contact form

## 🔐 User Workflow

1. **Browse Hotels**: Visit the Hotels page (requires login)
2. **View Details**: Click on a hotel to see detailed information
3. **Book**: Click "Book Now" to start booking process
4. **Authentication**: If not logged in, you'll be redirected to login page
5. **Complete Booking**: Fill in dates and guest information
6. **Confirmation**: Booking appears in your Dashboard

## 🎨 Key Features Explained

### Smart Authentication Redirect
When users try to access protected routes (like booking), they're redirected to login. After successful authentication, they're automatically returned to their intended destination.

### Persistent Sessions
User sessions are maintained using localStorage, so users stay logged in across page refreshes.

### MongoDB Integration
All data (users, hotels, bookings) is stored in MongoDB for persistence across server restarts.

## 🧪 Testing the Application

1. **Register a new account** at `/register`
2. **Login** with your credentials
3. **Browse hotels** and click "Ver Detalhes"
4. **Make a booking** and confirm
5. **Check Dashboard** to see your booking

## 🚧 Development Notes

### Adding New Hotels
Edit `backend-hotllink/src/data/hotels.js` and run `node seed.js` again.

### Database Reset
To clear and reseed the database:
```bash
# In backend directory
node seed.js
```

### Port Conflicts
If ports 5000 or 5173 are in use, you can change them:
- Backend: Update `PORT` in `.env`
- Frontend: Vite will prompt for an alternative port

## 🚀 Deployment

Ready to deploy to production? Check out our comprehensive [Deployment Guide](DEPLOYMENT.md) which covers:

- **MongoDB Atlas** setup (free cloud database)
- **Render** deployment for backend (free tier)
- **Vercel** deployment for frontend (free tier)
- Environment variables configuration
- Custom domain setup
- Troubleshooting and monitoring

**Quick Links:**
- [MongoDB Atlas Setup](DEPLOYMENT.md#part-1-setup-mongodb-atlas)
- [Backend Deployment](DEPLOYMENT.md#part-2-deploy-backend-to-render)
- [Frontend Deployment](DEPLOYMENT.md#part-3-deploy-frontend-to-vercel)
- [Troubleshooting](DEPLOYMENT.md#-troubleshooting)

### Deployment Architecture

```
User Browser → Vercel (Frontend) → Render (Backend) → MongoDB Atlas (Database)
```

All services offer generous free tiers suitable for development and production!

## 📝 Future Enhancements

- [ ] Password hashing with bcrypt
- [ ] JWT token authentication
- [ ] Payment integration
- [ ] Email notifications
- [ ] Review and rating system
- [ ] Advanced search and filters
- [ ] Hotel owner dashboard
- [ ] Multi-language support

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Troubleshooting

### MongoDB Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution**: Make sure MongoDB is running. Start it with `net start MongoDB` (Windows) or `sudo systemctl start mongod` (Linux/macOS).

### CORS Errors
**Solution**: Ensure the backend server is running on `http://localhost:5000` and the frontend is configured to point to this URL in `src/api/axios.ts`.

### Port Already in Use
**Solution**: Kill the process using the port or change the port in configuration files.

## 📞 Support

For issues and questions, please open an issue on the GitHub repository.

---

**Built with ❤️ by the Elias Alberto Laquimane**
