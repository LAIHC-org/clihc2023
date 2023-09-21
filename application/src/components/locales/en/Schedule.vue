<script>
import Tr from '@/i18n/translation'

export default {
    setup() {
        return { Tr }
    }
}
</script>

<template>
    <ol class="list-group list-group-numbered">
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">
                    <RouterLink :to="Tr.i18nRoute({ name: 'schedule', hash: '#monday' })" class="uline">
                        Monday, October 30th, 2023
                    </RouterLink>
                </div>
            </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">
                    <RouterLink :to="Tr.i18nRoute({ name: 'schedule', hash: '#tuesday' })" class="uline">
                        Tuesday, October 31st, 2023
                    </RouterLink>
                </div>
            </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">
                    <RouterLink :to="Tr.i18nRoute({ name: 'schedule', hash: '#wednesday' })" class="uline">
                        Wednesday, November 1st, 2023
                    </RouterLink>
                </div>
            </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">
                    <RouterLink :to="Tr.i18nRoute({ name: 'schedule', hash: '#thursday' })" class="uline">
                        Thursday, November 2nd, 2023
                    </RouterLink>
                </div>
            </div>
        </li>
    </ol>

    <h2 id="monday" class="text-primary text-gradient text-center py-4">Monday, October 30th, 2023. <br>Edificio Carolino
    </h2>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col" class="w-25">Time (CST)</th>
                <th scope="col">Event</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">08:00 - 09:00 hrs</th>
                <td>
                    <div>
                        Registration
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">09:00 - 09:30 hrs</th>
                <td>
                    <div>
                        Inauguration
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">09:30 - 10:00 hrs</th>
                <td>
                    <p>
                        Keynote by <strong>Phillipe Palanque</strong> "Past, Present and Future in Modeling User Tasks"
                    </p>
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#phillipePalenque"
                        role="button" aria-expanded="false" aria-controls="phillipePalenque">Abstract</a>
                    <div class="collapse" id="phillipePalenque">
                        <div class="card card-body">
                            <p>
                                Abstract
                            </p>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">10:15 - 10:45 hrs</th>
                <td>
                    <p>
                        Keynote by <strong>Marisol Wong</strong> "Hacia un Mundo de Muchos Mundos en IHC"
                    </p>
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#marisolWong" role="button"
                        aria-expanded="false" aria-controls="marisolWong">Abstract</a>
                    <div class="collapse" id="marisolWong">
                        <div class="card card-body">
                            <p>
                                The field of HCI has long recognized a socio-technical gap complicating the design of
                                technologies that can sustainably meet social needs. In response, a growing body of research
                                advocates for assets-based design, an approach that seeks to build upon what the individuals
                                and community already have. The emphasis on positioning strengths rather than needs at the
                                center of the process can complicate designers' decisions on what activities to foster, how
                                to conduct them, and what outcomes to expect. In this talk, I reflect on my journey trying
                                to apply an assets-based approach to design when working first with Latin* parents in the
                                U.S. to reinvent technologies for parents to engage with their children’s education, then
                                working with different communities in Guayaquil who are seeking in technology a way to
                                innovate and sustain their work, and finally, with other Latin American HCI researchers who
                                are trying to render visible the strengths that the region brings to HCI as a globalized
                                discipline. In particular, I explore the problems and implications of focusing on assets as
                                the base for design, propose capacity-focused design as a more realistic alternative than
                                assets-based design, and discuss the methodological commitments and changes of perspective
                                around work, technology's role, and transformation that this approach requires.
                            </p>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">11:00 - 11:30 hrs</th>
                <td>
                    Coffee Break
                </td>
            </tr>
            <tr>
                <th scope="row">11:30 - 12:00 hrs</th>
                <td>
                    <p>
                        Keynote by <strong>Roberto Martínez</strong> "Putting the 'I' in AI: Human-Centred Approaches in
                        Education"
                    </p>
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#robertoMartinez"
                        role="button" aria-expanded="false" aria-controls="robertoMartinez">Abstract</a>
                    <div class="collapse" id="robertoMartinez">
                        <div class="card card-body">
                            <p>
                                As we experience a second wave of Artificial Intelligence (AI) innovations, technology
                                developers across various sectors are teaming up to create revolutionary tools and
                                methodologies. In education, a surge of new tools has been launched in a remarkably short
                                time, challenging conventional assessment practices and reshaping how students demonstrate
                                their knowledge creation. Yet, in the rush to embrace the future, it's crucial to keep human
                                factors at the core of these efforts. This keynote will explore the significance of a
                                human-centered design approach in integrating AI in education. A human-centered approach to
                                designing AI innovations not only holds the potential to enhance learning outcomes but also
                                to acknowledge, respect, and design for the unique attributes of human cognition and
                                emotion. This undertaking is a multi-disciplinary effort, seamlessly weaving together
                                foundations of Human-Computer Interaction, design, educational theory, and data science. I
                                will present an authentic case study that illustrates the profound impact of blending human
                                expertise with machine intelligence. This study revolves around a multimodal learning
                                analytics project where educators and other educational stakeholders collaboratively
                                designed a data capture infrastructure to support face-to-face collaboration. In this
                                project, multiple sensors—including positioning sensors, physiological wristbands, audio
                                devices, and video—were utilized to monitor groups of nursing students. The primary aim was
                                to co-design interfaces that amplify reflective practices and explore how AI can be used to
                                support education with integrity.
                            </p>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">12:15 - 13:00 hrs</th>
                <td>
                    Keynote by Claudia Lopez "Towards inter-disciplinary approaches to re-imagine AI"
                </td>
            </tr>
            <tr>
                <th scope="row">13:00 - 16:00 hrs</th>
                <td>
                    Carolino Tour
                </td>
            </tr>
            <tr>
                <th scope="row">16:00 - 19:00 hrs</th>
                <td>
                    <ul>
                        <li>Room 1 - Workshop 1</li>
                        <li>Room 2 - Workshop 2</li>
                        <li>Room 3 - Workshop 3</li>
                        <li>Room 4 - Workshop 4</li>
                        <li>Room 5 - Workshop 5</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>

    <h2 id="tuesday" class="text-primary text-gradient text-center py-4"> Tuesday, October 31st, 2023. <br>Facultad de la
        FCC (Auditorio FCC y Posgrado)</h2>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col" class="w-25">Time (CST)</th>
                <th scope="col">Event</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">08:00 - 09:00 hrs</th>
                <td>
                    <p>
                        Registration
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">09:00 - 11:00 hrs</th>
                <td>
                    <p>
                        Paper Session 1
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">11:00 - 11:30 hrs</th>
                <td>
                    Cofee Break
                </td>
            </tr>
            <tr>
                <th scope="row">11:30 - 13:30 hrs</th>
                <td>
                    <p>Paper Session 2</p>
                </td>
            </tr>
            <tr>
                <th scope="row">13:30 - 15:00 hrs</th>
                <td>
                    <p>Lunch</p>
                </td>
            </tr>
            <tr>
                <th scope="row">15:00 - 17:00 hrs</th>
                <td>
                    <p>
                        Paper Session 3
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">17:00 - 18:00 hrs</th>
                <td>
                    <p>
                        Doctoral Colloquium / SDC / Posters
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">20:00 hrs</th>
                <td>
                    <p>
                        Gala Dinner
                    </p>
                </td>
            </tr>
        </tbody>
    </table>

    <h2 id="wednesday" class="text-primary text-gradient text-center py-4">Wednesday, November 1st, 2023.<br>Facultad de la
        FCC (Auditorio FCC y Posgrado)</h2>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col" class="w-25">Time (CST)</th>
                <th scope="col">Event</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">08:00 - 09:00 hrs</th>
                <td>
                    <p>
                        Registration
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">09:30 - 10:00 hrs</th>
                <td>
                    <p>Industry Day Keynote</p>
                </td>
            </tr>
            <tr>
                <th scope="row">10:00 - 11:00 hrs</th>
                <td>
                    <p>Cofee Break</p>
                </td>
            </tr>
            <tr>
                <th scope="row">11:00 - 14:00 hrs</th>
                <td>
                    <ul>
                        <li>Workshop 1</li>
                        <li>Workshop 2</li>
                        <li>Workshop 3</li>
                        <li>Workshop 4</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th scope="row">14:00 hrs </th>
                <td>
                    <p>
                        Closure
                    </p>
                </td>
            </tr>
        </tbody>
    </table>

    <h2 id="thursday" class="text-primary text-gradient text-center py-4">Thursday, November 2nd, 2023.</h2>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col" class="w-25">Time (CST)</th>
                <th scope="col">Event</th>
            </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">09:00 - 18:00 hrs</th>
            <td>
                <p>
                    DUAL University Workshop
                </p>
            </td>
        </tr>
    </tbody>
</table></template>