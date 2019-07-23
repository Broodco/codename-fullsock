<template>
    <nav>
        <q-toolbar class="bg-primary text-white flex flex-center q-pb-sm borderbot" height="60px">
            <q-toolbar-title class="font-squada gt-sm">Broodco</q-toolbar-title>
                <q-tabs
                    v-model="activeTab"
                    align="justify"
                    dense
                    shrink
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
                        class="text-strike"
                    />
                    <q-tab
                        name="resume"
                        label="RESUME"
                        class="text-strike"
                    />
                    <q-tab
                        name="contact"
                        label="CONTACT"
                        class="text-strike"
                    />
                </q-tabs>
        </q-toolbar>
    </nav>
</template>
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

<style>
    .borderbot{
        border-bottom: 2px solid #ff7700;
    }
</style>
