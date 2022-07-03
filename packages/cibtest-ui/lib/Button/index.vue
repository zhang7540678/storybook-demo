
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
      emit('click')
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
