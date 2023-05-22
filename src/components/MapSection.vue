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
                <div class="mc-frame">
                    <!-- (Users list) -->
                    <div class="map-content-box users-list-card">
                        <!-- (( header )) -->
                        <div class="ulc-header">
                            <img src="@/assets/icons/pic.webp" class="ulh-logo" alt="logo LocMe" />
                            <h3 class="ulh-title">Utilisateurs LocMe</h3>
                        </div>
                        <!-- (( list part with title )) -->
                        <div class="ulc-list-ctn">
                            <h4 class="ullc-title">
                                <img src="@/assets/icons/profil-primary.webp" class="ullct-icon" alt="icone de profil" />
                                Liste des utilisatrices
                            </h4>
                            <div class="ullc-sorting-box">
                                <Button class="sorting-button" color="white" size="medium" type="button" align="left">Par numéro de groupe</Button>
                                <Button class="sorting-button" color="white" size="medium" type="button" align="left">Par nom</Button>
                            </div>
                            <ol class="users-list">
                                <li v-for="user of users" class="ul-item">
                                    <Button class="user-btn" color="transparent-white" size="medium" align="left">
                                        <Icon icon="location-dot" />
                                        <span class='ul-bigger'>{{ user.lastName }}</span> {{ ' ' + user.firstName }}
                                    </Button>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <!-- (Stats box) -->
                    <div class="map-content-box stats-box">
                        <h4 class="stat-line __title">Total actuel d'utilisateurices: <span class="stat">{{ stats.totalUsers }}</span> personnes</h4>
                        <p class="stat-line"><span class="intro">Prévision 1er jour : </span><span class="stat">{{ stats.day_1_customers }}</span> personnes</p>
                        <p class="stat-line"><span class="intro">Prévision 2ème jour : </span><span class="stat">{{ stats.day_2_customers }}</span> personnes</p>
                        <p class="stat-line"><span class="intro">Prévision 3ème jour : </span><span class="stat">{{ stats.day_3_customers }}</span> personnes</p>
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

    /* Map */
    .map-container {
        width: 100%;
        background-color: lighten($primary, 40%);
        background: url('@/assets/images/fake-map.jpg') no-repeat;
        background-size: cover;
        min-height: fit-content;
        max-height: 600px;
        border: 2px solid $grey;
        border-radius: $radius-xxs;
        display: flex;
        .mc-frame {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            padding: $space-m;
        }
    }

    /* map content-box */ 
    .map-content-box {
        box-sizing: border-box;
        border-radius: $radius-xxs;
        padding: $space-m;
        background-color: #000;
        color: #fff;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        white-space: pre-line;
    }

    /* Users list box */
    .users-list-card {
        min-height: 450px;
        width: 20%;
        min-width: 260px;
        height: 100%;
        /* header */
        .ulc-header {
            color: #fff;
            display: flex;
            align-items: center;
            .ulh-logo {
                height: 40px;
            }
            .ulh-title {
                font-size: $fsize-m;
            }
        }
        /* list title */
        .ullc-title {
            font-size: $fsize-s;
            margin: $space-xxl 0 $space-l;
            .ullct-icon {
                height: 30px;
            }
        }
        /* sorting list buttons */
        .sorting-button {
            margin: $space-m 0;
            font-weight: 800;
            width: 100%;
            max-width: 250px;
        }
        /* user buttons */
        .user-btn {
            width: fit-content;
            margin: $space-xs 0;
            > svg {
                margin-right: $space-s;
            }
        }
    }

    /* Stats box */
    .stats-box {
        .stat-line {
            font-weight: 800;
            font-size: $fsize-s;
            line-height: 2;
            &.__title {
                margin-bottom: $space-s;
            }
            >.intro {
                display: inline-block;
                width: 160px;
            }
            >.stat {
                color: $primary;
                margin-left: $space-s;
            }
        }
    }
</style>