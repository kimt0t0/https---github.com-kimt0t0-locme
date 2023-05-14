<script lang="ts" setup>
    const reassurances: {
        title: String,
        text: String,
        image: String
    }[] = [
        {
            title: "Accompagnement",
            text: "Tout au long du festival",
            image: 'rplaceholder.jpg'
        },
        {
            title: "Formation aux outils",
            text: "Présentation en détails du tableau de bord de gestion",
            image: 'rplaceholder.jpg'
        },
        {
            title: "Nouveau service",
            text: "Offrez une expérience nouvelle à vos festivaliers !",
            image: 'rplaceholder.jpg'
        },
        {
            title: "Réservable par vos festivaliers",
            text: "Option gratuite disponible lors de l'achat des billets sur votre site",
            image: 'rplaceholder.jpg'
        },
        {
            title: "Gestion",
            text: "Sécurité améliorée pour vos événements",
            image: 'rplaceholder.jpg'
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
        .reassurance-card {
            box-sizing: border-box;
            width: 220px;
            margin: 0 $space-s;
            display: flex;
            align-items: center;
            flex-direction: column;
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
            }
        }
    }
}
</style>