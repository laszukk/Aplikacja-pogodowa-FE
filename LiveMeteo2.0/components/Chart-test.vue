<template>
    <client-only>
      <div class="d-flex justify-content-center">
      <div style="width:400px; height: 400px; padding-top: 10%;">
        <pie-chart :data="chartData"></pie-chart>
        </div>
      </div>
    </client-only>
  </template>

<script>
  export default {
    data() {
      return {
        chartData: {
          labels: [
          'Red',
          'Blue',
          'Yellow'
          ],
          datasets: [{
            label: 'Title',
            data: [45, 55, 48 ],
            backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
            ],
          }],
          hoverOffset: 4,
        }
      };
    }
  }
</script>
