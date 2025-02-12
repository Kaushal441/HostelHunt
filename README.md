# 🏠 Hostel Hunt - Spring Boot & React Application

## 📌 Project Overview
Hostel Hunt is a full-stack web application built using **Spring Boot (Java) for the backend** and **React.js for the frontend**. It allows **students** to browse and book hostels, **hostel owners** to manage their listings, and **admins** to oversee the platform.

The application also supports **online payments using Razorpay** for seamless hostel booking.

---

## 🚀 Features
### ✅ **User Roles & Authentication**
- **Admin**: Manages users, hostels, and reviews.
- **Student**: Registers, logs in, browses hostels, writes reviews, and makes payments.
- **Hostel Owner**: Manages hostels and updates listings.

### ✅ **Core Functionalities**
- **User Registration & Login** (Admin, Student, Hostel Owner)
- **Hostel Listings** (View, Add, Update, Delete)
- **Reviews & Ratings** for hostels
- **Secure Payments using Razorpay**
- **RESTful API with Spring Boot**
- **React Frontend with Axios Integration**

---

## 🛠️ Tech Stack
### **Backend (Spring Boot)**
- Java, Spring Boot, Spring Security
- Hibernate (JPA) for database interaction
- MySQL for data storage
- REST API with JWT Authentication (optional)
- Razorpay Integration for Payments
- Swagger API Documentation

### **Frontend (React.js)**
- React.js with React Router
- Axios for API calls
- Bootstrap/Tailwind for UI styling

---

## 🏗️ Installation & Setup

### 🔹 **Backend (Spring Boot)**
1. Clone the repository:
   ```sh
   git clone https://github.com/Kaushal441/HostelHunt.git
   cd HostelHunt/HostelHunt-Backend
   
2. Configure MySQL Database in application.properties:
   spring.datasource.url=jdbc:mysql://localhost:3306/hostel_db
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   
3. Configure Razorpay API Keys in application.properties:
   razorpay.key_id=your_razorpay_key_id
   razorpay.key_secret=your_razorpay_key_secret
   
4. Build & Run the Spring Boot Application:
   mvn clean install
   mvn spring-boot:run

5. Open Swagger API Docs:
   http://localhost:8000/swagger-ui/

### 🔹 **Frontend (React)**
1. Navigate to the frontend directory:
   cd HostelHunt-frontend
   
2. Install dependencies:
   npm install
   
3. Start the React development server:
   npm start
   
4. Open the application in the browser:
   http://localhost:3000/

📌 API Endpoints
Method	Endpoint	          Description
POST	   /api/register	    Register a new user
POST	   /api/login	       User login
GET	   /api/hostels	    Get all hostels
POST	   /api/hostels	    Add a new hostel
PUT	   /api/hostels/{id}	 Update hostel details
DELETE	/api/hostels/{id}	 Delete a hostel
GET	   /api/reviews	    Get all reviews
POST	   /api/payments	    Make a payment

🎯 To-Do & Future Improvements:
✅ Add search & filter options for hostels
✅ Improve UI with Material UI / Tailwind CSS
🔜 Implement Google OAuth login
🔜 Improve admin dashboard with analytics

🤝 Contributing:
Feel free to contribute by submitting a pull request or reporting issues.

📝 License:
This project is licensed under the MIT License.

