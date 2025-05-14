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

![Landing Page](assets/landing-page.png)

---

## 👨‍🍳 User Page

The user-facing portal allows students and staff to:

- 📅 View **today’s meal** details instantly.
- 📥 Download the **weekly menu PDF**.
- ⭐ Rate the meals.
- 💬 Submit feedback about their canteen experience.

### 🔍 Screenshot: User Page

![UserPage Screenshot](./screenshots/userpage.png)

---

## 🧑‍💼 Admin Page

The admin portal contains a sidebar with two powerful tools:

### ✏️ Menu Editor / Generator

- 🧾 Input or update meals for each day.
- 🖨️ Automatically generates the menu in PDF format.
- 🔄 Syncs the data to the backend with a single click.

#### 📷 Screenshot: Menu Generator

![Admin Menu Generator](./screenshots/admin-edit.png)

---

### 📬 Feedback Dashboard

- 🧠 View all user-submitted feedback.
- 📊 Use insights to improve future meals and services.

#### 📷 Screenshot: Feedback Section

![Admin Feedback Viewer](./screenshots/admin-feedback.png)

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
npm run server   # for Backend
npm run dev   # for Frontend 
