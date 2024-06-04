## Table Of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
<!-- - [File Structure](#file-structure) -->
- [Trouble Shooting](#troubleshooting)
- [Contributing](#contributing)
- [Credit](#credit)

## Introduction:

**Backend Genesis** is a TypeScript Backend boiler-plate that you can use for your web or mobile application. It comes bundled with a few packages that makes your development work easier, faster, and cleaner.

The goal of **Backend Genesis** is to simply reduce or eradicate the amount of time you spend building your developer enviroment for every new project you jump on, and just get you started.

#### Packages Bundled

1. **TypeScript**: You can immediately begin writing your TS files on the go. Your compiled TS files gets emmitted to a /dist directory inside your parent directory.
2. **Prettier**: To enhance the readability and elegance of your code, prettier also comes pre-bundled with this package.

#### File Structure

      ├───src/
      |   |
      │   ├───controllers/       // Contains logic for handling incoming requests
      |   |
      │   ├───errors/            // Contains custom error cases for your application
      |   |
      |   ├───interface/         // Contains interfaces defining the structure of your data
      |   |
      |   ├───models/            // Contains models representing your data (often database related)
      |   |
      |   ├───routes/            // Contains routes that map URLs to controller functions
      |   |
      |   ├───app.ts             // Main application entry point
      |   |
      │   └───server.ts          // Starts the Express server
      │
      ├── .gitignore
      ├── package.json
      ├── package-lock.json
      ├── README.md
      ├── tsconfig.json
      └── package.json.lock

#### Target Audience

This is specially for developers looking forward to building their Express backend applications with TypeScript.

## Getting Started:

1. Clone the Repository

```bash
git clone https://github.com/deXcripter/backend-genesis.git
```

2. Install dependencies

```bash
cd backend-genesis
npm install
```

3. Start the Development Server

```bash
npm run dev # to run in development mode using nodemon
npm start # to run in production mode
```

   <!-- Provide installation instructions if applicable (software, hardware, etc.).
   Outline the basic steps to get started using the product or service. -->

## Troubleshooting:

- Common Issues:

  Installation Errors: Check npm logs for specific errors and refer to relevant documentation.
  Server Not Starting: Ensure you have Node.js and npm installed correctly. Double-check any configuration issues.

- Reporting Bugs:

  Create an issue on the project's GitHub repository with clear steps to reproduce the bug.

## Contributing:

- Fork the repository on GitHub.
- Make your changes and create a pull request.
- Follow any contribution guidelines provided by the project.

## Credit:

   <!-- Include supplementary information like reference charts, data tables, or error codes. -->
   <!-- Add a glossary of terms for quick reference. -->
