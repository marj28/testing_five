<template>
  <div>
    <v-card class="pa-2">
      <apexcharts
      height="300"
      :options="chartOptions"
      :series="series"
    ></apexcharts>
    </v-card>
    
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
          type: "bar",
          foreColor: "green",
          // sparkline: {
          //   enabled: true,
          // },
        },
        responsive: [
          {
            breakpoint: 1000,
            options: {
              plotOptions: {
                bar: {
                  horizontal: true,
                  dataLabels: {
                    position: "top",
                  },
                },
                dataLabels: {
                  enabled: true,
                  style: {
                    colors: ["#333"],
                  },
                  offsetX: 30,
                },
              },
              // legend: {
              //   show: false,
              // },
            },
          },
        ],
        stroke: {
          curve: "smooth",
        },
        colors: ["#388E3C"],
        xaxis: {
          categories: [1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70],
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
  