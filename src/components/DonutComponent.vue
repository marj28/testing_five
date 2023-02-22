<template>
  <div>
    <apexchart
      height="300"
      type="pie"
      :options="options"
      :series="series"
      foreColor="black"
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
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        theme: {
          mode: "light",
          monochrome: {
            enabled: true,
            color: "#4CBB17",
            shadeTo: "light",
            shadeIntensity: 0.65,
          },
        },
        responsive: [
          {
            breakpoint: 600,
            options: {
              chart: {},
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