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
                    Chamada de trabalhos (CFP)
                </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Prazo de envio:</strong>  <del>19 de junho</del> <strong class="text-danger">3 de julho PRORROGADO</strong><br>
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#cpf-dates'})" class="uline">
                Veja todas as datas importantes do CFP
            </RouterLink>            
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#cpt-call'})" class="uline">
                    Chamada para sessão de pôsteres (CPT)
                </RouterLink>                
            </div>
            <strong class="text-primary text-gradient">Prazo de envio:</strong>31 de julho<br>
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#cpt-dates'})" class="uline">
                Veja todas as datas importantes do CPT
            </RouterLink>                
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#cwt-call'})" class="uline">
                Chamada para workshops e tutoriais (CWT)
            </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Prazo de envio:</strong> 31 de julho<br>
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#cwt-dates'})" class="uline">
                Veja todas as datas importantes do CWT
            </RouterLink>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#sdc-call'})" class="uline">
                Competição de design estudantil (SDC)
            </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Prazo de envio:</strong> 31 de julho<br>
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#sdc-dates'})" class="uline">
                Veja todas as datas importantes do SDC
            </RouterLink>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#cgc-call'})" class="uline">
                Colóquio de pós-graduação (GC)
            </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Prazo de envio:</strong> 31 de julho<br>
            <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#cgc-dates'})" class="uline">
                Veja todas as datas importantes do GC
            </RouterLink>            
        </div>
        </li>
    </ol>    
</template>