<template>
    <q-page>
        <Banner ref="banner" id="banner"/>
        <Navbar
            id="navbar"
            ref="nav"
            v-bind:class="[{stickyTop: isStickyTop},{stickyBottom: isStickyBottom}]"
            :currentTab.sync="currentTab"/>
        <NameBar
            id="namebar"
            v-if="isStickyBottom"
            v-bind:class="{stickyTop:isStickyBottom}"
        />
        <About id="about" :class="[{paddedTop: isStickyTop},{paddedTop: isStickyBottom}]"/>
        <Portfolio id="portfolio" class="paddedBottom" />
        <div v-scroll="scrolled"></div>
    </q-page>
</template>

<style>
    .stickyTop{
        position: fixed;
        top: 0;
        width: 100%;
        animation-duration: 1s;
        animation-name: fadein;
    }
    .stickyBottom {
        position: fixed;
        bottom: 0;
        width: 100%;
        animation-duration: 1s;
        animation-name: fadein;
    }
    @keyframes fadein{
        from {
            opacity: 0
        }
        to {
            opacity: 100
        }
    }
    .paddedTop{
        padding-top: 64px;
    }
</style>

<script>
import { debounce } from 'quasar'
import Banner from '../components/banner/Banner'
import About from '../components/about/About'
import Navbar from '../components/navbar/Navbar'
import NameBar from '../components/navbar/NameBar'
import Portfolio from '../components/portfolio/Portfolio'
export default {
    name: 'HomePage',
    components: {
        Banner,
        About,
        Navbar,
        Portfolio,
        NameBar
    },
    data(){
        return{
            isStickyTop: false,
            isStickyBottom: false,
            currentTab : 'home',
        }
    },
    methods: {
        scrolled: debounce(
            function(position) {
                if (this.$q.platform.is.mobile){
                    if (position > this.bannerHeight){
                        this.isStickyBottom = true
                        this.isStickyTop = false
                    } else {
                        this.isStickyBottom = false
                        this.isStickyTop = false
                    }
                } else {
                    if (position > this.bannerHeight){
                        this.isStickyTop = true
                        this.isStickyBottom = false
                    } else {
                        this.isStickyTop = false
                        this.isStickyBottom = false
                    }
                }

        },50),
    },
    computed: {
        bannerHeight() {
            return window.innerHeight
        }
    }

}
</script>
