<template>
    <menuAdmin></menuAdmin>
    <router-view></router-view>
</template>
<script>
    import menuAdmin from '@/Admin/menu-admin.vue';

    export default {
        components: {
            menuAdmin
        }
    }
</script>