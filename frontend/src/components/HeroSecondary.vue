<script lang="ts" setup>
defineProps<{
    color: String,
    background: String,
    icon?: String
}>()
</script>

<template>
    <h2 :class="'hero-secondary __' + color + ' __bg-' + background">
        <Icon :icon="icon" />
        <slot></slot>
    </h2>
</template>

<style lang="scss">
@use '@/styles/App.scss' as *;
    .hero-secondary {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: $fsize-l;
        font-weight: 700;
        text-transform: uppercase;
        text-align: center;
        box-sizing: border-box;
        width: 100%;
        display: flex;
        justify-content: center;
        padding: $space-m;
        border-radius: $radius-xxs;
        /* text color */
        &.__classic {
            color: $dark;
        }
        &.__white {
            color: #fff;
        }
        /* background */
        &.__bg-classic {
            background-color: transparent;
        }
        &.__bg-neutral {
            background-color: lighten($dark, 50%);
        }
    }
</style>