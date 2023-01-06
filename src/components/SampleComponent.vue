<template>
  <div class="example" id="spark1">
    <apexcharts
      width="500"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexcharts>
  </div>
</template>

<script>
/* eslint-disable */
import VueApexCharts from "vue-apexcharts";

export default {
  name: "SampleChart",
  components: {
    apexcharts: VueApexCharts,
  },
  data: function () {
    return {
      chartOptions: {
  chart: {
    id: "spark1",
    type: "area",
    height: 80,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0.2,
    },
  },
  series: [
    {
      data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21],
    },
  ],
  stroke: {
    curve: "smooth",
  },
  markers: {
    size: 0,
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 110,
    },
  },
  colors: ["#fff"],
  tooltip: {
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function formatter() {
          return "";
        },
      },
    },
  },
}
    }
}
}
</script>
