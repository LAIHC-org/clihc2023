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

    <h2 id="monday" class="text-primary text-gradient text-center py-4">Monday, October 30th, 2023. <br>Edificio Carolino</h2>
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
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse"
                        href="#phillipePalenque" role="button" aria-expanded="false"
                        aria-controls="phillipePalenque">Abstract</a>
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
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse"
                        href="#marisolWong" role="button" aria-expanded="false"
                        aria-controls="marisolWong">Abstract</a>
                    <div class="collapse" id="marisolWong">
                        <div class="card card-body">
                            <p>
                                Abstract
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
                        Keynote by <strong>Roberto Martínez</strong> "Putting the 'I' in AI: Human-Centred Approaches in Education"
                    </p>
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse"
                        href="#robertoMartinez" role="button" aria-expanded="false"
                        aria-controls="robertoMartinez">Abstract</a>
                    <div class="collapse" id="robertoMartinez">
                        <div class="card card-body">
                            <p>
                                Abstract
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

    <h2 id="tuesday" class="text-primary text-gradient text-center py-4"> Tuesday, October 31st, 2023. <br>Facultad de la FCC (Auditorio FCC y Posgrado)</h2>
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

    <h2 id="wednesday" class="text-primary text-gradient text-center py-4">Wednesday, November 1st, 2023.<br>Facultad de la FCC (Auditorio FCC y Posgrado)</h2>
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
    </table>    
</template>