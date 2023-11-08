import { sum } from "./async";

test('it should return a sum of two numbers', async () => {
    expect(await sum(1, 2)).toBe(3)
})

test('it should throw an error', async () => {
    await expect(sum(5,2)).rejects.toThrow()
})