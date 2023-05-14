<script lang="ts" setup>
defineProps<{
    color: String,
    background?: String,
    icon?: String
    align?: String
}>()
</script>

<template>
    <h2 :class="'hero-secondary __' + color + ' __bg-' + background + ' __align-' + align">
        <Icon :icon="icon" />
        <slot></slot>
    </h2>
</template>

<style lang="scss">
@use '@/styles/App.scss' as *;
    .hero-secondary {
        font-size: $fsize-l;
        line-height: 1.2;
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
        /* align */
        &.__align-left {
            text-align: left;
        }
    }
</style>