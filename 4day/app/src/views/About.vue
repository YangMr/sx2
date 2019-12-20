<template>
  <div class="about">
	  <h1>123</h1>
    <!-- <h1>This is an about page</h1> -->
  </div>
</template>

<script>
	import api from "../api/api"
	export default {
		created(){
			api.getUserInfo().then(res=>{
				
				if(res.code == 202){
					this.$router.push("/")
				}
				console.log(res);
			}).catch(err=>{
				console.log(err)
			})
		}
	}
</script>

<style>
	
</style>
