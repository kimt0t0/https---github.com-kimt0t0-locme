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
    flex-wrap: nowrap;
    border: transparent;
    border-radius: $radius-s;
    font-size: 1rem;
    cursor: pointer;
    transition: all 300ms ease-in;
    /* Colors */
    &.__classic {
        background-color: $c-txt;
        color: white;
        &:hover, &:focus {
            background-color: darken($c-txt, 8%);
        }
    }
    &.__transparent {
        background-color: transparent;
        color: $c-txt;
        &:hover, &:focus {
            background-color: lighten($c-txt, 40%)
        }
    }
    /* Sizes */
    &.__small {
        padding: $space-xs $space-s;
    }
    &.__medium {
        font-size: $fsize-m;
        padding: $space-s $space-m;
    }
    &.__large {
        font-size: $fsize-l;
        padding: $space-m $space-l;
    }
}
</style>