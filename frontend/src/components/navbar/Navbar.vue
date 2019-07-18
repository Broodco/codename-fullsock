<template>
    <nav>
        <q-toolbar class="bg-primary text-white flex flex-center q-pb-sm" height="60px">
            <q-toolbar-title class="font-squada">Broodco</q-toolbar-title>
                <q-tabs
                    v-model="activeTab"
                    align="justify"
                    stretch
                    @click="$emit('update:currentTab', activeTab);"
                >
                    <q-tab
                        name="home"
                        label="HOME"
                    />
                    <q-tab
                        name="about"
                        label="ABOUT"
                    />
                    <q-tab
                        name="portfolio"
                        label="PORTFOLIO"
                    />
                    <q-tab
                        name="resume"
                        label="RESUME"
                    />
                    <q-tab
                        name="contact"
                        label="CONTACT"
                    />
                </q-tabs>
        </q-toolbar>
    </nav>
</template>
<script src="dist/vue-scrollactive.min.js"></script>
<script>
export default {
    name: "Navbar",
    data() {
        return {
            activeTab: this.currentTab,
        }
    },
    props: {
        currentTab: String
    }
}
</script>

<style scoped>
.borderBot{
    border-bottom: 10px;
    border-bottom-color: black;
}
</style>
