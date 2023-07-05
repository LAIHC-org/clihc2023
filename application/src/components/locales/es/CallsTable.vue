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
                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#cfp-call'})" class="uline">
                    Convocatoria de trabajos (CFP)
                </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Fecha límite de envío:</strong> <del>19 de junio</del> <strong class="text-danger">3 de julio PRORROGADA</strong><br>
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#cpf-dates'})" class="uline">
                Ver todas las fechas importantes del CFP
            </RouterLink>            
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#cpt-call'})" class="uline">
                    Convocatoria de pósteres (CPT)
                </RouterLink>                
            </div>
            <strong class="text-primary text-gradient">Fecha límite de envío:</strong>31 de julio<br>
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#cpt-dates'})" class="uline">
                Ver todas las fechas importantes del CPT
            </RouterLink>                
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#cwt-call'})" class="uline">
                Convocatoria de talleres y tutoriales (CWT)
            </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Fecha límite de envío:</strong> 31 de julio<br>
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#cwt-dates'})" class="uline">
                Ver todas las fechas importantes del CWT
            </RouterLink>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#sdc-call'})" class="uline">
                Competencia de diseño estudiantil (SDC)
            </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Fecha límite de envío:</strong> 31 de julio<br>
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#sdc-dates'})" class="uline">
                Ver todas las fechas importantes del SDC
            </RouterLink>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#cgc-call'})" class="uline">
                Coloquio de graduados (GC)
            </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Fecha límite de envío:</strong> 31 de julio<br>
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#cgc-dates'})" class="uline">
                Ver todas las fechas importantes del GC
            </RouterLink>            
        </div>
        </li>
    </ol>    
</template>