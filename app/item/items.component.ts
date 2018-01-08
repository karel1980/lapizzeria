import { Component, OnInit, Input } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: __filename,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {

    @Input()
    items: Item[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor() { }

    ngOnInit(): void {
    }

    formatIngredients(item: Item) {
      return item.ingredients.join(" - ");
    }

}
