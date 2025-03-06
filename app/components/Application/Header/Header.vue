<template>
  <header class="bg-neutral-50 dark:bg-neutral-950 border-b border-b-neutral-100 dark:border-b-neutral-800">
    <UContainer class="flex items-center h-20">
      <nav>
        <ul class="flex gap-2">
          <li>
            <ApplicationHeaderLink to="/" label="Home" />
          </li>
          <li>
            <ApplicationHeaderLink to="/assignment" label="Read the assignment instructions" />
          </li>
        </ul>
      </nav>
      <div class="ml-auto flex gap-2">
        <UButton to="https://github.com/spend-cloud-tom/front-end-boilerplate" icon="mdi:github" label="GitHub repository" variant="outline" />
        <ApplicationColorMode />
      </div>
    </UContainer>
  </header>
</template>
