<template>
  <div> 
    <apexcharts
      height="300"
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
          type: "bar",
          foreColor: 'green'
        },
        plotOptions: {
          bar: {
            borderRadius: 2,
            horizontal: true,
          },
        },
        xaxis: {
          size: 30,
          categories: ["For Approval", "For Recommendation", "For Processing"],
        },
        colors: ["#1B5E20"]
      },

      series: [
        {
          name: "series-1",
          data: [30, 40, 45],
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
    