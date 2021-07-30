<script lang="ts">
  import Test from "../components/Test.svelte";
</script>

<template>
  <div class="m4 p4">
  <h1 class="bg-purple-900 text-white p-3 m-5">
    Svelte, Windicss, Storybook, Jest & TypeScript Template
  </h1>
  <h2 class="my-4 mx-10">this is a subheader</h2>
  <div class="text-red-400 px-4 mb-2">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe voluptatum
    nihil necessitatibus quibusdam repellat et illum fugiat earum fugit nobis.
    Vitae assumenda cumque nihil tempora expedita, at sunt ipsam inventore.
  </div>
  <p class="bg-pink-100 text-blue-600 mb-8">if this is blue on pink, WindiCSS worked in the main view.</p>
  <Test title="Component Test" />
</div>
<p class="italic mt-5 text-center">Try to modify something and see near-realtime change in the browser!</p>
</template>
