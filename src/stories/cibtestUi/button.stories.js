//import { Button } from "../../../packages/cibtest-ui/lib";
import { Button } from "cibtest-ui";

export default {
  title: 'CibtestUi/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['mini', 'small', 'medium', 'large'],
    },
    type: {
      control: { type: 'select' },
      options: ['default', 'primary'],
    }
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

export const Small = Template.bind({});
Small.args = {
  type: "primary",
  size: 'small',
  label: '自定义按钮',
};