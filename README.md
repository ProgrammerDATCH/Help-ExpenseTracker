# Expense Tracker

A professional expense tracking application built with React, TypeScript, and Tailwind CSS. This web application helps users track their daily expenses, visualize spending patterns, and manage their financial data effectively.

## Features

### Core Functionality
- ✅ Add new expenses with detailed information:
  - Amount
  - Category
  - Date
  - Description
- ✅ View and filter expenses by category
- ✅ Real-time total expense calculation
- ✅ Data persistence using localStorage
- ✅ Responsive design for all screen sizes

### Bonus Features
- 📊 Visual expense distribution with interactive pie chart
- 🗑️ Delete individual expenses
- 🎯 Category-based filtering
- 💾 Automatic data saving
- 📱 Mobile-friendly interface

## Technology Stack

- **Frontend Framework:** React with TypeScript
- **Styling:** Tailwind CSS
- **Data Visualization:** Recharts
- **Storage:** localStorage
- **Build Tool:** Vite
- **Package Manager:** npm

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ProgrammerDATCH/Help-ExpenseTracker.git
cd expense-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Project Structure

```
expense-tracker/
├── src/
│   ├── components/
│   │   ├── ExpenseForm.tsx
│   │   ├── ExpenseList.tsx
│   │   └── ExpenseChart.tsx
│   ├── types/
│   │   └── index.ts
|   |
│   ├── utils/
│   │   └── localStorage.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
├── package.json
└── README.md
```

## Available Scripts

- **Development server:**
```bash
npm run dev
```

- **Build for production:**
```bash
npm run build
```

- **Preview production build:**
```bash
npm run preview
```

## Usage

1. **Adding an Expense:**
   - Fill in the expense details in the form
   - Click "Add Expense" to save
   - The expense will appear in the list and chart

2. **Filtering Expenses:**
   - Use the category dropdown to filter expenses
   - The total and chart update automatically

3. **Deleting an Expense:**
   - Click the delete button next to any expense
   - The total and chart update automatically
