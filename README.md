# Dynamic Profile Endpoint

A simple RESTful API endpoint that returns your profile information along with a dynamic cat fact fetched from an external API.

## 🚀 Features

- **Profile Information**: Returns your personal details including name, email, and tech stack
- **Dynamic Cat Facts**: Fetches random cat facts from the Cat Facts API
- **RESTful Design**: Clean API endpoint following REST principles
- **Error Handling**: Comprehensive error handling with custom middleware
- **CORS Support**: Cross-origin resource sharing enabled
- **Timeout Protection**: Built-in request timeout to prevent hanging requests

## 📋 Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Dynamic-Profile-Endpoint.git
   cd Dynamic-Profile-Endpoint
   ```

2. **Navigate to the app directory**
   ```bash
   cd app
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

## 🏃‍♂️ Running Locally

### Development Mode
```bash
npm run dev
```
This will start the server with nodemon for automatic restarts on file changes.

### Production Mode
```bash
npm start
```
This will start the server in production mode.

The server will start on `http://localhost:3000` by default.

## 📦 Dependencies

### Production Dependencies
- **express** (^5.1.0) - Web framework for Node.js
- **cors** (^2.8.5) - Cross-Origin Resource Sharing middleware
- **dotenv** (^17.2.3) - Environment variable loader
- **node-fetch** (^3.3.2) - HTTP request library for Node.js

### Development Dependencies
- **nodemon** (^3.1.10) - Development tool that automatically restarts the server

## 🔧 Environment Variables

Create a `.env` file in the `app` directory with the following variables:

```env
PORT=3000
```

**Note**: The PORT variable is optional. If not provided, the server will default to port 3000.

## 📡 API Endpoints

### GET `/me`
Returns your profile information along with a random cat fact.

**Response Example:**
```json
{
  "status": "success",
  "user": {
    "email": "humpheryufuoma@gmail.com",
    "name": "Otuoniyo Ufuoma-Oghene Humphery",
    "stack": "Backend-0"
  },
  "timestamp": "2024-01-15T10:30:00.000Z",
  "fact": "Cats have over 30 muscles controlling their ears."
}
```

## 🏗️ Project Structure

```
app/
├── controllers/
│   └── controller.js          # API route handlers
├── middleware/
│   ├── errorHandler.js        # Error handling middleware
│   └── notFound.js           # 404 handler middleware
├── route/
│   └── route.js              # Route definitions
├── utils/
│   └── fetchWithTimeout.js   # HTTP client with timeout
├── app.js                    # Express app configuration
├── server.js                 # Server entry point
└── package.json              # Dependencies and scripts
```

## 🚨 Error Handling

The API includes comprehensive error handling:
- **Timeout Errors**: Requests that exceed 30 seconds will be aborted
- **HTTP Errors**: Non-2xx responses are properly handled
- **404 Errors**: Custom middleware for undefined routes
- **Server Errors**: Centralized error handling middleware

## 🔗 External APIs

- **Cat Facts API**: `https://catfact.ninja/fact` - Provides random cat facts

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Otuoniyo Ufuoma-Oghene Humphery**
- Email: humpheryufuoma@gmail.com
- Stack: Backend-0
