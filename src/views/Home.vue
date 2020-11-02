<template>
<div v-for="(post,index) in postList" :key="post.id">
    <div class="card">
        <div class="card-header">
            {{ post.title }}
        </div>
        <div class="card-body">
            <h5 class="card-title"> {{ post.title }}</h5>
            <p class="card-text">{{ post.body }}</p>
            <router-link :to="{ name:'DetailPost', params: {id: post.id} }" class="btn btn-primary">Ver Detalle</router-link>

        </div>
    </div>
    <hr v-if="countObj > 0 && index != countObj - 1">
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Home',
    components: {

    },
    data() {
        return {
            postList: Array,
            countObj: Number
        }
    },
    beforeMount() {
        this.getAllPost();
    },
    methods: {
        async getAllPost() {
            try {
                const {
                    data
                } = await axios.get('https://jsonplaceholder.typicode.com/posts');
                this.countObj = data.length;
                return this.postList = data;
            } catch (ex) {
                console.log(ex);
            }
        },
    },
}
</script>
