<script lang="ts" setup>
    import { ref } from 'vue';

    // fake data
    const users = ref<any>([
        {
            id: 1,
            lastName: 'Instinct',
            firstName: 'Albert',
            groupNum: '145',
            latitude: 0,
            longitude: 0,
            alertActive: false
        },
        {
            id: 2,
            lastName: 'Orbien',
            firstName: 'Georges',
            groupNum: '123',
            latitude: 0,
            longitude: 0,
            alertActive: true,
            alertDetails: [
                {
                    date: new Date(),
                    latitude: 0,
                    longitude: 0,
                    type: 'VIOLENCE',
                    urgent: true
                }
            ]
        },
        {
            id: 3,
            lastName: 'Grenier',
            firstName: 'Hermione',
            groupNum: '',
            latitude: 0,
            longitude: 0,
            alertActive: false,
            alertDetails: [
                {
                    date: new Date(),
                    latitude: 0,
                    longitude: 0,
                    type: 'HEALTH',
                    urgent: false
                }
            ]
        }
    ])

    const stats = ref<any>({
        totalUsers: 1235,
        day_1_customers: 1458,
        day_2_customers: 1483,
        day_3_customers: 1614
    })
</script>

<template>
    <section class="map-section">
        <div class="classic-container">
            <!-- Section header -->
            <div class="ms-header">
                <h2 class="ms-title">Tableau des coordonnées</h2>
                <p class="ms-subtitle">Retrouvez vos festivalières porteuses de bracelets</p>
            </div>
            <!-- Map Container -->
            <div class="map-container">
                <div class="fake-map">
                    <!-- (Users list) -->
                    <div class="users-list">
                        <!-- (( header )) -->
                        <div class="ul-header">
                            <img src="@/assets/logo.svg" class="ulh-logo" alt="logo LocMe" />
                            <h3 class="ulh-title">Utilisateurs LocMe</h3>
                        </div>
                        <!-- (( list part with title )) -->
                        <div class="ul-list-ctn">
                            <h4 class="ullc-title">
                                <img src="@/assets/icons/profil-primary.webp" class="ullct-icon" alt="icone de profil" />
                            </h4>
                            <div class="ullc-filters-box">
                                <Button color="white" size="medium" type="button">Par numéro de groupe</Button>
                                <Button color="white" size="medium" type="button">Par nom</Button>
                            </div>
                            <ol class="users-list">
                                <li v-for="user of users" class="ul-item">
                                    <button class="ul-button">
                                        <Icon icon="" />
                                        <Icon icon="" />
                                        <span class='ul-bigger'>{{ user.lastName }}</span> {{ ' ' + user.firstName }}
                                    </button>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <!-- (Stats box) -->
                    <div class="stats-box">
                        <p class="stat-line">Total actuel d'utilisateurices: <span class="stat">{{ stats.totalUsers }}</span> personnes</p>
                        <p class="stat-line">Prévision 1er jour: <span class="stat">{{ stats.day_1_customers }}</span> personnes</p>
                        <p class="stat-line">Prévision 2ème jour: <span class="stat">{{ stats.day_2_customers }}</span> personnes</p>
                        <p class="stat-line">Prévision 3ème jour: <span class="stat">{{ stats.day_3_customers }}</span> personnes</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    @use '@/styles/App.scss' as *;

    .map-section {
        background-color: lighten($primary, 42%);
        padding: $space-xl $space-m;
    }

    .ms-header {
        padding: $space-m 0;
        .ms-title, .ms-subtitle {
            font-size: 1rem;
        }
        .ms-title {
            font-weight: 800;
            line-height: 3;
        }
    }

    .map-container {
        width: 100%;
        min-height: 400px;
        max-height: 450px;
        border: 2px solid $grey;
        border-radius: $radius-xxs;
        .fake-map {
            background: url('@/assets/images/fake-map.jpg') no-repeat;
            background-size: contain;
        }
    }
</style>