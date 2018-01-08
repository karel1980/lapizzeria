import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable()
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "Ter Stegen", role: "Goalkeeper", ingredients: ["kaas", "tomaat", "ham"] },
        { id: 3, name: "Piqué", role: "Defender", ingredients: ["peperoni", "hesp"] },
        { id: 4, name: "I. Rakitic", role: "Midfielder", ingredients: ["peperoni", "hesp"] },
        { id: 5, name: "Sergio", role: "Midfielder", ingredients: ["peperoni", "hesp"] },
        { id: 6, name: "Denis Suárez", role: "Midfielder", ingredients: ["peperoni", "hesp"] },
        { id: 7, name: "Arda", role: "Midfielder", ingredients: ["peperoni", "hesp"] },
        { id: 8, name: "A. Iniesta", role: "Midfielder", ingredients: ["peperoni", "hesp"] },
        { id: 9, name: "Suárez", role: "Forward", ingredients: ["peperoni", "hesp"] },
        { id: 10, name: "Messi", role: "Forward", ingredients: ["peperoni", "hesp"] },
        { id: 11, name: "Neymar", role: "Forward", ingredients: ["peperoni", "hesp"] },
        { id: 12, name: "Rafinha", role: "Midfielder", ingredients: ["peperoni", "hesp"] },
        { id: 13, name: "Cillessen", role: "Goalkeeper", ingredients: ["peperoni", "hesp"] },
        { id: 14, name: "Mascherano", role: "Defender", ingredients: ["peperoni", "hesp"] },
        { id: 17, name: "Paco Alcácer", role: "Forward", ingredients: ["peperoni", "hesp"] },
        { id: 18, name: "Jordi Alba", role: "Defender", ingredients: ["peperoni", "hesp"] },
        { id: 19, name: "Digne", role: "Defender", ingredients: ["peperoni", "hesp"] },
        { id: 20, name: "Sergi Roberto", role: "Midfielder", ingredients: ["peperoni", "hesp"] },
        { id: 21, name: "André Gomes", role: "Midfielder", ingredients: ["peperoni", "hesp"] },
        { id: 22, name: "Aleix Vidal", role: "Midfielder", ingredients: ["peperoni", "hesp"] },
        { id: 23, name: "Umtiti", role: "Defender", ingredients: ["peperoni", "hesp"] },
        { id: 24, name: "Mathieu", role: "Defender", ingredients: ["peperoni", "hesp"] },
        { id: 25, name: "Masip", role: "Goalkeeper", ingredients: ["peperoni", "hesp"] },
    );

    getItems(): Item[] {
        return this.items;
    }

    getFilteredItems(includes: string[]): Item[] {
      return this.items.filter((item) => {
        for (var i in includes) {
          const ingredient = includes[i];
          console.log('looking for ingredient in item ingr', ingredient, item.ingredients);
          if (item.ingredients.indexOf(ingredient) == -1) {
            return false;
          }
        }
        return true;
      });
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }
}
