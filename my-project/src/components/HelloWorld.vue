<template>
  <div class="hello">
    <h1>ppp</h1>
		<ul>
			<li v-for="item in allNum">{{item}}</li>
		</ul>
		<h5>合计{{totle}}</h5>
		<h5>cartA:{{cartA}}</h5>
		<h5>cartB:{{cartB}}</h5>
		<h5>cartC:{{cartC}}</h5>
		<button @click="addAll">添加</button>
		<button @click="addA">添加A</button>
		<button @click="addAllasync">异步添加</button>
		<button @click="addAPromise">Promise添加</button>
		<button @click="addAPromise1">Promise添加1</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
	computed:{
		 totle(){
			 return this.$store.getters['products/totleNum']
		 },		 
		 ...mapState({
			 		allNum:state => state.products.all,
					cartA: state => state.cart.a,
					cartB: state => state.cart.b,
					cartC: state => state.cart.c
		 })		 		 
	},
	methods:{
		addAll(){
			this.$store.commit('products/pushAll', 1);
			console.log(this.$store);
		},
		addA(){
			this.$store.commit('cart/addA', 2)
		},
		addAllasync(){
			this.$store.dispatch('cart/incrementAsync', 10)
		},
		addAPromise(){
			this.$store.dispatch('cart/actionA').then((result) => {
				  console.log(result)
			})
		},
		addAPromise1(){
				this.$store.dispatch('cart/actionB').then((result) => {
						console.log(result)
				})
		}	
	},
	mounted(){
		console.log(this.$store.getters['products/totleNum']);
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
