import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ItemService  } from "../item/item.service";
import { Item } from "../item/item";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";

@Component({
    selector: "ns-home",
    moduleId: __filename,
    templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {

    items: Item[];
    ingredients: string[];
    includes: string[];
    @ViewChild(RadSideDrawerComponent)
    drawerComponent: RadSideDrawerComponent;

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
      this.items = this.itemService.getItems();
      this.ingredients = ['ham', 'egg', 'bacon', 'spam'];
    }

    openDrawer(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }

    shuffle(): void {
      //this.items = [ { id: 123, role: 'pizza', name: 'Hawaii Lovers', ingredients: []} ];
      this.includes = ['lol'];
    }

    addIncludedIngredient(ingredient: string) {
      if (this.includes.indexOf(ingredient) >= 0) {
        this.includes.push(ingredient);
      }
    }

    removeIncludedIngredient(ingredient: string) {
      var pos = this.includes.indexOf(ingredient);
      if (pos < 0) {
        delete this.includes[pos];
      }
    }

    updateDisplayedItems(includes: string[]) {
      console.log('ZZZ new includes', includes);
      this.includes = includes;
      this.items = this.itemService.getFilteredItems(this.includes);
    }
}
