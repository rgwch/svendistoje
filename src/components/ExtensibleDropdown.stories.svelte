<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import '../services/i18n/i18n';
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
	parameters={{
		actions: {
			handles: ['selected'],
		},
	}}
/>

<Template let:args>
	<p>A dropdown with the option to add elements.</p>
	<Dropdown {...args} on:selected={args.onSelected} />
</Template>

<Story name="Default" args={{ metadata: meta }} />
