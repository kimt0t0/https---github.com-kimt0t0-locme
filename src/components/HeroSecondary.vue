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
        <img v-if="icon === 'white'" class='hs-icon' src="@/assets/icons/pin-right-white.webp" alt="Icone de titre blanche" />
        <img v-if="icon === 'dark'" class='hs-icon' src="@/assets/icons/pin-right-dark.webp" alt="Icone de titre blanche" />
        <img v-if="icon === 'primary'" class='hs-icon' src="@/assets/icons/pin-right-primary.webp" alt="Icone de titre blanche" />
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
        width: fit-content;
        display: flex;
        justify-content: center;
        padding: $space-m $space-m $space-m 0;
        border-radius: $radius-xxs;
        .hs-icon {
            padding-top: $space-xs;
            height: $fsize-l;
            width: auto;
            margin-right: $space-m;
        }
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