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
                <!-- <div class="icon"></div> -->
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
        content: counter(item);
        counter-increment: item;
        box-sizing: border-box;
        margin: $space-s;
        min-width: 35px;
        width: 35px;
        height: 30px;
        border-radius: 5px 50% 50% 15px;
        background-color: $primary;
        color: #fff;
    }
}
</style>