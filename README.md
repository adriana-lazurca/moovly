# Moovly Project

The project is a mini single page app (SPA) containing as main page the sign up page and two other placeholder pages.

### Technologies:

-  **ReactJS**
-  **React Router** for the navigation
-  **Formik** and **Yup** for form creation and validation
-  **Json-server** for mocking the back-end
-  **Axios** for for calling back-end APIs
-  **Bootstrap** for styling
-  **Concurrently** for running front-end and back-end in parallel

### State management

To persist user state through a page refresh, I used local storage, with the help of a [hook](https://usehooks.com/useLocalStorage).

### Run project
```
npm start
```

### APIs

-  **Get users**<br />
   GET http://localhost:3001/users

-  **Get user**<br />
   GET http://localhost:3001/users/<user_id>

-  **Create user**<br />
   POST http://localhost:3001/users<br />
   Body:
   {
   "email": "adriana.lazurca@gmail.com",
   "password": "Aa@12aba"
   }

-  **Delete user**<br />
   DELETE http://localhost:3001/users/<user_id>
