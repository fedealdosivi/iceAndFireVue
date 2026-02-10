<template>
  <div class="p-6">
    <div v-if="loading" class="flex gap-4 flex-wrap">
      <USkeleton v-for="n in 6" :key="n" class="w-72 h-48" />
    </div>
    <p v-else-if="books.length === 0" class="text-lg text-gray-500">Nothing here</p>
    <div v-else class="flex gap-5 flex-wrap">
      <UCard v-for="(b, index) in books" :key="index" class="w-72">
        <template #header>
          <h3 class="font-semibold">{{ b.name }}</h3>
          <p class="text-sm text-gray-500">Number of Pages: {{ b.numberOfPages }}</p>
        </template>
        <div v-if="b.publisher">
          <h4 class="font-medium">Publisher</h4>
          <p>{{ b.publisher }}</p>
        </div>
        <div v-if="b.released" class="mt-2">
          <h4 class="font-medium">Date of Release</h4>
          <p>{{ b.released }}</p>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup>
const { getAllBooks } = useBookApi();

const books = ref([]);
const loading = ref(false);

onMounted(async () => {
  loading.value = true;
  try {
    books.value = await getAllBooks();
  } catch {
    books.value = [];
  } finally {
    loading.value = false;
  }
});
</script>
