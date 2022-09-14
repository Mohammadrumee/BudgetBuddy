import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Expense } from '../interface/expense';
import { TotalBudget } from '../interface/total-budget';
import { TotalExpense } from '../interface/total-expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  result: { amount: number; values: Expense[]; }[] = [];

  constructor() { }

  expense :Expense [] = [];

  // SET TOTAL EXPENSE
  private _totalExpense : BehaviorSubject<TotalExpense> = new BehaviorSubject<TotalExpense>({
    totalExpense :0
  });

  private _totalExpense$ : Observable<TotalExpense> = this._totalExpense.asObservable();

  getTotalExpense() : Observable<TotalExpense> {
    return this._totalExpense$;
  }

  setTotalExpense(latestValue:TotalExpense) : void {
    this._totalExpense.next(latestValue);
  }

  // SET TOTAL BUDGET
  private _totalBudget : BehaviorSubject<TotalBudget> = new BehaviorSubject<TotalBudget>({
    totalBudget :0
  });

  private _totalBudget$ : Observable<TotalBudget> = this._totalBudget.asObservable();

  getTotalBudget() : Observable<TotalBudget> {
    return this._totalBudget$;
  }

  setTotalBudget(latestValue:TotalBudget) : void {
    this._totalBudget.next(latestValue);
  }


  // ADD EXPENSE
  addExpense (expense: Expense) :void{
    this.expense.push(expense);
  }

  // GET ALL EXPENSE
  getAllExpense () :Expense[] {
    return this.expense;
  }


}
