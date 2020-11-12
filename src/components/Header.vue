<template>
    <div class="Header">
        <!-- ======= Top Bar ======= -->
        <div id="topbar" class="d-none d-lg-flex align-items-end fixed-top topbar-transparent">
            <div class="container d-flex justify-content-end">
                <div class="social-links">
                    <a href="https://www.instagram.com/firstyudha/" target="_blank" class="instagram"><i class="fa fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/yudha-pratama-9580141b2/" class="linkedin" target="_blank"><i class="fa fa-linkedin"></i></a>
                    <a href="https://github.com/firstyudha" class="github" target="_blank"><i class="fa fa-github"></i></a>
                </div>
            </div>
        </div>
        <header id="header" class="fixed-top header-transparent">
            <div class="container d-flex align-items-center">

            <h1 class="logo mr-auto"><a href="https://yudhapratama.netlify.app" target="_blank">Developer</a></h1>

            </div>
        </header>
        <!-- ======= Hero Section ======= -->
        <section id="hero" class="clearfix">
            <div class="container d-flex h-100">
            <div class="row justify-content-center align-self-center" data-aos="fade-up">
                <div class="col-md-6 intro-info order-md-first order-last" data-aos="zoom-in" data-aos-delay="100">
                <h2>General Information<br>of <span>Covid-19</span></h2>
                    <div>
                        <a href="https://yudhapratama.netlify.app" target="_blank" class="nav-link btn-get-started">See Creator</a>
                    </div>
                </div>

                <div class="col-md-6 intro-img order-md-last order-first" data-aos="zoom-out" data-aos-delay="200">
                <img src="assets/img/intro-img.svg" alt="" class="img-fluid">
                </div>
            </div>

            </div>
        </section>
        <!-- End Hero -->
        <div class="mt-4 mb-4">
            <center >
                <router-link :to="{ name: 'global' }" class="button-menu">Global</router-link>
                <router-link :to="{ name: 'indonesia' }" class="button-menu ml-2" style="background:#ED1D24">Indonesia</router-link>
            </center>
        </div>
    </div>
</template>

<style scoped>
.button-menu{
    font-family: "Montserrat", sans-serif;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: inline-block;
    padding: 10px 32px;
    border-radius: 4px;
    transition: 0.5s;
    color: #fff;
    background: #1bb1dc;
    color: #fff;
}
</style>

<script>
export default {
    name: "Header",
}
</script>