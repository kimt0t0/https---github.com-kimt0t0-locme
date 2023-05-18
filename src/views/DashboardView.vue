<script lang="ts"></script>

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
                <Dashboard />
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
        background: url('@/assets/images/background-grey.webp') no-repeat;
        background-size: cover;
        .as-container {
            padding: $space-xxl 0;
        }
    }
</style>