<template>
<q-layout view="hHh lpr fFf">
    <q-header reveal class="bg-primary text-white">
        <q-toolbar>
            <q-toolbar-title class="font-squada">
                Broodco's Website
            </q-toolbar-title>
            <q-space/>
        </q-toolbar>
    </q-header>

    <q-page-container>
        <router-view />
    </q-page-container>

    <q-footer bordered class="bg-primary text-white">
        <q-tabs v-model="tab" align="justify">
            <q-route-tab to="/" name="home" label="Home"/>
            <q-route-tab to="/resume" name="resume" label="Resume"/>
            <q-route-tab to="/portfolio" name="portfolio" label="Portfolio"/>
            <q-route-tab to="/contact" name="contact" label="Contact"/>
        </q-tabs>
    </q-footer>

</q-layout>
</template>

<script>
export default {
    data () {
        return {
            left: true,
            tab: '',
            menuList
        }
    }
}

const menuList = [
    {
        icon: 'home',
        label: 'Home',
        separator: true
    },
    {
        icon: 'person',
        label: 'Resume',
        separator: false
    },
    {
        icon: 'important_devices',
        label: 'Portfolio',
        separator: false
    },
    {
        icon: 'contact_mail',
        label: 'Contact',
        separator: false
    }
]
</script>
