<script lang="ts">
  import Test from "../components/Test.svelte";
</script>

<template>
  <div class="m-4 p-4">
  <h1 class="bg-purple-900 text-white p-3 m-5 text-xl">
    Svelte, Windicss, Storybook, Jest & TypeScript Template
  </h1>
  <div class="text-red-400 mb-2">
    Use this template as a base for your own Svelte App with Typescript, Storybook, and Jest Support,
    
  </div>
  <p class="bg-pink-100 text-blue-600 mb-8">if this is blue on pink, WindiCSS worked 
  in the main view. (views/App.svelte)</p>
  <Test title="Component Test" />
</div>
<p class="italic mt-5 text-center">Try to modify something and see near-realtime change in the browser!</p>
</template>
