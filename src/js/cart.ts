import Buyable from "./buyable";


export default class Cart {
  private items: Buyable[] = [];

  add(item: Buyable): void{
    this.items.push(item);
  }

  get(): Buyable[]{
    return [...this.items];
  }

  sum(): number{
    return this.items.reduce((sum, item) => sum + item.price, 0)
  }

  sumDiscount(discount: number): number{
    if (typeof discount !== 'number'){
      throw new Error('Illegal argument');
    }
    return this.items.reduce((sum, item) => sum + item.price * discount, 0);
  }

  delete(id: number): void {
    if (typeof id !== 'number'){
      throw new Error('Illegal argument');
    }
    this.items = this.items.filter(item => item.id !== id);
  }
}
