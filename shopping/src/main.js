import "./font/iconfont.css"
import Vue from 'vue';
import headercom from './components/headercom.vue';
import footercom from './components/footercom.vue';
import sectioncom from './sectioncom.vue';
new Vue({
    el: '#wrapper',
    components: {
        headercom,
        footercom,
        sectioncom
    }
})