<template>
    <q-page>
        <Banner id="home" />
        <Navbar id="navbar" :class="{sticky: isSticky}" :currentTab.sync="currentTab"/>
        <About id="about" :class="{padded: isSticky}" />
        <Portfolio id="portfolio"/>
        <q-scroll-observer @scroll="scrollHandler"/>
    </q-page>
</template>

<style>
    .sticky{
        position: fixed;
        top: 0;
        width: 100%;
        animation-duration: 0.5s;
        animation-name: slidein;
    }
    .padded{
        padding-top: 50px;
    }
    @keyframes slidein {
        from {
            position: fixed;
            top: -50px;
        }
        to {
            top: 0;
        }
    }
</style>

<script>
import Banner from '../components/banner/Banner'
import About from '../components/about/About'
import Navbar from '../components/navbar/Navbar'
import Portfolio from '../components/portfolio/Portfolio'
export default {
    name: 'HomePage',
    components: {
        Banner,
        About,
        Navbar,
        Portfolio
    },
    data(){
        return{
            isSticky: false,
            currentTab : 'home'
        }
    },
    methods: {
        scrollHandler: function(info) {
            info.position > this.navPos ? this.isSticky=true : this.isSticky=false
            return info
        }
    },
    computed: {
        navPos: function () {
            let nav = document.querySelector('#navbar')
            return nav.offsetTop;
        },
        aboutPos: function () {
            let about = document.querySelector('#about')
            return about.offsetTop;
        },
        portfolioPos: function () {
            let portfolio = document.querySelector('#portfolio')
            return portfolio.offsetTop;
        },
        scrollTop: function () {
            return window.scrollY
        },
    },
}
</script>
