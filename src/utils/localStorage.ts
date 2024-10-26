import { Expense } from '../types';

export const saveExpenses = (expenses: Expense[]): void => {
  localStorage.setItem('expenses', JSON.stringify(expenses));
};

export const loadExpenses = (): Expense[] => {
  const expenses = localStorage.getItem('expenses');
  return expenses ? JSON.parse(expenses) : [];
};