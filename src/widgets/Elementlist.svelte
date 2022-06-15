<script context="module" lang="ts">
	export interface datadef {
		elements: Array<string>;
		newelem: string;
		promptname: string;
	}
</script>

<script lang="ts">
	import '@fortawesome/fontawesome-free/js/solid';
	import '@fortawesome/fontawesome-free';
	import { _ } from 'svelte-i18n';
	import move from 'array-move';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let metadata: datadef;
	export let filter: (elem) => boolean = (elem) => true;

	let currentElementName: string;

	let newelement: string;
	async function save(value) {
		return true;
	}
	async function addElement() {
		if (newelement) {
			const result = await save(newelement);
			if (result) {
				metadata.elements = [...metadata.elements, newelement];
				newelement = '';
			} else {
				alert('Error');
			}
		} else {
			alert($_(metadata.promptname));
		}
	}
	async function remove(elem) {
		return true;
	}
	async function rename(oldname, newname) {
		return newname;
	}
	function select(item) {
		currentElementName = item;
		dispatch('selected', item);
	}
	function up(elem) {
		const arr = metadata.elements;
		const idx = arr.indexOf(elem);
		metadata.elements = move(arr, idx, idx - 1);
	}
	function down(elem) {
		const arr = metadata.elements;
		const idx = arr.indexOf(elem);
		metadata.elements = move(arr, idx, idx + 1);
	}
	async function del(elem) {
		console.log('del ' + elem);
		if (
			confirm($_('messages.reallydelete', { values: { element: elem } }))
		) {
			const done = await remove(elem);
			if (!done) {
				alert('Could not delete');
			}
		}
	}
	async function edit(elem) {
		const newtitle = prompt($_(metadata.promptname));
		if (newtitle) {
			try {
				metadata = await rename(elem, newtitle);
			} catch (err) {
				alert(err);
			}
		}
	}
</script>

<template>
	<div class="h-full">
		{#if metadata && metadata.elements && Array.isArray(metadata.elements)}
			{#each metadata.elements as elem}
				{#if filter(elem)}
					<div class="item relative">
						<div
							class={currentElementName == elem
								? 'font-bold'
								: 'font-normal'}
							on:click={() => select(elem)}
						>
							<span class="z-0">{elem}</span>
							<span
								class="absolute right-0 px-3 z-10 bg-blue-100"
							>
								<span on:click={() => up(elem)}
									><i class="fa fa-angle-up " /></span
								>
								<span on:click={() => down(elem)} class="px-2"
									><i class="fa fa-angle-down" />
								</span>
								<span on:click={() => edit(elem)}
									><i
										class="fa fa-edit pointer-events-auto"
									/></span
								>
								<span on:click={() => del(elem)}
									><i
										class="fa fa-trash pointer-events-auto"
									/></span
								>
							</span>
						</div>
					</div>
				{/if}
			{/each}
		{/if}
		<div class="m-1">
			<input
				class="border-2"
				type="text"
				bind:value={newelement}
				placeholder={$_(metadata.newelem)}
			/>
			<span on:click={addElement} class="bg-green-400 border-2"
				>Neu...</span
			>
		</div>
	</div>
</template>
