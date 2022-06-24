<script setup>
import { ref, useAttrs } from 'vue'
const props = defineProps({
  label: String,
  type: String,
  size: String,
})
const attrs = useAttrs();
const emit = defineEmits(['click'])
const changeTitle = () => {
  emit('click')
}
</script>
<script>
import { ElButton } from 'element-plus'
export default {
  name: "CibButton",
  components: {
    ElButton
  }
}
</script>

<template>
  <el-button v-bind="{...props, ...attrs}" @click="changeTitle">{{ label }}</el-button>
</template>

<style scoped>

</style>
