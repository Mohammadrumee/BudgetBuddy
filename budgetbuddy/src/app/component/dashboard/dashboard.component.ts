import { Component, OnInit } from '@angular/core';
import { groupBy, Observable } from 'rxjs';
import { Expense } from 'src/app/interface/expense';
import { ExpenseService } from 'src/app/service/expense.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  expenseList :Expense [] = [];
  result: { amount: number; values: Expense[]; }[] = [];

  constructor(private expenseService:ExpenseService) { }

  ngOnInit(): void {
    this.getAllExpense();
  }

  getAllExpense() : void{
    this.expenseList = this.expenseService.getAllExpense();
  }



}

