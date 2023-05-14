<script lang="ts" setup>
defineProps<{
    color: string,
    size: string
}>()
</script>

<template>
    <button :class="'btn __'+ color + ' __' + size">
        <slot></slot>
    </button>
</template>

<style lang="scss">
@use '@/styles/App.scss' as *;

.btn {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border: transparent;
    border-radius: $radius-s;
    cursor: pointer;
    transition: all 300ms ease-in;
    /* Colors */
    &.__classic {
        background-color: $dark;
        color: white;
        &:hover, &:focus {
            background-color: $primary;
        }
    }
    &.__primary {
        background-color: $primary;
        color: #fff;
        &:hover, &:focus {
            background-color: #fff;
            color: $primary;
        }
    }
    &.__transparent {   
        font-size: $fsize-xs;
        background-color: transparent;
        color: $dark;
        &:hover, &:focus {
            background-color: $primary;
            color: #fff;
            > svg {
                color:#fff;
                background-color: $primary;
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
}
</style>