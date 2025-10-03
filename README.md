# React Internship Challenge — User Management App

Aplikacion i vogel ne **React** per listim, kerkim, detaje dhe shtim lokal te userave.  
Perdor **Redux Toolkit** per menaxhimin e state-it, **React Router** per routing dhe **Tailwind CSS** per stilim.

> EN: A small React app to list, search, view details, and locally add users.  
> It demonstrates components, routing, state management, forms, and data fetching.

---

## Permbajtja
- [Veçorite](#-veçorite)
- [Bonus](#-bonus)
- [Teknologjite](#-teknologjite)
- [Si ta nisesh](#-Si-ta-nisesh)
- [Struktura e projektit](#-struktura-e-projektit)
- [npm Scripts)](#-npm-scripts)
- [Screenshots](#-screenshots)

---

## Veçorite
- **List Users:** Merr perdorues nga [JSONPlaceholder](https://jsonplaceholder.typicode.com/users), i ruan ne Redux dhe i shfaq në tabele (emri, email, kompania).
- **Search:** Filtrim klientor sipas **name** ose **email**.
- **User Details:** Klikimi ne nje perdorues hap faqen e detajeve (address, phone, website).
- **Add New User (local-only):** Forme me validim (name + email te detyrueshme). Perdoruesi i ri shtohet ne **krye** te listes.

---

## Bonus
- **Sorting:** Renditje sipas `name`, `email`, `company` (ASC/DESC) nga header-at ose toolbar.
- **Update & Delete:** Editim inline dhe fshirje përmes veprimeve Redux.

---

## Teknologjite
- React + Vite
- Redux Toolkit
- React Router
- Tailwind CSS

---

## 🚀 Si ta nisesh
1. Instalimi i varesive:

   npm install

2. Startimi i serverit te zhvillimit:

    npm run dev

3. Hap aplikacionin te http://localhost:5173


## Struktura e projektit

user-management-app/
├── src/
│   ├── components/    # Toolbar, UsersTable, AddUserModal, InlineEdit, Layout
│   ├── pages/         # UsersPage, UserDetails
│   ├── store/         # Redux store + usersSlice
│   ├── App.jsx        # Routing kryesor
│   └── main.jsx       # Entry point
├── index.html
└── tailwind.config.js & vite.config.js


### npm Scripts

    npm run dev     
    npm run build    
    npm run preview  


### Screenshots

![Home Page](/src/screenshots/home-page.png)
![User Details](/src/screenshots/user-details.png)



