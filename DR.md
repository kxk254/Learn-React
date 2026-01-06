
# DR Full Stack

pip install django djangorestframework
pip install django-cors-headers
pip install python-dotenv
pip install djangorestframework-simplejwt

### Frontend Setup
npm create vite@latest frontend -- --template react
npm install axios react-router-dom jwt-decode
npm install react@18.2.0 react-dom@18.2.0 react-router-dom@6.22.3

### package.json
"dev": "vite --host"

### front end of pip freeze
npm ls --depth=0

### run npm

/frontend
npm run dev -- --host

### Backend
python3 manage.py runserver 0.0.0.0:8000

## REACT 
DR-full-stack/
├── backend/        # Django project
│   ├── manage.py
│   └── requirements.txt
└── frontend/       # React + Vite project
    ├── package.json
    └── package-lock.json

start.sh
#!/bin/bash
cd backend
source env/bin/activate
python manage.py runserver &
cd ../frontend
npm run dev

index.html
   │
   ▼
main.jsx  ← bootstraps React app
   │
   ▼
<App.jsx>  ← main connecting component
   │
   ├─ BrowserRouter  ← manages routes / URLs
   │
   └─ Provides context / global state (optional)
   │
   ▼
Pages / Components
(HomePage.jsx, LoginPage.jsx, etc.)
   │
   ├─ useEffect / event handlers trigger API calls
   │
   ▼
api.js  ← Axios instance
   │
   ├─ baseURL: http://localhost:8000/api  (from VITE_API_URL)
   └─ Authorization header: Bearer token (if present)
   │
   ▼
Django Backend
(views.py / serializers / urls.py)
   │
   ├─ JWT authentication (if using simplejwt)
   ├─ Business logic
   └─ Database (models.py)
   │
   ▼
Response → Axios → Page / Component
   │
   ▼
UI updates reactively


Explanation of each step

index.html

Basic HTML file in frontend/

Has <div id="root"></div> for React to mount

main.jsx

Creates the React root (createRoot)

Renders <App />

App.jsx

Main app component

Handles routing (BrowserRouter)

Optionally provides global state or context (like user info)

Pages / Components

Example: HomePage.jsx or LoginPage.jsx

Use useEffect or event handlers to make API calls

Display data from backend

api.js (Axios instance)

Centralizes backend URL and auth headers

Ensures all pages/components use the same backend connection

Django Backend

Handles requests at endpoints defined in urls.py

Processes data, queries the database, returns JSON

Handles JWT authentication (if configured)

Response → React Component

Axios returns data to page/component

Component updates UI reactively


### Short cut
main.jsx
   │
   ▼
App.jsx
   │
   ▼
Pages/Components → api.js (Axios) → Django Backend → Database
   │
   ▼
UI updated


### analogy
App.jsx        → urls.py
Pages          → templates (+ view logic)
Components     → partial templates / helper views
api.js         → client-side middleware + request manager

Flow:
Page Component → api.js → Django Backend → DB → Response → Component updates UI


### all auth
Assume Django backend exposes Allauth / REST endpoints:

Action	Backend endpoint	Frontend example using api.js
Login	/api/auth/login/	api.post('/auth/login/', { email, password })
Register / Signup	/api/auth/register/	api.post('/auth/register/', { email, password })
Logout	/api/auth/logout/	api.post('/auth/logout/')
Forgot Password	/api/auth/password/reset/	api.post('/auth/password/reset/', { email })
Reset Password Confirm	/api/auth/password/reset/confirm/	api.post('/auth/password/reset/confirm/', { uid, token, new_password })