<template>
	<div class="home-container">
		<header class="card">
			<div class="box">
				<div>10015 <em>篇</em></div>
				<span>总文章数</span>
			</div>
      	<div class="box">
				<div>10015 <em>篇</em></div>
				<span>总文章数</span>
			</div>
      	<div class="box">
				<div>10015 <em>篇</em></div>
				<span>总文章数</span>
			</div>
      	<div class="box">
				<div>10015 <em>篇</em></div>
				<span>总文章数</span>
			</div>
		</header>
    <echarts />
	</div>
</template>

<script>
import echarts from './ECharts/echarts.vue'
export default {
	name: 'Home',
	components: {echarts},
	props: {},
	data() {
		return {}
	},
	computed: {},
	watch: {},
	created() {},
	mounted() {},
	methods: {},
}
</script>
<style scoped lang="less">
 .home-container {
   background-color: #f2f3f5;
   padding: 80px 20px;
  .card{
    display: flex;
    margin-left: 190px;
     .box{
      display: flex;
      flex: 1;
      margin: 0 10px;
      flex-direction: column;
      align-items: center;
      background-color: #fff;
      div{
        font-size: 40px;
        color: royalblue;
        em{
          font-size: 16px;
         }
      }
      span{
        display: block;
        text-align: center;
        background-color: #e5e5e5;
        width: 100%;
        margin-top: 10px;
      }
    }
  }
} 
 </style>
