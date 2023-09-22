<script setup>
import Speakers from './locales/en/Speakers-small.vue'
</script>

<template>
    <section class="">
        <div class="container mt-4" id="speakers">
            <div class="row">
                <div class="col-lg-3">
                    <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                        <h3>{{ $t("home.keynotes") }}</h3>
                        <p class="text-secondary font-weight-normal pe-3">
                            {{ $t("home.keynotes_message") }}
                        </p>
                    </div>
                </div>
                <div class="col-lg-9">                    
                    <Speakers />
                </div>
            </div>
        </div>
    </section>
</template>