<script lang="ts" setup>
defineProps<{
    color: string,
    size: string,
    path: string,
    align?: string
}>()
</script>

<template>
    <RouterLink 
    :class="'btn __' + color + ' __' + size + ' __' + align"
    :to="path">
        <slot></slot>
    </RouterLink>
</template>

<style lang="scss">
@use '@/styles/App.scss' as *;

.btn {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: transparent;
    border-radius: $radius-s;
    transition: all 300ms ease-in;
    text-decoration: none;

    /* align */
    &.__left {
        justify-content: flex-start;
        text-align: left;
    }

    /* Colors */
    &.__classic {
        background-color: $dark;
        color: white;

        &:hover,
        &:focus {
            background-color: $primary;
        }
    }

    &.__primary {
        background-color: $primary;
        color: #fff;

        &:hover,
        &:focus {
            background-color: #fff;
            color: $primary;
        }
    }

    &.__transparent {
        font-size: $fsize-xs;
        background-color: transparent;
        color: $dark;

        &:hover,
        &:focus {
            color: $primary;

            >svg, >.icon {
                color: $primary;
            }
        }
    }

     &.__transparent-white {
        font-size: $fsize-xs;
        background-color: transparent;
        color: #fff;

        &:hover,
        &:focus {
            color: $primary;

            >svg, >.icon {
                color: $primary;
            }
        }
    }

    /* Sizes */
    &.__small {
        font-size: $fsize-xs;
        padding: $space-xs $space-s;
    }

    &.__medium {
        font-size: $fsize-s;
        padding: $space-s $space-m;
    }

    &.__large {
        font-size: $fsize-m;
        padding: $space-m $space-l;
    }

    &.__bigger {
        font-size: $fsize-l;
        padding: $space-m $space-l;
    }
}</style>