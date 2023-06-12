<script setup>
import TheHeader from '@/components/Header.vue'
</script>

<template>
    <TheHeader>
        <template #page-name>
            Accepted Papers
        </template>
    </TheHeader>

    <section class="">
        <div class="container">
            <div class="row justify-content-center my-3">
                <div class="col-lg-8">
                    <ol class="list-group list-group-numbered">
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">
                                    <a href="./accepted-papers#full-papers" class="uline">
                                        Full papers
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">
                                    <a href="./accepted-papers#short-papers" class="uline">
                                        Short papers
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">
                                    <a href="./accepted-papers#posters" class="uline">
                                        Posters
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ol>

                    <h2 id="full-papers" class="text-primary text-gradient text-center py-4">Full Papers</h2>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <h3 class="h5">Caring through Conversations: Voice User Interfaces For Everyday Stress Care</h3>
                            <p>Adriana Navarro Sainz, Annu Prabhakar</p>
                        </li>
                        <li class="list-group-item">
                            <h3 class="h5">What is a User Interface, Again? A Survey of Definitions of User Interface</h3>
                            <p>Leonel Vinicio Morales Díaz</p>
                        </li>
                        <li class="list-group-item">
                            <h3 class="h5">Understanding User Perspective to Improve Biometric Authentication Adoption</h3>
                            <p>Aubrey Patrick, Andrew Burris, Sanchari Das</p>
                        </li>
                        <li class="list-group-item">
                            <h3 class="h5">SmartTasko: Supporting Short and Spontaneous Activities of Daily Living of ADHD Individuals</h3>
                            <p>Hector Osuna, Marcos Moroyoqui, David Espina, Lizbeth Escobedo</p>
                        </li>                        
                    </ul>

                    <h2 id="short-papers" class="text-primary text-gradient text-center py-4">Short papers</h2>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <h3 class="h5">Interactive Application for Training Orthopedic Residents to Perform Knee Arthroscopy Procedure</h3>
                            <p>Julian Nuñez de Villavicencio Castiñeyra, Silvia Rodriguez Chaparro, Luis Bautista Rojas, Lola Bautista Rozo</p>
                        </li>
                        <li class="list-group-item">
                            <h3 class="h5">Global Plaza: Creating an Inclusive and Equitable Space at High-Level Conferences</h3>
                            <p>Cuauhtemoc Rivera-Loaiza, Marisol Wong-Villacres</p>
                        </li>
                    </ul>

                    <h2 id="posters" class="text-primary text-gradient text-center py-4">Posters</h2>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <h3 class="h5">Una Crítica de la Atribución de Agencias, Intenciones y Capacidades de la IA en los Medios</h3>
                            <p>Ariel Guersenzvaig, Ramón Sangüesa</p>
                        </li>
                        <li class="list-group-item">
                            <h3 class="h5">A Tangible Interface Approach to the Codesign of a Literacy Platform for Deaf Users</h3>
                            <p>J. Alfredo Sánchez, Soraia Prietch, Silvia B. Fajardo-Flores, Laura S. Gaytán-Lugo</p>
                        </li>
                        <li class="list-group-item">
                            <h3 class="h5">Multimedia Principles Applied to a Virtual Reality Application Design for Procedural Learning</h3>
                            <p>Luis Bautista, José Guerrero, Carmen Plata</p>
                        </li>
                        <li class="list-group-item">
                            <h3 class="h5">Augmenting Interoceptive Awareness with off-the-shelf Sensors Using Visuo-Haptic Emotional Stimulus</h3>
                            <p>David Antonio Gomez Jauregui</p>
                        </li>
                        <li class="list-group-item">
                            <h3 class="h5">Dialog Modeling of Domain Specific Cognitive Assistants</h3>
                            <p>J Guadalupe Ramos Díaz</p>
                        </li>
                        <li class="list-group-item">
                            <h3 class="h5">Using Design Thinking Process to Design an Electronic Kardex: a Case Study From a Self-Access Center</h3>
                            <p>Luz Marisol Falfán Hernández, José-Guillermo Hernández-Calderón, Luis Gerardo Montané-Jiménez</p>
                        </li>
                        <li class="list-group-item">
                            <h3 class="h5">Quality Sessions: a Mechanism for Evaluating Design Quality in a Large-Scale Organization</h3>
                            <p>Víctor Manuel García Luna</p>
                        </li>
                        <li class="list-group-item">
                            <h3 class="h5">Interactive Games for Deaf Children: An Exploratory Literature Review</h3>
                            <p>Alfredo Sánchez Nava, Pablo Adrián Ramos Aguirre, Pedro C. Santana-Mancilla, Laura Sanely Gaytán Lugo</p>
                        </li>                        
                    </ul>

                </div>
            </div>
        </div>
    </section>

</template>