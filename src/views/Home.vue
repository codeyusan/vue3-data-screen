<script setup lang="ts">
import { onMounted, onUnmounted, ref, reactive } from 'vue'
import { getBarOptions } from '@/options/barOptions.js'
import { getPieOptions } from '@/options/pieOptions.js'
import Chart from '@/components/home/Chart.vue'
import EchartsMap from '@/components/home/EchartsMap.vue'
import { requestFullScreen, exitFullScreen } from '@/utils/common.js'

const title = '可视化后台'

const homeRef = ref()
let isFullScreen = ref(false)

const handleScreenAuto = () => {
  console.log(111)
  const designDraftWidth = 1920
  const designDraftHeight = 1080
  const scale =
    document.documentElement.clientWidth / document.documentElement.clientHeight <
    designDraftWidth / designDraftHeight
      ? document.documentElement.clientWidth / designDraftWidth
      : document.documentElement.clientHeight / designDraftHeight
  ;(
    document.querySelector('#home') as HTMLElement
  ).style.transform = `scale(${scale}) translate(-50%)`
}

const fullScreen = () => {
  requestFullScreen(homeRef.value)
}

const fullScreenChange = () => {
  isFullScreen.value = !isFullScreen.value
}

onMounted(() => {
  handleScreenAuto()
  document.addEventListener('fullscreenchange', fullScreenChange)
  window.onresize = () => handleScreenAuto()
})

onUnmounted(() => {
  window.onresize = null
  document.removeEventListener('fullscreenchange', fullScreenChange)
})
</script>

<template>
  <div ref="homeRef">
    <div class="home" id="home">
      <header class="header">
        <h2 class="title">{{ title }}</h2>
        <button class="all" @click="fullScreen" v-if="!isFullScreen">全屏</button>
        <button class="part" @click="exitFullScreen" v-else>退出</button>
      </header>
      <main class="main">
        <section class="left">
          <div class="pie">
            <Chart id="barChart" :options="getBarOptions([])"></Chart>
          </div>
          <div class="pie">
            <Chart id="pieChart" :options="getPieOptions([])"></Chart>
          </div>
        </section>
        <section class="center">
          <div class="map">
            <EchartsMap></EchartsMap>
          </div>
        </section>
        <section class="right">
          <div class="pie">
            <Chart id="barChart_another" :options="getBarOptions([])"></Chart>
          </div>
          <div class="pie">
            <Chart id="pieChart_another" :options="getPieOptions([])"></Chart>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>
.home {
  background-image: url('@/assets/img/home/bg01.png');
  width: 1920px;
  height: 1080px;
  display: inline-block;
  transform-origin: 0 0;
  position: absolute;
  left: 50%;
  .header {
    background-image: url('@/assets/img/home/header.png');
    height: 100px;
    width: 1920px;
    position: relative;
  }

  .header .all,
  .header .part {
    position: absolute;
    left: 10px;
    bottom: 6px;
    height: 32px;
    width: 60px;
    font-size: 16px;
  }
  .header .title {
    color: #fff;
    font-size: 38px;
    text-align: center;
    padding-top: 8px;
  }
  .main {
    display: flex;
    height: 980px;
    padding: 5px 10px 10px;
    .left,
    .right {
      width: 475px;
      display: flex;
      flex-direction: column;
      /* height: 980px; */
      .pie {
        background-image: url('@/assets/img/home/panel.png');
        width: 100%;
        height: 475px;
        margin-bottom: 10px;
      }
    }
    .center {
      flex: 2;
      margin: 0 15px;
      .map {
        background-image: url('@/assets/img/home/panel_large.png');
        width: 920px;
        height: 960px;
      }
    }
  }
}
</style>
