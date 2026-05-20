# 🚀 useMemo And useCallback

A beginner-friendly React project that explains how useMemo and useCallback work, why they are important, and how they help optimize React application performance.

# 📌 About This Repository

This repository contains practical examples and explanations for:

- useMemo
- useCallback
- Memoization in React
- Preventing unnecessary re-renders
- Performance optimization techniques
- Dependency arrays
- Real-world React use cases

  The goal of this project is to help developers clearly understand when and why to use these hooks in React applications.

  # ⚛️ What is useMemo?

  useMemo is a React Hook used to memoize expensive calculations.

  It prevents unnecessary recalculations by storing the computed value and only recalculating it when dependencies change.

  Example Use Cases

  - Filtering large lists
  - Heavy calculations
  - Optimizing derived state
  - Preventing unnecessary computations

  # 🔄 What is useCallback?

  useCallback is a React Hook used to memoize functions.

  It prevents functions from being recreated on every render, which helps improve performance when passing callbacks to child components.

  Example Use Cases

  - Passing functions to memoized components
  - Avoiding unnecessary child re-renders
  - Event handlers optimization
