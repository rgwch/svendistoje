<!-- 
	@component
	A dropdown list. Dispatches a 'selected' event if user changes selection.
	Allows to create new Elements.
  Dispatches 'select' if selection changes
	
-->
<script context="module" lang="ts">
	export interface datadef {
		elements: Array<string>;
		newelem: string;
		promptname: string;
	}
</script>

<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let metadata: datadef;
	export let filter: (elem) => boolean = (elem) => true;

	let value;

	onMount(() => {
		if (metadata) {
			const elements = metadata.elements;
			if (Array.isArray(elements) && elements.length > 0) {
				dispatch('selected', elements[0]);
			}
		}
	});

	async function save(value) {}
	function select() {
		if (value === '_new') {
			value = prompt('Name ');
			if (value) {
				save(value)
					.then((ok) => {
						metadata.elements = [...metadata.elements, value];
						dispatch('selected', value);
					})
					.catch((err) => {
						alert(err);
					});
			} else {
				alert($_(metadata.promptname));
				value = metadata.elements[0];
			}
		} else {
			dispatch('selected', value);
		}
	}
</script>

<template>
	{#if metadata && metadata.elements && Array.isArray(metadata.elements)}
		<!-- svelte-ignore a11y-no-onchange -->
		<select
			class="flex-grow"
			bind:value
			on:change={select}
			on:click={select}
		>
			{#each metadata.elements as elem}
				{#if filter(elem)}
					<option value={elem} class="item">
						{elem}
					</option>
				{/if}
			{/each}
			<option value="_new">{$_('general.new')}...</option>
		</select>
	{/if}
</template>
