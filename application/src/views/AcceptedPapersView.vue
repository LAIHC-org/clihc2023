<script setup>
import TheHeader from '@/components/Header.vue'
</script>

<template>
    <TheHeader>
        <template #page-name>
            Accepted papers
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

                    <h2 id="full-papers" class="text-primary text-gradient text-center py-4">Full papers</h2>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <h3 class="h5">Caring through Conversations: Voice User Interfaces For Everyday Stress Care</h3>
                            <p>Adriana Navarro Sainz, Annu Prabhakar</p>
                        </li>
                        <li class="list-group-item">
                            <h3 class="h5">What is a User Interface, again? A Survey of Definitions of User Interface</h3>
                            <p>Leonel Vinicio Morales Díaz</p>
                        </li>
                        <li class="list-group-item">
                            <h3 class="h5">Understanding User Perspective to Improve Biometric Authentication Adoption</h3>
                            <p>Aubrey Patrick, Andrew Burris, Sanchari Das</p>
                        </li>
                        <li class="list-group-item">
                            <h3 class="h5">SmartTasko: Supporting short and spontaneous activities of daily living of ADHD individuals</h3>
                            <p>Hector Osuna, Marcos Moroyoqui, David Espina, Lizbeth Escobedo</p>
                        </li>                        
                    </ul>

                    <h2 id="short-papers" class="text-primary text-gradient text-center py-4">Short papers</h2>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <h3 class="h5">Interactive application for training orthopedic residents to perform knee arthroscopy procedure</h3>
                            <p>Julian Nuñez de Villavicencio Castiñeyra, Silvia Rodriguez Chaparro, Luis Bautista Rojas, Lola Bautista Rozo</p>
                        </li>
                        <li class="list-group-item">
                            <h3 class="h5">Global Plaza: Creating an inclusive and equitable space at high-level conferences</h3>
                            <p>Cuauhtemoc Rivera-Loaiza, Marisol Wong-Villacres</p>
                        </li>
                    </ul>

                    <h2 id="posters" class="text-primary text-gradient text-center py-4">Posters</h2>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <h3 class="h5">Una crítica de la atribución de agencias, intenciones y capacidades de la IA en los medios</h3>
                            <p>Ariel Guersenzvaig, Ramón Sangüesa</p>
                        </li>
                        <li class="list-group-item">
                            <h3 class="h5">A tangible interface approach to the codesign of a literacy platform for deaf users</h3>
                            <p>J. Alfredo Sánchez, Soraia Prietch, Silvia B. Fajardo-Flores, Laura S. Gaytán-Lugo</p>
                        </li>
                        <li class="list-group-item">
                            <h3 class="h5">Multimedia principles applied to a virtual reality application design for procedural learning</h3>
                            <p>Luis Bautista, José Guerrero, Carmen Plata</p>
                        </li>
                        <li class="list-group-item">
                            <h3 class="h5">Augmenting interoceptive awareness with off-the-shelf sensors using visuo-haptic emotional stimulus</h3>
                            <p>David Antonio Gomez Jauregui</p>
                        </li>
                        <li class="list-group-item">
                            <h3 class="h5">Dialog Modeling of Domain Specific Cognitive Assistants</h3>
                            <p>J Guadalupe Ramos Díaz</p>
                        </li>
                        <li class="list-group-item">
                            <h3 class="h5">Using design thinking process to design an electronic Kardex: a case study from a self-access center</h3>
                            <p>Luz Marisol Falfán Hernández, José-Guillermo Hernández-Calderón, Luis Gerardo Montané-Jiménez</p>
                        </li>
                        <li class="list-group-item">
                            <h3 class="h5">Quality Sessions: a mechanism for evaluating design quality in a large-scale organization</h3>
                            <p>Víctor Manuel García Luna</p>
                        </li>
                        <li class="list-group-item">
                            <h3 class="h5">Interactive games for deaf children: An exploratory literature review</h3>
                            <p>Alfredo Sánchez Nava, Pablo Adrián Ramos Aguirre, Pedro C. Santana-Mancilla, Laura Sanely Gaytán Lugo</p>
                        </li>                        
                    </ul>

                </div>
            </div>
        </div>
    </section>

</template>