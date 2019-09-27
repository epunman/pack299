// routes.js

import Home from './components/Home.vue';
import Events from './components/Events.vue';
import Event from './components/Event.vue';
import Formalities from './components/Formalities.vue';
import Tools from './components/Tools.vue';
import Communication from './components/Communication.vue';
import Login from './components/Login.vue';


const routes = [
    { path: '/', component: Home },
    { path: '/events', component: Events },
    { path: '/event/:id', component: Event},
    { path: '/login', component: Login },
    { path: '/formalities', component: Formalities},
    { path: '/tools', component: Tools},
    { path: '/communication', component: Communication},
];

export default routes;