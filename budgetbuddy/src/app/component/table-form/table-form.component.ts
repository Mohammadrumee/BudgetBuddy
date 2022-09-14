import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/enum/category';
import { Expense } from 'src/app/interface/expense';
import { TotalExpense } from 'src/app/interface/total-expense';
import { ExpenseService } from 'src/app/service/expense.service';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.css']
})
export class TableFormComponent implements OnInit {

  totalExpense:number = 0;
  
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
  }

saveExpense() : void{
    let count:TotalExpense = {
      totalExpense: this.totalExpense + this.expense.amount
    }
    this.expenseService.setTotalExpense(count);

    this.expenseService.addExpense(this.expense);

    this.expense = [];
  }

}
