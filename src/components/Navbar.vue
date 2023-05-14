<script lang="ts" setup></script>

<template>
    <div class="navbar">
        <RouterLink class="navlink" to="/">Accueil</RouterLink>
        <RouterLink class="navlink" to="/a-propos">À propos</RouterLink>
        <RouterLink class="navlink" to="/contact">Nous contacter</RouterLink>
    </div>
</template>

<style lang="scss">
@use '@/styles/App.scss' as *;

.navlink {
    text-decoration: none;
    color: $dark;
    font-weight: 600;
    margin: 0 $space-m;
    &:hover, &:focus {
        text-decoration: underline;
    }
}
</style>