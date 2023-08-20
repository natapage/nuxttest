<template>
  <div>{{ pageVisits?.pageVisits }}</div>
  <button @click="refreshPage">хуяк</button>
</template>
<script setup>
const { data: pageVisits } = await useFetch(() => `/api/kv-demo`);
const refreshPage = () => {
  window.location.reload();
};
</script>
