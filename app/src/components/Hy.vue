<template>
    <div style="padding-bottom:56px">
        <mu-appbar title="Hy">
            <mu-icon-button icon="menu" slot="left"/>
            <mu-flat-button href='/' label="first" slot="right"/>
            <mu-flat-button href='lv' label="second" slot="right"/>
            <mu-icon-button icon="expand_more" slot="right"/>
	    </mu-appbar>
        <router-view></router-view>
        <mu-paper style="position:fixed;bottom:0;width:100%">
            <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
                <mu-bottom-nav-item value="Article" to='Article' title="Article" icon="ondemand_video"/>
                <mu-bottom-nav-item value="books" to='books' title="Books" icon="books"/>
                <mu-bottom-nav-item value="music" to='music' title="" icon="music_note"/>
                <mu-bottom-nav-item value="Aboutme" to='Aboutme' title="Aboutme" icon="photo"/>
            </mu-bottom-nav>
        </mu-paper>
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
