<template>
    <q-page>
        <Banner/>
        <About/>
    </q-page>
</template>

<style>
</style>

<script>
import Banner from '../components/banner/Banner'
import About from '../components/about/About'
export default {
    name: 'HomePage',
    components: {
        Banner,
        About
    },
    mounted() {
        console.log('mounted')
    }
}
</script>
