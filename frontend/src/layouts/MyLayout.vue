<template>
<q-layout view="hHh LpR fFf">
    <q-header reveal class="bg-primary text-white">
        <q-toolbar>
            <q-btn dense flat round icon="menu" @click="left = !left" class="lt-md"/>
            <q-toolbar-title>
                Broodco's Website
            </q-toolbar-title>
            <q-space/>
            <q-tabs v-model="tab" class="gt-xs">
                <q-tab name="home" label="Home"/>
                <q-tab name="resume" label="Resume"/>
                <q-tab name="portfolio" label="Portfolio"/>
                <q-tab name="contact" label="Contact"/>
            </q-tabs>
        </q-toolbar>
    </q-header>

    <q-drawer
        v-model="left"
        side="left"
        overlay
        behavior="desktop"
        bordered
        class="lt-md"
    >
        <q-scroll-area class="fit">
            <q-list v-for="(menuItem, index) in menuList" :key="index">
                <q-item clickable :active="menuItem.label === 'Outbox'">
                    <q-item-section avatar>
                        <q-icon :name="menuItem.icon"/>
                    </q-item-section>
                    <q-item-section>
                        {{ menuItem.label }}
                    </q-item-section>
                </q-item>
                <q-separator v-if="menuItem.separator" />
            </q-list>
        </q-scroll-area>
    </q-drawer>

    <q-page-container>
        <router-view />
    </q-page-container>
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
