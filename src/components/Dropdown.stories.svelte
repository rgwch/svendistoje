<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import '../services/i18n/i18n';
	import Dropdown from './Dropdown.svelte';
	const meta = {
		elements: ['one', 'two', ' more'],
		newelem: 'new dings',
		promptname: 'new dings',
	};
</script>

<Meta title="Components/Dropdown" component={Dropdown} />

<Template let:args>
	<span>Text mit Menu</span>
	<Dropdown {...args} />
</Template>

<Story name="Default" args={{ metadata: meta }} />
