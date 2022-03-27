<script lang="ts">
  /** Demo of svelte-i18n */
  import { _ } from 'svelte-i18n';

  import Test from '../components/Test.svelte';
  import props from '../services/properties';
</script>

<template>
  <div class="m-4 p-4">
    <h1 class="bg-purple-900 text-white p-3 m-5 text-xl">
      Svelte, Windicss, Storybook, Jest, i18n & TypeScript Template
    </h1>
    <div class="text-red-400 mb-2">
      Use this template as a base for your own Svelte App with Typescript,
      Storybook, and Jest Support. Modify src/views/App.svelte to see this page
      changing.
    </div>
    <p class="bg-pink-100 text-blue-600 mb-8">
      if this is blue on pink, WindiCSS worked in the main view.
      (views/App.svelte)
    </p>
    <p>
      The following title ('{$_('demotest')}') is translated by svelte-i18n.
      You'll find the translations in src/services/i18n/*.json
    </p>
    <Test title={$_('demotest')} />

    <p class="italic mt-5 text-center">
      Try to modify something and see near-realtime change in the browser!
    </p>
    <p class="text-sm mt-8">
      Build-Version: {props.version}, date: {props.build}
    </p>
  </div>
</template>
