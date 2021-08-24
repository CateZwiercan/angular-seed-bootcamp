import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'app-root',
    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    user = {id:1, name:'Cate', gender: 'F', ageGroup: '51+', userCode: 'F51+', reqs:{}, reqsStatus: {fruitMet: false, vegMet: false, proteinMet: false, grainMet: false}, registered: true, email: 'catez@me.com'};
}