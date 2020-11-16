<template>
    <div class="indonesia">
        <Header/>

        <!-- ======= About Section ======= -->
        <section id="about" class="about">

            <div class="container">
                <!-- <div class="row">

                    <div class="col-lg-8 offset-lg-2 col-md-8 col-md-2">
                        <div class="about-img" >
                            <img :src="covid19.image" alt="">
                        </div>
                    </div>


                </div> -->

                <div class="row">
                    <div class="col-lg-4 col-md-4">
                    
                    </div>
                    <div class="col-lg-4 col-md-4">
                        
                        <center><h2>{{selectedProv}}</h2></center>
                        <select v-model="selectedProv" @change="getDataPerProv" class="form-control mt-1">
                            <option v-for="prov in provs" v-bind:key="prov.provinsi">
                                    {{ prov.provinsi }}
                            </option>
                        </select>
                        <small class="text-danger">*Choose Province</small>                        
                        
                    </div>
                    <div class="col-lg-4 col-md-4">
                    
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-4">
                        <div class="card shadow bg-danger text-white w-100 mt-5">
                            <div class="card-body">
                                <div class="row" v-if="covidPerProv">
                                    <div class="col-4">
                                        <i class="fas fa-5x fa-viruses"></i>
                                    </div>
                                    <div class="col-8">
                                        <h3>Confirmed</h3>
                                        <h3><b>{{new Intl.NumberFormat().format(covidPerProv[0].kasusPosi)}}</b></h3>
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
                                <div class="row" v-if="covidPerProv">
                                    <div class="col-4">
                                        <i class="fas fa-5x fa-heartbeat"></i>
                                    </div>
                                    <div class="col-8">
                                        <h3>Recovered</h3>
                                        <h3><b>{{new Intl.NumberFormat().format(covidPerProv[0].kasusSemb)}}</b></h3>
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
                                <div class="row" v-if="covidPerProv">
                                    <div class="col-4">
                                        <i class="fas fa-5x fa-ambulance"></i>
                                    </div>
                                    <div class="col-8">
                                        <h3>Deaths</h3>
                                        <h3><b>{{new Intl.NumberFormat().format(covidPerProv[0].kasusMeni)}}</b></h3>
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
                        <p class="ml-1 mt-4">Data Source : <br> https://indonesia-covid-19.mathdro.id/api/</p>
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
        name: 'indonesia',
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
                covidPerProv: null,
                covdata : null,
                covid19: null,
                provs: null,
                selectedProv:'Indonesia',
            }
        },
        methods:{
            getDataPerProv(){
                if(this.selectedProv == 'Indonesia'){
                    axios.get(`https://indonesia-covid-19.mathdro.id/api`).then(response => {     
                        let dataAll = response.data;

                        let dataIndo = [{
                            "kasusPosi":dataAll.jumlahKasus,
                            "kasusSemb":dataAll.sembuh,
                            "kasusMeni":dataAll.meninggal,
                        }];

                        this.covidPerProv = dataIndo;
                    })

                    

                }else{
                    axios.get(`https://indonesia-covid-19.mathdro.id/api/provinsi/`).then(response => {     
                        this.covidPerProv = response.data.data.filter(p => p.provinsi == this.selectedProv);
                        console.log(this.covidPerProv);
                    })
                }
                
                
            }
        },
        created() {
            //get indo data
            axios.get('https://indonesia-covid-19.mathdro.id/api').then(response => {
                this.covid19 = response.data;
                console.log(this.covid19);
            })

            //get provs
            axios.get('https://indonesia-covid-19.mathdro.id/api/provinsi').then(response => {
                this.provs = response.data.data;
                console.log(this.provs);
            })
        },
        watch: {
            $route: {
                immediate: true,
                handler() {
                    this.getDataPerProv()
                }
            }
        }        
    }
</script>