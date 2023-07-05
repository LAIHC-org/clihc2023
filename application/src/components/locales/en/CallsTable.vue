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
                    Call for papers (CFP)
                </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Deadline for submission:</strong> <del>June 19th</del> <strong class="text-danger">July 3rd EXTENDED</strong><br>
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#cpf-dates'})" class="uline">
                See all CFP important dates
            </RouterLink>            
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#cpt-call'})" class="uline">
                    Call for poster track (CPT)
                </RouterLink>                
            </div>
            <strong class="text-primary text-gradient">Deadline for submission:</strong>July 31st<br>
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#cpt-dates'})" class="uline">
                See all CPT important dates
            </RouterLink>                
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#cwt-call'})" class="uline">
                Call for workshops and tutorial (CWT)
            </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Deadline for submission:</strong> July 31st<br>
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#cwt-dates'})" class="uline">
                See all CWT important dates
            </RouterLink>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#sdc-call'})" class="uline">
                Student design competition (SDC)
            </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Deadline for submission:</strong> July 31st<br>
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#sdc-dates'})" class="uline">
                See all SDC important dates
            </RouterLink>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#cgc-call'})" class="uline">
                Graduate Colloquium (GC)
            </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Deadline for submission:</strong> July 31st<br>
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#cgc-dates'})" class="uline">
                See all GC important dates
            </RouterLink>            
        </div>
        </li>
    </ol>    
</template>