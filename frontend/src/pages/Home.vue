<template>
    <q-page>
        <Banner id="home" />
        <Navbar id="navbar" :class="{sticky: isSticky}" :tab="currentTab"/>
        <About id="about" :class="{padded: isSticky}" />
        <q-scroll-observer @scroll="scrollHandler"/>
    </q-page>
</template>

<style>
    .sticky{
        position: fixed;
        top: 0;
        width: 100%;
    }
    .padded{
        padding-top: 55px;
    }
    @keyframes slide-down {
        0% {

        }
    }
</style>

<script>
import Banner from '../components/banner/Banner'
import About from '../components/about/About'
import Navbar from '../components/navbar/Navbar'
export default {
    name: 'HomePage',
    components: {
        Banner,
        About,
        Navbar
    },
    data(){
        return{
            isSticky: false,
            currentTab : 'home'
        }
    },
    methods: {
        scrollHandler: function(info) {
            console.log("pos = "+info.position+ " nav = "+this.navPos)
            info.position > this.navPos ? this.isSticky=true : this.isSticky=false
            return info
        }
    },
    computed: {
        navPos: function () {
            let nav = document.querySelector('#navbar')
            return nav.offsetTop;
        },
        scrollTop: function () {
            return window.scrollY
        },
    },
}
</script>
