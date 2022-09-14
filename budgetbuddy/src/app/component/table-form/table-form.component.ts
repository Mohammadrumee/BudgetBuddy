import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/enum/category';
import { Expense } from 'src/app/interface/expense';
import { TotalBudget } from 'src/app/interface/total-budget';
import { TotalExpense } from 'src/app/interface/total-expense';
import { ExpenseService } from 'src/app/service/expense.service';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.css']
})
export class TableFormComponent implements OnInit {

  totalExpense:number = 0;

  totalBudget:number = 0;
  
  expense:Expense | any = [];

  category = Category;
  categoryEnum :string [] =[];
  
  constructor(private expenseService:ExpenseService) {
    this.categoryEnum=Object.keys(this.category);  
   }

  ngOnInit(): void {
    this.expenseService.getTotalExpense()
      .subscribe((expense) => {
        this.totalExpense = expense.totalExpense;
    });

    this.expenseService.getTotalBudget()
    .subscribe((expense) => {
      this.totalBudget = expense.totalBudget;
    });
  }

  saveExpense() : void{

    if(this.totalBudget == 0){
      alert("Please add total budget first!");
    } else {

      let totalEx = this.totalExpense + this.expense.amount;

      if(totalEx > this.totalBudget){
        alert("Expense is more then Budget!!!");
      } else {
        let count:TotalExpense = {
          totalExpense: this.totalExpense + this.expense.amount
        }
        this.expenseService.setTotalExpense(count);
        this.expenseService.addExpense(this.expense);
      }
    }
    this.expense = [];
  }

  budgetExpense() :void{
    let count:TotalBudget = {
      totalBudget: this.totalBudget
    }
    this.expenseService.setTotalBudget(count);
  }

}
