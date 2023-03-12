import joinTwoStringsWithSpace from ".";

test("Joins two strings", () => {
  const result = joinTwoStringsWithSpace("Test1", "Test2");
  expect(result).toBe("Test1 Test2");
});

test("Send just one string", async () => {
  const result = joinTwoStringsWithSpace("Test", undefined);
  expect(result).toBe("Test");
});

export {};