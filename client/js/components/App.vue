<template>
    <div>
        <Menu></Menu>
        <infoLine></infoLine>
        <router-view></router-view>
    </div>
</template>
<script>
    import Menu from '@/static/menu.vue'
    import infoLine from '@/static/lineinfo.vue'

    export default {
        components: {
            Menu,
            infoLine
        }
    }
</script>
