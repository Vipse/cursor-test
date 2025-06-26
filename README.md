# Frontend Application Documentation

## Overview

This is a React-based frontend application, structured for scalability and maintainability. It uses TypeScript for type safety, Vite for fast development and build, and Vitest for testing. The application is organized into modular components, utilities, and type definitions.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Key Directories & Files](#key-directories--files)
- [Testing](#testing)
- [Code Quality](#code-quality)
- [Contributing](#contributing)
- [License](#license)

---

## Project Structure

```
home-work-cursor/
├── coverage/                  # Test coverage reports
│   └── src/                   # Coverage for source files
├── public/                    # Static assets (e.g., vite.svg)
├── src/                       # Source code
│   ├── assets/                # Images and static assets (e.g., react.svg)
│   ├── components/            # Reusable React components
│   │   ├── Spinner/           # Spinner component and styles
│   │   ├── UserModal/         # UserModal component and styles
│   │   ├── UserRow/           # UserRow component
│   │   └── UserTable/         # UserTable component and styles
│   ├── styles/                # (Reserved for global styles)
│   ├── tests/                 # Unit and integration tests
│   ├── types/                 # TypeScript type definitions (e.g., user.ts)
│   ├── utils/                 # Utility functions (e.g., api.ts)
│   ├── App.tsx                # Main App component
│   ├── main.tsx               # Entry point
│   └── vite-env.d.ts          # Vite environment types
├── .eslintrc.js / eslint.config.js # ESLint configuration
├── package.json               # Project metadata and scripts
├── tsconfig*.json             # TypeScript configuration
├── vite.config.ts             # Vite configuration
├── vitest.config.ts           # Vitest configuration
└── README.md                  # Project documentation
```

---

## Responsive Design

This project is fully responsive:
- All main components (UserTable, UserModal, Spinner) adapt to mobile, tablet, and desktop screens.
- CSS media queries ensure tables, modals, and overlays look great on all devices.
- The modal is centered and never touches the screen edges on mobile.

---

## Getting Started

### Prerequisites

- **Node.js** (v16+ recommended)
- **npm** (v8+ recommended)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd home-work-cursor
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) by default.

---

## Available Scripts

- `npm run dev` — Start the development server with hot reloading.
- `npm run build` — Build the app for production.
- `npm run preview` — Preview the production build locally.
- `npm run test` — Run all tests using Vitest.
- `npm run coverage` — Generate a test coverage report.
- `npm run lint` — Run ESLint to check for code quality issues.

---

## Key Directories & Files

- **`src/components/`**  
  Contains all React components, each in its own folder with related styles and tests.

- **`src/utils/api.ts`**  
  Contains API utility functions for data fetching.

- **`src/types/user.ts`**  
  TypeScript interfaces and types for user data.

- **`src/tests/`**  
  Contains unit and integration tests for components and utilities.

- **`coverage/`**  
  Contains code coverage reports generated after running tests.

---

## Components

### UserTable
- **Purpose:** Displays a table of users fetched from an external API.
- **Features:**
  - Fetches user data on mount.
  - Shows a loading spinner while fetching.
  - Renders a list of users using the `UserRow` component.
  - Allows selecting a user to view details in a modal (`UserModal`).
  - Supports deleting users from the table (client-side only).
- **Usage:** Used as the main user list view in the application.

### UserRow
- **Purpose:** Represents a single row in the user table.
- **Features:**
  - Displays user's name, email, address, phone, website, and company.
  - Clicking the row selects the user (for modal display).
  - Includes a delete button to remove the user from the list.
- **Props:**
  - `user`: The user object.
  - `onSelect(user)`: Callback when the row is clicked.
  - `onDelete(id, event)`: Callback when the delete button is clicked.

### UserModal
- **Purpose:** Shows detailed information about a selected user in a modal dialog.
- **Features:**
  - Displays all user details, including address, company, and a map link.
  - Can be closed via a close button.
- **Props:**
  - `user`: The user object to display.
  - `onClose()`: Callback to close the modal.

### Spinner
- **Purpose:** Shows a loading spinner overlay.
- **Usage:** Used while user data is being fetched.

---

## Utilities

### src/utils/api.ts
- **Purpose:** Handles API requests for user data.
- **Functions:**
  - `fetchUsers(): Promise<User[]>`
    - Fetches a list of users from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) using Axios.
    - Returns a promise that resolves to an array of `User` objects.

---

## Types

### src/types/user.ts
Defines the structure of user-related data used throughout the app.

- **Geo**
  - `lat: string`
  - `lng: string`
- **Address**
  - `street: string`
  - `suite: string`
  - `city: string`
  - `zipcode: string`
  - `geo: Geo`
- **Company**
  - `name: string`
  - `catchPhrase: string`
  - `bs: string`
- **User**
  - `id: number`
  - `name: string`
  - `username: string`
  - `email: string`
  - `address: Address`
  - `phone: string`
  - `website: string`
  - `company: Company`

---

## How It All Connects

- The **UserTable** component fetches users using the `fetchUsers` utility and displays them in a table.
- Each user is rendered as a **UserRow**. Clicking a row opens the **UserModal** for more details.
- The **Spinner** component is shown while data is loading.
- All data structures are strongly typed using the interfaces in `src/types/user.ts`.

---

## Testing

- **Test Runner:** [Vitest](https://vitest.dev/)
- **Test Location:** All test files are in `src/tests/` and follow the `.test.ts` or `.test.tsx` naming convention.
- **Coverage:** Run `npm run coverage` to generate a coverage report in the `coverage/` directory.

---

## Code Quality

- **Linting:** ESLint is configured for code quality and style consistency.
- **Type Checking:** TypeScript is used throughout the project for static type checking.

---

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Run tests and linting to ensure code quality.
5. Commit and push your changes.
6. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For questions or support, please open an issue in the repository.
