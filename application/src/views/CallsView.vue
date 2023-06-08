<script setup>
import TheHeader from '@/components/Header.vue'
import OrganizerItem from '@/components/OrganizerItem.vue';
</script>

<template>
  <TheHeader>
    <template #page-name>
      Call for participation
    </template>
  </TheHeader>

  <section>
    <div class="container">
      <div class="row">
        <div class="row justify-content-center my-3">
          <div class="col-lg-8">

            <ol class="list-group list-group-numbered">
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold"><a href="./call-for-participation#cfp-call" class="uline">Call for papers
                      (CFP)</a></div>
                  <strong class="text-primary text-gradient">Deadline for Abstract submission:</strong> June 12th
                  <br><a class="uline" href="./call-for-participation#cpf-dates">See all CFP important dates</a>
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">
                    <a href="./call-for-participation#cpt-call" class="uline">
                      Call for poster track (CPT)
                    </a>
                  </div>
                  <strong class="text-primary text-gradient">Deadline for submission:</strong>
                  July 31th<br>
                  <a class="uline" href="./call-for-participation#cpt-dates">See all CPT important dates</a>
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">
                    <a href="./call-for-participation#cwt-call" class="uline">
                      Call for workshops and tutorial (CWT)
                    </a>
                  </div>
                  <strong class="text-primary text-gradient">Deadline for submission:</strong>
                  July 31th<br>
                  <a class="uline" href="./call-for-participation#cwt-dates">See all CWT important dates</a>
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Graduate Colloquium (GC)</div>
                  <strong class="text-primary text-gradient">Deadline for submission:</strong> Pending<br>
                </div>
              </li>
            </ol>

            <!-- call for papers-->

            <!-- <h2 id="cfp-call">Call for papers</h2> -->
            <h2 id="cfp-call" class="text-primary text-gradient text-center py-4">Call for papers</h2>

            <p>
              The XI Latin American Conference on Human-Computer Interaction (CLIHC 2023), aims to provide a premier forum
              that brings together the Latin American and international Human-Computer Interaction (HCI) research
              communities to discuss and share ideas, methods, approaches, and techniques for designing, implementing, and
              evaluating interactive user experiences. In accordance with previous editions, we believe that HCI must
              foster the production of technology that can be used by and benefit as many people as possible, enabling
              intercultural exchange and cooperation between people with different backgrounds and needs.
            </p>

            <p>
              This year, CLIHC 2023 will take place in Puebla, Mexico and online, is open to submissions in the following
              categories:
            </p>

            <ul>
              <li>Full papers</li>
              <li>Short papers</li>
            </ul>

            <p>
              Authors are invited to prepare and submit articles reporting on research projects, innovative designs, user
              studies, models of interaction, field studies, case studies, and others. Academics, researchers,
              practitioners and professionals from industry, as well as undergraduate and graduate students are welcome to
              participate in the peer-reviewed selection of the works that will be presented at the conference or online,
              from Oct. 30 to Nov 1, 2023.
            </p>

            <p>Topics of submissions may cover all aspects of HCI, including, but not limited to:</p>

            <ol>
              <li>Affective computing</li>
              <li>Brain computer interaction (BCI)</li>
              <li>CSCW and social computing</li>
              <li>Design methods</li>
              <li>Education and HCI</li>
              <li>Embodied interaction</li>
              <li>HCI for development (HCI4D)</li>
              <li>Health and HCI</li>
              <li>Inclusion and accessibility</li>
              <li>Innovative user interfaces</li>
              <li>Interfaces and interaction in games</li>
              <li>Mobile computing</li>
              <li>Perception and visualization</li>
              <li>Human-robot interaction and telepresence</li>
              <li>User experience (UX) and usability</li>
            </ol>

            <h3>Submission and Important Dates</h3>
            <p>
              All manuscripts must be submitted fully anonymized (to anonymize your paper, please consider the <a
                href="https://chi2021.acm.org/for-authors/presenting/papers/chi-anonymization-policy"
                class="uline">guidelines
                provided by CHI</a>). Please consider an international audience: e.g., avoid local terms, and use the
              international system of units. In addition, consider following <a
                href="./accessibility-recommendations-for-authors" class="uline">accessibility guidelines</a>.
            </p>

            <h4 id="cpf-dates">Important dates (full and short papers)</h4>
            <ul>
              <li>Abstract submission: June 12th</li>
              <li>Paper submission: June 19th</li>
              <li>Notification: July 31st</li>
              <li>Camera ready: August 25th</li>
              <li>Event Oct 30 - 31, Nov 1</li>
            </ul>
            <p>Deadlines are at midnight AoE (Anywhere on Earth).</p>

            <h3>Code of Ethics</h3>
            <p>
              We abide by the <a href="https://www.acm.org/code-of-ethics" class="uline">ACM Code of Ethics</a>. We expect
              that all
              submissions, underlying research, and behavior during
              the review process and conference comply with the principles and responsibilities outlined by the code.
            </p>

            <h3>Submission process</h3>
            <p>
              Full and short paper submissions are to be made through <a
                href="https://easychair.org/conferences/?conf=clihc2023" class="uline">EasyChair Conference System</a>.
            </p>

            <p>
              Submission format to be used for each category will follow the <a
                href="https://www.acm.org/publications/proceedings-template" class="uline">new ACM Master Article
                format</a>. Authors may
              choose to work in one of the following formats:
            </p>

            <ul>
              <li>Microsoft Word</li>
              <li>LaTeX (recommended)</li>
            </ul>

            <h3>Submission Categories</h3>

            <h4>Full papers (10 pages)</h4>
            <p>
              Research projects that have achieved a mature stage and present an original contribution to the state of the
              art are welcome to submit in the full paper category. Submissions must be relevant to the subject of the
              conference, and may not have been published nor be under review in any other conference or journal. The
              maximum length for full papers is 10 pages including references, and papers must be written in English,
              Portuguese, or Spanish.
            </p>

            <h4>Short papers (4 pages)</h4>
            <p>
              Research projects wishing to report original preliminary, partial, or complementary results may submit their
              papers to the short paper category which has a maximum length of 4 pages including references. Submitted
              papers must be written in English, Portuguese and Spanish. Content must be relevant to the conference, and
              may not have been published nor be in the review process in any other conference or journal.
            </p>

            <p>
              The articles will be reviewed by at least two reviewers in a double-anonymous process. Please note that
              submitted articles must be anonymized, including references to the authors’ own previous work.
            </p>

            <p>
              We are working to ensure that accepted papers will be published in the ACM Digital Library.
              In addition, best papers will be recommended for submitting an extended version and be published in a
              special edition book of the prestigious <a href="https://www.springer.com/series/6033"
                class="uline">Human–Computer Interaction Series</a>, published by Springer and regularly indexed in the
              master book list of the Web of Science.
            </p>

            <h3 class="my-4">Program (Paper) Chairs</h3>
            <div class="row">
              <div class="col-md-4">
                <OrganizerItem>
                  <template #image>
                    <div class="d-block blur-shadow-image">
                      <img src="/assets/img/people/pablo.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/pablo.png&quot;);">
                    </div>
                  </template>
                  <template #name>
                    Pablo Torres
                  </template>
                  <template #institution>
                    UTPL, EC
                  </template>
                  <template #email>
                  </template>
                </OrganizerItem>
              </div>

              <div class="col-md-4">
                <OrganizerItem>
                  <template #image>
                    <div class="d-block blur-shadow-image">
                      <img src="/assets/img/people/vanessa.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                      style="background-image: url(&quot;./assets/img/people/vanessa.png&quot;);">
                    </div>
                  </template>
                  <template #name>
                    Vanessa Agredo Delgado
                  </template>
                  <template #institution>
                    FUNAD, CO
                  </template>
                  <template #email>
                  </template>
                </OrganizerItem>
              </div>

            </div>
            <br>
            <p><a class="uline" href="./call-for-participation#top">Back to top of page</a></p>
            <!-- end call for papers -->

            <!-- Poster track-->
            <hr>
            <h2 id="cpt-call" class="text-primary text-gradient text-center py-4">Call for poster track</h2>
            <p>
              We invite practitioners, researchers, and students to submit their work to the poster track at CLIHC 2023.
              Posters provide a great opportunity for academics and practitioners to get valuable feedback on early-stage
              work and discuss potential collaborations. Posters must present work-in-progress, preliminary results,
              small-scale studies, late-breaking scientific and professional news showing promise, a demonstration of a
              technical tool, etc. Contributions will be exhibited in a poster session during the CLIHC conference. Papers
              submitted to the poster track can be written either in English, Spanish, or Portuguese and must be written
              in the form of self-contained short research papers.
            </p>

            <h3 id="cpt-dates">Important dates (posters)</h3>
            <ul>
              <li>Submission of poster papers: July 31th</li>
              <li>Notification: August 28th</li>
              <li>Camera ready: September 14th</li>
              <li>Event Oct 30 - 31, Nov 1</li>
            </ul>

            <h3>Submission details</h3>

            <P>
              Authors wishing to submit a paper must:
            </P>
            <ul>
              <li>
                Submit a 4-page paper using the <a href="https://www.acm.org/publications/proceedings-template"
                  class="uline">new ACM Master Article format</a>. Authors may choose to work in one of the
                following formats:
                <ul>
                  <li>Microsoft Word</li>
                  <li>LaTeX (recommended)</li>
                </ul>
              </li>
              <li>
                All materials must be submitted electronically to the <a
                  href="https://easychair.org/conferences/?conf=clihc2023" class="uline">EasyChair Conference System</a>,
                to the Workshop and
                Tutorials’ track, by the deadline.
              </li>
            </ul>
            <p>
              Your submission must be original work. It cannot be under concurrent review for publication by another
              conference or journal nor has been published elsewhere. Please submit accurate and complete references.
            </p>
            <p>
              Accepted poster can choose one of the following publication media:
            </p>
            <ul>
              <li>Conference Proceedings published in ACM DL. Only English submissions can be published in this medium. If
                your submission was accepted in Spanish or Portuguese and wish to publish here, you will have to translate
                your original submission to English.</li>
              <li>Avances en Interacción Humano-Computadora. Only Spanish or English submissions can be published in this
                medium. If your submission was accepted in Portuguese and wish to publish here, you will have to translate
                your original submission to either Spanish or English.</li>
            </ul>

            <h3>Review process</h3>
            <p>
              Papers will be blind peer-reviewed by members of the CLIHC 2023 Poster Track Program Subcommittee (TBD).
              Submissions will be evaluated based on their originality, significance of the contribution to the field,
              technical correctness, and presentation.
            </p>
            <p>
              The Poster chairs will send poster exhibition instructions to the authors of the accepted papers.
            </p>

            <h3>Attendance</h3>
            <p>
              One author of each accepted submission must register for the conference and present the poster, with a
              preference for in-person presentation. However, virtual presentation options may be considered.
            </p>

            <h3 class="my-4">Posters Chairs</h3>
            <div class="row">
              <div class="col-md-4">
                <OrganizerItem>
                  <template #image>
                    <div class="d-block blur-shadow-image">
                      <img src="/assets/img/people/jaime.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/jaime.png&quot;);">
                    </div>
                  </template>
                  <template #name>
                    Jaime Muñoz Arteaga
                  </template>
                  <template #institution>
                    Universidad Autónoma de Aguascalientes, MX
                  </template>
                  <template #email>
                    posters@laihc.org
                  </template>
                </OrganizerItem>
              </div>

              <div class="col-md-4">
                <OrganizerItem>
                  <template #image>
                    <div class="d-block blur-shadow-image">
                      <img src="/assets/img/people/adriana.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                      style="background-image: url(&quot;./assets/img/people/adriana.png&quot;);">
                    </div>
                  </template>
                  <template #name>
                    Adriana Iñiguez
                  </template>
                  <template #institution>
                    Universidad de Guadalajara, MX
                  </template>
                  <template #email>
                    posters@laihc.org
                  </template>
                </OrganizerItem>
              </div>
            </div>
            <br>
            <p><a class="uline" href="./call-for-participation#top">Back to top of page</a></p>
            <!-- end Poster tracks -->

            <!-- Workshops and Tutorials-->
            <hr>
            <h2 id="cwt-call" class="text-primary text-gradient text-center py-4">Call for workshops and tutorials</h2>
            <p>
              CLIHC tutorials and workshops are in-depth presentations of fundamental or state-of-the-art topics presented
              by researchers or practitioners within the field of HCI. The tutorials and workshops empower attendees to
              learn new skills and offer possibilities to meet new people and discuss topics of shared interest. The scope
              for tutorials and workshops is broad and includes topics, such as new technologies, research approaches and
              methodologies, design practices, user/consumer insights, investigations into new
              services/applications/interfaces, statistics, and much more. Virtual or Augmented Reality, wearable
              computing, and generally applications with technology on the go in mind are highly recommended.
            </p>
            <p>
              A tutorial and workshop should focus on its topic in detail and include references to the "must-read" papers
              or materials within its domain. A participatory approach in which the tutorial participants actively engage
              in exercises is welcomed, though not required. The expected audience will vary in terms of prior knowledge,
              but will largely consist of researchers, PhD students, practitioners, and educators. Tutorial and workshop
              proposal submissions by members of the industry are welcomed as well.
            </p>
            <p>
              The overall conference theme in 2023 is Culture and Artificial Intelligence, so we invite tutorials and
              workshop to discuss ethical aspects in their work, as part of their problem definitions, system design,
              experiment design, instrument and metric adoption and conclusions.
            </p>

            <h3 id="cwt-dates">Important dates</h3>
            <ul>
              <li>Submission deadline: July 31th</li>
              <li>Notification: August 28th</li>
              <li>Camera ready: September 14th</li>
              <li>Event Oct 30 - 31, Nov 1</li>
            </ul>

            <h3>Submission platform</h3>

            <p>
              All materials must be submitted electronically to the <a
                href="https://easychair.org/conferences/?conf=clihc2023" class="uline">EasyChair Conference System</a>, to
              the Workshop and Tutorials’ track, by the deadline.
            </p>

            <h3>Submission format and length</h3>

            <ul>
              <li>
                Submission format to be used for each category will follow the <a
                  href="https://www.acm.org/publications/proceedings-template" class="uline">new ACM Master Article
                  format</a>. Authors may
                choose to work in one of the following formats:
                <ul>
                  <li>Microsoft Word</li>
                  <li>LaTeX (recommended)</li>
                </ul>
              </li>
              <li>
                Maximum 4 pages (excluding references)
              </li>
              <li>
                CLIHC accepts submissions in Spanish, English, and Portuguese but only submissions in English can go to
                ACM DL and only submissions in Spanish and English can go to the AMEXIHC journal.
              </li>
              <li>
                <a href="http://www.sigaccess.org/welcome-to-sigaccess/resources/accessible-pdf-author-guide/"
                  class="uline">Guide to Accessible Submissions</a>
              </li>
            </ul>

            <h3>Quick Facts</h3>
            <p>
              CLICH 2023 will be held in person (with hybrid participation) during October 30th-Nov 1st, 2023 in Puebla,
              México. The presentation could be done in person or remotely. At least one author must register for the
              conference, whether virtual or face-to-face.
            </p>

            <h3>Preparing the Submission</h3>
            <p>In your proposal please include:</p>
            <ul>
              <li>The title of the tutorial or workshop</li>
              <li>Length of the tutorial or workshop (recommended at least one hour, three hours maximum)</li>
              <li>Learning goals of the tutorial or workshop</li>
              <li>The intended audience(s) of the tutorial or workshop</li>
              <li>The covered topics and the depths to which you will cover them</li>
              <li>Overview of the materials provided to the participants</li>
              <li>A brief biography of the instructor(s)</li>
              <li>Information on the delivery model of the tutorial (e.g., in presence or hybrid). The physical attendance
                of tutorial/workshop presenter(s) is highly recommended.</li>
            </ul>

            <h3>Selection Process</h3>
            <p>
              The tutorial and workshop will be reviewed by a committee who will decide the final acceptance. Once the
              submission is accepted, it will be the responsibility of the workshop authors to 1) advertise the event
              (workshop or tutorial) via their chosen media (e.g., a website, twitter), 2) manage the process to accept
              submissions and select who participates or not in the event and 3)If it is desirable that the position
              papers be published in the ACM proceedings or the AMEXIHC journal, it will be necessary for the workshop
              authors to propose a program committee
            </p>

            <h3>Anonymity</h3>
            <p>
              Tutorial and workshop submissions are not submitted anonymously, i.e. instructors do not remove their names
              and affiliations from their submission materials.
            </p>

            <h3>Publication</h3>
            <p>
              Accepted tutorial and workshop proposals can choose one of the following publication media:
            </p>

            <ul>
              <li>Conference Proceedings published in ACM DL. Only English submissions can be published in this medium. If
                your submission was accepted in Spanish or Portuguese and wish to publish here, you will have to translate
                your original submission to English. </li>
              <li><a href="http://aihc.amexihc.org/index.php/aihc" class="uline">Avances en Interacción
                  Humano-Computadora</a>. Only Spanish or English submissions can be published in this medium. If your
                submission was accepted in Portuguese and wish to publish here, you will have to translate your original
                submission to either Spanish or English.</li>
            </ul>
            
            <h3 class="my-4">Workshops and Tutorials Chairs</h3>
            <div class="row">
              <div class="col-md-4">
                <OrganizerItem>
                  <template #image>
                    <div class="d-block blur-shadow-image">
                      <img src="/assets/img/people/cesar.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/cesar.png&quot;);">
                    </div>
                  </template>
                  <template #name>
                    César Collazos
                  </template>
                  <template #institution>
                    U. Cauca, CO
                  </template>
                  <template #email>
                  </template>
                </OrganizerItem>
              </div>

              <div class="col-md-4">
                <OrganizerItem>
                  <template #image>
                    <div class="d-block blur-shadow-image">
                      <img src="/assets/img/people/luciana.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                      style="background-image: url(&quot;./assets/img/people/luciana.png&quot;);">
                    </div>
                  </template>
                  <template #name>
                    Luciana Sá Brito
                  </template>
                  <template #institution>
                    Universidade Federal do Rio de Janeiro, Brasil
                  </template>
                  <template #email>
                  </template>
                </OrganizerItem>
              </div>
            </div>
            <br>
            <p><a class="uline" href="./call-for-participation#top">Back to top of page</a></p>
            <!-- end Workshops and Tutorials -->

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
dt {
  display: list-item;
  list-style-type: disc;
  list-style-position: inside;
}</style>