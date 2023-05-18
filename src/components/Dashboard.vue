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
            phone: "06 70 34 56 78",
            role: "ORGANIZER"
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
                    <Icon icon="pencil" />
                    Modifier
                </button>
                <button v-else @click="toggleForm" type="button" class="db-edit-btn">
                    <Icon icon="xmark" />
                    Annuler
                </button>
            </div>
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
                <div v-if="editForm" class="form-submit-ctn">
                    <Button class="fsc-btn" color="primary" size="medium" type="submit">
                        <Icon icon="floppy-disk" />
                        Enregistrer les modifications
                    </Button>
                </div>
        </form>
    </div>
</template>

<style lang="scss">
    @use '@/styles/App.scss' as *;

    .dashboard-box {
        box-sizing: border-box;
        min-width: 500px;
        width: 100%;
        padding: $space-xxl $space-xl;
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

    /* FORM */
    .db-form {
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: $space-xxl 0 0;
        /* Form - headline */
        .edit-headline {
            display: flex;
            justify-content: flex-end;
        }
        /* Form - content */
        .dbf-line {
            display: flex;
            color: #fff;
            font-size: $fsize-xs;
            margin: $space-m;
            .dbfl-label {
                font-weight: 700;
                width: 120px;
            }
            .dbfl-input {
                background-color: $dark;
                color: #fff;
                border: 2px solid darken($dark, 15%);
                border-radius: $radius-xs;
                padding: $space-xs $space-s;
            }
        }
    }

    /* Buttons */
    /* (edit) */
    .db-edit-btn {
        box-sizing: border-box;
        min-width: 60px;
        min-height: 60px;
        padding: $space-s;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        background-color: transparent;
        border: 1px solid transparent;
        border-radius: $radius-s;
        cursor: pointer;
        transition: all 300ms ease-in;
        >svg {
            height: 18px;
            margin-bottom: $space-xs;
        }
        &:hover, &:focus {
            color: $primary;
            border: 1px solid $primary;
        }
    }
    /* (submit) */
    .form-submit-ctn {
        margin-top: $space-xl;
        display: flex;
        justify-content: center;
        .fsc-btn > svg {
            margin-right: $space-s;
        }
    }
</style>