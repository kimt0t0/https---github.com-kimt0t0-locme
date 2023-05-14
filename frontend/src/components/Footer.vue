<script lang="ts" setup>
    // links data
    const footerLinks: {title: String, path: any}[] = [
        {
            title: 'Mentions légales',
            path: '/mentions-legales'
        },
        {
        title: 'Politique de confidentialité',
        path: '/confidentialite'
        },
    {
        title: 'FAQ',
        path: '/faq'
    }
    
    ]
    // our info data
    const ourInfo: String[] = [
        'LocMe',
        'Les Mandarines / MDP',
        'My Digital School Nantes',
        '4 allée de la Chatterie',
        '44800 Saint-Herblain'
    ]
</script>

<template>
    <footer class="footer">
        <!-- COLUMN 1 -->
        <div class="footer-column">
            <Socials />
        </div>
            <!-- COLUMN 2 -->
        <div class="footer-column">
            <ul class="fc-list-links">
                <li class="fcll-item" v-for="link in footerLinks">
                    <RouterLink class="footer-link" :to="link.path" title="Visiter la page">{{ link.title }}</RouterLink>
                </li>
            </ul>
        </div>
            <!-- COLUMN 3 -->
        <div class="footer-column">
            <p class="footer-txt"><strong>Nous trouver</strong></p>
            <p class="footer-txt" v-for="infoline in ourInfo">{{ infoline }}</p>
        </div>
    </footer>
</template>

<style lang="scss">
@use '@/styles/App.scss' as *;

.footer {
    box-sizing: border-box;
    margin: 0 auto;
    padding: $space-s $space-m;
    background-color: #000;
    color: white;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo-footer {
        width: 80px;
    }
    .footer-link {
        color: white;
        text-decoration: none;
        font-size: 14px;
        line-height: 2;
        &:hover, &:focus {
            text-decoration: underline;
        }
    }
    .footer-txt {
        line-height: 1.5;
    }
}
</style>