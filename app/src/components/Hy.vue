<template>
    <div style="padding-bottom:56px">
        <router-view></router-view>
    </div>
	
</template>

<script>
	export default {
        data () {
            return {
                bottomNav: 'movies',
                bottomNavColor: 'movies'
            }
        },
        methods: {
            handleChange (val) {
            this.bottomNav = val
            }
        }
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
