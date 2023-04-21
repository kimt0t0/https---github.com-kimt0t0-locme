<script lang="ts" setup>
    const functionalities : {
        icon: String,
        text: String
    }[] = [
        {
            icon: 'wifi',
            text: 'Bracelet en silicone lisse, facile à nettoyer et attache solide'
        },
        {
            icon: 'wifi',
            text: 'Grande autonomie de la batterie'
        },
        {
            icon: 'wifi',
            text: 'Un style moderne, 3 couleurs au choix'
        },
        {
            icon: 'wifi',
            text: 'Compatible avec toutes les marques de téléphone'
        },
        {
            icon: 'wifi',
            text: 'La location de vos bracelets à tout petit prix'
        },
        {
            icon: 'wifi',
            text: 'Usage du produit possible malgré la saturation du réseau'
        },
    ]
</script>

<template>
    <section class="section-functions">
        <HeroSecondary color="classic" background="classic">
            Fonctionnalités et caractéristiques du bracelet
        </HeroSecondary>
        <ul class="functions-list">
            <li class="fl-item" v-for="functionality in functionalities">
                <Icon :icon="functionality.icon" />{{ functionality.text }}
            </li>
        </ul>
    </section>
</template>

<style lang="scss">
    @use '@/styles/App.scss' as *;
    .functions-list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .fl-item {
            box-sizing: border-box;
            width: 48%;
            height: 80px;
            margin: $space-s;
            display: flex;
            align-items: center;
            padding: $space-s;
            background-color: lighten($c-txt, 50%);
            border-radius: $radius-xxs;
            svg {
                margin-right: $space-s;
                padding: $space-s;
                border-radius: $radius-circle;
                background-color: lighten($c-txt, 20%);
            }
        }
    }
</style>