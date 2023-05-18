<script lang="ts" setup>
    const functionalities : {
        icon?: any,
        text: String
    }[] = [
        {
            icon: new URL("@/assets/icons/wifi.webp", import.meta.url).href,
            text: 'Retrouvez vos amies malgré la saturation du réseau'
        },
        {
            icon: new URL("@/assets/icons/watch.webp", import.meta.url).href,
            text: 'Bracelet personnalisable avec 3 couleurs au choix'
        },
        {
            icon: new URL("@/assets/icons/bolt.webp", import.meta.url).href,
            text: 'Autonomie prolongée pour couvrir toute la durée du festival'
        },
        {
            icon: new URL("@/assets/icons/umbrella.webp", import.meta.url).href,
            text: "Résistant à l'eau, aux chocs et à l'usure pour résister aux conditions difficiles d'un festival"
        },
        {
            icon: new URL("@/assets/icons/mobile-os.webp", import.meta.url).href,
            text: 'Compatible Android et iOS'
        }
    ]
</script>

<template>
    <section class="section-functions">
        <div class="sf-background-container">
            <div class="sf-container">
                <HeroSecondary color="white" icon="primary" background="classic">
                    Fonctionnalités et caractéristiques du bracelet
                </HeroSecondary>
                <ul class="functions-list">
                    <li class="fl-item" v-for="functionality in functionalities">
                        <div class="fl-icon-container">
                            <img class="fl-icon" :src="functionality.icon" alt="icone illustrative" />
                        </div>
                        {{ functionality.text }}
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    @use '@/styles/App.scss' as *;
    .section-functions {
        height: fit-content;
        background-color: $dark;
        .sf-background-container {
            background: url('@/assets/images/fest-crowd.webp') no-repeat;
            background-position: left;
            background-size: contain;
        }
    }
    .sf-container {
        max-width: $classic-ctn;
        margin: 0 auto;
        padding: $space-l 0;
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
            display: flex;
            align-items: center;
            color: #fff;
            .fl-icon-container {
                background: url('@/assets/icons/mediator-primary.webp') no-repeat;
                width: 50px;
                height: 40px;
                min-width: 50px;
                min-height: 40px;
                background-size: contain;
                margin-right: $space-m;
                display: flex;
                justify-content: center;
                align-items: center;
                .fl-icon {
                    height: 1.5rem;
                    width: auto;
                }
            }
        }
    }
</style>