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
        <div class="htc-content-bloc">
            <HeroSecondary color="classic" align="left">Comment ça marche pour vos festivaliers ?</HeroSecondary>
            <ClassicList :listItems="listItems" />
        </div>
        <div class="htc-illus"></div>
    </section>
</template>

<style lang="scss">
    @use '@/styles/App.scss' as *;

    .how-to-section {
        box-sizing: border-box;
        display: flex;
        .htc-content-bloc {
            width: 55%;
            box-sizing: border-box;
            background-color: lighten($primary, 40%);
            padding: $space-xl $space-l $space-xl 10%;
        }
        .htc-illus {
            width: 45%;
            box-sizing: border-box;
            background-color: $grey;
        }
    }
</style>