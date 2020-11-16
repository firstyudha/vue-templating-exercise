<template>
    <div class="global">
        <Header/>

        <!-- ======= About Section ======= -->
        <section id="about" class="about">

            <div class="container">
                <div class="row">

                    <div class="col-lg-8 offset-lg-2 col-md-8 col-md-2">
                        <div class="about-img" >
                            <img :src="covid19.image" alt="">
                        </div>
                    </div>


                </div>

                <div class="row">
                    <div class="col-lg-4 col-md-4">
                    
                    </div>
                    <div class="col-lg-4 col-md-4">
                        
                        <center><h2 class="mt-5">{{selectedCountry}}</h2></center>
                        <select v-model="selectedCountry" @change="getDataPerCountry" class="form-control mt-1">
                            <option v-bind:key="Global">Global</option>
                            <option v-for="country in countries" v-bind:key="country.name">
                                    {{ country.name }}
                            </option>
                        </select>
                        <small class="text-danger">*Choose country</small>                        
                        
                    </div>
                    <div class="col-lg-4 col-md-4">
                    
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-4">
                        <div class="card shadow bg-danger text-white w-100 mt-5">
                            <div class="card-body">
                                <div class="row" v-if="covidPerCountry">
                                    <div class="col-4">
                                        <i class="fas fa-5x fa-viruses"></i>
                                    </div>
                                    <div class="col-8">
                                        <h3>Confirmed</h3>
                                        <h3><b>{{new Intl.NumberFormat().format(covidPerCountry.confirmed.value)}}</b></h3>
                                    </div>
                                </div>
                                <div class="row" v-else>
                                    <div class="col-md-6">
                                        <CodeLoader/>
                                    </div>
                                    <div class="col-md-6">
                                        <CodeLoader/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-lg-4 col-md-4">
                        <div class="card shadow bg-success text-white w-100 mt-5">
                            <div class="card-body">
                                <div class="row" v-if="covidPerCountry">
                                    <div class="col-4">
                                        <i class="fas fa-5x fa-heartbeat"></i>
                                    </div>
                                    <div class="col-8">
                                        <h3>Recovered</h3>
                                        <h3><b>{{new Intl.NumberFormat().format(covidPerCountry.recovered.value)}}</b></h3>
                                    </div>
                                </div>
                                <div class="row" v-else>
                                    <div class="col-md-6">
                                        <CodeLoader/>
                                    </div>
                                    <div class="col-md-6">
                                        <CodeLoader/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4">
                        <div class="card shadow bg-warning text-white w-100 mt-5">
                            <div class="card-body">
                                <div class="row" v-if="covidPerCountry">
                                    <div class="col-4">
                                        <i class="fas fa-5x fa-ambulance"></i>
                                    </div>
                                    <div class="col-8">
                                        <h3>Deaths</h3>
                                        <h3><b>{{new Intl.NumberFormat().format(covidPerCountry.deaths.value)}}</b></h3>
                                    </div>
                                </div>
                                <div class="row" v-else>
                                    <div class="col-md-6">
                                        <CodeLoader/>
                                    </div>
                                    <div class="col-md-6">
                                        <CodeLoader/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="ml-1 mt-4">Data Source : https://covid19.mathdro.id/api</p>
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
        CodeLoader ,
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
            CodeLoader ,
            //component app
            Header,
            Footer
        },
        data() {
            return {
                //define properties
                covid19: null,
                countries: null,
                selectedCountry:'Global',
                covidPerCountry:null
            }
        },
        methods:{
            getDataPerCountry(){
                if(this.selectedCountry === 'Global'){
                    axios.get('https://covid19.mathdro.id/api').then(response => {
                        this.covidPerCountry = response.data;
                    })
                }else{
                    axios.get(`https://covid19.mathdro.id/api/countries/`+this.selectedCountry).then(response => {     
                        this.covidPerCountry = response.data;
                        console.log(this.covidPerCountry);
                    })
                }
            }
        },
        created() {
            //get global
            axios.get('https://covid19.mathdro.id/api').then(response => {
                this.covid19 = response.data;
            })

            //get countries
            axios.get('https://covid19.mathdro.id/api/countries').then(response => {
                this.countries = response.data.countries;
                console.log(this.countries);
            })


        },
        watch: {
            $route: {
                immediate: true,
                handler() {
                    this.getDataPerCountry()
                }
            }
        }
    }
</script>