<template>
	<header>
		<nav>
			<ul class="nav-links">
				<router-link to="/" class="nav-link text-white">Home</router-link>
				<router-link to="/teachers" class="nav-link text-white">Teachers</router-link>
				<router-link to="/branches" class="nav-link text-white">Branches</router-link>
				<router-link to="/students" class="nav-link text-white">Students</router-link>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
  data() {
    return {

    }
  },
}
</script>
<style>
	nav {
		width: 100%;
		background-color: #3498db;
	}
	.nav-links{
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50px;
		font-size: 120%;
	}
	.nav-links .nav-link:hover{
		border-bottom: 2px solid white;
	}
</style>
