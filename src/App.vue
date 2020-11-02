<template>
<div>
    <div id="nav">
        <Navigation />
    </div>

    <div class="container">
        <router-view />

        <Footer />
    </div>
</div>
</template>

<script>
import Navigation from './components/Navigation/NavComponent';
import Footer from './components/Footer/FooterComponent';
export default {
    components: {
        Navigation,
        Footer,
    }
}
</script>
