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
                        Segunda-feira, 30 de outubro de 2023
                    </RouterLink>
                </div>
            </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">
                    <RouterLink :to="Tr.i18nRoute({ name: 'schedule', hash: '#tuesday' })" class="uline">
                        Terça-feira, 31 de outubro de 2023
                    </RouterLink>
                </div>
            </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">
                    <RouterLink :to="Tr.i18nRoute({ name: 'schedule', hash: '#wednesday' })" class="uline">
                        Quarta-feira, 1º de novembro de 2023
                    </RouterLink>
                </div>
            </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">
                    <RouterLink :to="Tr.i18nRoute({ name: 'schedule', hash: '#thursday' })" class="uline">
                        Quinta-feira, 2 de novembro de 2023
                    </RouterLink>
                </div>
            </div>
        </li>
    </ol>

    <h2 id="monday" class="text-primary text-gradient text-center py-4">Segunda-feira, 30 de outubro de 2023. <br>Edificio
        Carolino</h2>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col" class="w-25">Horário (CST)</th>
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
                        Inauguração
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">09:30 - 10:00 hrs</th>
                <td>
                    <p>
                        Palestra de <strong>Phillipe Palanque</strong> "Past, Present and Future in Modeling User Tasks"
                    </p>
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#phillipePalenque"
                        role="button" aria-expanded="false" aria-controls="phillipePalenque">Resumo</a>
                    <div class="collapse" id="phillipePalenque">
                        <div class="card card-body">
                            <p>
                                Resumo
                            </p>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">10:15 - 10:45 hrs</th>
                <td>
                    <p>
                        Palestra de <strong>Marisol Wong</strong> "Hacia un Mundo de Muchos Mundos en IHC"
                    </p>
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#marisolWong" role="button"
                        aria-expanded="false" aria-controls="marisolWong">Resumo</a>
                    <div class="collapse" id="marisolWong">
                        <div class="card card-body">
                            <p>
                                O campo da HCI (Interação Humano-Computador) há muito reconhece uma lacuna socio-técnica que
                                complica o design de tecnologias que possam atender de forma sustentável às necessidades
                                sociais. Em resposta, um crescente corpo de pesquisa defende o design baseado em ativos, uma
                                abordagem que busca construir com base no que as pessoas e a comunidade já possuem. O foco
                                em posicionar as forças, em vez das necessidades, no centro do processo pode complicar as
                                decisões dos designers sobre quais atividades promover, como conduzi-las e quais resultados
                                esperar. Nesta palestra, reflito sobre minha jornada tentando aplicar uma abordagem baseada
                                em ativos ao design, primeiro ao trabalhar com pais latinos nos EUA para reinventar
                                tecnologias para que os pais se envolvam na educação de seus filhos, depois ao trabalhar com
                                diferentes comunidades em Guayaquil que buscam na tecnologia uma maneira de inovar e
                                sustentar seu trabalho, e finalmente, com outros pesquisadores latino-americanos de HCI que
                                estão tentando tornar visíveis as forças que a região traz para a HCI como disciplina
                                globalizada. Em particular, exploro os problemas e implicações de se concentrar em ativos
                                como base para o design, proponho o design centrado na capacidade como uma alternativa mais
                                realista do que o design baseado em ativos e discuto os compromissos metodológicos e as
                                mudanças de perspectiva em torno do trabalho, do papel da tecnologia e da transformação que
                                essa abordagem requer.
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
                        Palestra de <strong>Roberto Martínez</strong> "Putting the 'I' in AI: Human-Centred Approaches in
                        Education"
                    </p>
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#robertoMartinez"
                        role="button" aria-expanded="false" aria-controls="robertoMartinez">Resumo</a>
                    <div class="collapse" id="robertoMartinez">
                        <div class="card card-body">
                            <p>
                                À medida que experimentamos uma segunda onda de inovações em Inteligência Artificial (IA),
                                desenvolvedores de tecnologia em diversos setores estão se unindo para criar ferramentas e
                                metodologias revolucionárias. Na educação, uma onda de novas ferramentas foi lançada em um
                                tempo surpreendentemente curto, desafiando práticas convencionais de avaliação e remodelando
                                como os estudantes demonstram a criação de conhecimento. No entanto, na pressa de abraçar o
                                futuro, é crucial manter os fatores humanos no cerne desses esforços. Esta palestra
                                explorará a importância de uma abordagem de design centrada no ser humano na integração da
                                IA na educação. Uma abordagem centrada no ser humano para o design de inovações em IA não
                                apenas tem o potencial de melhorar os resultados de aprendizado, mas também de reconhecer,
                                respeitar e projetar considerando os atributos únicos da cognição e emoção humanas. Este
                                empreendimento é multidisciplinar, entrelaçando de maneira fluida os fundamentos da
                                Interação Humano-Computador, design, teoria educacional e ciência de dados. Apresentarei um
                                estudo de caso autêntico que ilustra o profundo impacto da combinação da expertise humana
                                com a inteligência artificial. Este estudo gira em torno de um projeto de análise de
                                aprendizado multimodal, no qual educadores e outros interessados na educação projetaram
                                colaborativamente uma infraestrutura de captura de dados para apoiar a colaboração
                                presencial. Neste projeto, vários sensores, incluindo sensores de posicionamento, pulseiras
                                fisiológicas, dispositivos de áudio e vídeo, foram utilizados para monitorar grupos de
                                estudantes de enfermagem. O principal objetivo foi co-projetar interfaces que amplificassem
                                práticas reflexivas e explorassem como a IA pode ser usada para apoiar a educação com
                                integridade.
                            </p>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">12:15 - 13:00 hrs</th>
                <td>
                    Palestra de Claudia Lopez "Towards inter-disciplinary approaches to re-imagine AI"
                </td>
            </tr>
            <tr>
                <th scope="row">13:00 - 16:00 hrs</th>
                <td>
                    Tour pelo Carolino
                </td>
            </tr>
            <tr>
                <th scope="row">16:00 - 19:00 hrs</th>
                <td>
                    <ul>
                        <li>Sala 1 - Workshop 1</li>
                        <li>Sala 2 - Workshop 2</li>
                        <li>Sala 3 - Workshop 3</li>
                        <li>Sala 4 - Workshop 4</li>
                        <li>Sala 5 - Workshop 5</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>

    <h2 id="tuesday" class="text-primary text-gradient text-center py-4"> Terça-feira, 31 de outubro de 2023. <br>Facultad
        de la FCC (Auditorio FCC y Posgrado)</h2>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col" class="w-25">Horário (CST)</th>
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
                        Sessão de Apresentação de Trabalhos 1
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
                    <p>Sessão de Apresentação de Trabalhos 2</p>
                </td>
            </tr>
            <tr>
                <th scope="row">13:30 - 15:00 hrs</th>
                <td>
                    <p>Almoço</p>
                </td>
            </tr>
            <tr>
                <th scope="row">15:00 - 17:00 hrs</th>
                <td>
                    <p>
                        Sessão de Apresentação de Trabalhos 3
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">17:00 - 18:00 hrs</th>
                <td>
                    <p>
                        Colóquio Doutoral / SDC / Pôsteres
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">20:00 hrs</th>
                <td>
                    <p>
                        Jantar de Gala
                    </p>
                </td>
            </tr>
        </tbody>
    </table>

    <h2 id="wednesday" class="text-primary text-gradient text-center py-4">Quarta-feira, 1º de novembro de 2023.<br>Facultad
        de la FCC (Auditorio FCC y Posgrado)</h2>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col" class="w-25">Horário (CST)</th>
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
                    <p>Palestra do Dia da Indústria</p>
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
                        Fecho
                    </p>
                </td>
            </tr>
        </tbody>
    </table>

    <h2 id="thursday" class="text-primary text-gradient text-center py-4">Quinta-feira, 2 de novembro de 2023.</h2>
    <table class="table table-striped">
        <thead>
            <tr>
            <th scope="col" class="w-25">Horário (CST)</th>
            <th scope="col">Evento</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">09:00 - 18:00 hrs</th>
            <td>
                <p>
                    Workshop Universidade DUAL
                </p>
            </td>
        </tr>
    </tbody>
</table></template>