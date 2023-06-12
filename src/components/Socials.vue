<script lang="ts" setup>
const socials: {
    name: String,
    icon: String,
    path: any
}[] = [
    {
        name: 'Facebook',
        icon: require('@/assets/icons/sn-facebook.webp'),
        path: 'http://www.facebook.com/profile.php?id=100093000543596'
    },
    {
        name: 'Instagram',
        icon: require('@/assets/icons/sn-instagram.webp'),
        path: 'https://www.instagram.com/locme_officiel'
    },
    {
        name: 'LinkedIn',
        icon: require('@/assets/icons/sn-linkedin.webp'),
        path: 'https://www.linkedin.com/company/locme/'
    },
    {
        name: 'TikTok',
        icon: require('@/assets/icons/sn-tiktok.webp'),
        path: '#'
    }
]
</script>

<template>
    <div class="socials-list">
        <a  v-for="social in socials" class="social-link" :href="social.path" target="_blank" :title="'Visitez notre page' + social.name">
            <img :src="social.icon" class="social-icon" :alt="'icone du réseau social ' + social.name" />
        </a>
    </div>
</template>

<style lang="scss">
@use '@/styles/App.scss' as *;

.socials-list {
    display: flex;
    .social-link {
        text-decoration: none;
        margin: 0 $space-s;
        transition: all 300ms ease-in;
        .social-icon {
            height: $fsize-l;
        }
        &:hover, &:focus {
            transform: rotate(12deg);
        }
    }
}
</style>