<script lang="ts" setup>
    const functionalities : {
        icon: String,
        text: String
    }[] = [
        {
            icon: 'wifi',
            text: 'Retrouvez vos amies malgré la saturation du réseau'
        },
        {
            icon: 'wifi',
            text: 'Bracelet personnalisable avec 3 couleurs au choix'
        },
        {
            icon: 'wifi',
            text: 'Autonomie prolongée pour couvrir toute la durée du festival'
        },
        {
            icon: 'wifi',
            text: "Résistant à l'eau, aux chocs et à l'usure pour résister aux conditions difficiles d'un festival"
        },
        {
            icon: 'wifi',
            text: 'Compatible Android et iOS'
        }
    ]
</script>

<template>
    <section class="section-functions">
        <HeroSecondary color="white" background="classic">
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
    .section-functions {
        background-color: $dark;
    }
    .functions-list {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        
        .fl-item {
            box-sizing: border-box;
            width: 490px;
            height: 80px;
            margin: $space-s 8% $space-s auto;
            display: flex;
            align-items: center;
            color: #fff;
            svg {
                margin-right: $space-m;
                padding: $space-s;
                border-radius: 5px 50% 50% 15px;
                background-color: $primary;
                transform: rotate(-12deg);
            }
        }
    }
</style>