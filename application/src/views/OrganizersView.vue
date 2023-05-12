<script setup>
import TheHeader from '@/components/Header.vue';
import OrganizerItem from '@/components/OrganizerItem.vue';
</script>

<template>
    <TheHeader>
        <template #page-name>
            Organizers
        </template>
    </TheHeader>

    <section>
        <div class="container">
            <div class="row">
                <div class="row justify-content-center my-3">
                    <div class="col-lg-8">
                        <ol class="list-group list-group-numbered mb-4">
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold"><a href="./organizers#general-committee" class="uline">General
                                            committee</a></div>
                                </div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold"><a href="./organizers#program-committee" class="uline">Program
                                            committee</a></div>
                                </div>
                            </li>
                        </ol>

                        <p>
                            The primary objective of the 2023 Latin American Conference on Human-Computer Interaction
                            (CLIHC) is to foster collaboration, discussion, and knowledge exchange among international and
                            Latin American HCI researchers. The conference aims to promote human-centered and culturally
                            aware artificial intelligence design and development, and provide a platform for the
                            presentation and discussion of new ideas, methods, and techniques for designing interactive user
                            experiences. The conference will be held in Puebla, Mexico, and is organized by a diverse group
                            of experts from Latin America and beyond.
                        </p>
                        <h2 id="general-committee" class="text-primary text-gradient text-center py-4">General Committee
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="container">
        <div class="row">
            <div class="col-lg-12 mx-auto">
                <div class="container mt-4 px-5" id="general-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>Steering committee</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    Leadership team overseeing the organization and direction of the conference.
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row p-0">

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/nophoto.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Laura Sanely Gaytán Lugo
                                        </template>
                                        <template #institution>
                                            Universidad de Colima, MX
                                        </template>
                                        <template #email>
                                            <!--<a class="uline" href="mailto:tpc.2022@mexihc.org">tpc.2022@mexihc.org</a>-->
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/nophoto.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Yazmín Magallanes
                                        </template>
                                        <template #institution>
                                            UXPA, MX
                                        </template>
                                        <template #email>
                                            <!--<a class="uline" href="mailto:tpc.2022@mexihc.org">tpc.2022@mexihc.org</a>-->
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/nophoto.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Soraia Prietch
                                        </template>
                                        <template #institution>
                                            U. Federal de Rondonópolis, BR
                                        </template>
                                        <template #email>
                                            <!--<a class="uline" href="mailto:tpc.2022@mexihc.org">tpc.2022@mexihc.org</a>-->
                                        </template>
                                    </OrganizerItem>
                                </div>  

                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-4 px-5 mt-6" id="program-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>Conference Chairs</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    Leading the organization and coordination of the conference program and activities.
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/nophoto.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Marisol Wong-Villacres
                                        </template>
                                        <template #institution>
                                            ESPOL, EC
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/nophoto.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Juan Manuel González Calleros
                                        </template>
                                        <template #institution>
                                            BUAP, MX
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-4 px-5 mt-6" id="program-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>Local Chairs:</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    Responsible for overseeing local arrangements and logistics for the conference.
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/nophoto.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Josefina Guerrero García
                                        </template>
                                        <template #institution>
                                            BUAP, MX
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/nophoto.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Iván Olmos Pineda
                                        </template>
                                        <template #institution>
                                            BUAP, MX
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-4 px-5 mt-6" id="graduate-consortium-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>Program (Paper) Chairs</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    Responsible for the conference program and paper selection process.
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/nophoto.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Pablo Torres
                                        </template>
                                        <template #institution>
                                            UTPL, EC
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/nophoto.png&quot;);"></div>
                                        </template>
                                        <template #name>
                                            Vanessa Agredo Delgado
                                        </template>
                                        <template #institution>
                                            FUNAD, CO
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-4 px-5 mt-6" id="registration-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>Student Design Competition</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    In charge of organizing the Student Design Competition.
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/nophoto.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Christian Sturm
                                        </template>
                                        <template #institution>
                                            DE
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/nophoto.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Lyubanit Rodriguez
                                        </template>
                                        <template #institution>
                                            CR
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-4 px-5 mt-6" id="registration-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>Graduate Colloquium Chairs</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    Oversees the organization of the graduate colloquium track.
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/nophoto.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Huizilopoztli Luna Garcia
                                        </template>
                                        <template #institution>
                                            UAZ, MX
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/nophoto.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Carolina Fuentes
                                        </template>
                                        <template #institution>
                                            Cardiff University, UK
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-4 px-5 mt-6" id="publicity-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>Workshops and Tutorials Chairs</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    Responsible for coordinating and overseeing the workshops and tutorials sessions.
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/nophoto.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            César Collazos
                                        </template>
                                        <template #institution>
                                            U. Cauca, CO
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/nophoto.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Luciana Sá Brito
                                        </template>
                                        <template #institution>
                                            Universidade Federal do Rio de Janeiro, Brasil
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-4 px-5 mt-6" id="publicity-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>Posters Chairs</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    Responsible for overseeing all aspects related to the poster session.
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/nophoto.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Jaime Muñoz Arteaga
                                        </template>
                                        <template #institution>
                                            U. Aguascalientes, MX
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/nophoto.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Adriana Iñiguez
                                        </template>
                                        <template #institution>
                                            UdG, MX
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>                

                <div class="container mt-4 px-5 mt-6" id="accesibility-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>Publicity Chair</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    In charge of managing and promoting the conference's publicity and outreach efforts.
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 mx-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/nophoto.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Juan Fernando Maestre 
                                        </template>
                                        <template #institution>
                                            Ecuador - U. Minnesota
                                        </template>
                                        <template #email>
                                            
                                        </template>
                                    </OrganizerItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-4 px-5 mt-6" id="publicity-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>Web Chairs</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    Responsible for the design, development, and maintenance of the conference website.
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/nophoto.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Miguel A. Rodríguez Ortiz
                                        </template>
                                        <template #institution>
                                            Universidad de Colima, MX
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/nophoto.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Arlem Castillo Avila
                                        </template>
                                        <template #institution>
                                            BUAP, MX
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-4 px-5 mt-6" id="accesibility-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>Volunteer Students Chair</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    In charge of managing and coordinating volunteer students for the conference.
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 mx-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/nophoto.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Alfredo García Suárez
                                        </template>
                                        <template #institution>
                                            BUAP, MX
                                        </template>
                                        <template #email>
                                            
                                        </template>
                                    </OrganizerItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-4 px-5 mt-6" id="accesibility-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>Industry Session Chair</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    In charge of organizing and overseeing industry-focused sessions and events.
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 mx-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/nophoto.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Victor Manuel García Luna
                                        </template>
                                        <template #institution>
                                            UXPA, MX
                                        </template>
                                        <template #email>
                                            
                                        </template>
                                    </OrganizerItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section class="container">
        <div class="row">
            <div class="row justify-content-center my-3">
                <div class="col-lg-8">
                    <h2 id="program-committee" class="text-primary text-gradient text-center py-4 mt-5">Program
                        Committee</h2>
                    <p>Pending</p>
                <p><a class="uline" href="./organizers#top">Back to top of page</a></p>
            </div>

        </div>
    </div>
</section></template>