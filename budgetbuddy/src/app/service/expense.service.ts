import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Expense } from '../interface/expense';
import { TotalExpense } from '../interface/total-expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor() { }

  expense :Expense [] = [];

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

  addExpense (expense: Expense) :void{
    this.expense.push(expense);
  }

  getAllExpense () :Expense[] {
    return this.expense;
  }


}
