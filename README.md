# Rick & Morty and Pokémon Overview Application

## Objective

Create a scalable Nuxt application that displays two overviews: **Rick & Morty characters** and **Pokémon**. Each overview must:

1. **Overview Pages**: One for Rick & Morty and one for Pokémon.
2. **Detail Pages**: Clicking an item should navigate to a detail page, showing its specific data.

### Bonus points

The example also includes two additional universes: Lord of the Rings and Nature. Study the example code to see how to add new universes. The data source is different, but the components displaying the data should be the same.

Use these APIs:

- [Rick and Morty API](https://rickandmortyapi.com/documentation)
- [Pokémon API](https://pokeapi.co/docs/v2)

## Wireframes

You are free to design the application as you see fit, but you can use the following wireframes as a reference:

[![Wireframes](./public/images/wireframes.svg)](./public/images/wireframes.svg)

## Deliverable

Fork this repository and submit your solution as a new repository. Once complete, share the link for review. We’ll provide feedback on your code.

## Requirements

### 1. Overviews

- **Separate Pages**: One page for each overview (Rick & Morty, Pokémon).
- **UI/UX Consistency**: The design of both overviews and their detail pages must be the same. Only the data changes.
- **Navigation**: Clicking an item in an overview should take you to a detailed page showing that item’s specific data.

### 2. Detail Pages

- **Unique Pages**: Each character or Pokémon should have its own detail page.
- **Modular Components**: Design reusable components that handle data display, with no duplication of logic. **Components should not mix data handling and UI rendering**—separate the two.
- **View Modes**: Implement both grid and list view options for the overviews.
- **Layout Consistency**: Ensure that both Rick & Morty and Pokémon detail pages have the same layout structure.

### Key Concepts

1. **Scalability and Reusability**:

   - **Do NOT hard-code**. Components should be flexible, designed for future use cases without significant changes.

     ### Hard coding?

     Check out the following example:

     ```ts
     const props = defineProps<{
       character: Character
     }>()

     if (props.character.universe === 'Rick & Morty') {
       // Do something
     }
     else if (props.character.universe === 'Pokémon') {
       // Do something else
     }
     else {
       createError('Invalid universe')
     }
     ```

     This is not scalable because you have to change the code every time you add a new universe.

     Instead, create a solution where you can easily add new universes without changing the existing code. Lots of components are not necessarily a bad thing if they are well-organized. Remember: composition over inheritance.

   - **Data Handling & UI Separation**: Build **UI components** that simply **take in data**, and create **other components** that manage and provide that data. Don’t put data-fetching or logic in UI components.
   - **Single Responsibility**: Each component should handle **one responsibility only**. Don’t pile everything into one component—keep logic and UI separate.

2. **Composition Over Inheritance**:

   - Use composition to build flexible components. Avoid tightly coupling logic or styles with conditionals like `if/else`.

3. **Project Structure**: Organize your project with clarity, separating concerns in folders and files.

### Technical Requirements

- **API Integration**: Handle data fetching through **API Party composables**.

### Final Notes

- **Focus on Scalability**: This is the key! Design your app to grow easily with new overviews or pages. It should be easy to add another overview or extend data without rewriting large parts of the code.

---

## Checklist (We will reject hand-ins that fail on any of the following)

- [ ] **Separate Pages** for each overview (Rick & Morty, Pokémon).
- [ ] **Navigation** from overview to detail pages.
- [ ] **Consistent UI/UX** between overviews and detail pages.
- [ ] **Grid and List Views** implemented. Bonus points if you make sure that each separate overview remembers the last view mode selected. Example: Rick & Morty in grid view, Pokémon in list view.
- [ ] **Modular UI Components**: UI components should focus only on presentation, while data fetching and logic should be handled separately. A component that fetches data should do just that and pass it to a UI component for rendering. This keeps responsibilities clear, making the code easier to maintain and understand.
- [ ] **Clear Separation of Concerns**: No component should mix too much logic with rendering. Keep them single-purpose.
- [ ] **Reusable Components**: Build components that are scalable and flexible.
- [ ] **API Data Fetching**: Ensure data from the APIs is fetched and displayed correctly. Please check out the existing examples in the example code.
