<template>
  <div class="py-8">
    <UContainer>
      <header class="border-b mb-8 py-2 text-xl">
        <h1>
          Welcome to the home page! This is where you can start building your app.
        </h1>
      </header>
      <div class="grid gap-4 xl:grid-cols-2">
        <PageSection title="Rick and Morty API response">
          <ExampleApiResponseRickAndMorty />
        </PageSection>
        <PageSection title="Pokemon API response">
          <ExampleApiResponsePokemon />
        </PageSection>
        <ExampleLordOfTheRings />
        <ExampleNature />
      </div>
    </UContainer>
  </div>
</template>
