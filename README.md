# SwiftQ
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/Kz1232/Delayed_impact_acithackathon)

SwiftQ is a full-stack queue management system designed to streamline customer flow and enhance service efficiency. Built with a modern tech stack, it provides a seamless experience for both administrators and customers in various sectors, including clinics, government offices, and service centers. This application features distinct dashboards for administrators to manage queues and for customers to book appointments and track their status.

## Features

### Admin Features
- **Secure Login:** Dedicated authentication for administrators.
- **Admin Dashboard:** A central hub for managing the queue system.
- **Queue Management:** Create and configure different service queues.
- **Queue Status Monitoring:** View real-time status of all active queues, including current token numbers and waiting customers.

### Customer Features
- **User Authentication:** Simple and secure registration and login for customers.
- **Customer Dashboard:** A personalized space for customers.
- **Appointment Booking:** An intuitive interface to book appointments for various services, selecting preferred dates and times.
- **Queue Token Generation:** Obtain a digital token for a selected service and counter.

## Tech Stack

**Backend:**
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** bcrypt.js for password hashing

**Frontend:**
- **Framework:** React with TypeScript
- **Bundler:** Vite
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Routing:** React Router
- **API Communication:** Axios

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have the following software installed on your machine:
- Node.js (v18.x or later recommended)
- npm (or a compatible package manager)
- MongoDB (ensure it's running on the default port `27017`)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/kz1232/delayed_impact_acithackathon.git
    cd delayed_impact_acithackathon
    ```

2.  **Setup the Backend:**
    - Navigate to the backend directory.
      ```sh
      cd Backend
      ```
    - Install the required dependencies.
      ```sh
      npm install
      ```
    - The application is configured to connect to a local MongoDB instance `swiftQ` by default. Ensure your MongoDB server is active.
    - Start the backend server in development mode.
      ```sh
      npm run dev
      ```
    - The server will be running on `http://localhost:8000`.

3.  **Setup the Frontend:**
    - Open a new terminal and navigate to the frontend directory.
      ```sh
      cd Frontend
      ```
    - Install the required dependencies.
      ```sh
      npm install
      ```
    - Start the frontend development server.
      ```sh
      npm run dev
      ```
    - The application will be accessible in your browser, typically at `http://localhost:5173`.

## API Endpoints

The backend exposes the following RESTful API endpoints:

| Method | Endpoint                    | Description                                  |
| :----- | :-------------------------- | :------------------------------------------- |
| `POST` | `/api/auth/register`        | Register a new user.                         |
| `POST` | `/api/auth/login`           | Log in an existing user.                     |
| `POST` | `/api/services`             | Create a new service.                        |
| `GET`  | `/api/services`             | Get a list of all available services.        |
| `POST` | `/api/counter`              | Create a new counter.                        |
| `GET`  | `/api/counter`              | Get a list of all counters.                  |
| `POST` | `/api/token`                | Generate a new queue token for a service.    |
| `GET`  | `/api/token/queue/:serviceId` | Get the current queue for a specific service.|
| `POST` | `/api/appointments`         | Create a new appointment.                    |

## Project Structure

The repository is organized as a monorepo with two main directories:

```
.
├── Backend/      # Contains the Node.js/Express.js backend application
│   ├── src/
│   │   ├── controllers/  # Request handlers
│   │   ├── models/       # Mongoose schemas
│   │   ├── router/       # API routes
│   │   ├── services/     # Business logic
│   │   └── app.js        # Main server entry point
│   └── package.json
└── Frontend/     # Contains the React/Vite frontend application
    ├── src/
    │   ├── components/   # React components
    │   ├── services/     # API service configuration (Axios)
    │   └── App.tsx       # Main application component with routing
    └── package.json