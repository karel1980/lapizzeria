import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

type FilterStatus = 'unknown' | 'include';

interface IngredientFilter {
  ingredient: string,
  status: string
};

@Component({
    selector: "ns-ingredient-select",
    moduleId: __filename,
    templateUrl: "./ingredient-select.component.html",
})
export class IngredientSelectComponent implements OnInit {
    @Input()
    ingredients: string[];

    selection: {[key: string]: IngredientFilter};
    slist: IngredientFilter[];

    @Output()
    selectionChanged = new EventEmitter<string[]>();

    constructor() {}

    ngOnInit(): void {
      this.slist = this.ingredients.map((ingredient) => ({ ingredient: ingredient, status: 'unknown' }));
      this.selection = this.slist.reduce((map, filter) => {
        map[filter.ingredient] = filter;
        return map;
      }, {});

    }

    toggle(ingredient: string) {
      var oldStatus = this.selection[ingredient].status;
      console.log('toggle', ingredient, oldStatus);
      if (oldStatus === 'include') {
        this.remove(ingredient);
      } else {
        this.add(ingredient);
      }
    }

    add(ingredient: string) {
      this.selection[ingredient].status = 'include';
      this.emitChange();
    }

    remove(ingredient: string) {
      this.selection[ingredient].status = 'unknown';
      this.emitChange();
    }

    emitChange() {
      const newSelection = this.ingredients.filter((ingr) => this.selection[ingr].status === 'include');
      console.log('emitting new selection', newSelection);
      this.selectionChanged.emit(newSelection);
    }

    filter(ingredient: string) {
      return this.selection[ingredient];
    }

    icon(filter: IngredientFilter) {
        return filter.status === 'unknown' ? this.unstarred : this.starred;
    }
    get starred(): string {
      return String.fromCharCode(0xf005);
    }
    get unstarred(): string {
      return String.fromCharCode(0xf006);
    }
}
