<template>
  <div class="text-center py-10 px-5">
    <h1 class="text-4xl font-bold text-gray-800 mb-2">A Song of Ice and Fire</h1>
    <p class="text-lg text-gray-500 mb-10">Explore the world of Westeros and Essos</p>
    <div class="flex justify-center gap-5 flex-wrap">
      <UCard class="w-72">
        <template #header>
          <h3 class="text-lg font-semibold">Books</h3>
        </template>
        Browse all books in the A Song of Ice and Fire series.
        <template #footer>
          <UButton to="/books">Explore Books</UButton>
        </template>
      </UCard>

      <UCard class="w-72">
        <template #header>
          <h3 class="text-lg font-semibold">Houses</h3>
        </template>
        Discover the great houses of Westeros and their histories.
        <template #footer>
          <UButton to="/houses">Explore Houses</UButton>
        </template>
      </UCard>

      <UCard class="w-72">
        <template #header>
          <h3 class="text-lg font-semibold">Characters</h3>
        </template>
        Meet the characters from across the Known World.
        <template #footer>
          <UButton to="/characters">Explore Characters</UButton>
        </template>
      </UCard>
    </div>
  </div>
</template>
