<script lang="ts" setup>
    import { ref } from 'vue';

    const showPassword = ref<boolean>(true)
    const toggleShowPassword = () => {
        showPassword.value = !showPassword.value
    }

    const festivalsCounter = ref<number>(0)

    const addFestival = () => {
        festivalsCounter.value += 1;
    }
</script>

<template>
    <section class="signup-section">
        <div class="signup-containter classic-container">
            <h1 class="signup-view-title">Inscription</h1>
            <p class="signup-welcome-txt">Nous sommes heureux·ses de vous accueillir dans l'équipe LocMe</p>
    
            <form class="signup-form">
                <!-- LINE 1 -->
                <div class="sf-line">
                    <!-- Username -->
                    <div class="sf-input-group">
                        <label class="form-label" for="username">Pseudo:</label>
                        <input class="form-input" id="username" placeholder="kimt0t0" /> 
                    </div>
                    <!-- Password -->
                    <div class="sf-input-group">
                        <label class="form-label" for="password">Mot de passe:</label>
                        <div class="form-input">
                            <input :type="showPassword ? 'password' : 'text'" id="password" class="password-input" placeholder="kimropass" />
                            <button type="button" class="password-btn" @click="toggleShowPassword"><Icon :icon="showPassword ? 'fa-eye' : 'fa-eye-slash'" /></button>
                        </div> 
                    </div>
                </div>
                <!-- LINE 2 -->
                <div class="sf-line">
                    <!-- Email -->
                    <div class="sf-input-group">
                        <label class="form-label" for="email">Email:</label>
                        <input class="form-input" id="email" placeholder="kim@locme.fr" /> 
                    </div>
                    <!-- Nom de l'entreprise / association -->
                    <div class="sf-input-group">
                        <label class="form-label" for="business">Entreprise / Association :</label>
                        <input class="form-input" id="business" placeholder="Hellfest" /> 
                    </div>
                </div>
                <!-- Festivals -->
                <div class="sf-festivals">
                    <div class="sff-btn-ctn">
                        <Button type="button" color="white" class="add-festival" @click="addFestival">+</Button>
                    </div>
                    <div v-for="index of festivalsCounter" class="sff-line">
                        <label class="form-label">Nom du festival:</label>

                    </div>
                </div>
                <!-- Submission -->
                <div class="submit-group">
                    <!-- <Button color="primary" size="large">Je m'inscris</Button> -->
                    <ButtonLink to="/groupes/ajouts/admin" color="primary" size="large">Je m'inscris</ButtonLink>
                    <ButtonLink to="/connexion" color="transparent" size="medium">Revenir à la page de connexion</ButtonLink>
                </div>
            </form>
        </div>
    </section>
</template>

<style lang="scss">
    @use '@/styles/App.scss' as *;

    .signup-section {
        background-color: lighten($primary, 42%);
        display: flex;
        padding: $space-xxl 0;
        .signup-container {
            display: flex;
            flex-direction: column;
        }
    }

    .signup-view-title {
        text-transform: uppercase;
        color: darken($grey, 20%);
        font-size: $fsize-l;
        text-align: center;
    }

    .signup-welcome-txt {
        text-transform: uppercase;
        font-size: $fsize-m;
        font-weight: 600;
        color: $primary;
        margin: $space-l 0;
    }

    .sf-line {
        display: flex;
        justify-content: space-between;
    }

    .sf-input-group {
        margin: $space-m $space-l $space-m 0;
        width: 350px;
    }
</style>