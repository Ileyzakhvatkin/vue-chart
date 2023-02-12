<template>
  <div>
    <h2 class="blog-post-title">{{ name }}</h2>
    <div class="stat">Тут будет вывод статистики</div>
  </div>
</template>

<script>
import statDate from '../data/stat';
// https://vue-chartjs.org/examples/#vue-3-charts

export default {
  data() {
    return {
      name: 'StatiscicExample',
      statDate,
    };
  },
  mounted() {
    console.log(`Statiscics Example mounted. ${this.statDate}`);
  },
};
</script>
