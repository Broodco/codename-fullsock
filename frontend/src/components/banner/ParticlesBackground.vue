<template>
    <div id="particles"></div>
</template>

<script>
import 'particles.js'
export default {
    name: 'ParticlesBackground',

    mounted() {
        this.initParticlesJS()
    },

    methods: {
        initParticlesJS() {
            window.particlesJS("particles",{
                "particles": {
                    "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 1000
                    }
                    },
                    "color": {
                    "value": "#ffffff"
                    },
                    "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                    },
                    "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 0.5,
                        "size_min": 0.1,
                        "sync": false
                    }
                    },
                    "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                    },
                    "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "top",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "push"
                    },
                    "resize": true
                    },
                },
                "retina_detect": true
            })
        }
    }
}
</script>

<style scoped>
    #particles{
        position: absolute;
        width: 100%;
        height: 100%;
        background: '#1f2933';
    }
</style>
