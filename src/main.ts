// IMPORTS
// Modules
import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faGlobe, faWifi } from '@fortawesome/free-solid-svg-icons'
// import { } from '@fortawesome/free-regular-svg-icons'
// import { } from '@fortawesome/free-brands-svg-icons'
// Internal
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// Components
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Button from '@/components/Button.vue'
import ButtonLink from '@/components/ButtonLink.vue'
import ClassicList from '@/components/ClassicList.vue'
import CtaBloc from '@/components/CtaBloc.vue'
import Customers from '@/components/Customers.vue'
import Dashboard from '@/components/Dashboard.vue'
import Functions from '@/components/Functions.vue'
import HeroSecondary from '@/components/HeroSecondary.vue'
import HowTo from '@/components/HowTo.vue'
import NumberedList from '@/components/NumberedList.vue'
import PrezDashboard from '@/components/PrezDashboard.vue'
import PrezFind from '@/components/PrezFind.vue'
import Reassurance from '@/components/Reassurance.vue'
import Socials from '@/components/Socials.vue'

// LOGIC
// add icons to app library
library.add(faUser, faGlobe, faWifi)

// create app
const app = createApp(App)
// const pinia = createPinia()
// app use modules
// app.use(pinia)
app.use(store)
  .use(router)

// add global components
app.component('Icon', FontAwesomeIcon)
  .component('Button', Button)
  .component('ButtonLink', ButtonLink)
  .component('ClassicList', ClassicList)
  .component('CtaBloc', CtaBloc)
  .component('Customers', Customers)
  .component('Dashboard', Dashboard)
  .component('Functions', Functions)
  .component('HeroSecondary', HeroSecondary)
  .component('HowTo', HowTo)
  .component('NumberedList', NumberedList)
  .component('PrezDashboard', PrezDashboard)
  .component('PrezFind', PrezFind)
  .component('Reassurance', Reassurance)
  .component('Socials', Socials)

// mount app
app.mount('#app')
