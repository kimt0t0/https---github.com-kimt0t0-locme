<script lang="ts" setup>
defineProps<{
    title?: String,
    listItems: String[]
}>()
</script>

<template>
    <div class="numbered-list-ctn">
        <h4 class="nl-title">{{ title }}</h4>
        <ol class="numbered-list">
            <li class="nl-item" v-for="item of listItems">
                {{ item }}
            </li>
        </ol>
    </div>
</template>

<style lang="scss">
@use '@/styles/App.scss' as *;

.nl-title {
    margin-bottom: $space-l;
    font-weight: normal;
}

.numbered-list {
    counter-reset: item;
}

.nl-item {
    display: flex;
    align-items: center;
    margin: $space-m auto;

    &::before {
        display: flex;
        justify-content: center;
        align-items: center;
        content: counter(item);
        counter-increment: item;
        box-sizing: border-box;
        margin: $space-s;
        min-width: 35px;
        width: 40px;
        height: 40px;
        min-width: 40px;
        min-height: 40px;
        color: #fff;
        background: url("@/assets/icons/mediator-custom.webp") no-repeat;
        background-size: contain;
    }
}
</style>