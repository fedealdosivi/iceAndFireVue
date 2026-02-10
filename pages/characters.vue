<template>
  <div class="p-6">
    <div v-if="loading" class="flex gap-4 flex-wrap">
      <USkeleton v-for="n in 6" :key="n" class="w-72 h-48" />
    </div>
    <p v-else-if="characters.length === 0" class="text-lg text-gray-500">Nothing here</p>
    <div v-else class="flex gap-5 flex-wrap">
      <UCard v-for="(c, index) in characters" :key="index" class="w-72">
        <template #header>
          <h3 class="font-semibold">{{ c.name || 'No Name' }}</h3>
          <p class="text-sm text-gray-500">Gender: {{ c.gender }}</p>
        </template>
        <div v-if="c.culture">
          <h4 class="font-medium">Culture</h4>
          <p>{{ c.culture }}</p>
        </div>
        <div v-if="c.aliases && c.aliases[0]" class="mt-2">
          <h4 class="font-medium">Alias</h4>
          <p>{{ c.aliases[0] }}</p>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup>
const { getCharacters } = useCharacterApi();

const characters = ref([]);
const loading = ref(false);

onMounted(async () => {
  loading.value = true;
  try {
    characters.value = await getCharacters();
  } catch {
    characters.value = [];
  } finally {
    loading.value = false;
  }
});
</script>
