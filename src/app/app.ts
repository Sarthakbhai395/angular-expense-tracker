import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  itemName: string = '';
  category: string = 'Food';
  amount: number | null = null;
  expenseDate: string = '';
  notes: string = '';

  expenses: any[] = [];

  addExpense() {
    if (this.itemName && this.amount != null) {
      this.expenses.push({
        name: this.itemName,
        category: this.category,
        amount: this.amount,
        date: this.expenseDate,
        notes: this.notes
      });
      this.itemName = '';
      this.category = 'Food';
      this.amount = null;
      this.expenseDate = '';
      this.notes = '';
    }
  }

  getTotal() {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  }

  getCategoryTotal(category: string): number {
    return this.expenses
      .filter(exp => exp.category === category)
      .reduce((total, exp) => total + exp.amount, 0);
  }
}
