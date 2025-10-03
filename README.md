# React Internship Challenge — User Management App

A small React application to list, search, view details, and locally add users.
It demonstrates components, routing, state management, forms, and data fetching.
State is managed with **Redux Toolkit**, routing with **React Router**, and styling with **Tailwind CSS**.

## Table of Contents
- [Features](#features)
- [Bonus](#bonus)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [NPM Scripts](#npm-scripts)
- [Screenshots](#screenshots)
- [Submission](#submission)

## Features
- **List Users:** Fetch users from https://jsonplaceholder.typicode.com/users, store them in Redux, and display Name, Email, Company.
- **Search:** Client-side filter by name or email.
- **User Details:** Clicking a user shows their address, phone, and website.
- **Add New User (local only):** Modal form with validation (name + email required). The new user is inserted at the top of the list.

## Bonus
- **Sorting:** Sort by name, email, or company (ascending/descending).
- **Update & Delete:** Inline edit and delete via Redux actions.

## Tech Stack
- React + Vite
- Redux Toolkit
- React Router
- Tailwind CSS

## Getting Started
1. Install dependencies:

    npm install

2. Run the development server:

    npm run dev

3. Open the app:

    http://localhost:5173

## Project Structure
    user-management-app/
    ├─ src/
    │  ├─ components/      # Toolbar, UsersTable, AddUserModal, InlineEdit, Layout
    │  ├─ pages/           # UsersPage, UserDetails
    │  ├─ store/           # Redux store + usersSlice
    │  ├─ App.jsx          # App routes
    │  └─ main.jsx         # App entry
    ├─ index.html
    └─ tailwind / vite configs

## NPM Scripts
    npm run dev       # start development server
    npm run build     # production build
    npm run preview   # preview the production build

## Screenshots

    ![Home Page](/src/screenshots/home-page.png)
    ![User Details](/src/screenshots/user-details.png)




