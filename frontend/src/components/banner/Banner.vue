<template>
    <div class="window-height bg-primary">
        <ParticlesBackground/>
        <div class="fixed-center text-white text-center transparent">
            <h2 class="font-squada">
                Maxime Broodcoorens
            </h2>
            <div class="text-h4">
                Junior Full-Stack Developer
            </div>
        </div>
    </div>
</template>

<script>
import ParticlesBackground from './ParticlesBackground';
export default {
    name: "Banner",
    components: {
        ParticlesBackground
    }
}
</script>

<style scoped>
</style>
