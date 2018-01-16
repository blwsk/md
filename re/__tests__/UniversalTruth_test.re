open Jest;

describe("Expect", () => Expect.(test("true to be true", () => expect(true) |> toBe(true))));
