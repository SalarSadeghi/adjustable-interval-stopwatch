# Adjustable Interval Stopwatch

Welcome to the **Adjustable Interval Stopwatch** project! This application is a versatile stopwatch built with React, Vite, and Tailwind CSS. It allows users to adjust the stopwatch's initial time, customize the counting interval, and interact with a variety of features such as starting, stopping, resetting, and recording lap times.

## Features

- Adjustable starting time and interval using uncontrolled inputs.
- Real-time stopwatch display.
- Functional buttons for:
  - **Start**: Begin the stopwatch.
  - **Stop**: Pause the stopwatch.
  - **Reset**: Reset the stopwatch to default settings.
  - **Lap**: Record and display lap times without interrupting the main timer.
- Fully responsive design using Tailwind CSS.

## Technologies Used

- **React**: For building the user interface and managing state.
- **Vite**: For project setup and bundling.
- **Tailwind CSS**: For styling.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SalarSadeghi/adjustable-interval-stopwatch.git
   cd adjustable-interval-stopwatch
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

### Build for Production

To create a production-ready build of the application:

```bash
npm run build
# or
yarn build
```

### Run the Production Build

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
adjustable-interval-stopwatch/
├── src/
│   ├── components/        # React components
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Application entry point
├── public/                # Static assets
├── package.json           # Project dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## Customization

- Modify the default starting time and interval values in the input fields.
- Customize the styles in the `tailwind.config.js` file or directly in the components.

## Future Enhancements

- Add support for saving lap times to local storage.
- Include dark mode functionality.
- Enhance accessibility for keyboard and screen reader users.
