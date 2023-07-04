<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import {getBarOptions} from '@/options/barOptions.js';
import {getPieOptions} from '@/options/pieOptions.js';
import Chart from '@/components/home/Chart.vue'

const handleScreenAuto = () => {
  const designDraftWidth = 1920;
  const designDraftHeight = 1080;
  const scale = document.documentElement.clientWidth / document.documentElement.clientHeight < designDraftWidth / designDraftHeight ?
      (document.documentElement.clientWidth / designDraftWidth) :
      (document.documentElement.clientHeight / designDraftHeight);
  (document.querySelector('#home') as HTMLElement).style.transform = `scale(${scale}) translate(-50%)`;
}

onMounted(() => {
  handleScreenAuto()
  window.onresize = () => handleScreenAuto();
})

onUnmounted(() => {
  window.onresize = null
})

</script>

<template>
  <div class="home" id="home">
    <header class="header">
      <h2 class="title">可视化</h2>
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
        <div class="map"></div>
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
    .title {
      color: #fff;
      font-size: 38px;
      text-align: center;
      padding-top: 8px;
    }
  }
  .main {
    display: flex;
    height: 980px;
    padding: 5px 10px 10px;
    .left, .right {
      width: 475px;
      display: flex;
      flex-direction: column;
      height: 980px;
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