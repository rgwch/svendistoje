<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { slide } from 'svelte/transition';
  const dispatch = createEventDispatcher();
  export let title = '';
  export let items: Array<string> = [];
  export let level = 0;
  if (!title) {
    title = items.splice(0, 1)[0];
  }

  let open: boolean = false;
</script>

<template>
  <div class="relative">
    <div
      class="relative cursor-pointer hover:text-blue-600"

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
            <svelte:self items={[...item]} on:selected level={level+1} />
          {:else}
            <li
              class="my-0 py-0 pl-[2*level] hover:text-blue-600 cursor-pointer"
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
