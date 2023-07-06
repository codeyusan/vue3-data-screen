export const getBarOptions = (data) => {
  return {
    title: {
      // text: 'ECharts 入门示例'
    },
    grid: {
      left: '12%',
      top: '15%'
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      axisTick: {
        alignWithLabel: true,
        lineStyle: {
          color: '#fff'
        }
      },
      axisLabel: {
        color: '#fff'
      },
      axisLine: {
        lineStyle: {
          color: '#333'
        }
      }
    },
    yAxis: {
      axisLabel: {
        color: '#fff'
      },
      axisLine: {
        lineStyle: {
          color: '#333'
        }
      }
    },
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  }
}
