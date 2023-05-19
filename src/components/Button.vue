<script lang="ts" setup>
defineProps<{
    color: string,
    size: string,
    type?: "button" | "submit" | "reset" | undefined
    state?: string
}>()
</script>

<template>
    <button :type="type" :class="'btn __'+ color + ' __' + size + ' __' + state">
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
            color: darken($primary, 20%) !important;
        }
        &.__teams-dropdown {
            font-weight: 800;
            &:hover, &:focus, &.active {
                background-color: lighten($primary, 42%);
            }
        }
        &.__fest-dropdown, &.active {
            font-weight: 800;
            &:hover, &:focus {
                background-color: #f1f1f1;
            }
        }
    }
    &.__transparent {   
        font-size: $fsize-xs;
        background-color: transparent;
        color: $dark;
        &:hover, &:focus {
            color: $primary;
            > svg, .user-icon {
                color:$primary;
            }
        }
    }
    &.__transparent-white {
        color: #fff;
        background-color: transparent;
        border: 1px solid transparent;
        &:hover, &:focus {
            border: 1px solid $primary;
            color: $primary;
        }
    }
    &.__white {
            background-color: #fff;
            color: darken($primary, 20%);
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
    &.__dropdown {
        border-radius: $radius-xxs;
        font-size: $fsize-s;
        padding: $space-m;
        margin: 0;
        width: 420px;
        &.inbox {
            text-transform: uppercase;
            font-size: 1.2rem;
            font-weight: 800;
            width: 100%;
        }
    }
    &.__dropdown-large {
        font-weight: 800;
        border-radius: $radius-xxs;
        font-size: $fsize-s;
        padding: $space-m;
        margin: $space-m 0 0;
        width: $classic-ctn;
    }
}
</style>