import { describe, it, expect } from "vitest";
import { sum_to_n_a, sum_to_n_b, sum_to_n_c } from "../src/sum-to-n";

describe("sum_to_n", () => {
  it("should return correct sum", () => {
    expect(sum_to_n_a(5)).toBe(15);
    expect(sum_to_n_b(5)).toBe(15);
    expect(sum_to_n_c(5)).toBe(15);
  });

  it("should handle zero and negative", () => {
    expect(sum_to_n_a(0)).toBe(0);
    expect(sum_to_n_b(-5)).toBe(0);
    expect(sum_to_n_c(-10)).toBe(0);
  });
});
