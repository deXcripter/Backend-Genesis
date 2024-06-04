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
npm run dev # to compile and run in development mode using nodemon
npm start # to compile and run in production mode
npm compile # to compile the TS files in watch mode (during developemnt only)
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

We welcome contributions from the community to help improve this project! Here are some guidelines to get you started:

#### Getting Started

- Read the project documentation to understand the goals and architecture.
- Check the issue tracker to see if your proposed change or feature is already being worked on.
- Start small by fixing typos, adding comments, or addressing minor bugs to get familiar with the codebase.

#### Making Changes

- Fork the repository and create a new branch for your changes.
- Follow the project's coding style and conventions.
- Write clear, concise commit messages explaining your changes.
<!-- - Include tests for any new functionality you add. -->

#### Submitting Changes

- Submit a pull request with your changes.
- Explain the purpose and scope of your changes in the pull request description.
- Be responsive to any feedback or requests for changes from maintainers.

#### Other Ways to Contribute

- Report bugs or request features by opening a new issue.
- Improve the documentation by fixing typos or adding clarification

   <!-- Include supplementary information like reference charts, data tables, or error codes. -->
   <!-- Add a glossary of terms for quick reference. -->
