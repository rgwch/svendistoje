<script lang="ts">
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
    import '../services/i18n/i18n';
    import Flower from './Flowermenu.svelte';
    // import type { MENUDEF } from './Flowermenu.svelte';
    const items = [
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
</script>

<Meta title="Components/Flowermenu" component={Flower} />

<Template let:args>
    <div class="m4 p4">
        <h1>Flowermenu demo</h1>
        <p>A Flowermenu is a menu which is not arranged as a flat or hierarchical organized list of items, but as leafs of a flower. This is more intuitive to handle, since we remember "half right" better than "fifth item". It is also more mobile.friendly, since items are larger and easier to tap on.</p>
        <div class="mt-8">
            <span>Some text with a</span>
            <Flower {...args} />
            <span class="px-14 mx-10"> which is a menu.</span>
        </div>
    </div>
</Template>

<Story name="Default" args={{ title: 'Flowermenu', items }} />
