# Uber Clone App

This project is a fully functional Uber clone application using Google Cloud API and various libraries and frameworks. The app includes features for both riders and drivers, real-time tracking, payment processing, and more.

## Table of Contents
- [Features](#features)
- [Architecture](#architecture)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- User Authentication and Authorization
- Real-time Location Tracking
- Ride Request and Matching
- Payment Processing
- Ride History and Receipts
- Driver Ratings and Reviews

## Architecture
The application follows a microservices architecture, leveraging multiple services to handle different aspects of the app. Key components include:

- **Authentication Service**: Manages user sign-up, login, and token management.
- **Ride Matching Service**: Handles ride requests and matches riders with nearby drivers.
- **Payment Service**: Processes payments and manages transaction records.
- **Notification Service**: Sends real-time notifications to users.

## Technologies Used
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB 
  - Google Cloud Functions
  - Google Cloud Pub/Sub
- **Frontend**:
  - React
  - Redux
- **APIs**:
  - Google Maps API
  - Google Places API
  - Google Cloud Storage

## Setup and Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or Yarn
- Docker (if using containerization)
- A Google Cloud account with billing enabled

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/uber-clone.git
   cd uber-clone




**File: /Backend/README.md**
```markdown
# User Routes Documentation

This document provides an overview of the user-related routes in our application.

## Models

### User Model

The User model is defined with the following schema:

- `fullname`:
  - `firstname`: String (required, minimum 3 characters)
  - `lastname`: String (minimum 3 characters)
- `email`: String (required, must be a valid email address)
- `password`: String (required, minimum 8 characters, not returned in queries)
- `socketID`: String

## Routes

### POST /users/register

Registers a new user.

**Request Body:**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

**Response:**
- Status: 201 Created
- Body: Created user object (excluding password)

### POST /users/login

Authenticates a user and returns a JWT token.

**Request Body:**
```json
{
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

**Response:**
- Status: 200 OK
- Body: JWT token

### GET /users/profile

Retrieves the profile of the authenticated user.

**Headers:**
- Authorization: Bearer [JWT Token]

**Response:**
- Status: 200 OK
- Body: User profile object

### PUT /users/profile

Updates the profile of the authenticated user.

**Headers:**
- Authorization: Bearer [JWT Token]

**Request Body:**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Smith"
  }
}
```

**Response:**
- Status: 200 OK
- Body: Updated user profile object

## Authentication

User authentication is handled using JSON Web Tokens (JWT). The `generateAuthToken` method in the User model creates a token that expires in 1 hour.

## Password Hashing

Passwords are hashed using bcrypt before being stored in the database. The `hashPassword` static method in the User model handles this process.

## Middleware

- Authentication middleware is used to protect routes that require a logged-in user.
- Validation middleware is used to ensure that incoming data meets the required format and constraints.

## Error Handling

Proper error messages are returned for various scenarios such as:
- Invalid input data
- User already exists (during registration)
- Incorrect login credentials
- Unauthorized access to protected routes



