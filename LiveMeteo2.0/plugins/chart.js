import Vue from 'vue'
import { Pie } from 'vue-chartjs'

Vue.component('pie-chart', {
	extends: Pie,
	props: ['data', 'options'],
  options: {
    responsive: false,
    },
	mounted () {
		this.renderChart(this.data, this.options)
	}
})
