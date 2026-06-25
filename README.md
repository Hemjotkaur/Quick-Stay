# QuickStay – Hotel Booking Platform

## 🏨 Overview

QuickStay is a full-stack hotel booking platform that allows users to search, explore, and book hotel rooms through a modern and responsive interface. The platform provides secure authentication, online payment integration, booking management, and an intuitive user experience for both customers and hotel owners.

---

## 🚀 Features

### User Features

* User Authentication using Clerk
* Browse and search hotels
* View hotel details and room information
* Secure room booking
* Online payments with Stripe
* Booking history and reservation management

### Hotel Owner Features

* Add new hotel listings
* Manage hotel rooms
* View bookings and reservations
* Track hotel performance

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* React Router DOM
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* Clerk

### Payment Gateway

* Stripe

### Media Storage

* Cloudinary

---

## 📂 Project Structure

```bash
QuickStay/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/quickstay.git
cd quickstay
```

### 2. Install Dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd server
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the server directory.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

STRIPE_SECRET_KEY=your_stripe_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

CLIENT_URL=http://localhost:5173
```

Create a `.env` file inside the client directory.

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BACKEND_URL=http://localhost:5000
```

---

## ▶️ Run the Application

### Start Backend

```bash
cd server
npm run server
```

### Start Frontend

```bash
cd client
npm run dev
```


## 🔄 Workflow

1. User signs up or logs in using Clerk.
2. User browses available hotels.
3. User selects a hotel room.
4. User proceeds to payment via Stripe.
5. Booking is stored in MongoDB.
6. User can view booking history and manage reservations.

---

## 🎯 Key Learning Outcomes

* Full-Stack MERN Development
* REST API Development
* Authentication & Authorization
* Payment Gateway Integration
* Database Design with MongoDB
* State Management and API Handling
* Responsive UI Design

---

## 🌟 Future Enhancements

* Hotel reviews and ratings
* Wishlist functionality
* Advanced filtering and sorting
* Admin dashboard analytics
* Email booking confirmations
* Real-time room availability updates

---

## 👨‍💻 Author

**Hemjot Kaur**

Frontend Developer | MERN Stack Developer

📧 Email: [your-email@example.com](mailto:hemjotkaur786@gmail.com)

🔗 LinkedIn: [https://linkedin.com/in/your-profile](https://www.linkedin.com/in/hemjot-kaur-614735246/)

---


```
```
