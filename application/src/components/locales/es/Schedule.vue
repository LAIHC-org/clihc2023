<script>
import Tr from '@/i18n/translation'

export default {
    setup() {
        return { Tr }
    }
}
</script>

<template>
    <p class="text-center">Programa Tentativo (Horario de México Central) - Sujeto a Cambios</p>
    <ol class="list-group list-group-numbered">
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">
                    <RouterLink :to="Tr.i18nRoute({ name: 'schedule', hash: '#monday' })" class="uline">
                        Lunes, 30 de octubre, 2023
                    </RouterLink>
                </div>
            </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">
                    <RouterLink :to="Tr.i18nRoute({ name: 'schedule', hash: '#tuesday' })" class="uline">
                        Martes, 31 de octubre, 2023
                    </RouterLink>
                </div>
            </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">
                    <RouterLink :to="Tr.i18nRoute({ name: 'schedule', hash: '#wednesday' })" class="uline">
                        Miércoles, 1o de noviembre, 2023
                    </RouterLink>
                </div>
            </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">
                    <RouterLink :to="Tr.i18nRoute({ name: 'schedule', hash: '#thursday' })" class="uline">
                        Jueves, 2 de noviembre, 2023
                    </RouterLink>
                </div>
            </div>
        </li>
    </ol>

    <h2 id="monday" class="text-primary text-gradient text-center py-4">Lunes, 30 de octubre, 2023. <br>Edificio Carolino
    </h2>
    <ul>
        <li>Registro</li>
        <li>Inauguración</li>
        <li>Conferencias magistrales</li>
        <li>Presentaciones de artículos completos y cortos</li>
        <li>Talleres y tutoriales</li>
    </ul> 
    <!--
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col" class="w-25">Hora (CST)</th>
                <th scope="col">Evento</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">08:00 - 09:00 hrs</th>
                <td>
                    <div>
                        Registro
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">09:00 - 09:30 hrs</th>
                <td>
                    <div>
                        Inauguración
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">09:30 - 10:00 hrs</th>
                <td>
                    <p>
                        Conferencia Magistral por <strong>Phillipe Palanque</strong> "Past, Present and Future in Modeling
                        User Tasks"
                        <br><strong>Universidad de Toulouse 3 Paul Sabatier, Francia</strong>
                    </p>
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#phillipePalenque"
                        role="button" aria-expanded="false" aria-controls="phillipePalenque">Resumen</a>
                    <div class="collapse" id="phillipePalenque">
                        <div class="card card-body">
                            <p>
                                Resumen
                            </p>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">10:15 - 10:45 hrs</th>
                <td>
                    <p>
                        Conferencia Magistral por <strong>Marisol Wong</strong> "Hacia un Mundo de Muchos Mundos en IHC"
                        <br><strong>Escuela Superior Politécnica del Litoral, Ecuador</strong>
                    </p>
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#marisolWong" role="button"
                        aria-expanded="false" aria-controls="marisolWong">Resumen</a>
                    <div class="collapse" id="marisolWong">
                        <div class="card card-body">
                            <p>
                                El campo de la Interacción Humano-Computadora (HCI) ha reconocido durante mucho tiempo una
                                brecha socio-técnica que complica el diseño de tecnologías que puedan satisfacer de manera
                                sostenible las necesidades sociales. En respuesta, un creciente cuerpo de investigación
                                aboga por el diseño basado en activos, un enfoque que busca construir sobre lo que las
                                personas e la comunidad ya tienen. El énfasis en posicionar las fortalezas en lugar de las
                                necesidades en el centro del proceso puede complicar las decisiones de los diseñadores sobre
                                qué actividades fomentar, cómo llevarlas a cabo y qué resultados esperar. En esta charla,
                                reflexiono sobre mi trayectoria tratando de aplicar un enfoque basado en activos al diseño,
                                primero al trabajar con padres latinos en los Estados Unidos para reinventar tecnologías
                                para que los padres se involucren en la educación de sus hijos, luego al trabajar con
                                diferentes comunidades en Guayaquil que buscan en la tecnología una forma de innovar y
                                sostener su trabajo, y finalmente, con otros investigadores de HCI latinoamericanos que
                                intentan hacer visibles las fortalezas que la región aporta a la HCI como disciplina
                                globalizada. En particular, exploro los problemas e implicaciones de centrarse en los
                                activos como base para el diseño, propongo el diseño centrado en la capacidad como una
                                alternativa más realista que el diseño basado en activos y discuto los compromisos
                                metodológicos y cambios de perspectiva en torno al trabajo, el papel de la tecnología y la
                                transformación que este enfoque requiere.
                            </p>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">11:00 - 11:30 hrs</th>
                <td>
                    Pausa para Café
                </td>
            </tr>
            <tr>
                <th scope="row">11:30 - 12:00 hrs</th>
                <td>
                    <p>
                        Conferencia Magistral por <strong>Roberto Martínez</strong> "Putting the 'I' in AI: Human-Centred
                        Approaches in Education"
                        <br><strong>Monash University, Australia</strong>
                    </p>
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#robertoMartinez"
                        role="button" aria-expanded="false" aria-controls="robertoMartinez">Resumen</a>
                    <div class="collapse" id="robertoMartinez">
                        <div class="card card-body">
                            <p>
                                A medida que experimentamos una segunda ola de innovaciones en Inteligencia Artificial (IA),
                                los desarrolladores de tecnología en diversos sectores se están uniendo para crear
                                herramientas y metodologías revolucionarias. En educación, ha surgido una oleada de nuevas
                                herramientas en un tiempo sorprendentemente corto, desafiando las prácticas de evaluación
                                convencionales y dando forma a cómo los estudiantes demuestran la creación de su
                                conocimiento. Sin embargo, en la prisa por abrazar el futuro, es crucial mantener los
                                factores humanos en el núcleo de estos esfuerzos. Esta ponencia explorará la importancia de
                                un enfoque de diseño centrado en el ser humano en la integración de la IA en la educación.
                                Un enfoque centrado en el ser humano para diseñar innovaciones en IA no solo tiene el
                                potencial de mejorar los resultados de aprendizaje, sino también de reconocer, respetar y
                                diseñar para los atributos únicos de la cognición y emoción humanas. Este esfuerzo es
                                multidisciplinario, tejiendo de manera fluida fundamentos de Interacción Humano-Computadora,
                                diseño, teoría educativa y ciencia de datos. Presentaré un estudio de caso auténtico que
                                ilustra el profundo impacto de combinar la experiencia humana con la inteligencia
                                artificial. Este estudio se centra en un proyecto de análisis de aprendizaje multimodal en
                                el que los educadores y otros actores educativos diseñaron de manera colaborativa una
                                infraestructura de captura de datos para apoyar la colaboración presencial. En este
                                proyecto, se utilizaron múltiples sensores, incluyendo sensores de posicionamiento,
                                brazaletes fisiológicos, dispositivos de audio y video, para monitorear grupos de
                                estudiantes de enfermería. El objetivo principal fue co-diseñar interfaces que amplificaran
                                las prácticas reflexivas y exploraran cómo la IA puede utilizarse para apoyar la educación
                                con integridad.
                            </p>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">12:15 - 13:00 hrs</th>
                <td>
                    Conferencia Magistral por Claudia Lopez "Towards inter-disciplinary approaches to re-imagine AI"
                </td>
            </tr>
            <tr>
                <th scope="row">13:00 - 16:00 hrs</th>
                <td>
                    Recorrido Carolino
                </td>
            </tr>
            <tr>
                <th scope="row">16:00 - 19:00 hrs</th>
                <td>
                    <ul>
                        <li>Sala 1 - Taller 1</li>
                        <li>Sala 2 - Taller 2</li>
                        <li>Sala 3 - Taller 3</li>
                        <li>Sala 4 - Taller 4</li>
                        <li>Sala 5 - Taller 5</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
    -->
    <h2 id="tuesday" class="text-primary text-gradient text-center py-4"> Martes, 31 de octubre, 2023. <br>Facultad de la
        FCC (Auditorio FCC y Posgrado)</h2>
    <ul>
        <li>Registro</li>
        <li>Coloquio doctoral</li>
        <li>Competencia de diseño estudiantil</li>
        <li>Presentaciones de artículos completos y cortos</li>
        <li>Exposición de pósters</li>
        <li>Cena de gala</li>
    </ul>
    <!--
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col" class="w-25">Hora (CST)</th>
                <th scope="col">Evento</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">08:00 - 09:00 hrs</th>
                <td>
                    <p>
                        Registro
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">09:00 - 11:00 hrs</th>
                <td>
                    <p>
                        Sesión de Ponencias 1
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">11:00 - 11:30 hrs</th>
                <td>
                    Pausa para Café
                </td>
            </tr>
            <tr>
                <th scope="row">11:30 - 13:30 hrs</th>
                <td>
                    <p>Sesión de Ponencias 2</p>
                </td>
            </tr>
            <tr>
                <th scope="row">13:30 - 15:00 hrs</th>
                <td>
                    <p>Comida</p>
                </td>
            </tr>
            <tr>
                <th scope="row">15:00 - 17:00 hrs</th>
                <td>
                    <p>
                        Sesión de Ponencias 3
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">17:00 - 18:00 hrs</th>
                <td>
                    <p>
                        Coloquio Doctoral / SDC / Pósters
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">20:00 hrs</th>
                <td>
                    <p>
                        Cena de Gala
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
    -->

    <h2 id="wednesday" class="text-primary text-gradient text-center py-4">Miércoles, 1o de noviembre, 2023.<br>Facultad de
        la FCC (Auditorio FCC y Posgrado)</h2>
    <ul>
        <li>Registro</li>
        <li>Evento día de la industria</li>
        <li>Talleres y tutoriales</li>
        <li>Student design competition</li>
        <li>Clausura</li>
    </ul>
    <!--
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col" class="w-25">Hora (CST)</th>
                <th scope="col">Evento</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">08:00 - 09:00 hrs</th>
                <td>
                    <p>
                        Registro
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">09:30 - 10:00 hrs</th>
                <td>
                    <p>Conferencia Magistral Día de la Industria</p>
                </td>
            </tr>
            <tr>
                <th scope="row">10:00 - 11:00 hrs</th>
                <td>
                    <p>Pausa para Café</p>
                </td>
            </tr>
            <tr>
                <th scope="row">11:00 - 14:00 hrs</th>
                <td>
                    <ul>
                        <li>Taller 1</li>
                        <li>Taller 2</li>
                        <li>Taller 3</li>
                        <li>Taller 4</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th scope="row">14:00 hrs </th>
                <td>
                    <p>
                        Clausura
                    </p>
                </td>
            </tr>
        </tbody>
    </table>

    <h2 id="thursday" class="text-primary text-gradient text-center py-4">Jueves, 2 de noviembre, 2023.</h2>

    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col" class="w-25">Hora (CST)</th>
                <th scope="col">Evento</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">09:00 - 18:00 hrs</th>
                <td>
                    <p>
                        Taller Universidad DUAL
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
    -->
</template>