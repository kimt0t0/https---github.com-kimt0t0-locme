<script lang="ts" setup>
    import { ref } from 'vue';

    // fake data
    const users = ref<any>([
        {
            id: 1,
            lastName: 'Instinct',
            firstName: 'Albert',
            groupNum: '145',
            latitude: 1,
            longitude: 4.5,
            alertActive: false
        },
        {
            id: 2,
            lastName: 'Orbien',
            firstName: 'Georges',
            groupNum: '123',
            latitude: -2,
            longitude: -3,
            alertActive: true,
            alertDetails:
                {
                    date: new Date(2023, 6, 13, 8, 22, 45),
                    latitude: -2,
                    longitude: -4,
                    type: 'VIOLENCE',
                    urgent: true,
                    status: 'PENDING'
                }
        },
        {
            id: 3,
            lastName: 'Grenier',
            firstName: 'Hermione',
            groupNum: '',
            latitude: 2,
            longitude: 5,
            alertActive: false,
            alertDetails:
                {
                    date: new Date(2023, 6, 12, 22, 3, 56),
                    latitude: 0,
                    longitude: 0,
                    type: 'HEALTH',
                    urgent: false,
                    status: 'over'
                }
        }
    ])

    const stats = ref<any>({
        totalUsers: 1235,
        day_1_customers: 1458,
        day_2_customers: 1483,
        day_3_customers: 1614
    })

    // Handle location pins
    const showPinOne = ref<boolean>(false);
    const showPinTwo = ref<boolean>(false);
    const showPinThree = ref<boolean>(false);
    
    const showAllPins = ref<boolean>(false);

    const showPin = (userId: number) => {
        showAllPins.value = false;
        switch (userId) {
            case 1: 
                showPinOne.value = true;
                showPinTwo.value = false;
                showPinThree.value = false;
                break;
            case 2:
                showPinTwo.value = true;
                showPinOne.value = false;
                showPinThree.value = false;
                break;
            case 3:  
                showPinThree.value = true;
                showPinOne.value = false;
                showPinTwo.value = false;
                break;
            default:
                console.log('Utilisation non autorisée !')
        }
    }

    const toggleAllPins = () => {
        showAllPins.value = !showAllPins.value

        if (showAllPins.value === true) {
            showPinOne.value = true;
            showPinTwo.value = true;
            showPinThree.value = true;
        } else {
            showPinOne.value = false;
            showPinTwo.value = false;
            showPinThree.value = false;
        }
    }

    // Handle users cards
    const showCardOne = ref<boolean>(false);
    const showCardTwo = ref<boolean>(false);
    const showCardThree = ref<boolean>(false);
    const toggleCard = (num: number) => {
        switch (num) {
            case 1:
                showCardOne.value = !showCardOne.value;
                break;
            case 2:
                showCardTwo.value = !showCardTwo.value;
                break;
            case 3:
                showCardThree.value = !showCardThree.value;
                break;
            default:
                console.log('Utilisation non prévue !');
        }
    }

    // Get alert type
    const getAlertType = (type: string) => { // add an enum here
        console.log(type);
        switch (type) {
            case 'HEALTH':
                return 'Santé';
            case 'VIOLENCE':
                return 'Agression';
            case 'OTHER':
                return 'Autre';
            default:
                return "Cas non prévu par l'application";
        }
    }

    // Get alert status
    const getAlertStatus = (status: string) => { // add an enum here
        switch (status) {
            case 'PENDING':
                return 'En attente !';
            case 'REFUSED':
                return "Sans intervention";
            case 'ONGOING':
                return 'Prise en charge';
            case 'OVER':
                return 'Terminée'
            default:
                return "Cas non prévu par l'application";
        }
    }
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
                                <!-- <Button class="sorting-button" color="white" size="medium" type="button" align="left">Par numéro de groupe</Button>
                                <Button class="sorting-button" color="white" size="medium" type="button" align="left">Par nom</Button> -->
                                <Button class="sorting-button" color="white" size="medium" type="button" align="left" @click="toggleAllPins">{{ showAllPins ? 'Cacher tout' : 'Voir tout' }}</Button>
                            </div>
                            <ol class="users-list">
                                <li v-for="user of users" class="ul-item">
                                    <Button class="user-btn" color="transparent-white" size="medium" align="left" @click="showPin(user.id)">
                                        <Icon icon="location-dot" />
                                        <Icon icon="triangle-exclamation" v-if="user.alertActive" />
                                        <span class='ul-bigger'>{{ user.lastName }}</span>{{ '&nbsp;' + user.firstName }}
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
                    <!-- (Pins) -->
                    <!-- ((Would be a better way to do in the future:)) -->
                    <!-- <div v-for="user, index  of users" :class="'loc-bloc __' + (index+1)" v-if="showAllPins">
                        <button type="button" class="pin-button"><img class="pin-icon" :src="user.alertActive ? require('@/assets/icons/pic.webp') : require('@/assets/icons/pic-dark.webp')" alt="pins de géolocalisation" /></button>
                    </div> -->

                    <!-- ((Single pins)) -->
                    <div class="loc-bloc __1" v-if="showPinOne">
                        <button type="button" class="pin-button" @click="toggleCard(1)" :disabled="!users[0].alertActive"><img class="pin-icon" src="@/assets/icons/pic-dark.webp" alt="pins de géolocalisation" /></button>
                        <div class="lb-container" v-if="showCardOne">
                            <div class="lbc-usercard">
                                <div class="lbcu-headgroup">
                                    <h4 class="lbcu-title">Alerte de {{ users[0].firstName }} <span class='upper-txt'>{{ users[0].lastName }}</span></h4>
                                    <p class="lbcu-date" v-if="users[0].alertActive">Activée le 
                                        {{ users[0].alertDetails.date.getDate() + '/' + users[0].alertDetails.date.getMonth() + '/' + users[0].alertDetails.date.getFullYear() }}
                                        à
                                        {{ users[0].alertDetails.date.getHours() + ':' + users[0].alertDetails.date.getMinutes() + ':' + users[0].alertDetails.date.getSeconds() }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="loc-bloc __2" v-if="showPinTwo">
                        <button type="button" class="pin-button" @click="toggleCard(2)" :disabled="!users[1].alertActive"><img class="pin-icon" src="@/assets/icons/pic.webp" alt="pins de géolocalisation" /></button>
                        <!-- Alert card -->
                        <div class="lb-container" v-if="showCardTwo">
                            <div class="lbc-usercard">
                                <!-- (headgroup) -->
                                <div class="lbcu-headgroup">
                                    <h4 class="lbcu-title">Alerte de {{ users[1].firstName }} <span class='upper-txt'>{{ users[1].lastName }}</span></h4>
                                    <p class="lbcu-date" v-if="users[1].alertActive">Activée le 
                                        {{ users[1].alertDetails.date.getDate() + '/' + users[1].alertDetails.date.getMonth() + '/' + users[1].alertDetails.date.getFullYear() }}
                                        à
                                        {{ users[1].alertDetails.date.getHours() + ':' + users[1].alertDetails.date.getMinutes() + ':' + users[1].alertDetails.date.getSeconds() }}
                                    </p>
                                </div>
                                <!-- (mid content) -->
                                <div class="lbcu-contents">
                                    <p class="alert-txt-small"><strong>Type: </strong>{{ getAlertType(users[1].alertDetails.type) }}</p>
                                    <p class="alert-txt-small"><strong>Intervention: </strong>{{ getAlertStatus(users[1].alertDetails.status) }}</p>
                                </div>
                            </div>
                        </div>

                    </div>

                        <div class="loc-bloc __3" v-if="showPinThree">
                        <button type="button" class="pin-button" @click="toggleCard(3)" :disabled="!users[2].alertActive"><img class="pin-icon" src="@/assets/icons/pic-dark.webp" alt="pins de géolocalisation" /></button>
                        <div class="lb-container" v-if="showCardThree">
                            <div class="lbc-usercard">
                                <div class="lbcu-headgroup">
                                    <h4 class="lbcu-title">Alerte de {{ users[2].firstName }} <span class='upper-txt'>{{ users[2].lastName }}</span></h4>
                                    <p class="lbcu-date" v-if="users[2].alertActive">Activée le 
                                        {{ users[2].alertDetails.date.getDate() + '/' + users[2].alertDetails.date.getMonth() + '/' + users[2].alertDetails.date.getFullYear() }}
                                        à
                                        {{ users[2].alertDetails.date.getHours() + ':' + users[2].alertDetails.date.getMinutes() + ':' + users[2].alertDetails.date.getSeconds() }}
                                    </p>
                                </div>
                            </div>
                        </div>
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
        position: relative;
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

    /* Pins */
    .loc-bloc {
        position: absolute;
        display: flex;
        flex-direction: column;
        &.__1 {
            top: 2rem;
            left: 18rem;
        }
        &.__2 {
            top: 5rem;
            right: 4rem;
        }
        &.__3 {
            top: 15rem;
            left: 32rem;
        }
        .pin-button {
            background-color: transparent;
            border: transparent;
            cursor: pointer;
            transition: all 200ms ease-in;
            &:hover, &:focus {
                transform: scale(1.25);
            }
            .pin-icon {
                height: $fsize-l;
            }
        }
        /* Cards */
        .lb-container {
            position: relative;
            .lbc-usercard {
                position: absolute;
            }
        }

        .lbc-usercard {
            box-sizing: border-box;
            width: 260px;
            background-color: $primary;
            color: #fff;
            display: flex;
            flex-direction: column;
            padding: $space-m $space-s;
            border-radius: $radius-xs;
            font-size: $fsize-s;
            .lbcu-headgroup {
                text-transform: uppercase;
                margin-bottom: $space-m;
            }
        }
    }
</style>