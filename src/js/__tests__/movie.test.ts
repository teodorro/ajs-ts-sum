import Movie from '../movie';

it('Movie constructor should work', () => {
  const movie = new Movie(123, 'asd', 2, 3, 'qwe', 'zxc', ['fgh'], 4);

  expect(movie.id).toBe(123);
})
