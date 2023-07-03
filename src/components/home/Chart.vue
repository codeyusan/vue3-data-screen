<script setup lang="ts">
import * as echarts from 'echarts';
import {ref, onMounted} from 'vue'

let chartInstance = ref();

const props = defineProps<{
  id: string,
  options: Object
}>()

const chartRef = ref()

const init = () => {
  chartInstance.value = echarts.init(chartRef.value);
  draw()
}

const draw = () => {
  if (chartInstance.value) chartInstance.value.setOption(props.options);
};

onMounted(() => {
  init()
})

</script>

<template>
  <div :id="id" ref="chartRef" class="chart">
  </div>
</template>

<style scoped>
.chart {
  width: 100%;
  height: 100%;
}

</style>
