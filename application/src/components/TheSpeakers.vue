<script setup>
import SpeakerItem from './SpeakerItem.vue'
</script>

<template>
    <section class="">
        <div class="container mt-4" id="speakers">
            <div class="row">
                <div class="col-lg-3">
                    <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                        <h3>Keynote Speakers</h3>
                        <p class="text-secondary font-weight-normal pe-3">
                            The conference program includes great speakers from the international HCI community.
                        </p>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="row">

                        <SpeakerItem>
                            <template #image>
                                <img src="/assets/img/nophoto.png" alt=""
                                    class="img-fluid shadow rounded-3">
                            </template>
                            <template #image-shadow>
                                <div class="colored-shadow"
                                    style="background-image: url(&quot;./assets/img/nophoto.png&quot;);">
                                </div>
                            </template>
                            <template #name>
                                Cleotilde (Coty) Gonzalez
                            </template>

                            Ph.D. in Management Information Systems from the Department of Social and Decision Sciences
                            and the Founding Director of the Dynamic Decision Making Laboratory (<a
                                href="https://www.cmu.edu/dietrich/sds/ddmlab/" class="uline">DDMLab</a>) at Carnegie
                            Mellon University, USA
                            <br><br>
                            <a href="./keynote-speakers#coty-gonzalez" class="uline">Cleotilde (Coty) Gonzalez
                                information</a>
                        </SpeakerItem>

                        <SpeakerItem>
                            <template #image>
                                <img src="/assets/img/nophoto.png" alt=""
                                    class="img-fluid shadow rounded-3">
                            </template>
                            <template #image-shadow>
                                <div class="colored-shadow"
                                    style="background-image: url(&quot;./assets/img/nophoto.png&quot;);">
                                </div>
                            </template>
                            <template #name>
                                Sergio Luján Mora
                            </template>

                            Ph.D. in computer engineering from the Department of Software and Computing Systems,
                            University of Alicante, Alicante
                            <br><br>
                            <a href="./keynote-speakers#sergio-lujan" class="uline">Sergio Luján Mora information</a>
                        </SpeakerItem>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>