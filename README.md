# React 19 useEffect: Count Exceeds Limit Without Proper Handling

This repository demonstrates a common issue encountered in React 19 applications involving the `useEffect` hook.  The counter increments indefinitely, even after exceeding a specified limit, due to missing logic to halt the incrementing process.

## Problem

The provided `MyComponent` uses `useEffect` to increment a counter every second.  However, it lacks the necessary logic to prevent the counter from exceeding 10.  This results in an unwanted and potentially problematic increase in the `count` state.

## Solution

The solution involves adding a condition within the `useEffect` hook to stop the counter when it exceeds the threshold of 10.  Clearing the `setInterval` is crucial to prevent further incrementations.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install necessary dependencies.
3. Run `npm start` to start the development server.
4. Observe the counter in the browser; it will keep counting even past 10.

## Lessons Learned

* Always handle edge cases within your `useEffect` logic to avoid unexpected behavior.
* Clearing intervals within the cleanup function of `useEffect` is vital to prevent memory leaks and unexpected behavior.
* Thoroughly test your React components to catch these edge-case errors early in development. 