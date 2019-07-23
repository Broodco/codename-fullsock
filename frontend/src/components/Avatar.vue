<template>
    <div>
        <q-img
            :src='require("../assets/tete.jpeg")'
            spinner-color="accent"
            id="avatar"
            contain
            alt="My face"
            sizes="280px"
        />
    </div>
</template>

<script>
export default {
    name: 'Avatar',
}
</script>

<style scoped>
    #avatar{
        height: 200px;
        width: 200px;
        border-radius:50%;
        border: 2px solid #1f2933;
    }
</style>
