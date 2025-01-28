## Pet Adoption Website - With Node JS Backend

Welcome to the Pet Adoption Website! This project is designed to connect users with their ideal pets and provide a seamless online pet adoption experience. Built using React.js, Node.js, and Laravel, the platform also includes an Admin Panel to manage the website efficiently. Here, you can view the project video..

https://drive.google.com/file/d/10qbAqn9baqFhY1SvMu4hfNZoi7hf9pKz/view?usp=drive_link

## Features

### **Frontend**
1. **Home Page**
   - Overview of the website.
   - Highlights featured pets and adoption stories.
   - **Search Form**:
      - Search the pets by category & location.

2. **Pet Page**
   - View a list of available pets.
   - **Filters**:
     - Filter pets based on breed, price, category, color, and other attributes.
  
3. **About Us**
   - Information about the organization and its mission to facilitate pet adoption.

4. **Contact Us**
   - A form for users to get in touch with the team for inquiries or support.

5. **Feedback**
   - A section for users to share their experiences and provide feedback.

6. **Track Order**
   - Allows users to track the status of their pet adoption application or other transactions.

7. **Register / Signup**
   - User registration and login system.
   - Authentication powered by **JWT (JSON Web Token)**.

8. **Adopt Pet (After Login)**
   - Secure pet adoption process available only for logged-in users.
   - Integrated **Stripe Payment** system for adoption fees.

---

### **Admin Panel**
- Fully featured admin panel to manage the website:
  - Add, update, and delete pet information.
  - Manage user accounts.
  - View and handle feedback.
  - Monitor and manage orders and transactions.

---

## Technology Stack

### **Frontend**
- **React.js**
  - Dynamic UI components.
  - State management with React Context or Redux.
- **Toastify**
  - User-friendly notifications for actions and alerts.

### **Backend**
- **Node.js**
  - Handles API requests and server-side logic.

### **Database**
- **MySQL**
  - Stores user information, pet data, feedback, and transaction details.

### **Payment Integration**
- **Stripe**
  - Secure online payment system for pet adoption fees.

### **Authentication**
- **JWT (JSON Web Token)**
  - Ensures secure user login and session management.

---

## Installation and Setup

### **Prerequisites**
- Node.js installed.
- MySQL database.
- Stripe account for payment integration.

### **Steps to Set Up the Project**
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory and install dependencies:
   - For the React.js frontend:
     ```bash
     cd frontend
     npm install
     ```
   - For the Node.js backend:
     ```bash
     cd backend
     npm install
     ```

3. Set up the `.env` files:
   - Configure the database and JWT secrets in Node.js `.env` file.
   - Add your Stripe API keys.

4. Run database migrations:
   ```bash
   php artisan migrate
   ```

5. Start the development servers:
   - React frontend:
     ```bash
     npm start
     ```
   - Node.js backend:
     ```bash
     npm run dev
     ```

## How to Use

1. Visit the home page to explore the website.
2. Use the filters and search bar on the pet page to find your ideal pet.
3. Register or log in to access all features, including the pet adoption process.
4. Adopt a pet by following the guided steps, making a payment through Stripe.
5. Admin users can log in to the admin panel to manage website data and functionality.

---


## License
This project is licensed under the MIT License.

---

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for review.

---

## Contact
For any queries or issues, please contact us at: mariazareef10@gmail.com.

---

### Thank you for supporting!

