import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ExpenseForm } from './components/ExpenseForm';
import { ExpenseList } from './components/ExpenseList';
import { ExpenseChart } from './components/ExpenseChart';
import { Expense, ExpenseFormData } from './types';
import { loadExpenses, saveExpenses } from './utils/localStorage';

const App: React.FC = () => {
  const [expenses, setExpenses] = React.useState<Expense[]>(loadExpenses());
  const [categoryFilter, setCategoryFilter] = React.useState('');

  React.useEffect(() => {
    saveExpenses(expenses);
  }, [expenses]);

  const handleAddExpense = (formData: ExpenseFormData) => {
    const newExpense: Expense = {
      ...formData,
      id: uuidv4(),
    };
    setExpenses([...expenses, newExpense]);
  };

  const handleDeleteExpense = (id: string) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  const categories = ['All', ...new Set(expenses.map((expense) => expense.category))];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Expense Tracker</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ExpenseForm onSubmit={handleAddExpense} />

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Summary</h2>
              <p className="text-xl">
                Total: <span className="font-bold">RWF {totalExpenses.toFixed(2)}</span>
              </p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Filter by Category</label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <ExpenseChart expenses={expenses} />
          </div>
        </div>

        <ExpenseList
          expenses={expenses}
          onDelete={handleDeleteExpense}
          categoryFilter={categoryFilter}
        />
      </div>
    </div>
  );
};

export default App;