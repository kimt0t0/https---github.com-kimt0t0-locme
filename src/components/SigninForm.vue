<script lang="ts" setup>
    import { ref } from 'vue';

    const showPassword = ref<boolean>(true)
    const toggleShowPassword = () => {
        showPassword.value = !showPassword.value
    }
</script>

<template>
    <div class="signin-container">
        <h2 class="form-title">Se connecter</h2>
        <form class="signin-form">
            <input type="text" id="username" class="form-input" placeholder="kimro" />
            <div class="form-input">
                <input :type="showPassword ? 'password': 'text'" id="password" class="password-input" placeholder="kimropass" />
                <button type="button" class="password-btn" @click="toggleShowPassword"><Icon :icon="showPassword ? 'fa-eye': 'fa-eye-slash'" /></button>
            </div>
            <input type="text" class="form-input __honey" placeholder="honeykim" />
            <div class="submit-ctn">
                <ButtonLink to="/mon-compte" class="submit-btn" color="primary" size="large">Me connecter</ButtonLink>
                <!-- <Button class="submit-btn" color="primary" size="large">Me connecter</Button> -->
            </div>
        </form>
    </div>
</template>

<style lang="scss">
    @use '@/styles/App.scss' as *;

    .form-title {
        text-transform: uppercase;
        font-size: $fsize-l;
        color: darken($grey, 20%);
        display: flex;
        justify-content: center;
        align-items: center;
        margin: $space-xl auto;
        line-height: 1;
    }

    .form-input {
        margin: $space-s 0;
        width: 100%;
    }

    .__honey {
        cursor: default;
        opacity: 0;
    }

    .submit-ctn {
        display: flex;
        justify-content: center;
        .submit-btn {
            width: 60%;
        }
    }
</style>