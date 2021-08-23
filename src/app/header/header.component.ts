import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  template: `<header> 
            <img src="assets/images/seed-icon.png" alt="">
                <h1> Welcome to Angular Seed!</h1>
            </header>`,
    styleUrls: ["header.component.css"]
})
export class HeaderComponent {}
