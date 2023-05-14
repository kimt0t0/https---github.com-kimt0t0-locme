<script lang="ts" setup>
    defineProps<{
        title?: String,
        listItems: String[]
    }>()
</script>

<template>
    <div class="classic-list-ctn">
        <h4 class="cl-title">{{ title }}</h4>
        <ul class="classic-list">
            <li class="cl-item" v-for="item of listItems">
                <div class="icon"></div>
                {{  item  }}
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
    @use '@/styles/App.scss' as *;

    .cl-item {
        display: flex;
        margin: $space-m auto;
        .icon {
            box-sizing: border-box;
            margin: $space-s;
            min-width: 30px;
            width: 30px;
            height: 20px;
            border-radius: 5px 50% 50% 15px;
            background-color: $dark;
            transform: rotate(-12deg);
        }
    }
</style>