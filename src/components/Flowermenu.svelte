<script lang="ts" context="module">
  /**
   * Definitiob for a menu entry
   */
  export type MENUDEF = {
    label?: string;
    name: string;
    shortcut?: string;
    x?: number;
    y?: number;
    w?: number;
  };
</script>

<script lang="ts">
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';

  /**
   * The Menu Items to display. Up to eight MENUDEFs
   */
  export let items: Array<MENUDEF> = [];
  let _items: Array<MENUDEF> = [];
  /**
   * The title of the Menu
   */
  export let title = 'Test';
  const hChar = 2.6;
  const wChar = 1.2;
  let itemWidth = items.reduce(
    (m, c) => Math.max(m, c.label?.length || c.name.length),
    0
  );
  let xoff = 0;
  let yoff = 0;

  function pos(idx: number): Array<number> {
    // const off = (title.length + 1) * wChar;
    switch (idx) {
      case 0:
        return [xoff + (title.length - itemWidth) / 2, yoff - 1.5 * hChar];
      case 1:
        return [xoff + 7 * wChar, yoff - 0.75 * hChar];
      case 2:
        return [xoff + 9 * wChar, yoff];
      case 3:
        return [xoff + 7 * wChar, yoff + 0.75 * hChar];
      case 4:
        return [xoff + (title.length - itemWidth) / 2, yoff + hChar + 1.2];
      case 5:
        return [xoff + 3 - itemWidth * wChar, yoff + 0.75 * hChar];
      case 6:
        return [xoff + 4 - itemWidth * wChar - 3, yoff];
      case 7:
        return [xoff + 3 - itemWidth * wChar, yoff - 0.75 * hChar];
      case 8:
        return [xoff + (title.length - _items[8].w) / 2, yoff];
    }
  }
  const dispatch = createEventDispatcher();

  let isOpen = false;
  let dom: any;

  onMount(() => {
    // alert(dom.offsetLeft+" "+dom.offsetTop)
    const leftmost = dom.offsetLeft / (8 * wChar) - itemWidth;
    const topmost = dom.offsetTop / 16 - 1.5 * hChar;
    xoff = leftmost < 0 ? leftmost * -1 : 0;
    yoff = topmost < 0 ? topmost * -1 : 0;

    _items = items.map((item, index) => {
      const p = pos(index);
      return {
        x: p[0],
        y: p[1],
        w: itemWidth,
        name: item.name,
        label: item.label || item.name,
      };
    });
    if (items.length < 9) {
      _items.push({
        x: xoff + (title.length - 3) / 2,
        y: yoff,
        w: 3,
        label: ' * ',
        name: '*',
      });
    }
  });
  onDestroy(() => {
    window.removeEventListener('keypress', handleKeydown);
    isOpen = false;
  });
  function handleKeydown(event) {
    let sel: MENUDEF;
    for (const it of items) {
      if (it.shortcut === event.key) {
        sel = it;
        break;
      }
    }
    if (!sel) {
      switch (event.key) {
        case '1':
          sel = items[0];
          break;
        case '2':
          sel = items[1];
          break;
        case '3':
          sel = items[2];
          break;
        case '4':
          sel = items[3];
          break;
        case '5':
          sel = items[4];
          break;
        case '6':
          sel = items[5];
          break;
        case '7':
          sel = items[6];
          break;
        case '8':
          sel = items[7];
          break;
      }
    }
    toggle();
    setTimeout(() => dispatch('select', sel.name), 100);
  }
  function toggle() {
    if (isOpen) {
      window.removeEventListener('keypress', handleKeydown);
      isOpen = false;
    } else {
      window.addEventListener('keypress', handleKeydown);
      isOpen = true;
    }
  }
</script>

<template>
  <span style="position:relative" bind:this={dom}>
    <span class="opener" on:click={() => toggle()}>{title}</span>
    {#if isOpen}
      {#each _items as item, idx}
        <div
          class="item"
          style="left:{item.x}ch;top:{item.y}em;width:{item.w}ch;"
          on:click={() => {
            toggle();
            setTimeout(() => dispatch('select', item.name), 100);
          }}
        >
          {item.label}
        </div>
      {/each}
    {/if}
  </span>
</template>

<style>
  .item {
    position: absolute;
    color: blue;
    background-color: lightblue;
    text-align: center;
    border: 1px darkblue solid;
    border-radius: 5px;
    padding: 1px;
  }
  .opener {
    position: absolute;
    color: blue;
    text-decoration: underline;
  }
</style>
