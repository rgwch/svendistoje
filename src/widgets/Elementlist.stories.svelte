<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import '../services/i18n/i18n';
	import MarginDecorator from './MarginDecorator.svelte';
	import El from './Elementlist.svelte';
	const meta = {
		elements: ['one', 'two', ' more'],
		newelem: 'new dings',
		promptname: 'new dings',
	};
</script>

<Meta
	title="Widgets/Elementlist"
	component={El}
	argTypes={{
		onSelected: { action: 'selected' },
	}}
/>

<div class="bg-gray-100 m-8 p-4 rounded-md border border-blue-500">
	<h1 class="font-bold text-lg">Dropdown</h1>
	<p class="mb-5">
		A list of items which can be edited, reordered and deleted. New Items
		can be appended.
	</p>
</div>

<Template let:args>
	<div class="max-w-1/3">
		<El {...args} on:selected={args.onSelected} />
	</div>
</Template>

<Story name="Default" args={{ metadata: meta }} />
