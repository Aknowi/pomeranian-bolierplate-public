import { delayedFunction } from './delayedFunction';

test('Funkcja wywołana po opóźnieniu', (done) => {
  delayedFunction((result) => {
    expect(result).toBe('Wywołanie zwrotne!');
    done();
  });
});
