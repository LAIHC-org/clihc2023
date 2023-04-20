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
                                    <div class="fw-bold"><a href="./organizers#general-committee" class="uline">General committee</a></div>
                                </div>                                
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold"><a href="./organizers#program-committee" class="uline">Program committee</a></div>
                                </div>                                
                            </li>
                        </ol>

                        <p>
                            The main objective of MexIHC is to enable the exchange of scientific results, their
                            application in industry, and its
                            application in evaluation, interface design, industry, education, videogames, mobile,
                            interactive applications, and
                            related areas. This time, MexIHC 2022 is organized by lecturers and researchers in the
                            community of HCI in Mexico.
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
                                <h3>General chairs</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    In charge of the general organization of the conference.
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row p-0">
                                <div class="col-md-6 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/cuauhtemoc.png" alt="" class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/cuauhtemoc.png&quot;);"></div>
                                        </template>               
                                        <template #name>
                                            Cuauhtémoc Rivera Loaiza
                                        </template>
                                        <template #institution>
                                            Universidad Michoacana de San Nicolás de Hidalgo
                                        </template>
                                        <template #email>
                                            <a class="uline" href="mailto:chairs.2022@mexihc.org">chairs.2022@mexihc.org</a>
                                        </template>
                                    </OrganizerItem>                                    
                                </div>

                                <div class="col-md-6 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/silvia.png" alt="" class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/silvia.png&quot;);"></div>
                                        </template>               
                                        <template #name>
                                            Silvia Berenice Fajardo Flores
                                        </template>
                                        <template #institution>
                                            Universidad de Colima
                                        </template>
                                        <template #email>
                                            <a class="uline" href="mailto:chairs.2022@mexihc.org">chairs.2022@mexihc.org</a>
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
                                <h3>Program chairs</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    In charge of everything related to the program, including the integration of the
                                    program committee
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-6 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/sane.jpg" alt="" class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/sane.jpg&quot;);"></div>
                                        </template>               
                                        <template #name>
                                            Laura Sanely Gaytán Lugo
                                        </template>
                                        <template #institution>
                                            Universidad de Colima
                                        </template>
                                        <template #email>
                                            <a class="uline" href="mailto:tpc.2022@mexihc.org">tpc.2022@mexihc.org</a>
                                        </template>
                                    </OrganizerItem>                                     
                                </div>

                                <div class="col-md-6 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/lizbeth.png" alt="" class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/lizbeth.png&quot;);"></div>
                                        </template>               
                                        <template #name>
                                            Lizbeth Escobedo
                                        </template>
                                        <template #institution>
                                            CETYS Universidad
                                        </template>
                                        <template #email>
                                            <a class="uline" href="mailto:tpc.2022@mexihc.org">tpc.2022@mexihc.org</a>
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
                                <h3>Poster chairs</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    In charge of everything related to the poster track
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-6 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/maria.png" alt="" class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/maria.png&quot;);"></div>
                                        </template>               
                                        <template #name>
                                            María del Rosario Peralta Calvo
                                        </template>
                                        <template #institution>
                                            Universidad de la Cañada
                                        </template>
                                        <template #email>
                                            <a class="uline" href="mailto:posters.2022@mexihc.org">posters.2022@mexihc.org</a>
                                        </template>
                                    </OrganizerItem>                                     
                                </div>

                                <div class="col-md-6 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/cams.png" alt="" class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/cams.png&quot;);"></div>
                                        </template>               
                                        <template #name>
                                            Carlos Alberto Martínez Sandoval
                                        </template>
                                        <template #institution>
                                            Universidad Tecnológica de la Mixteca
                                        </template>
                                        <template #email>
                                            <a class="uline" href="mailto:posters.2022@mexihc.org">posters.2022@mexihc.org</a>
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
                                <h3>Graduate Consortium Chairs</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    Responsible for the organization of Graduate Consortium
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-6 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/vania.png" alt="" class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/vania.png&quot;);"></div>
                                        </template>               
                                        <template #name>
                                            Vania Carolina Alvarez Olivas
                                        </template>
                                        <template #institution>
                                            Universidad Autónoma de Chihuahua
                                        </template>
                                        <template #email>
                                            <a class="uline" href="mailto:gc.2022@mexihc.org">gc.2022@mexihc.org</a>
                                        </template>
                                    </OrganizerItem>                                     
                                </div>

                                <div class="col-md-6 mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt="" class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow" style="background-image: url(&quot;./assets/img/nophoto.png&quot;);"></div>
                                        </template>               
                                        <template #name>
                                            Joaquín Sergio Zepeda Hernández
                                        </template>
                                        <template #institution>
                                            Universidad Autónoma Metropolitana, Unidad Cuajimalpa
                                        </template>
                                        <template #email>
                                            <a class="uline" href="mailto:gc.2022@mexihc.org">gc.2022@mexihc.org</a>
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
                                <h3>Registration Chairs</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    In charge of the participant registration system
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-6 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt="" class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow" style="background-image: url(&quot;./assets/img/nophoto.png&quot;);"></div>
                                        </template>               
                                        <template #name>
                                            Luis Adrián Castro
                                        </template>
                                        <template #institution>
                                            Instituto Tecnológico de Sonora
                                        </template>
                                        <template #email>
                                            <a class="uline" href="mailto:registration.2022@mexihc.org">registration.2022@mexihc.org</a>
                                        </template>
                                    </OrganizerItem>                                    
                                </div>

                                <div class="col-md-6 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/pedro.png" alt="" class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/pedro.png&quot;);"></div>
                                        </template>               
                                        <template #name>
                                            Pedro C. Santana Mancilla
                                        </template>
                                        <template #institution>
                                            Universidad de Colima
                                        </template>
                                        <template #email>
                                            <a class="uline" href="mailto:registration.2022@mexihc.org">registration.2022@mexihc.org</a>
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
                                <h3>Industry Outreach Chairs</h3>
                                <p class="text-secondary font-weight-normal pe-3">

                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-6 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/karenponce.jpg" alt="" class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/karenponce.jpg&quot;);"></div>
                                        </template>               
                                        <template #name>
                                            Karen Ponce de León Suástegui
                                        </template>
                                        <template #institution>
                                            GLOBANT
                                        </template>
                                        <template #email>
                                            <a class="uline" href="mailto:karenpdls@gmail.com">karenpdls@gmail.com</a>
                                        </template>
                                    </OrganizerItem>                                     
                                </div>

                                <div class="col-md-6 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt="" class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow" style="background-image: url(&quot;./assets/img/nophoto.png&quot;);"></div>
                                        </template>               
                                        <template #name>
                                            Víctor Manuel García Luna
                                        </template>
                                        <template #institution>
                                            BBVA
                                        </template>
                                        <template #email>
                                            <a class="uline" href="mailto:vicmangl@gmail.com">vicmangl@gmail.com</a>
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
                                <h3>Publicity Chair</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    Responsible for advertising and contact with sponsors
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-6 mx-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/adriana.png" alt="" class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/adriana.png&quot;);"></div>
                                        </template>               
                                        <template #name>
                                            Adriana Iñiguez
                                        </template>
                                        <template #institution>
                                            Universidad de Guadalajara, Campus Ciudad Guzmán
                                        </template>
                                        <template #email>
                                            <a class="uline" href="mailto:publicity.2022@mexihc.org">publicity.2022@mexihc.org</a>
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
                                <h3>Accesibility & Web Chair</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    In charge of making the conference as accessible as possible, in addition to the
                                    development of the website
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-6 mx-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/mike.png" alt="" class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/mike.png&quot;);"></div>
                                        </template>               
                                        <template #name>
                                            Miguel Angel Rodríguez Ortiz
                                        </template>
                                        <template #institution>
                                            Universidad de Colima
                                        </template>
                                        <template #email>
                                            <a class="uline" href="mailto:web.2022@mexihc.org">web.2022@mexihc.org</a>
                                        </template>
                                    </OrganizerItem>
                                </div>                                
                            </div>                            
                        </div>
                    </div>                    
                </div>

                <div class="container mt-4 px-5 mt-6" id="interactivity-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>Interactivity Chairs</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    In charge of communication technologies
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-6 mx-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/karina.jpg" alt="" class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/karina.jpg&quot;);"></div>
                                        </template>               
                                        <template #name>
                                            Karina Mariela Figueroa
                                        </template>
                                        <template #institution>
                                            Universidad Michoacana de San Nicolás de Hidalgo
                                        </template>
                                        <template #email>
                                            <a class="uline" href="mailto:web.2022@mexihc.org">interactivity.2022@mexihc.org</a>
                                        </template>
                                    </OrganizerItem>                                    
                                </div>
                                <div class="col-md-6 mx-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/arturo.png" alt="" class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/arturo.png&quot;);"></div>
                                        </template>               
                                        <template #name>
                                            Arturo Morales Téllez
                                        </template>
                                        <template #institution>
                                            Instituto Tecnológico de Sonora
                                        </template>
                                        <template #email>
                                            <a class="uline" href="mailto:web.2022@mexihc.org">interactivity.2022@mexihc.org</a>
                                        </template>
                                    </OrganizerItem>                                    
                                </div>                                                             
                            </div>                            
                        </div>
                    </div>                    
                </div>                

                <div class="container mt-4 px-5 mt-6" id="interactivity-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>Student Volunteer Chairs</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    In charge of the sudents volunteer group
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-6 mx-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/daniel.jpg" alt="" class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/daniel.jpg&quot;);"></div>
                                        </template>               
                                        <template #name>
                                            Daniel Jossu Romero García
                                        </template>
                                        <template #institution>
                                            Universidad Michoacana de San Nicolás de Hidalgo
                                        </template>
                                        <template #email>
                                            <!--<a class="uline" href="mailto:web.2022@mexihc.org">interactivity.2022@mexihc.org</a>-->
                                        </template>
                                    </OrganizerItem>                                    
                                </div>
                                <div class="col-md-6 mx-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt="" class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow" style="background-image: url(&quot;./assets/img/nophoto.png&quot;);"></div>
                                        </template>               
                                        <template #name>
                                            Leonel Guzmán Dueñas
                                        </template>
                                        <template #institution>
                                            Universidad de Colima
                                        </template>
                                        <template #email>
                                            <!--<a class="uline" href="mailto:web.2022@mexihc.org">interactivity.2022@mexihc.org</a>-->
                                        </template>
                                    </OrganizerItem>                                    
                                </div>
                                <div class="col-md-6 mt-md-4 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/nolan.jpg" alt="" class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/nolan.jpg&quot;);"></div>
                                        </template>               
                                        <template #name>
                                            Christopher Nolan Magaña Barocio
                                        </template>
                                        <template #institution>
                                            Universidad Michoacana de San Nicolás de Hidalgo
                                        </template>
                                        <template #email>
                                            <!--<a class="uline" href="mailto:web.2022@mexihc.org">interactivity.2022@mexihc.org</a>-->
                                        </template>
                                    </OrganizerItem>                                    
                                </div>                                                                                             
                            </div>                            
                        </div>
                        <p><a class="uline" href="./organizers#top">Back to top of page</a></p>
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
                    <dl class="list-group">
                        <div class="list-group-item">
                            <dt>Jesus Favela</dt>
                            <dd>CICESE, Mexico</dd>
                        </div>
                        <div class="list-group-item">
                            <dt>María Del Rosario Peralta Calvo</dt>
                            <dd>Universidad de la Cañada, Mexico</dd>
                        </div>
                        <div class="list-group-item">
                            <dt>Luis Castro</dt>
                            <dd>Instituto Tecnológico de Sonora, Mexico</dd>
                        </div>
                        <div class="list-group-item">
                            <dt>Miguel A. Rodríguez-Ortiz</dt>
                            <dd>Universidad de Colima, Mexico</dd>
                        </div>
                        <div class="list-group-item">
                            <dt>Pedro César Santana Mancilla</dt>
                            <dd>Universidad de Colima, Mexico</dd>
                        </div>
                        <div class="list-group-item">
                            <dt>Jessica	Beltran</dt>
                            <dd>CONACYT-CITEDI-IPN, Mexico</dd>
                        </div>
                        <div class="list-group-item">
                            <dt>Hugo Rodríguez</dt>
                            <dd>Brightcove Inc, United States</dd>
                        </div>
                        <div class="list-group-item">
                            <dt>Gisela Reyes-Cruz</dt>
                            <dd>University of Nottingham, United Kingdom</dd>
                        </div>
                        <div class="list-group-item">
                            <dt>Monica Perusquía-Hernández</dt>
                            <dd>Nara Institute of Science and Technology (NAIST), NTT Communication Science Laboratories, Japan</dd>
                        </div>
                        <div class="list-group-item">
                            <dt>Ana I. Martinez-Garcia</dt>
                            <dd>CICESE, Mexico</dd>
                        </div>
                        <div class="list-group-item">
                            <dt>Adriana, Iñiguez</dt>
                            <dd>Universidad de Guadalajara, Mexico</dd>
                        </div>
                        <div class="list-group-item">
                            <dt>Pablo Armando Alcaraz Valencia</dt>
                            <dd>Universidad de Colima, Mexico</dd>
                        </div>
                        <div class="list-group-item">
                            <dt>Rosa Arriaga</dt>
                            <dd>Georgia Institute of Technology, United States</dd>
                        </div>
                        <div class="list-group-item">
                            <dt>Karla Badillo-Urquiola</dt>
                            <dd>University of Notre Dame, United States</dd>
                        </div>
                        <div class="list-group-item">
                            <dt>Lucia Villacres</dt>
                            <dd>Escuela Superior Politecnica del Litoral, Ecuador</dd>
                        </div>
                        <div class="list-group-item">
                            <dt>Víctor González</dt>
                            <dd>Sperentia, Mexico</dd>
                        </div>
                        <div class="list-group-item">
                            <dt>Carlos Gerardo Prieto Alvarez</dt>
                            <dd>The University of Sydney, Australia</dd>
                        </div>
                        <div class="list-group-item">
                            <dt>Christian Sturm</dt>
                            <dd>Hamm-Lippstadt University of Applied Sciences, Germany</dd>
                        </div>
                        <div class="list-group-item">
                            <dt>Rocío Abascal-Mena</dt>
                            <dd>Universidad Autonoma Metropolitana - Cuajimalpa, Mexico</dd>
                        </div>
                        <div class="list-group-item">
                            <dt>Juan Hourcade</dt>
                            <dd>The University of Iowa, United States</dd>
                        </div>
                        <div class="list-group-item">
                            <dt>Adriana Alvarado García</dt>
                            <dd>University Pompeu Fabra, Spain</dd>
                        </div>
                        <div class="list-group-item">
                            <dt>J. Antonio García-Macías</dt>
                            <dd>CICESE, Mexico</dd>
                        </div>
                        <div class="list-group-item">
                            <dt>José Mercado</dt>
                            <dd>CETYS, Mexico</dd>
                        </div>
                    </dl>
                    <p><a class="uline" href="./organizers#top">Back to top of page</a></p>
                </div>
                
            </div>
        </div>
    </section>
</template>