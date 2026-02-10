<template>
  <div>
    <nav class="bg-blue-900 px-6 py-3 flex items-center gap-4 flex-wrap">
      <h3 class="text-cornsilk font-bold text-lg mr-4">Song of Ice and Fire</h3>
      <UButton to="/books" variant="ghost" class="text-cornsilk">Books</UButton>
      <UButton to="/houses" variant="ghost" class="text-cornsilk">Houses</UButton>
      <UButton to="/characters" variant="ghost" class="text-cornsilk">Characters</UButton>
      <UButton to="/map" variant="ghost" class="text-cornsilk">Map of the world</UButton>
      <UButton to="/about" variant="ghost" class="text-cornsilk">About the Project</UButton>
    </nav>
    <slot />
  </div>
</template>

<style>
.text-cornsilk {
  color: cornsilk !important;
}
</style>
