<template>
    <div class="q-pa-md triangle_background borderbot">
        <div class="row">
            <div class="col-sm-2 col-lg-3"/>
            <div class="col-lg-7">
                <h3 class="font-squada diff_color">About Me</h3>
            </div>
        </div>
        <div class="centered_element">
            <Avatar/>
        </div>
        <div class="row q-mt-md">
            <div class="col-sm-2 col-lg-3"/>
            <div class="col-12 col-sm-8 col-lg-6 diff_color q-mb-xl">
                <h6 class="q-my-md">Hello, I am Maxime.</h6>
                <div class="text-body1">
                    I am a junior full stack developer from Brussels. I have a passion for software development, especially back-end technologies and application architecture. Hire me!
                </div>
            </div>
            <div class="col-sm-0 col-lg-3"/>
        </div>
    </div>
</template>

<script>
import Avatar from '../Avatar'
export default {
    name: 'About',
    components: {
        Avatar
    }
}
</script>

<style>
    .centered_element{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .triangle_background{
        background: linear-gradient(70deg, #1f2933 49.85%, #ff7700 50%, white 50.15%);
    }
    .diff_color{
        color: white;
        mix-blend-mode: difference;
    }
</style>
