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
                <img src="@/assets/icons/mediator-dark.webp" class="list-item-icon" alt="Icone de début de liste" />
                {{  item  }}
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
    @use '@/styles/App.scss' as *;

    .cl-title {
        margin-bottom: $space-l;
    }

    .cl-item {
        display: flex;
        margin: $space-m auto;
        .list-item-icon {
            box-sizing: border-box;
            margin: $space-s;
            min-width: 30px;
            width: 30px;
            height: 1.2rem;
        }
    }
</style>