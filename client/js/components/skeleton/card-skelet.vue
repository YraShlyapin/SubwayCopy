<template>
    <div class="menu-list-item">
        <div class="preview-wrapper"></div>
        <div class="text"></div>
    </div>
</template>
<style lang="scss" scoped>
    .menu-list-item {
    max-width: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .preview-wrapper {
        overflow: hidden;
        max-width: 300px;
        width: 100%;
        height: 235.71px;
        background-color: #444;
    }

    .text {
        margin-top: 5px;
        width: 80px;
        height: 30px;
        background-color: #444;
    }

    &:hover {
        h2 {
            text-decoration: underline;
        }
    }
}
</style>