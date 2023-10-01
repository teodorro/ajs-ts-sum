import Buyable from "./buyable";

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly year: number,
    readonly country: string,
    readonly tagline: string,
    readonly genres: string[],
    readonly duration: number,
  ) { }
}
