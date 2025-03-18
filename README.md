# Rick & Morty and Pokémon Application Challenge

## Overview

This assignment asks you to develop a structured Nuxt application that displays data from two different universes: **Rick & Morty characters** and **Pokémon**. The application should be built with scalability in mind, allowing for easy addition of other universes in the future.

## Core Requirements

Your application must include:

1. **Overview Pages**: Separate pages for Rick & Morty characters and Pokémon.
2. **Detail Pages**: Individual pages showing specific information when a character is selected.
3. **View Options**: Both grid and list view modes for browsing characters.
4. **Consistent Design**: Uniform layout and interaction patterns across all universes.
5. **Scalable Architecture**: Components designed for reuse across different data sources.

## Data Sources

You'll need to integrate with these APIs:

- [Rick and Morty API](https://rickandmortyapi.com/documentation)
- [Pokémon API](https://pokeapi.co/docs/v2)

## Bonus Points

You can earn bonus points by adding two additional universes to your application:

- Lord of the Rings characters
- Animals/Nature

The starter code includes examples for these universes. Study this code to understand the pattern for adding new universes to the application.

## Reference Design

While you have creative freedom, reference wireframes are provided to guide your implementation:

[![Wireframes](./public/images/wireframes.svg)](./public/images/wireframes.svg)

## Key Architectural Principles

### Separation of Concerns

Your application should clearly separate:

- **UI Components**: Focus solely on presentation of data
- **Data Providers**: Handle API requests and data manipulation
- **Routing**: Manage navigation between overview and detail pages

### Component Design Best Practices

#### Avoid Hard-Coding Universe Logic

The following approach creates maintenance problems:

```ts
// Problematic approach:
if (props.character.universe === 'Rick & Morty') {
  // Rick & Morty specific handling
}
else if (props.character.universe === 'Pokémon') {
  // Pokémon specific handling
}
```

Instead, design a flexible system where adding new universes doesn't require modifying existing code.

#### Single Responsibility Principle

Each component should focus on one specific task:

- Data fetching components should only retrieve and process data
- UI components should only render the provided data
- Layout components should only manage structural organization

## Evaluation Criteria

Your solution will be assessed on:

1. **Code Organization**: Clear structure that separates concerns
2. **Component Reusability**: How effectively components can be used across different contexts
3. **Scalability**: How easily the application can incorporate new universes
4. **User Experience**: Consistency and intuitiveness of navigation and views
5. **Technical Implementation**: Proper integration with the specified APIs

## Submission Process

Fork the repository, implement your solution, and submit it as a new repository. Include instructions for running the application locally.

---

## Run my submission

1. Clone the repository
2. Install all packages by running `pnpm install`
3. Run the project in development mode by running `pnpm dev`

## Submission Checklist

Ensure your application meets these requirements before submission:

- [ ] Separate overview pages for Rick & Morty and Pokémon
- [ ] Detail pages for individual characters
- [ ] Consistent design across all universes
- [ ] Grid and list view options (bonus: each universe remembers its preferred view)
- [ ] UI components focused exclusively on presentation
- [ ] Data handling separated from rendering logic
- [ ] Reusable component structure that accommodates different data sources
- [ ] Proper API integration for data retrieval

This assignment tests your ability to build scalable, maintainable frontend applications through proper component design and architecture.
