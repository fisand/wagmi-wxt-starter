# WAGMI-WXT Starter

Welcome to the WAGMI-WXT Starter repository! This project is a starter kit to help you get up and running with a WAGMI-based Chrome extension. 

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
> [!WARNING]
> ~[Dev issue with import for Vite compatibility](https://github.com/MetaMask/providers/pull/331)~


Ensure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/) (version 18 or later)
- [pnpm](https://pnpm.io/) (version 6 or later)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/fisand/wagmi-wxt-starter.git
   cd wagmi-wxt-starter
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

## Usage

1. **Start the development server:**

   ```bash
   pnpm start
   ```
2. **Build the project for production:**

   ```bash
   pnpm run build
   ```

## Project Structure

A brief description of the project structure:

```
wagmi-wxt-starter/
├── assets/                 # Assets for the extension
├── entrypoints/            # Entry points for the application
├── hooks/                  # Custom React hooks
├── public/                 # Public assets
├── .gitignore              # Git ignore file
├── README.md               # Project documentation
├── auto-imports.d.ts       # Auto-imported TypeScript definitions
├── package.json            # Project metadata and dependencies
├── pnpm-lock.yaml          # Lockfile for pnpm
├── tsconfig.json           # TypeScript configuration
├── uno.config.ts           # UnoCSS configuration
├── vite-env.d.ts           # Vite environment definitions
└── wxt.config.ts           # WXT-specific configuration
```

## Contributing

We welcome contributions to the WAGMI-WXT Starter project. To contribute, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Create a new Pull Request

Please make sure to update tests as appropriate.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
