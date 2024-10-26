export interface Expense {
    id: string;
    amount: number;
    category: string;
    date: string;
    description: string;
  }
  
  export type ExpenseFormData = Omit<Expense, 'id'>;