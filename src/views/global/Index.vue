<template>
    <div class="global">
        <Header/>

        <!-- ======= About Section ======= -->
        <section id="about" class="about">

            <div class="container">
                <div class="row">

                    <div class="col-lg-5 col-md-6">
                        <div class="about-img" >
                            <img src="assets/img/global.jpg" alt="">
                        </div>
                    </div>

                    <div class="col-lg-7 col-md-6">
                        <div class="about-content" >
                            <h2>Global</h2>
                            <h3>Data Source : https://covid19.mathdro.id/api</h3>
                            <div class="row mt-5">
                                <div class="col" v-if="covid19">
                                    <i class="ion-android-checkmark-circle"></i> Confirmed 
                                    <h3 class="ml-4 mt-2">{{new Intl.NumberFormat().format(covid19.confirmed.value)}}</h3>
                                </div>
                                <div class="col" v-else>
                                    <ContentLoader/>
                                </div>
                                <div class="col" v-if="covid19">
                                    <i class="ion-android-checkmark-circle"></i> Recovered 
                                    <h3 class="ml-4 mt-2">{{new Intl.NumberFormat().format(covid19.recovered.value)}}</h3>
                                </div>
                                <div class="col" v-else>
                                    <ContentLoader/>
                                </div>
                                <div class="col" v-if="covid19">
                                    <i class="ion-android-checkmark-circle"></i> Deaths 
                                    <h3 class="ml-4 mt-2">{{new Intl.NumberFormat().format(covid19.deaths.value)}}</h3>
                                </div>
                                <div class="col" v-else>
                                    <ContentLoader/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <!-- End About Section -->
        <Footer/>
    </div>
</template>

<script>
    //import content loader
    import {
        ContentLoader ,
    } from 'vue-content-loader'

    //import axios
    import axios from 'axios'

    //import component
    import Header from "@/components/Header"
    import Footer from "@/components/Footer"

    export default {
        name: 'global',
        components: {
            //loader component
            ContentLoader ,
            //component app
            Header,
            Footer
        },
        data() {
            return {
                //define properties
                covid19: null,
            }
        },
        created() {
            //get post homepage
            axios.get('https://covid19.mathdro.id/api').then(response => {
                this.covid19 = response.data;
                console.log(this.covid19);
            })
        }
    }
</script>