<script lang="ts" setup>
    import Navbar from './Navbar.vue'
</script>

<template>
    <header class="header">
        <img class="logo" src="@/assets/logo.svg" alt="logo">
        <Navbar />
        <ButtonLink path="/connexion" class="user-btn" color="transparent" size="medium">
            <div class="icon user-icon"></div>
            Se connecter / S'inscrire
        </ButtonLink>
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
        transition: all 300ms ease-in;
        > .user-icon {
            box-sizing: border-box;
            width: 100%;
            height: 35px;
            background: url('@/assets/icons/profil-dark.webp') no-repeat;
            background-size: contain;
            background-position: 45%;
            padding: $space-s;
            border-radius: $radius-circle;
        }
        &:hover, &:focus {
            > .user-icon {
                background: url('@/assets/icons/profil-primary.webp') no-repeat;
                background-size: contain;
                background-position: 45%;
            }
        }
    }
}
</style>