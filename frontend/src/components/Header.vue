<script lang="ts" setup>
    import Navbar from './Navbar.vue'
</script>

<template>
    <header class="header">
        <img class="logo" src="@/assets/logo.svg" alt="logo">
        <Navbar />
        <Button class="user-btn" color="transparent" size="medium">
            <Icon icon="user" />
            Se connecter / S'inscrire
        </Button>
    </header >
</template>

<style lang="scss">
@use '@/styles/App.scss' as *;
.header {
    max-width: $classic-ctn;
    margin: 0 auto;
    height: 100px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
        width: 100px;
    }
    .user-btn {
        box-sizing: border-box;
        max-width: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        svg {
            padding: $space-s;
            border-radius: $radius-circle;
            background-color: $c-txt;
            color: white;
        }
    }
}
</style>