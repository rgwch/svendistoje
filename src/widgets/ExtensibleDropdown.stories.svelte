<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import '../services/i18n/i18n';
	import MarginDecorator from './MarginDecorator.svelte';
	import Dropdown from './ExtensibleDropdown.svelte';
	const meta = {
		elements: ['one', 'two', ' more'],
		newelem: 'new dings',
		promptname: 'new dings',
	};
</script>

<Meta
	title="Widgets/ExtensibleDropdown"
	component={Dropdown}
	argTypes={{
		onSelected: { action: 'selected' },
	}}
/>

<div class="bg-gray-100 m-8 p-4 rounded-md border border-blue-500">
	<h1 class="font-bold text-lg">Extensible Dropdown</h1>
	<p class="mb-5">A dropdown with the option to add elements.</p>
</div>

<Template let:args>
	<MarginDecorator>
		<Dropdown {...args} on:selected={args.onSelected} />
	</MarginDecorator>
</Template>

<Story name="Default" args={{ metadata: meta }} />
