<script lang="ts" setup>
    const customers: {
        name: String,
        role: String,
        comment: String,
        photo: any
    }[] = [
        {
            name: "Laurent",
            role: "Directeur de festival",
            comment: "Toute l'équipe de LocMe a été disponible pour offrir un service de qualité aux festivaliers ",
            photo: new URL("@/assets/images/laurent.webp", import.meta.url).href
        },
        {
            name: "Thomas",
            role: "Responsable sécurité",
            comment: "J'ai été impressionné par l'efficacité du bracelet connecté et du service de gestion associé. Nous avons pu intervenir plus rapidement sur le terrain.",
            photo: new URL("@/assets/images/thomas.webp", import.meta.url).href
        },
        {
            name: "Amélie",
            role: "Festivalière",
            comment: "Le bracelet m’a surprise par sa praticité. Il m’a permis de me repérer facilement sur le site et de retrouver mes amis en un clin d'œil.",
            photo: new URL("@/assets/images/amelie.webp", import.meta.url).href
        }
    ]
</script>

<template>
    <section class="customers-section section-classic">
        <HeroSecondary color="dark" icon="primary" align="left">Iels nous ont fait confiance</HeroSecondary>
        <ul class="customers-list">
            <li class="customer-item" v-for="customer of customers">
                <img :src="customer.photo" class="ci-photo" alt="photo client e" />
                <div class="ci-content-card">
                    <h3 class="cicc-title">{{ customer.name }}</h3>
                    <p class="classic-txt cicc-role">({{ customer.role }})</p>
                    <p class="classic-txt cicc-comment">{{ customer.comment }}</p>
                </div>
            </li>
        </ul>
    </section>
</template>

<style lang="scss">
    @use '@/styles/App.scss' as *;

    .customers-list {
        display: flex;
        justify-content: space-between;
    }

    .customer-item {
        box-sizing: border-box;
        width: 370px;
        height: 580px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        position: relative;
        .ci-photo {
            width: 240px;
            height: 245px;
            position: absolute;
            top: 0;
        }
        .ci-content-card {
            box-sizing: border-box;
            width: 100%;
            height: 435px;
            background-color: lighten($primary, 42%);
            border-radius: $radius-xs;
            padding: 130px $space-m $space-l;
            display: flex;
            flex-direction: column;
            align-items: center;
            .cicc-title {
                text-transform: uppercase;
                color: darken($primary, 30%);
            }
            .cicc-role {
                font-weight: 800;
            }
            .cicc-comment {
                margin-top: 60px;
                color: $grey;
                text-align: center;
            }
        }
    }

</style>