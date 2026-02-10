<template>
  <div class="p-6">
    <div v-if="loading" class="flex gap-4 flex-wrap">
      <USkeleton v-for="n in 6" :key="n" class="w-72 h-48" />
    </div>
    <p v-else-if="houses.length === 0" class="text-lg text-gray-500">Nothing here</p>
    <div v-else class="flex gap-5 flex-wrap">
      <UCard v-for="(h, index) in houses" :key="index" class="w-72">
        <template #header>
          <h3 class="font-semibold">{{ h.name }}</h3>
          <p class="text-sm text-gray-500">{{ h.words }}</p>
        </template>
        <div v-if="h.coatOfArms">
          <h4 class="font-medium">Coat of Arms</h4>
          <p>{{ h.coatOfArms }}</p>
        </div>
        <div v-if="h.region" class="mt-2">
          <h4 class="font-medium">Region</h4>
          <p>{{ h.region }}</p>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup>
const { getHouses } = useHouseApi();

const houses = ref([]);
const loading = ref(false);

onMounted(async () => {
  loading.value = true;
  try {
    houses.value = await getHouses();
  } catch {
    houses.value = [];
  } finally {
    loading.value = false;
  }
});
</script>
