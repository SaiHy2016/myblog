<template>
    <div>
        <mu-appbar title="Hy">
            <mu-icon-button icon="menu" slot="left"/>
            <mu-flat-button href='/' label="first" slot="right"/>
            <mu-flat-button href='lv' label="second" slot="right"/>
            <mu-icon-button icon="expand_more" slot="right"/>
	    </mu-appbar>
        <mu-paper style="max-width: 376px; ">
            <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
            <mu-bottom-nav-item value="movies" title="Movies" icon="ondemand_video"/>
            <mu-bottom-nav-item value="music" title="Music" icon="music_note"/>
        <mu-bottom-nav-item value="books" title="Books" icon="books"/>
            <mu-bottom-nav-item value="pictures" title="Pictures" icon="photo"/>
            </mu-bottom-nav>
        </mu-paper>
    </div>
	
</template>

<script>
	export default {
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
