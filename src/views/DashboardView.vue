<script lang="ts" setup>
    import { ref } from 'vue';

    // Fake datas
    // User profile
    const userProfile = ref<any>(
        {
            business: "Hellfest",
            firstName: "Laurent",
            lastName: "Cizielsky",
            email: "lc-orga@hellfest.fr",
            phone: "06 70 34 56 78",
            role: "ORGANIZER",
            avatar: "fakeuser.webp"
        }
    )


    // Handle avatar loading
    const loadAvatar = () => {
        document.getElementById('avatar')?.click()
    }

    // Handle show / hide dropdown contents
    const showOrders = ref<boolean>(false)
    const showBid = ref<boolean>(false)
    const showTeams = ref<boolean>(false)

    // (orders)
    const toggleOrders = () => {
        showOrders.value = !showOrders.value
        if (showOrders.value === true) {
            setBid(false)
            setTeams(false)
        }
    }
    const setOrders = (val: boolean) => {
        showOrders.value = val
        if (showOrders.value === true) {
            setBid(false)
            setTeams(false)
        }
    }
    // (bid)
    const toggleBid = () => {
        showBid.value = !showBid.value
        if (showBid.value === true) {
        setOrders(false)
        setTeams(false)
        }
    }
    const setBid = (val: boolean) => {
        showBid.value = val
        if (showBid.value === true) {
            setOrders(false)
            setTeams(false)
        }
    }
    // (teams)
    const toggleTeams = () => {
        showTeams.value = !showTeams.value
        if (showTeams.value === true) {
            setBid(false)
            setOrders(false)
        }
    }
    const setTeams = (val: boolean) => {
        showTeams.value = val
        if (showTeams.value === true) {
            setBid(false)
            setOrders(false)
        }
    }

</script>

<template>
    <section class="welcome-section">
        <!-- Title section -->
        <div class="classic-container ws-container">
            <h1 class="dashboard-title">Ravi·e de vous revoir !</h1>
        </div>
    </section>
        <!-- Actions section -->
        <section class="action-section">
            <div class="classic-container as-container">
                <!-- (Dashboard) -->
                <div class="dashboad-ctn">
                    <Dashboard />
                </div>
                <!-- (Right side) -->
                <div class="as-right-ctn">
                    <!-- (( avatar form )) -->
                    <form class="avatar-form">
                        <Button color="transparent-white" size="medium" type="button" @click="loadAvatar">Modifier mon avatar</Button>
                        <input type="file" class="avatar-input" id="avatar" hidden />
                    </form>
                    <!-- (( dropdown buttons )) -->
                    <!-- ((( orders ))) -->
                    <div class="dropdown-bloc">
                        <Button class="dropdown-btn" color="primary" size="dropdown" type="button" @click="toggleOrders">
                            Mes commandes LocMe
                            <Icon icon="sort-down" id="orders-dd-icon __down" />
                                <!-- <Icon v-else icon="sort-up" id="orders-dd-icon __up" /> -->
                        </Button>
                        <div class="content-container">
                            <DashboardOrder v-if="showOrders" />
                        </div>
                    </div>
                    <!-- ((( bid ))) -->
                    <div class="dropdown-bloc">
                        <Button class="dropdown-btn" color="primary" size="dropdown" type="button" @click="toggleBid">
                            Mon devis
                            <Icon icon="sort-down" id="devis-dd-icon" />
                        </Button>
                        <div class="content-container">
                            <div v-if="showBid" class="dropdown-content-box">2</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="classic-section teams-section">
                <!-- ((( teams large dropdown))) -->
                <div class="dropdown-bloc">
                    <Button class="dropdown-btn __large" color="primary" size="dropdown-large" type="button" @click="toggleTeams">
                        Mes équipes
                        <Icon icon="sort-down" id="devis-dd-icon" />
                    </Button>
                    <div class="content-container">
                        <DashboardTeams v-if="showTeams" />
                    </div>
                </div>
            </div>
        </section>
        <!-- Map section -->
</template>

<style lang="scss">
    @use '@/styles/App.scss' as *;

    /* Title section */
    .welcome-section {
        background-color: lighten($primary, 40%);
        .ws-container {
            max-width: $classic-ctn;
            padding: $space-xl 0;
            display: flex;
            justify-content: center;
            align-items: center;
            .dashboard-title {
                text-transform: uppercase;
            }
        }
    }

    /* Action section */
    .action-section {
        width: 100%;
        padding-bottom: $space-xl;
        background: url('@/assets/images/background-grey.webp') no-repeat;
        background-size: cover;
        .as-container {
            padding: $space-xxl 0;
            display: flex;
            justify-content: space-between;
            /* Dashboard box */
            .dashboard-ctn {
                width: 40%;
            }
        }
    }

    /* Dropdowns */
    .dropdown-bloc {
        width: fit-content;
        height: fit-content;
        min-height: fit-content;
        &.__subbloc {
            width: 100%;
        }
        .content-container {
            width: 100%;
            position: relative;
        }
        .dropdown-content-box {
            box-sizing: border-box;
            width: 100%;
            height: fit-content;
            padding: $space-m;
            background-color: #fff;
            border-radius: $radius-xxs;
            position: absolute;
            z-index: 1;
           top: 0;
        }
    }

    /* Teams section */
    .teams-section {
        display: flex;
        justify-content: center;
    }

    /* Dropdown buttons */
    .dropdown-btn {
        position: relative;
        display: flex;
        align-items: center;
        > svg {
            width: 15px;
            height: 25px;
            position: absolute;
            right: $space-m;
            bottom: $space-m;
        }
    }
</style>