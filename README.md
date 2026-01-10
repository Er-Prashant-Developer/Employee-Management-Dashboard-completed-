# Employee Management Dashboard (React)

A modern Employee Management Dashboard built using **React**, **Context API**, and **LocalStorage**.  
This project allows users to manage employee records with features like add, edit, delete, search, filter, and print.

---

## Features

### Authentication
- Login system with protected routes
- Only logged-in users can access the dashboard

### Dashboard Summary
- Total Employees
- Active Employees
- Inactive Employees

### Employee Management
- Add new employee
- Edit existing employee
- Delete employee (with confirmation)
- Upload profile image

### Employee List
- View all employees in a table
- Search by name
- Filter by:
  - Gender (Male / Female)
  - Status (Active / Inactive)
- Combined filtering supported

### Print Feature
- Print employee list using browser print

### UI / UX
- Fully responsive design
- Modern UI with Tailwind CSS
- Mobile-friendly layout

### Data Storage
- Uses LocalStorage to persist employee data
- Context API for global state management

---

##  Tech Stack

- React
- React Router DOM
- Context API
- Tailwind CSS
- LocalStorage

---

##  Project Structure

src/
├─ Components/
│ ├─ Login.jsx
│ ├─ Dashboard.jsx
│ ├─ EmployeeForm.jsx
│ ├─ EmployeeTable.jsx
│ ├─ SearchFilter.jsx
│ ├─ PrintButton.jsx
│ └─ Card.jsx
├─ Utils/
│ ├─ Context.jsx
│ └─ Routing.jsx
├─ assets/
│ └─ Logo.jpg
└─ App.jsx


---

## How to Run the Project

1. Clone the repository  
2. Install dependencies:
3. Start the development server:

4. Open in browser:
http://localhost:5173
---

## Login Credentials (Mock)

Enter any email with more than 5 characters to login.

Example:test@gmail.com


---


## Assignment Highlights

- Context API used for state management  
- Protected routes implemented  
- CRUD operations  
- Filtering + Searching  
- Responsive UI  
- LocalStorage persistence  

---

## Author

**Prashant**  
Frontend Developer (React)

---

## License

This project is created for educational / assignment purposes.


