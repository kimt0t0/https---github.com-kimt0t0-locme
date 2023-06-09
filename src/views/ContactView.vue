<script lang="ts" setup>
    import { ref } from 'vue';

    // Toggle alert variables
    const showSuccessAlert = ref<boolean>(false);
    const showBusinessAlert = ref<boolean>(false);
    const showlastNameAlert = ref<boolean>(false);
    const showfirstNameAlert = ref<boolean>(false);
    const showEmailAlert = ref<boolean>(false);
    const showPhoneAlert = ref<boolean>(false);
    const showMessageAlert = ref<boolean>(false);

    
    // Onsubmit function
    const onContactSubmit = (contactDatas) => {

    }
</script>

<template>
    <section class="section-contact">
        <div class="sc-container">
            <h1 class="sc-title">Contact</h1>

            <div class="sc-intro-bloc">
                <h2 class="sc-subtitle">Une question, envie d'échanger et collaborer avec nous ?</h2>
                <p class="scs-txt">Envoyez-nous votre requête, nous faisons notre maximum pour vous répondre sous 48 heures (jours ouvrés)</p>
            </div>

            <div class="sc-form-container">
                <p class="scf-info">Tous les champs marqués d'un * sont obligatoires</p>
                <form class="sc-form" :onsubmit="onContactSubmit">
    
                    <input class="scf-input" placeholder="Nom de l'entreprise *" id="business" />
                    <input class="scf-input" placeholder="Nom du responsable ou représentant légal *" id="lastName" />
                    <input class="scf-input" placeholder="Prénom du responsable ou représentant légal *" id="firstName" />
                    <input class="scf-input" placeholder="Email *" id="email" />
                    <input class="scf-input" placeholder="Téléphone *" id="phone" />
                    <textarea class="scf-textarea" id="message" placeholder="Votre message"></textarea>
                    
                    <div class="scf-checkgroup">
                        <input class="scf-checkbox" type="checkbox" id="consent" name="consent" />
                        <label class="scf-label" for="consent">J'accepte que mes données saisies soient réutilisées à des fins d'information*</label>
                    </div>
                    <input class="scf-input __honey" placeholder="Honey Pot" id="honeyPot" /> 
    
                    <div class="scf-submit-ctn">
                        <Button color="primary " size="large">Envoyer</Button>
                    </div>
                </form>
            </div>

        </div>
    </section>
</template>

<style lang="scss">
    @use '@/styles/App.scss' as *;

    .section-contact {
        background-color: rgba(0, 0, 0, 0.8);
    }

    .sc-container {
        max-width: 920px;
        margin: 0 auto;
        padding: $space-xl $space-s;
        color: #fff;
    }
    .sc-title {
        font-size: $fsize-xl;
        text-transform: uppercase;
        text-align: center;
    }

    .sc-intro-bloc {
        .sc-subtitle {
            color: $primary;
            font-size: $fsize-m;
            text-transform: uppercase;
        }
        .scs-txt {
            color: #fff;
            font-weight: 800;
        }
    }

    .sc-form-container {
        display: flex;
        flex-direction: column;
        margin: $space-l 0;
        .sc-form {
            box-sizing: border-box;
            margin: $space-xs 0;
            padding: $space-xxxl $space-xxl;
            border-radius: $radius-xxs;
            display: flex;
            flex-direction: column;
            background-color: lighten($primary, 40%);
            color: $grey;

            @media (max-width: $bp-m) {
                padding: $space-xl $space-m;
            }
            .scf-checkgroup {
                .scf-checkbox {
                    margin-right: $space-s;
                    cursor: pointer;
                }
            }
            .scf-input, .scf-textarea {
                border: 1px solid $grey;
                border-radius: $radius-s;
                padding: $space-m $space-s;
                margin: $space-s 0;
            }
            .scf-textarea {
                height: 200px;
            }
            .scf-submit-ctn {
                display: flex;
                justify-content: center;
            }
        }
    }
</style>