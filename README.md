# Fiverr-Frontend

## Description

A modern React-based frontend application that replicates the core functionality of the Fiverr freelance marketplace platform. This project provides a user-friendly interface for connecting freelancers with clients, featuring service listings, user profiles, order management, and real-time communication capabilities.

## Features

- Service (Gig) browsing and search functionality
- User profiles for buyers and sellers
- Order placement and management system
- Messaging system between users
- Review and rating system

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- Yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Fiverr-Frontend
```

2. Install dependencies using yarn:
```bash
yarn install
```

## Usage

### Development Mode

To run the application in development mode:
```bash
yarn start
```

The application will open in your browser at [http://localhost:3000](http://localhost:3000).
The page will automatically reload when you make changes.

### Build for Production

To create a production build:
```bash
yarn build
```

This will create an optimized build in the `build` folder, ready for deployment.

### Run Tests

To run the test suite:
```bash
yarn test
```

### Lint Code

To check code quality and formatting:
```bash
yarn lint
```

## Project Structure

```
Fiverr-Frontend/
├── public/           # Static files
├── src/              # Source code
│   ├── components/   # React components
│   ├── pages/        # Page components
│   └── App.js        # Main application component
├── package.json      # Project dependencies
└── README.md         # Project documentation
```

## Technologies Used

- React.js
- React Router for navigation
- CSS/SCSS for styling
- Axios for API calls
- Context API/Redux for state management

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is for educational purposes only.