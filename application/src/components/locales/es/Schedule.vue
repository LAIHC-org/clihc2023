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

    <h2 id="monday" class="text-primary text-gradient text-center py-4">Lunes, 30 de octubre, 2023. <br>Edificio Carolino</h2>
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
                        Conferencia Magistral por <strong>Phillipe Palanque</strong> "Past, Present and Future in Modeling User Tasks"
                    </p>
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse"
                        href="#phillipePalenque" role="button" aria-expanded="false"
                        aria-controls="phillipePalenque">Resumen</a>
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
                    </p>
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse"
                        href="#marisolWong" role="button" aria-expanded="false"
                        aria-controls="marisolWong">Resumen</a>
                    <div class="collapse" id="marisolWong">
                        <div class="card card-body">
                            <p>
                                Resumen
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
                        Conferencia Magistral por <strong>Roberto Martínez</strong> "Putting the 'I' in AI: Human-Centred Approaches in Education"
                    </p>
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse"
                        href="#robertoMartinez" role="button" aria-expanded="false"
                        aria-controls="robertoMartinez">Resumen</a>
                    <div class="collapse" id="robertoMartinez">
                        <div class="card card-body">
                            <p>
                                Resumen
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

    <h2 id="tuesday" class="text-primary text-gradient text-center py-4"> Martes, 31 de octubre, 2023. <br>Facultad de la FCC (Auditorio FCC y Posgrado)</h2>
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

    <h2 id="wednesday" class="text-primary text-gradient text-center py-4">Miércoles, 1o de noviembre, 2023.<br>Facultad de la FCC (Auditorio FCC y Posgrado)</h2>
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
</template>