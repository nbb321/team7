<template>
    <div class="app">
        <headercom></headercom>
        <listcom></listcom>
        <sectioncom></sectioncom>
    </div>
        
</template>

<script>
import headercom from "./headercom.vue";
import listcom from "./listcom.vue";
import sectioncom from "../sectioncom.vue";
export default {
    components:{
        headercom,
        listcom,
        sectioncom
    }
}
</script>

<style>
html,
body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
}
.app {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>
