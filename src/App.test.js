import { total } from './App';

test('add', () => {
   const add = jest.fn(() => 3);
   expect(add(1, 2)).toBe(3);
   expect(add).toHaveBeenCalledTimes(1)
   expect(add).toHaveBeenCalledWith(1,2)
   // expect(addMock.call(5, 3)).toBe(8);
});

// test('total', () => {
//    expect(total(1, 2)).toBe('$3');
// });
