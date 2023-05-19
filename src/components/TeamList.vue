<script lang="ts" setup>
    import { ref } from 'vue';

    // Fake data
    const team = ref<any>([
        {
            id: 1,
            photo: new URL("@/assets/users/thomassi.webp", import.meta.url).href,
            lastName: "Thomassi",
            firstName: "Thomas",
            job: "Directeur de la sécurité",
            phone: "06 70 12 34 56",
            accessHealth: true
        },
    {
        id: 2,
        photo: '',
        lastName: "Marquet",
        firstName: "Sophie",
        job: "Responsable de la sécurité",
        phone: "06 70 78 90 12",
        accessHealth: true
    },
    {
        id: 3,
        photo: '',
        lastName: "Pastaff",
        firstName: "Suzie",
        job: "Bénévole",
        phone: "06 70 32 45 67",
        accessHealth: false
    },
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
                <img v-if="member.photo" :src="member.photo" class="tm-photo" alt="Photographie de l'utilisateur" />
                <div v-else class="tm-photo-frame"></div>
                <!-- (( photo form)) -->
                <form class="avatar-form">
                    <button type="button" class="avatar-btn" @click="loadAvatar">Télécharger / changer la photo</button>
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

<style lang="scss">
    @use '@/styles/App.scss' as *;

    /* List */
    .team-list {
        background-color: lighten($primary, 42%);
        padding: $space-l $space-m;
        /* Card */
        .tl-item {
            box-sizing: border-box;
            width: 100%;
            height: 280px;
            border: 2px solid $grey;
            background-color: #fff;
            padding: $space-m $space-l;
            display: flex;
            /* Image group */
            .photo-box {
                display: flex;
                flex-direction: column;
                flex: 1;
                .tm-photo {
                    width: 100%;
                    height: 90%;
                    border-radius: 4rem 4rem 0 0;
                    object-fit: cover;
                }
                .tm-photo-frame {
                    width: 100%;
                    height: 90%;
                    background-color: #fffaef;
                    border: 2px solid $grey;
                    border-radius: $radius-xxs;
                }
                .avatar-form {
                    padding: $space-s 0;
                    display: flex;
                    justify-content: center;
                    .avatar-btn {
                        cursor: pointer;
                        background-color: transparent;
                        border: transparent;
                        color: $dark;
                        font-size: $fsize-xs;
                        text-decoration: underline;
                        &:hover, &:focus {
                            text-decoration: none;
                        }
                    }
                }
            }
            /* User details */
            .tm-details {
                display: flex;
                flex-direction: column;
                flex: 5;
                padding-left: $space-l;
                color: $grey;
                .tmd-headline {
                    display: flex;
                    justify-content: space-between;
                }
                .tmt-txt {
                    line-height: 2;
                }
            }
        }
    }
</style>