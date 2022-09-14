import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/service/expense.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  totalExpense :number = 0;

  totalBudget :number = 0;
  
  constructor(private expenseService:ExpenseService) { }


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

}
