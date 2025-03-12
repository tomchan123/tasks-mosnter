import type { Meta, StoryObj } from "@storybook-vue/nuxt";

import NavMenuBar from "@/components/NavMenuBar.vue";

const meta: Meta<typeof NavMenuBar> = {
  title: "Navigation Menu Bar",
  component: NavMenuBar,
};

export default meta;

type Story = StoryObj<typeof NavMenuBar>;
export const Primary: Story = {
  args: {},
};
