<template>
  <div class="sidebar-module sidebar-module-inset">
    <h4>Vue Graf Example</h4>
    <Doughnut
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
    <table>
      <thead>
        <tr>
          <th colspan="2">Все расходы с 12.02.2023</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in tableComputed" :key="row.id">
          <td>{{ row.title }}</td>
          <td>{{ row.price }} ₽</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th class="text-right">ИТОГО:</th>
          <th>0 ₽</th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import { Doughnut } from 'vue-chartjs/legacy';

// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default {
  name: 'GrafVuew',
  components: {
    Doughnut,
  },
  props: {
    chartId: {
      type: String,
      default: 'doughnut-chart',
    },
    datasetIdKey: {
      type: String,
      default: 'label',
    },
    width: {
      type: Number,
      default: 300,
    },
    height: {
      type: Number,
      default: 300,
    },
    cssClasses: {
      default: '',
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      chartData: {
        labels: ['ЦИАН', 'АВИТО', 'Яндекс', 'ДомКлик'],
        datasets: [
          {
            backgroundColor: ['#5599d0', '#00aaff', '#e22b06', '#4bb053'],
            data: [130, 80, 60, 10],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  computed: {
    tableComputed() {
      const tableData = [];
      this.chartData.labels.forEach((el, index) => {
        tableData.push({ id: index, title: el, price: this.chartData.datasets[0].data[index] });
      });
      return tableData;
    },
  },
  mounted() {
    console.log('Vue Graf Example mounted.');
  },
};
</script>
