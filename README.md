<p align="center">
  <img src="client/public/assets/logo.jpg" alt="TechEase logo" width="110" />
</p>

# TechEase

The frontend for TechEase, a learning portal for students. It has timed practice quizzes, role-based user and admin dashboards, and admin tools for bulk-uploading quiz questions from Excel.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

## About

TechEase is a Create React App frontend for an edtech portal. Students sign in with email and password or with Google, practice quizzes against a countdown timer, and see their progress on a profile page. Admins create quizzes, edit questions and import whole question sets from a spreadsheet. All data comes from a separate REST backend at `REACT_APP_API`.

## Features

**Public site**
- Landing page with hero, features (Practice Quizzes, Roadmaps, Guidance Sessions, Jobs & Hackathons), showcase, about, team and footer sections.

**Authentication**
- Email and password sign-in and sign-up, plus Google sign-in through Firebase Authentication (`signInWithPopup`).
- The Firebase ID token is sent to the backend (`/api/v1/auth/profile`), which returns the user and their role.
- Route guards (`components/auth/Protectedoutes.jsx`) redirect by role: `user` goes to `/user` and `admin` goes to `/admin`.

**User dashboard** (`/user`)
- Home, Profile (Chart.js pie chart and a react-slick carousel of roadmap images) and Practice.
- **Quiz attempt** (`/user/solution/:id`): a countdown based on the quiz duration and the attempt's start time, with answers submitted to `/api/v1/solution/user/submit`.
- Settings, Analysis and Roadmaps currently show a "Coming Soon" page.

**Admin dashboard** (`/admin`)
- An infinite-scrolling quiz list with delete.
- Add-quiz modal and a quiz editor (`/admin/edit/:id`) for editing quiz details and adding or deleting questions.
- **Excel import**: upload a `.xlsx` sheet with `Question`, `option1` to `option4`, `marks` and `negative` columns. It is parsed with SheetJS (`xlsx`) and posted in bulk. `option1` is treated as the correct answer.

**State**
- Redux Toolkit slices for the user, quizzes and path.

## Tech Stack

| Area | Tools |
|------|-------|
| Framework | React 18 (Create React App / react-scripts 5) |
| Routing | React Router 7 |
| State | Redux Toolkit, React Redux |
| Auth | Firebase Authentication (email + Google) |
| UI | Tailwind CSS 3, MUI 6, Framer Motion, React Icons, react-toastify |
| Widgets | Chart.js / react-chartjs-2, react-slick, react-calendar, react-infinite-scroll-component, react-dropzone |
| Data | Axios, SheetJS (`xlsx`) |

## Project Structure

```
client/
├── public/                    # index.html, icons, images, videos
└── src/
    ├── App.jsx                # Routes and auth bootstrap
    ├── firebase.js            # Firebase app + auth
    ├── config.js              # BASE_URL from REACT_APP_API
    ├── redux/                 # store, reducers (user, quiz, path), thunks, api
    └── components/
        ├── auth/              # Role-based route guards
        ├── layout/            # Header, Footer, Layout
        ├── modals/            # Add quiz, Excel import, warning
        ├── pages/app/         # Public landing page sections
        ├── pages/user/        # User dashboard, Practice, Profile, Solutions
        ├── pages/admin/       # Admin dashboard, Quiz list, EditQuiz
        └── utils/             # Loader, Toast, helpers (Excel parser, marks calc)
```

## Getting Started

### Prerequisites

- Node.js 18+
- A running TechEase backend that serves the `/api/v1` routes
- A Firebase project with Email/Password and Google sign-in turned on

### Environment Variables

Create `client/.env`:

| Variable | Description |
|----------|-------------|
| `REACT_APP_API` | Base URL of the TechEase backend API |

The Firebase web config lives in `client/src/firebase.js`. Replace it with your own project's config.

### Install and Run

```bash
cd client
npm install
npm start        # dev server on http://localhost:3000
npm run build    # production build
npm test         # Jest via react-scripts
```

## Backend Endpoints Used

| Method | Endpoint | Used for |
|--------|----------|----------|
| POST | `/api/v1/auth/signin`, `/api/v1/auth/signup`, `/api/v1/auth/google-login` | Authentication |
| GET | `/api/v1/auth/profile` | Current user and role |
| GET | `/api/v1/quiz/get?page=&limit=&search=` | Paginated quiz list |
| GET | `/api/v1/quiz/:id` | Quiz details |
| POST | `/api/v1/quiz/add/` | Create quiz |
| POST | `/api/v1/quiz/edit/:id` | Edit quiz |
| GET | `/api/v1/quiz/del/:id` | Delete quiz |
| POST | `/api/v1/quiz/add/question` | Add a question |
| POST | `/api/v1/quiz/add/questions` | Bulk-add questions (Excel import) |
| GET | `/api/v1/quiz/question/del/?quizId=&questionId=` | Delete a question |
| GET | `/api/v1/quiz/solution/:id?userId=` | Start or fetch a quiz attempt |
| POST | `/api/v1/solution/user/submit` | Submit answers |

## Author

**Aryan Bhandari**: [GitHub](https://github.com/aryanbha123)
