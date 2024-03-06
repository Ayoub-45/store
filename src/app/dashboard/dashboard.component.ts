import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import "./dashboard.styles.css";
@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [CommonModule],
  template: `<div class="dashboard">
    <h2>Dashboard</h2>

    <!-- Display overall expenditure -->
    <div class="expenditure">
      <h3>Total Expenditure</h3>
      <p>{{ totalExpenditure | currency }}</p>
    </div>

    <!-- Display budget information -->
    <div class="budget">
      <h3>Budget Information</h3>
      <p>Set Budget: {{ setBudget | currency }}</p>
      <p>Amount Spent: {{ amountSpent | currency }}</p>
      <p>Remaining Budget: {{ remainingBudget | currency }}</p>
    </div>
  </div> `,
  styles: ``,
})
export class DashboardComponent implements OnInit {
  totalExpenditure!: number;
  setBudget!: number;
  amountSpent!: number;
  remainingBudget!: number;

  constructor() {}

  ngOnInit(): void {
    // Mock data
    this.totalExpenditure = 1500; // Assume total expenditure is $1500
    this.setBudget = 2000; // Assume user's set budget is $2000
    this.amountSpent = 1000; // Assume user has spent $1000
    this.remainingBudget = this.setBudget - this.amountSpent;
  }
}
