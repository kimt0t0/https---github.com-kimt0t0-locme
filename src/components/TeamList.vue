<script lang="ts" setup>
    import { ref } from 'vue';

    // Fake data
    const team = ref<any>([
        {
            id: 1,
            photo: '',
            lastName: "Thomassi",
            firstName: "Thomas",
            job: "Directeur de la sécurité",
            phone: "06 70 12 34 56",
            accessHealth: true
        }
    ])

    // Handle avatar loading
    const loadAvatar = () => {
        document.getElementById('avatar')?.click()
    }
</script>

<template>
    <ol class="team-list">
        <!-- card -->
        <li v-for="member of team" class="tl-item">
            <!-- photo -->
            <div class="photo-box">
                <img :src="member.photo" class="tm-photo" alt="Photographie de l'utilisateur" />
                <!-- (( photo form)) -->
                <form class="avatar-form">
                    <Button color="transparent-white" size="medium" type="button" @click="loadAvatar">Modifier mon avatar</Button>
                    <input type="file" class="avatar-input" id="avatar" hidden />
                </form>
            </div>
            <!-- details -->
            <div class="tm-details">
                <div class="tmd-headline">
                    <p class="tmd-txt"><strong>Nom: </strong>{{member.lastName }}</p>
                    <p class="tmd-txt"><strong>Accès infos santé: </strong>{{ member.accessHealth ? "Oui" : "Non" }}</p>
                </div>
                <p class="tmd-txt"><strong>Prénom: </strong>{{ member.firstName }}</p>
                <p class="tmd-txt"><strong>Poste: </strong>{{ member.job }}</p>
                <p class="tmd-txt"><strong>Téléphone: </strong>{{ member.phone }}</p>
            </div>
        </li>
    </ol>
</template>

<style lang="scss"></style>