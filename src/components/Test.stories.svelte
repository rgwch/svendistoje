<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Test from "./Test.svelte";
 </script>

<Meta title="Test" component={Test} />

<Template let:args>
  <Test {...args} />
</Template>

<Story name="primary" args={{ title: "ha" }} />
