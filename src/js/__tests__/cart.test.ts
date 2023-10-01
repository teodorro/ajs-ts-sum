import Cart from '../cart';
import Movie from '../movie';

describe('add', () => {
  it('add should add', () => {
    const cart = new Cart();
    const movie = new Movie(123, 'asd', 2, 3, 'qwe', 'zxc', ['fgh'], 4);

    cart.add(movie);

    expect(cart.get().length).toBe(1);
    expect(cart.get()[0].id).toBe(123);
  })
  it('add should throw if the same id is being added', () => {
    const cart = new Cart();
    const movie = new Movie(123, 'asd', 2, 3, 'qwe', 'zxc', ['fgh'], 4);

    cart.add(movie);

    expect(() => cart.add(movie)).toThrow(`Object with ID=${movie.id} already exists`);
  })
});

describe('get', () => {
  it('get should return empty', () => {
    const cart = new Cart();

    const items = cart.get();

    expect(items.length).toBe(0);
  })
});

describe('sum', () => {
  it('sum should return 0 if there`s no items', () => {
    const cart = new Cart();

    const sum = cart.sum();

    expect(sum).toBe(0);
  })
  it('sum should return sum if there`re some items', () => {
    const cart = new Cart();
    cart.add(new Movie(123, 'asd', 2, 3, 'qwe', 'zxc', ['fgh'], 4));
    cart.add(new Movie(456, 'asd', 20, 3, 'qwe', 'zxc', ['fgh'], 4));

    const sum = cart.sum();

    expect(sum).toBe(22);
  })
});

describe('sumDiscount', () => {
  it('sumDiscount should return 0 if no items', () => {
    const cart = new Cart();

    const sum = cart.sumDiscount(0.5);

    expect(sum).toBe(0);
  })
  it('sumDiscount should return sum if there`re some items', () => {
    const cart = new Cart();
    cart.add(new Movie(123, 'asd', 2, 3, 'qwe', 'zxc', ['fgh'], 4));
    cart.add(new Movie(456, 'asd', 20, 3, 'qwe', 'zxc', ['fgh'], 4));

    const sum = cart.sumDiscount(0.5);

    expect(sum).toBe(11);
  })
});

describe('delete', () => {
  it('delete should delete', () => {
    const cart = new Cart();
    const movie = new Movie(123, 'asd', 2, 3, 'qwe', 'zxc', ['fgh'], 4);
    cart.add(movie);

    cart.delete(123);

    expect(cart.get().length).toBe(0);
  })
  it('delete should ignore if there`s no such id', () => {
    const cart = new Cart();

    cart.delete(123);

    expect(cart.get().length).toBe(0);
  })
});




