<script lang="ts" setup>
    import Navbar from './Navbar.vue'
    import UserButton from './UserButton.vue'
</script>

<template>
    <header class="header">
        <img class="logo" src="@/assets/logo.svg" alt="logo">
        <Navbar />
        <UserButton />
    </header >
</template>

<style lang="scss">
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
}
</style>