<script lang="ts" setup>
    const listTitle: String = "Sur votre tableau de bord, vous avez accès à:"
    const listItems : String[] = [
        "Vos données personnelles",
        "Les informations relatives à votre location de bracelets connectés LocMe",
        "La liste de vos diverses équipes sur place (accueil, sécurité, ...)",
        "Les codes des bracelets et groupes associés, en cas d'urgence"
    ]
</script>

<template>
    <section class="prezdashboard-section">
        <div class="pds-container">
            <HeroSecondary color="white" icon="white" align="left">Gérez la sécurité de vos festivalières directement depuis votre tableau de bord</HeroSecondary>
            <div class="pds-contents">
                <img src="@/assets/images/dashboard-example.webp" class="pds-illus" alt="Démonstration du tableau de bord LocMe" />
                <ClassicList class="classic-list-cp" :title="listTitle" :listItems="listItems"/>
            </div>
        </div>

    </section>
</template>

<style lang="scss">
    @use '@/styles/App.scss' as *;

    .prezdashboard-section {
        background-color: $primary;
        padding: $space-xl 0 $space-xxxl;

        @media (max-width: $bp-m) {
            padding: 0;
        }
        .pds-container {
            box-sizing: border-box;
            max-width: $classic-ctn;
            margin: 0 auto;

            @media (max-width: $bp-m) {
                margin: 0;
                padding: $space-xl $space-l;
            }
        }
        .pds-contents {
            display: flex;
            justify-content: space-between;

            @media (max-width: $bp-m) {
                flex-direction: column;
                justify-content: flex-start;
            }
        }
    }

    .pds-illus {
        height: 330px;
        width: 55%;
        background-color: $grey;
        border-radius: $radius-xxs;
        border: 1px solid #bfbfbf;
        object-fit: contain;

        @media (max-width: $bp-m) {
            width: 100%;
            height: auto;
        }
    }
    .classic-list-cp {
        width: 42%;

        @media (max-width: $bp-m) {
            width: 100%;
            padding: $space-l 0;
        }
    }
</style>