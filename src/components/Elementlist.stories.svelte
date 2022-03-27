<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	// import '../../../public/tailwind.css';
	import '../services/i18n/i18n';
	import El from './Elementlist.svelte';
	const meta = {
		elements: ['one', 'two', ' more'],
		newelem: 'new dings',
		promptname: 'new dings',
	};
</script>

<Meta
	title="Components/Elementlist"
	component={El}
	argTypes={{
		onSelected: { action: 'selected' },
	}}
	parameters={{
		actions: {
			handles: ['selected'],
		},
	}}
/>

<Template let:args>
	<div class="py-2 my-4">
		A list of items which can be edited, reordered and deleted. New Items
		can be appended.
	</div>
	<div class="max-w-1/3">
		<El {...args} on:selected={args.onSelected} />
	</div>
</Template>

<Story name="Default" args={{ metadata: meta }} />
