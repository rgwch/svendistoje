<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import '../services/i18n/i18n';
  import Popup from './Popup.svelte';

  import MarginDecorator from './MarginDecorator.svelte';
  const items = ['one', ['sub-1', 'sub1-one', 'sub1-two', ["subsub-1", 'subsub-2'],'sub1-three'], 'three'];
</script>

<Meta
  title="Widgets/Popup"
  component={Popup}
  argTypes={{
    onSelected: { action: 'selected' },
  }}
/>

<div class="bg-gray-100 m-8 p-4 rounded-md border border-blue-500">
  <h1 class="font-bold text-lg">Popup</h1>
  <p class="mb-5">A Popup Menu</p>
</div>

<Template let:args>
  <MarginDecorator>
    <Popup {...args} on:selected={args.onSelected} />
  </MarginDecorator>
</Template>

<Story name="default" args={{ items, title: 'Click Me!' }} />
