<script lang="ts" setup>
    import { ref } from 'vue';
    import formType from '@/enums/formType'
    
    let backgroundImage = require('@/assets/images/bracelets-01.jpg')
    const formChoice = ref<string>(formType.LOGIN);

    const setFormChoice = (val: string) => {
        switch (val) {
            case 'signin':
                backgroundImage = require('@/assets/images/bracelets-01.jpg')
                formChoice.value = formType.LOGIN
                break
            case 'signup':
                backgroundImage = require('@/assets/images/background-grey.webp')
                formChoice.value = formType.SIGNUP
                break
            default:
                backgroundImage = require('@/assets/images/bracelets-01.jpg')
                formChoice.value = formType.LOGIN
                break
        }
    }

</script>

<template>
    <section class="user-section" :style="{ 'background-image': `url(${backgroundImage})` }">
        <!-- Login -->
        <div  v-if="formChoice === 'login'" class="us-signin-container">
            <div class="ussc-content-box">
                <div class="ussc-card">
                    <!-- Form -->
                    <SigninForm />
                    <!-- Cards -->
                    <div class="usscc-links">
                        <div class="toggle-form-group">
                            <p class="usscc-small-txt">Nouvelle inscription ?</p>
                            <button class="usscc-small-link" @click="setFormChoice('signup')">Créer un compte !</button>
                        </div>
                        <RouterLink v-if="formChoice === 'login'" class="usscc-small-link" to="">Mot de passe oublié ?</RouterLink>
                    </div>
                </div>
                <div class="caution-box">
                    <p class="caution-txt">En vous connectant ou en créant un nouveau compte, vous acceptez notre <RouterLink to="">Politique de confidentialité</RouterLink></p>
                </div>
            </div>
        </div>
        <!-- Signup -->
        <div v-else class="us-signup-container">
            <SignupChoice />
            <div class="usfc-links">
                <div class="toggle-form-group">
                    <button class="usfc-small-link" @click="setFormChoice('signin')">J'ai déjà un compte</button>
                </div>
                <div class="caution-box">
                    <p class="caution-txt">En vous connectant ou en créant un nouveau compte, vous acceptez notre <RouterLink to="">Politique de confidentialité</RouterLink></p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    @use '@/styles/App.scss' as *;

    .user-section {
        min-height: 470px;
        background-repeat: no-repeat;
        background-size: cover;
    }

    /* Signin */
    .us-signin-container {
        box-sizing: border-box;
        width: 100%;
        padding: $space-l;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        .ussc-content-box {
            margin-right: 140px;
            width: 480px;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
        }
        .ussc-card {
            box-sizing: border-box;
            background-color: #fff;
            color: $grey;
            padding: $space-l $space-m;
            border-radius: $radius-xs;
            width: 480px;
        }
    }

    .usscc-links {
        box-sizing: border-box;
        margin: $space-m 0 $space-xxl;
        display: flex;
        flex-direction: column;
        align-items: center;
        .toggle-form-group {
            display: flex;
        }
        .usscc-small-txt, .usscc-small-link {
            color: $grey;
            font-size: $fsize-xs;
            font-style: italic;
            font-weight: 600;
        }
        .usscc-small-link {
            border: none;
            background-color: transparent;
            text-decoration: underline;
            cursor: pointer;
            transition: all 200ms ease-in;
            &:hover, &:focus {
                color: $primary;
            }
        }
    }

    /* Signup */
    .us-signup-container, .usfc-links {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: $space-m 0;
        .usfc-small-link {
            border: none;
            background-color: transparent;
            cursor: pointer;
            font-size: $fsize-s;
            color: #fff;
            text-decoration: underline;
            &:hover, &:focus {
                color: $primary;
            }
        }
    }

    /* Caution Text */
    .caution-txt {
        font-size: $fsize-xs;
        font-style: italic;
        color: #fff;
        >a {
            color: #fff;
            transition: all 200ms ease-in;
            &:hover, &:focus {
                color: $primary;
            }
        }
    }
</style>