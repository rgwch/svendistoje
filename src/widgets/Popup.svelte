<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { slide } from 'svelte/transition';
  const dispatch = createEventDispatcher();
  export let title = '';
  export let items: Array<string> = [];
  export let sub = false;
  if (!title) {
    title = items.splice(0, 1)[0];
  }

  let open: boolean = false;
</script>

<template>
  <div class="sm:hidden">Test</div>
  <div class="relative">
    <div
      class="relative"
      on:click={() => {
        open = !open;
      }}
    >
      {title}
    </div>
    {#if open}
      <ul class="absolute">
        {#each items as item}
          {#if Array.isArray(item)}
            <svelte:self items={[...item]} on:selected sub={true} />
          {:else}
            <li
              class="my-0 py-0 ml-2 hover:text-blue-600 cursor-pointer"
              transition:slide
              on:click={() => {
                dispatch('selected', item);
                open = false;
              }}
            >
              {item}
            </li>
          {/if}
        {/each}
      </ul>
    {/if}
  </div>
</template>
