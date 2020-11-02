<template>
<div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous" />
    <div class="container">
        <div class="row">
            <div class="col-md-5">
                <div class="form-group">
                    <h5>DETALLE POST</h5>
                    <p class="mb-1">{{ post.title }}</p>
                    <p class="mb-0">{{ post.body }}</p>
                </div><!-- / project-info-box -->
                <hr>
                <div class="form-group mb-0">
                    <p><b>Client:</b> {{ user.name }}</p>
                    <p><b>Date:</b> 14.02.2020</p>
                    <p><b>Designer:</b> James Doe</p>
                    <p><b>Tools:</b> Illustrator</p>
                    <p class="mb-0"><b>Budget:</b> $500</p>
                </div><!-- / project-info-box -->
                <hr>
                <div class="form-group mb-0">
                    <p class="mb-0">
                        <label class="">Share:</label>
                        <a class="btn btn-xs btn-facebook btn-circle btn-icon mr-5 mb-0"><i class="fab fa-facebook"></i></a>
                        <a class="btn btn-xs btn-twitter btn-circle btn-icon mr-5 mb-0"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-xs btn-pinterest btn-circle btn-icon mr-5 mb-0"><i class="fab fa-pinterest"></i></a>
                        <a class="btn btn-xs btn-linkedin btn-circle btn-icon mr-5 mb-0"><i class="fab fa-linkedin"></i></a>
                    </p>
                </div><!-- / project-info-box -->
            </div>

            <div class="col-md-7">
                <img src="https://via.placeholder.com/400x300/" alt="project-image" class="rounded">
                <div class="">
                    <p><b>Categories:</b> Design, Illustration</p>
                    <p><b>Skills:</b> Illustrator</p>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-md-12">
                <div class="my-3 p-3 bg-white rounded shadow-sm">
                    <h6 class="border-bottom border-gray pb-2 mb-0">COMENTARIOS</h6>
                    <Comment v-for="(comment) in comments" :key="comment.id" :comment="comment" />
                    <small class="d-block text-right mt-3">
                        <a href="#">All updates</a>
                    </small>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import Comment from '../components/Comment/CommentComponent';
export default {
    components: {
        Comment
    },
    data() {
        return {
            detail_id: Number,
            post: Object,
            comments: Array,
            user: Object
        }
    },
    created() {
        this.detail_id = this.$route.params.id;
    },
    beforeMount() {
        this.getPostDetail();
        this.getComments();
    },
    methods: {
        async getPostDetail() {
            try {
                const {
                    data
                } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.detail_id}`);
                const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${data.userId}`);
                this.post = data;
                this.user = user.data;
            } catch (ex) {
                console.log(ex);
            }
        },
        async getComments() {
            try {
                const {
                    data
                } = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${this.detail_id}`);
                console.log(data);
                this.comments = data;
            } catch (ex) {
                console.log(ex);
            }
        }
    },
}
</script>
