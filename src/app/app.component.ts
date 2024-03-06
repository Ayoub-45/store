import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, DashboardComponent],
  template: `
    <main>
      <h1>Expense tracker</h1>
      <section class="content">
        <app-dashboard></app-dashboard>
      </section>
    </main>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = "Expense tracker";
}
