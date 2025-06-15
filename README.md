# 💼 Digital Sheba - Service Sharing Web Application

**Live Site:** [https://digitalsheba.netlify.app/](https://digitalsheba.netlify.app/)  
**Client Repo:** [https://github.com/abdullahjim29/digital-sheba-client](https://github.com/abdullahjim29/digital-sheba-client)  
**Server Repo:** [https://github.com/abdullahjim29/digital-sheba-server](https://github.com/abdullahjim29/digital-sheba-server)

---

## 📚 Project Overview

**Digital Sheba** is a modern, responsive, and full-featured web application designed to connect digital service providers with users. Users can browse, book, and manage a wide range of digital services while logged-in users can access a personalized dashboard for managing their activities. such as design, development, tutoring, tech support, and more. Service providers can list and manage services, while customers can book services and monitor progress through a real-time status system.

---

## 🔥 Key Features

- 🔐 JWT Authentication with Firebase Email/Password & Google login
- 🧾 Service CRUD operations (Add, Update, Delete)
- 📋 Booking system with status management (`pending`, `working`, `completed`)
- 🔍 Search functionality using **match-sorter**
- 🌓 Light/Dark theme toggle support
- 📦 Secure & Persistent authentication using JWT + localForage
- 🔄 Dynamic route titles with `react-helmet-async`
- 🧠 Fully responsive design for mobile, tablet, and desktop
- 🖼️ Animated and engaging UI using **AOS**, **Lottie**, and **Framer Motion**
- ⚠️ SweetAlert2 used for interactive error/success modals
- 🔄 Page reload-safe private routes — users stay logged in after refresh.

---

## 🎯 Selected Category

> **Digital Services**  
Includes web development, graphic design, online education, virtual assistance, and more.

---

## 🧭 Project Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with banner, featured services, and extra sections |
| `/login`, `/register` | Authentication pages |
| `/services` | View all available services |
| `/services/:id` | View service details and book (Private) |
| `/dashboard/add-service` | Add a new service (Private) |
| `/dashboard/manage-service` | View/update/delete own services (Private) |
| `/dashboard/booked-services` | View services you booked (Private) |
| `/dashboard/service-to-do` | View and manage bookings *of your services* (Private) |
| `*` | Custom 404 page with redirect to home |

---

## 🛠️ Tech Stack

### 🖥️ Frontend
- React 19
- React Router v7
- Tailwind CSS 4 + DaisyUI
- Firebase v11 (Auth)
- Axios
- AOS (Animate on Scroll)
- Framer Motion
- Lottie React
- React Hot Toast
- SweetAlert2
- React Helmet Async
- React Multi Carousel
- Match Sorter (for client-side fuzzy search)
- LocalForage (token persistence)

### 🔧 Backend
- Node.js
- Express.js
- MongoDB (Cloud)
- CORS
- dotenv
- JWT (jsonwebtoken)

---

## 📜 Installation & Setup (Client Side)
1. **Clone the repository:**  
   ```sh
   git clone https://github.com/abdullahjim29/digital-sheba-client
   ```
2. **Navigate to the project folder:**  
   ```sh
   cd digital-sheba-client
   ```
3. **Install dependencies:**  
   ```sh
   npm install
   ```
4. **Set up Firebase environment variables in `.env`:**
   ```sh
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   ```
5. **Start the development server:**  
   ```sh
   npm run dev
   ```
## ⚙️ Installation & Setup (Server Side)
1. **Clone the repository:**  
   ```sh
   git clone https://github.com/abdullahjim29/digital-sheba-server

2. **Navigate to the project folder:**  
   ```sh
   cd digital-sheba-server
   ```

3. **Install dependencies:**  
   ```sh
   npm install
   ```
4. **Create a .env file and add:**
   ```sh
   PORT=5000
   MONGODB_URI=your_mongodb_connection
   ACCESS_TOKEN_SECRET=your_jwt_secret
   ```
5. **Start the server:**
   ```sh
   npm run dev
   ```
## 🙏 Thanks for Visiting

If you have any suggestions or feedback, feel free to contact me or open an issue in the repo!