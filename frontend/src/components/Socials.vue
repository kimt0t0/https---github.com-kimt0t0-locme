<script lang="ts" setup>
const socials: {
    name: String,
    icon: String,
    path: any
}[] = [
    {
        name: 'Facebook',
        icon: 'globe',
        path: '#'
    },
    {
        name: 'Instagram',
        icon: 'globe',
        path: '#'
    },
    {
        name: 'Twitter',
        icon: 'globe',
        path: '#'
    },
    {
        name: 'TikTok',
        icon: 'globe',
        path: '#'
    }
]
</script>

<template>
    <div class="socials-list">
        <a  v-for="social in socials" class="social-link" :href="social.path" target="_blank" :title="'Visitez notre page' + social.name">
            <Icon :icon="social.icon" />
        </a>
    </div>
</template>

<style lang="scss">
@use '@/styles/App.scss' as *;

.socials-list {
    display: flex;
    .social-link {
        font-size: $fsize-m;
        color: white;
        text-decoration: none;
        margin: 0 $space-s;
        transition: all 300ms ease-in;
        &:hover, &:focus {
            color: $primary;
            transform: rotate(8deg);
        }
    }
}
</style>