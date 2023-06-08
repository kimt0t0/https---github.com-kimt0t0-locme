<script lang="ts" setup>
    const reassurances: {
        title: String,
        text: String,
        image: String
    }[] = [
        {
            title: "Accompagnement",
            text: "Tout au long du festival",
            image: 'followup.webp'
        },
        {
            title: "Formation aux outils",
            text: "Présentation en détails du tableau de bord de gestion",
            image: 'training.webp'
        },
        {
            title: "Nouveau service",
            text: "Offrez une expérience nouvelle à vos festivaliers !",
            image: 'service.webp'
        },
        {
            title: "Réservable par vos festivaliers",
            text: "Option gratuite disponible lors de l'achat des billets sur votre site",
            image: 'bookable.webp'
        },
        {
            title: "Gestion",
            text: "Sécurité améliorée pour vos événements",
            image: 'security.webp'
        },
    ]
</script>

<template>
    <section class="reassurance-section section-classic">
        <ul class="rs-list">
            <li class="reassurance-card" v-for="reassurance in reassurances">
                <img class="rc-icon" alt="illustration" :src="require(`@/assets/icons/${reassurance.image}`)" />
                <h3 class="rc-title">{{ reassurance.title }}</h3>
                <div class="rc-text">
                    {{  reassurance.text }}
                </div>
            </li>
        </ul>
    </section>
</template>

<style lang="scss">
@use '@/styles/App.scss' as *;
.reassurance-section {
    
    .rs-list {
        display: flex;
        justify-content: space-between;

        @media (max-width: $bp-l) {
            flex-wrap: wrap;
            justify-content: space-around;
        }

        @media (max-width: $bp-s) {
            flex-direction: column;
        }
        .reassurance-card {
            box-sizing: border-box;
            width: 220px;
            margin: 0 $space-s;
            display: flex;
            align-items: center;
            flex-direction: column;
            
            @media (max-width: $bp-s) {
                width: 100%;
                height: 200px;
            }

            .rc-icon {
                width: 112px;
                height: 112px;
                object-fit: contain;
            }
            .rc-title {
                color: darken($primary, 20%);
                font-size: $fsize-s;
                font-weight: 800;
                max-width: 180px;
                text-align: center;
                margin: $space-s 0;
            }
            .rc-text {
                width: 100%;
                font-size: 0.85rem;

                @media (max-width: $bp-s) {
                    font-size: 1;
                    text-align: center;
                }

            }
        }
    }
}
</style>