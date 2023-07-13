<script setup lang="ts">
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { getHKOptions } from '@/options/mapOptionHK.js'
import HKJson from '@/assets/json/home/HKmap.json'

let chartInstance = ref()

const chartRef = ref()

const init = () => {
  chartInstance.value = echarts.init(chartRef.value)
  // axios.get('/api/examples/data/asset/geo/HK.json').then(res => {
  //   echarts.registerMap('HK', res.data);
  //   chartInstance.value.setOption(getHKOptions());
  // })
  echarts.registerMap('HK', HKJson as any)
  chartInstance.value.setOption(getHKOptions())
}

onMounted(() => {
  init()
})
</script>

<template>
  <div ref="chartRef" class="chart"></div>
</template>

<style scoped>
.chart {
  width: 100%;
  height: 100%;
  padding: 10px 20px;
}
</style>
