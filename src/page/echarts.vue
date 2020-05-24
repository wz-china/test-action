<template>
<div>
    <div style="width:100%;height: 600px;" id="echarts"></div>
</div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        echart:null
      }
    },
    methods: {},
    mounted() {
      this.echart = echarts.init(document.getElementById("echarts"))
      this.echart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {},
        dataset:[
          {
            source: [
              ['date', '动作', '喜剧', '科幻'],
              ['一季度', 60,30,10],
              ['二季度', 50,30,20],
              ['三季度', 40,30,30],
              ['四季度', 30,30,40]
            ]
          },
          {
            source: [
              ['动作', 10],
              ['喜剧', 20],
              ['科幻', 30],
            ]
          }
        ],
        series: [
          {type: 'bar',datasetIndex:0},
          {type: 'bar',datasetIndex:0},
          {type: 'bar',datasetIndex:0},
          {
            type: 'pie',
            datasetIndex:1

          },
        ]
      })
    }

  }
</script>

<style scoped>
</style>