<template>
	<navigation></navigation>
	<router-view/>
	<notifications position="top right" classes="vue-notification text-center mt-3" width="400px"/>
</template>
<script>
	import navigation from '@/components/navigation.vue'
	export default {
		components:{
			navigation
		}
	}
</script>
<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
