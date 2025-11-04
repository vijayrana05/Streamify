# Streamify

A lightweight language-exchange web app with chat and video call features.  
This repo contains a Node + Express backend and a React + Vite frontend.

- Backend: [backend/src/server.js](backend/src/server.js)  
- Frontend: [frontend/src/main.jsx](frontend/src/main.jsx)

## Tech stack

- Backend: Node.js, Express, MongoDB (mongoose)
  - Entry: [backend/src/server.js](backend/src/server.js)
  - Auth: [backend/src/controllers/auth.controller.js](backend/src/controllers/auth.controller.js)
  - Users & friendships: [backend/src/controllers/user.controller.js](backend/src/controllers/user.controller.js)
  - Chat token: [`getStreamToken`](backend/src/controllers/chat.controller.js) — [backend/src/controllers/chat.controller.js](backend/src/controllers/chat.controller.js)
  - Stream helpers: [backend/src/lib/stream.js](backend/src/lib/stream.js)
  - Models: [backend/src/models/User.js](backend/src/models/User.js), [backend/src/models/FriendRequest.js](backend/src/models/FriendRequest.js)

- Frontend: React + Vite, Tailwind + DaisyUI
  - Entry: [frontend/src/main.jsx](frontend/src/main.jsx)
  - Routing / app shell: [frontend/src/App.jsx](frontend/src/App.jsx)
  - API helpers: [frontend/src/lib/api.js](frontend/src/lib/api.js) (uses [`axiosInstance`](frontend/src/lib/axios.js))
  - Chat: [frontend/src/pages/ChatPage.jsx](frontend/src/pages/ChatPage.jsx)
  - Call: [frontend/src/pages/CallPage.jsx](frontend/src/pages/CallPage.jsx)
  - Hooks: [`useAuthUser`](frontend/src/hooks/useAuthUser.js), [`useLogin`](frontend/src/hooks/useLogin.js), [`useSignUp`](frontend/src/hooks/useSignUp.js), [`useLogout`](frontend/src/hooks/useLogout.js)
  - Key components: [frontend/src/components/Layout.jsx](frontend/src/components/Layout.jsx), [frontend/src/components/Sidebar.jsx](frontend/src/components/Sidebar.jsx), [frontend/src/components/Navbar.jsx](frontend/src/components/Navbar.jsx)

## Features

- Email/password signup & login with JWT stored in HTTP-only cookie (`auth` routes: [backend/src/routes/auth.route.js](backend/src/routes/auth.route.js))
- Onboarding profile (languages, bio, avatar) ([backend/src/controllers/auth.controller.js](backend/src/controllers/auth.controller.js))
- Friend requests (send / accept / outgoing / incoming) ([backend/src/controllers/user.controller.js](backend/src/controllers/user.controller.js); routes: [backend/src/routes/user.route.js](backend/src/routes/user.route.js))
- Stream Chat + Stream Video integration for messaging and video calls ([backend/src/lib/stream.js](backend/src/lib/stream.js), frontend uses Stream SDKs in [frontend/src/pages/ChatPage.jsx](frontend/src/pages/ChatPage.jsx) and [frontend/src/pages/CallPage.jsx](frontend/src/pages/CallPage.jsx))

## Quick start

Prereqs:
- Node.js (>=18 recommended)
- MongoDB (connection URI)
- Stream account (API key & secret)

1. Clone repository and install dependencies for each side:

```sh
# root (optional)
# install root deps if any

# backend
cd backend
npm install

# frontend
cd ../frontend
npm install
