<script lang="ts" setup></script>

<template>
    <div class="signin-container">
        <h2 class="signup-title">S'inscrire</h2>
        <div class="form-choice">
            <ButtonLink class="fc-btn" to="inscription/orga" color="primary" size="square"><span class="smaller-txt">Vous êtes</span>ORGANISATEUR / ENTREPRISE</ButtonLink>
            <ButtonLink class="fc-btn" to="inscription/fest" color="primary" size="square"><span class="smaller-txt">Vous êtes</span>UN·E FESTIVALIER·E</ButtonLink>
        </div>
    </div>
</template>

<style lang="scss">
    @use '@/styles/App.scss' as *;

    .signup-title {
        text-transform: uppercase;
        font-size: $fsize-l;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: $space-xl auto;
        line-height: 1;
    }

    .form-choice {
        display: flex;
        justify-content: space-around;
        margin-bottom: $space-xxl;
        .fc-btn {
            margin: 0 $space-m;
            display: flex;
            flex-direction: column;
            .smaller-txt {
                font-size: $fsize-xs;
            }
        }
    }

    .caution-txt {
        font-size: $fsize-xs;
        font-style: italic;
        color: #fff;
    }
</style>