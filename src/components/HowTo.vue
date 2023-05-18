<script lang="ts" setup>
    const listItems : String[] = [
        "Retrouvez vos amis facilement et rapidement grâce à une flèche présente sur le bracelet",
        "En cas de problème, un bouton d'alerte est disponible pour prévenir la sécurité d'un danger",
        "Prise en charge médicale rapide et efficace",
        "Facile à utiliser, à porter et à nettoyer",
        "Données personnelles sécurisées"
    ]
</script>

<template>
    <section class="how-to-section">
        <div class="htc-container">
            <div class="htc-content-bloc">
                <HeroSecondary color="classic" icon="primary" align="left">Comment ça marche pour vos festivaliers ?</HeroSecondary>
                <ClassicList :listItems="listItems" />
            </div>
            <img src="@/assets/images/bracelets-03.webp" class="htc-illus" alt="série de cinq bracelets LocMe"/>
        </div>
    </section>
</template>

<style lang="scss">
    @use '@/styles/App.scss' as *;

    .how-to-section {
        box-sizing: border-box;
        display: flex;
        padding: $space-l 0;
        background-color: lighten($primary, 40%);
        position: relative;
        .htc-container {
            display: flex;
            justify-content: space-between;
            width: 100%;
            max-width: $classic-ctn;
            margin: 0 auto;
        }
        .htc-content-bloc {
            width: 55%;
            box-sizing: border-box;
        }
        .htc-illus {
            height: 100%;
            width: auto;
            max-width: 45%;
            box-sizing: border-box;
            background-color: $grey;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
        }
    }
</style>