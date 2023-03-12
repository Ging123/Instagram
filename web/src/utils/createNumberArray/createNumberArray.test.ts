import createNumberArray from ".";

test("returns an empty array when startAt is greater than or equal to endAt", () => {
  expect(createNumberArray(5, 3)).toEqual([]);
});

test("returns an array of numbers starting from startAt and ending at endAt", () => {
  expect(createNumberArray(1, 5)).toEqual([1, 2, 3, 4]);
});

export {};