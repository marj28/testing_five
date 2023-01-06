<template>
  <div>
    <apexchart
      width="450"
      height="350"
      type="pie"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "DonutChart",
  components: {
    apexchart: VueApexCharts,
  },
  data: function () {
    return {
      options: {
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
      series: [44, 55, 41, 17, 15],
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