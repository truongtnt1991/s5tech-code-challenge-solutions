# Problem 4: Three Ways to Sum to N

This module implements three different approaches to compute the sum from 1 to n, demonstrating different trade-offs in terms of performance, readability, and scalability.

## Problem Definition

Given an integer n, return the sum:

1 + 2 + 3 + ... + n

Example:

sum_to_n(5) = 15

## Implementations

1. Iterative (Loop)

Accumulates the sum using a simple loop.

- Time Complexity: O(n)
- Space Complexity: O(1)

2. Mathematical Formula

Uses the arithmetic series formula:

n \* (n + 1) / 2

- Time Complexity: O(1)
- Space Complexity: O(1)
- This is the most efficient approach

3. Recursive

Recursively computes the sum by reducing the problem.

- Time Complexity: O(n)
- Space Complexity: O(n) due to call stack
- Not suitable for large n because of stack limitations

## Project Structure

/src
sum-to-n.ts Core implementations
index.ts Demo runner
/tests
sum-to-n.test.ts Unit tests

## Setup

Install dependencies:

npm install

## Run Demo

Run the demo script:

npm run start

This will execute src/index.ts and output:

A: 15
B: 15
C: 15

## Run Tests

Run unit tests using Vitest:

npm run test
