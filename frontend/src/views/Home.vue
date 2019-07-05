<template>
    <div class="home">
        <h1>Home</h1>
        <h3>Posts</h3>
        <div v-for="(post, index) in posts" :key="index">
            <h4>{{ post.title }}</h4>
            <p>{{ post.content }}</p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'home',
        data () {
            return {
                posts: []
            };
        },
        mounted() {
            console.log('mounted')
            this.fetchPosts();
        },
        methods: {
            fetchPosts() {
                console.log("fetching")
                axios
                    .get('/api/posts')
                    .then(response => this.posts = response.data)
                    .catch(error => console.log(error));
            }
        },
    };
</script>
