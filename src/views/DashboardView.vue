<script lang="ts" setup>
    import { ref } from 'vue';

    // Fake user profile
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

    // Handle show / hide avatar form
    const loadAvatar = () => {
        document.getElementById('avatar')?.click()
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
                    <Button class="dropdown-btn" color="primary" size="dropdown" type="button">
                        Mes commandes LocMe
                        <Icon icon="sort-down" id="orders-dd-icon" />
                    </Button>
                    <Button class="dropdown-btn" color="primary" size="dropdown" type="button">
                        Mon devis
                        <Icon icon="sort-down" id="devis-dd-icon" />
                    </Button>
                </div>
            </div>
            <div class="classic-section teams-section">
                <Button class="dropdown-btn" color="primary" size="dropdown-large" type="button">
                    Mes équipes
                    <Icon icon="sort-down" id="devis-dd-icon" />
                </Button>
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
            /* Right side */
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