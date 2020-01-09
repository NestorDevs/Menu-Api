import { Injectable } from "@nestjs/common";

import { Items } from "../items";
import { Item } from "../item";

@Injectable()
export class ItemsService {
  private readonly items: Items = {
    1: {
      id: 1,
      name: "Perro",
      price: 5.99,
      description: "Tasty",
      image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
    },
    2: {
      id: 2,
      name: "Pizza",
      price: 2.99,
      description: "Cheesy",
      image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png"
    },
    3: {
      id: 3,
      name: "Tea",
      price: 1.99,
      description: "Informative",
      image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png"
    }
  };

  findAll(): Items {
    return this.items;
  }

  create(newItem: Item) {
    const id = new Date().valueOf();
    this.items[id] = {
      ...newItem,
      id
    };
  }

  find(id: number): Item {
    const record: Item = this.items[id];
    if (record) {
      return record;
    }
    throw new Error("No record found");
  }

  update(updateItem: Item) {
    if (this.items[updateItem.id]) {
      this.items[updateItem.id] = updateItem;
      return;
    }
    throw new Error("No record found to update");
  }

  delete(id: number) {
    const record: Item = this.items[id];
    if (record) {
      delete this.items[id];
      return;
    }
    throw new Error("No record found to delete");
  }
}
