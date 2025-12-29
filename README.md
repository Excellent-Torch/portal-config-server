# Portal Configuration Server

This project is a server application that allows users to manage portal configurations through a RESTful API. It is built using TypeScript and Express, providing a structured way to add, retrieve, and validate portal configurations.

## Features

- Add new portal configurations
- Retrieve existing portal configurations
- Validate portal data (e.g., MAC address format)
- Custom domain support for HTTPS

## Project Structure

```
portal-config-server
├── src
│   ├── controllers        # Contains controllers for handling requests
│   │   └── portalController.ts
│   ├── models             # Defines the data models
│   │   └── portal.ts
│   ├── routes             # Defines the API routes
│   │   └── portalRoutes.ts
│   ├── services           # Contains business logic for managing portals
│   │   └── portalService.ts
│   ├── utils              # Utility functions for validation
│   │   └── validation.ts
│   ├── config             # Configuration settings for the application
│   │   └── index.ts
│   └── app.ts             # Entry point of the application
├── package.json           # NPM configuration file
├── tsconfig.json          # TypeScript configuration file
└── README.md              # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd portal-config-server
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Configure the application:**
   Update the configuration settings in `src/config/index.ts` as needed, including server port and database connection details.

4. **Run the application:**
   ```
   npm start
   ```

## API Endpoints

- **POST /portals**: Add a new portal configuration.
- **GET /portals**: Retrieve all portal configurations.

## Usage

You can use tools like Postman or cURL to interact with the API endpoints. Ensure that the server is running before making requests.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.