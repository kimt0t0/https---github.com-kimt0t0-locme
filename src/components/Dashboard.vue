<script lang="ts" setup>
    import { ref } from 'vue';

    // Handle form state
    const editForm = ref<boolean>(false)
    const toggleForm = () => {
        editForm.value = !editForm.value
    }

    // User profile
    const userProfile = ref<any>(
        {
            business: "Hellfest",
            firstName: "Laurent",
            lastName: "Cizielsky",
            email: "lc-orga@hellfest.fr",
            phone: "06 70 34 56 78"
        }
    )
</script>

<template>
    <div class="dashboard-box">
        <!-- Title -->
        <h2 class="db-title">Mon tableau de bord</h2>
        <form class="db-form">
            <!-- Form headline -->
            <div class="edit-headline">
                <button v-if="!editForm" @click="toggleForm" type="button" class="db-edit-btn">
                    <Icon name="pen" />
                    Modifier
                </button>
                <button v-else @click="toggleForm" type="button" class="db-edit-btn">
                    <Icon name="xmark" />
                    Annuler
                </button>
                <!-- Form contents -->
                <!-- (business) -->
                <div class="dbf-line" v-if="userProfile.business">
                    <label class="dbfl-label" for="business">Entreprise :</label>
                    <input v-if="editForm" type="text" class="dbfl-input" id="business" :value="userProfile.business" />
                    <p v-else class="dbfl-txt">{{ userProfile.business }}</p>
                </div>
                <!-- (first name) -->
                <div class="dbf-line">
                    <label class="dbfl-label" for="firstName">Prénom :</label>
                    <input v-if="editForm" type="text" class="dbfl-input" id="firstName" :value="userProfile.firstName" />
                        <p v-else class="dbfl-txt">{{ userProfile.firstName }}</p>
                </div>
                <!-- (last name) -->
                <div class="dbf-line">
                    <label class="dbfl-label" for="lastName">Nom :</label>
                    <input v-if="editForm" type="text" class="dbfl-input" id="lastName" :value="userProfile.lastName" />
                        <p v-else class="dbfl-txt">{{ userProfile.lastName }}</p>
                </div>
                <!-- (email) -->
                <div class="dbf-line">
                    <label class="dbfl-label" for="email">E-mail :</label>
                    <input v-if="editForm" type="text" class="dbfl-input" id="email" :value="userProfile.email" />
                        <p v-else class="dbfl-txt">{{ userProfile.email }}</p>
                </div>
                <!-- (phone) -->
                <div class="dbf-line">
                    <label class="dbfl-label" for="phone">Téléphone :</label>
                    <input v-if="editForm" type="text" class="dbfl-input" id="phone" :value="userProfile.phone" />
                        <p v-else class="dbfl-txt">{{ userProfile.phone }}</p>
                </div>
                <!-- Form submit -->
            </div>
        </form>
    </div>
</template>

<style lang="scss">
    @use '@/styles/App.scss' as *;

    .dashboard-box {
        box-sizing: border-box;
        width: 40%;
        padding: $space-l;
        background-color: #000;
        border-radius: $radius-xxs;
    }

    .db-title {
        display: flex;
        justify-content: center;
        text-align: center;
        color: $primary;
        text-transform: uppercase;
        font-size: $fsize-m;
    }
</style>