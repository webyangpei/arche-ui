<template>
	<div>
		Hello Ninecat-ui
		<Hello :name="name"></Hello>
	</div>
</template>

<script>
  export default {
    name:'App',
	  data() {
      return {
        name: 'this sdsdis a test'
      }
	  }
  }
</script>