<template>
  <div>
    <apexcharts
      height="70"
      :options="chartOptions"
      :series="series"
    ></apexcharts>
  </div>
</template>
  
  <script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "ChartComponent",
  components: {
    apexcharts: VueApexCharts,
  },
  data: function () {
    return {
      chartOptions: {
        chart: {
          id: "basic-bar",
          type: "area",
          sparkline: {
            enabled: true,
          },
        },
        stroke: {
          curve: "smooth",
        },
        colors: ["#DCE6EC"],
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };
  },
};
</script>
<style scoped>
#chart {
  max-width: 650px;
  margin: 35px auto;
}
</style>
  