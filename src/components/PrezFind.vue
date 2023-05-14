<script lang="ts" setup>

    const paragraphs: String[] = [
        "Plus besoin de vous inquiéter de la localisation de vos participants ou de perdre un temps précieux à les chercher !",
        "Notre tableau de bord vous permet également de piloter les incidents en temps réel, de recevoir des alertes d'urgence et de visualiser les statistiques de fréquentation du festival.",
        "Nous vous offrons une solution complète et sur mesure pour vous permettre de gérer votre festival en toute simplicité et efficacité."
    ]

    const listItems: String[] = [
        "Un signalement visuel (rouge et clignotant), et sonore apparaît sur l'écran de controle.",
        "Cliquer sur le point concerné donne les coordonnées précises de la personne réclament de l'aide, et ses données santé si elle a accepté de les partager.",
        "Suivi de l'intervention grâce à une évolution de la couleur, jusqu'à la disparition du signal."
    ]

</script>

<template>
    <section class="prezfind-section">
        <div class="pf-container">
            <HeroSecondary color="dark" align="left">Repérez vos festivaliers sur la carte durant l'événement</HeroSecondary>
            <p class="classic-txt" v-for="paragraph of paragraphs">
                {{ paragraph }}
            </p>
            <div class="pf-illus"></div>
            <!-- <img class="pf-illus" src="" alt="exemple de localisation depuis l'interface LocMe" /> -->
            <div class="pf-content-bloc">
                <h3 class="pfcc-title">Système d'alerte</h3>
                <NumberedList title="En cas d'alerte" :listItems="listItems" />
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    @use '@/styles/App.scss' as *;

    .prezfind-section {
        background-color: lighten($primary, 40%);
        padding: $space-l $space-l $space-xxl;
        .pf-container {
            max-width: $classic-ctn;
            margin: 0 auto;
        }
    }
    
    .pf-illus {
        max-width: $classic-ctn;
        height: 500px;
        object-fit: contain;
        border-radius: $radius-xxs;
        border: 2px solid $grey;
        background-color: $primary;
        margin: $space-l auto;
    }
</style>