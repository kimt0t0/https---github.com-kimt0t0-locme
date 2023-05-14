// IMPORTS
// Modules
import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faGlobe, faWifi } from '@fortawesome/free-solid-svg-icons'
// Internal
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// Components
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Button from '@/components/Button.vue'
import ButtonLink from '@/components/ButtonLink.vue'
import CtaBloc from '@/components/CtaBloc.vue'
import Functions from '@/components/Functions.vue'
import HeroSecondary from '@/components/HeroSecondary.vue'
import Reassurance from '@/components/Reassurance.vue'
import Socials from '@/components/Socials.vue'

// LOGIC
// add icons to app library
library.add(faUser, faGlobe, faWifi)

// create app
const app = createApp(App)

// app use modules
app.use(store)
  .use(router)

// add global components
app.component('Icon', FontAwesomeIcon)
  .component('Button', Button)
  .component('ButtonLink', ButtonLink)
  .component('CtaBloc', CtaBloc)
  .component('Functions', Functions)
  .component('HeroSecondary', HeroSecondary)
  .component('Reassurance', Reassurance)
  .component('Socials', Socials)

// mount app
app.mount('#app')
