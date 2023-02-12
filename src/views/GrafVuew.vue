<template>
  <div class="sidebar-module sidebar-module-inset">
    <h4>{{ name }}</h4>
    <div class="graf">Тут будет график</div>
  </div>
</template>

<script>
import grafDate from '../data/graf';

export default {
  data() {
    return {
      name: 'Vue Graf Example',
      grafDate,
    };
  },
  mounted() {
    console.log('Vue Graf Example mounted.');
  },
};
</script>
