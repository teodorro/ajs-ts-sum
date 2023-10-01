import Buyable from "./buyable";


export default class Cart {
  private items: Buyable[] = [];

  add(item: Buyable): void{
    if (this.items.find(cartItem => cartItem.id === item.id)){
      throw new Error(`Object with ID=${item.id} already exists`);
    }
    this.items.push(item);
  }

  get(): Buyable[]{
    return [...this.items];
  }

  sum(): number{
    return this.items.reduce((sum, item) => sum + item.price, 0)
  }

  sumDiscount(discount: number): number{
    return this.items.reduce((sum, item) => sum + item.price * discount, 0);
  }

  delete(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }
}
