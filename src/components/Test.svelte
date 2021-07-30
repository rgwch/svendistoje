<script lang="ts">
  export let title: string;
</script>

<template>
  <h1 class="text-center text-2xl font-bold text-pink-800">{title}</h1>
  <p class="bg-red-400 px-10 mx-4">This is a Svelte Component included from the App. 
    If this has a red background, WindiCSS worked in the component (components/Test.svelte).</p>
</template>
