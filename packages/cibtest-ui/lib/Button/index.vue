
<script>
import { ElButton } from 'element-plus'
export default {
  name: "CibButton",
  components: {
    ElButton
  },
  props: {
    label: String,
    type: String,
    size: String,
  },
  setup(props, context) {
    const changeTitle = () => {
      context.emit('click')
      console.log(1)
    }
    return {
      changeTitle,
      props,
      attrs: context.attrs
    }
  }
}
</script>

<template>
  <el-button v-bind="{...props, ...attrs}" @click="changeTitle">{{ props.label }}</el-button>
</template>

<style scoped>

</style>
