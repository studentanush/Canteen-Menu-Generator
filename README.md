# 🍽️ Canteen Menu Generator

A full-stack web application that simplifies weekly menu management and feedback collection for college canteens. Built with ❤️ using the **MERN** stack.

## 🚀 Features at a Glance

- 👤 **User Portal**: View today's menu, download weekly meal plan as PDF, rate meals, and share feedback.
- 🛠️ **Admin Portal**: Seamlessly generate/edit weekly menus and manage all user feedback.
- 📄 **PDF Export**: Cleanly formatted downloadable weekly menu with meal breakdowns.
- ✅ Real-time feedback storage.
- 🔐 Role-based access for user and admin panels.

---
## 📱 Landing Page

The **Landing Page** contains two primary login options:

- **Student Login**: For students to access the weekly menu, rate meals, and submit feedback.
- **Admin Login**: For admins to generate and manage the weekly menu, view feedback from students, and manage other functionalities.

### 🖼️ Screenshot of the Landing Page

![Landing Page](Frontend/src/assets/LandingPage.png)

---

## 👨‍🍳 User Page

The user-facing portal allows students and staff to:

- 📅 View **today’s meal** details instantly.
- 📥 Download the **weekly menu PDF**.
- ⭐ Rate the meals.
- 💬 Submit feedback about their canteen experience.

### 🔍 Screenshot: User Page

![UserPage Screenshot](Frontend/src/assets/UserPage.png)

---

## 🧑‍💼 Admin Page

The admin portal contains a sidebar with two powerful tools:

### ✏️ Menu Editor / Generator

- 🧾 Input or update meals for each day.
- 🖨️ Automatically generates the menu in PDF format.
- 🔄 Syncs the data to the backend with a single click.

#### 📷 Screenshot: Menu Generator

![Admin Menu Generator](Frontend/src/assets/AdminEdit.png)

---

### 📬 Feedback Dashboard

- 🧠 View all user-submitted feedback.
- 📊 Use insights to improve future meals and services.

#### 📷 Screenshot: Feedback Section

![Admin Feedback Viewer](Frontend/src/assets/AdminFeedback.png)

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **PDF Generation**: jsPDF + jspdf-autotable
- **Notifications**: react-toastify

---

## 📦 Setup Instructions


### Clone the repo
```bash
git clone https://github.com/studentanush/Canteen-Menu-Generator.git
```
```bash
cd Canteen-Menu-Generator
```
### Install frontend and backend dependencies
``` bash
 cd Frontend
```
```bash
npm install axios jspdf jspdf-autotable react-router-dom tailwindcss react-toastify
```
```bash
cd Backend
```
```bash
npm install axios bcrypt cors jsonwebtoken mongoose nodemon express mime
```

### Start both servers (run in separate terminals or use concurrently)
#### for Backend
```bash
 npm run server
```
#### for Frontend 
```bash
npm run dev
```  
