<script lang="ts">
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
    import '../services/i18n/i18n';
    import App from '../views/App.svelte';
    import Flower from './Flowermenu.svelte';
    // import type { MENUDEF } from './Flowermenu.svelte';
    const shortitems = [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
    ].map((el) => {
        return { name: el };
    });
    const longitems = [
        'Menuentry number one',
        'Menuentry number two',
        'Menuentry number three',
        'Menuentry number four',
        'Menuentry number five',
        'Menuentry number six',
        'Menuentry number seven',
        'Menuentry number eight',
    ].map((el) => {
        return { name: el };
    });
    const mixeditems = [
        'Menuentry number one',
        'two',
        'Menuentry number three',
        'Menuentry number four',
        'five',
        'Menuentry number six',
        'seven',
        'Menuentry number eight',
    ].map((el) => {
        return { name: el };
    });
</script>

<Meta
    title="Components/Flowermenu"
    component={Flower}
    argTypes={{
        onSelect: { action: 'select' },
    }}
    parameters={{
        actions: {
            handles: ['select'],
        },
    }}
/>

<Template let:args>
    <div class="m4 p4">
        <h1>Flowermenu demo</h1>
        <p>
            A Flowermenu is a menu which is not arranged as a flat or
            hierarchical organized list of items, but as leafs of a flower. This
            is more intuitive to handle, since we remember "half right" better
            than "fifth item". It is also more mobile-friendly, since items are
            larger and easier to tap on.
        </p>
        <div class="mt-8">
            <span
                >Some text in the middle of the page toprovide space for a</span
            >
            <Flower {...args} on:select={args.onSelect} />
            <span class="px-14 mx-10"> which is a menu.</span>
        </div>
        <div class="mt-8">
            <p>A Menu near the left edge to demonstrate shift right feature</p>
            <Flower {...args} on:select={args.onSelect} />
        </div>
    </div>
</Template>

<Story name="Short entries" args={{ title: 'Flowermenu', items: shortitems }} />
<Story name="Long entries" args={{ title: 'Flowermenu', items: longitems }} />
<Story name="Mixed entries" args={{ title: 'Flowermenu', items: mixeditems }} />
