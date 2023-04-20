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
                  <div class="fw-bold"><a href="call-for-participation#about" class="uline">About the conference</a>
                  </div>
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold"><a href="./call-for-participation#cfp-call" class="uline">Call for papers
                      (CFP)</a></div>
                  <strong class="text-primary text-gradient">Deadline for submission:</strong> <del
                    class="text-muted">July 1st</del> July 15th, 2022 EXTENDED
                  <br><a class="uline" href="./call-for-participation#cpf-dates">See all CFP important dates</a>
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold"><a href="./call-for-participation#gc-call" class="uline">Graduate Consortium
                      (GC)</a></div>
                  <strong class="text-primary text-gradient">Deadline for submission:</strong> <del
                    class="text-muted">August 15th</del> August 31st, 2022 EXTENDED<br>
                  <a class="uline" href="./call-for-participation#gc-dates">See all GC important dates</a>
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold"><a href="./call-for-participation#pt-call" class="uline">Poster track (PT)</a>
                  </div>
                  <strong class="text-primary text-gradient">Deadline for submission:</strong> <del
                    class="text-muted">September 27th</del> October 4th, 2022 EXTENDED<br>
                  <a class="uline" href="./call-for-participation#pt-dates">See all PT important dates</a>
                </div>
              </li>
            </ol>

            <h2 id="about" class="text-primary text-gradient text-center py-4">About the conference</h2>
            <p>
              MexIHC 2022 is the ninth Mexican International Conference on Human-Computer
              Interaction
              (HCI),the premier forum for researchers and practitioners to present advances in
              this
              field. The Mexican Association on Human-Computer Interaction (AMexIHC) is the proud
              organizer of this biennial conference. MexIHC 2022 aims for researchers,
              practitioners,
              faculty, students, institutions, and interest groups to gather to network, discuss
              ideas, outline collaborative projects, and contribute to the consolidation and
              visibility of HCI in Mexico and Latin America.
            </p>
            <p>
              Due to the ongoing COVID-19 pandemic, the conference will be held virtually this
              year.
              We hope that the virtual conference captures some of our habitual format’s
              activities
              and experiences, and allows for new ones.
            </p>
            <p>
              The theme of MexIHC 2022 is Inclusion and Accessibility. Inclusion is the attitude,
              tendency or policy of integrating all people into society, with the objective that
              they
              can participate and contribute to it and benefit from this process. Inclusion seeks
              to
              ensure that all individuals or social groups, especially those who are in conditions
              of
              segregation or marginalization can have the same possibilities and opportunities to
              perform as individuals. Likewise, accessibility refers to the design of products,
              devices, services, contents, or environments to be usable by all, with a particular
              focus on people with disabilities. Accessibility is a necessary condition that
              facilitates the equality and integration of all people in the world. When something
              is
              easily accessible, any person, including people with disability, can reach a place,
              object, or service.
            </p>
            <p>
              We seek to provoke a lively discussion and new understandings of how HCI connects
              with
              knowledge, methodologies, and approaches from other disciplines to design, evaluate,
              and
              study the use and implications of interactive technology in the everyday life of
              people,
              in order to enhance inclusion and accessibility in our society. We also want to
              encourage researchers and practitioners to bring out design and evaluation methods
              derived from established inquiry domains and design practices in HCI.
            </p>

            <!-- call for papers-->

            <h2 id="cfp-call">Call for papers</h2>

            <p>We invite original contributions on the theme of Inclusion and Accessibility, and
              relevant topics in Human-Computer Interaction and Interaction Design. Papers will be
              anonymously peer-reviewed by the members of the MexIHC 2022 program committee.
              Submissions will be evaluated based on their originality, significance of the
              contribution to the field and theme, technical correctness, and presentation.</p>

            <h3>Type of submissions</h3>
            <h4>Full papers (Up to 8 pages)</h4>
            <p>Full papers should describe original work that has not previously been published and
              provide significant scientific research results. Full papers may expand upon
              previously published work-in-progress papers and posters, but must present novel and
              significantly extended content, and should cite any previous abstracts for posters
              or working-progress papers. Full papers should be written in English ONLY.</p>

            <h4>Short papers or Notes (Up to 4 pages)</h4>
            <p>Short papers should describe innovative work in progress, without significant results
              yet, that contribute to well-founded research. Short papers could be written in
              English or Spanish.</p>
            <p>At least one author of accepted submissions must register as the presenter by the
              early registration deadline. Other tracks such as Graduate Consortium, and Posters,
              will be announced soon. Please check back for more information at a later time.</p>

            <h3>Submission details</h3>
            <p>Submissions for full and short papers written in English should use the <a class="uline"
                href="https://www.acm.org/publications/taps/word-template-workflow">ACM
                Template</a> (See section 2 and select the desired template in Microsoft Word or
              LaTeX).</p>
            <p>The correct template for submission is single-column Microsoft Word Submission
              Template and single-column LaTeX (using “manuscript” style available in the
              template).</p>
            <p>The length of full papers is eight pages, and the length of short papers is four
              pages; references do not count towards these pages limits. However, as we will be
              using The ACM Publication System (TAPS) process to generate final multi-format
              representations of accepted papers (waiting for ACM ICPS approval), the TAPS
              template and post-processing steps of pages in the final PDF may differ from the
              submitted source file. We recommend that authors prepare a manuscript of
              ~7,000-10,000 words to equate to the prior 8-page limit.</p>
            <p>Submissions for short papers written in Spanish should use <a class="uline"
                href="https://mexihc.org/aihc_template.zip">the AmexIHC “Avances en Interacción
                Humano-Computadora” Journal Template</a>.</p>
            <p>We encourage you to read the <a class="uline"
                href="./accessibility-recommendations-for-authors">Accessibility
                recommendations for authors</a></p>
            <p>Submit your paper using the <a class="uline"
                href="https://easychair.org/conferences/?conf=mexihc2022">Easychair account for
                MexIHC 2022</a>.</p>

            <h3 id="cpf-dates">Important dates</h3>
            <ul>
              <li><del class="text-muted">July 1st</del> July 15th. 2022 EXTENDED – Deadline for submissions </li>
              <li><del class="text-muted">August 14th</del> September 1st, 2022– Notification of acceptance</li>
              <li><del class="text-muted">August 28th</del> September 8th, 2022 – Camera-ready final submissions</li>
              <li>November 16th - 18th - MexIHC 2022</li>
            </ul>

            <h3>Anonymus submission</h3>
            <p>MexIHC 2022 will utilize a fully-anonymous review process for Full and Short Papers,
              in which the authors must anonymize their paper submissions. We will follow the
              standard of SIGCHI in which all author names, affiliations, and contact information
              are to be removed. You should not anonymize references to your prior work (these are
              needed as part of the review process). Rather, you should refer to all prior work in
              the third person. While it may not be possible to remove all clues to who the
              authors are, we expect authors to do their best.</p>

            <h3>Publication</h3>
            <p>
              A selection of accepted full and short papers written in English, as per the TPC
              suggestion, will be published in the DL of the ACM. The other papers will be
              published in the AMexIHC publication “Avances en Interacción Humano-Computadora”.
            </p>

            <div class="card shadow mb-4 w-50 mx-auto">
              <div class="card-body center">
                <img class="img-fluid" alt="ACM International Conference Proceeding Series (ICPS)" src="/assets/img/logos/ICPS.jpg">
              </div>
            </div>

            <h3>Topics of interest</h3>
            <p>MexIHC 2022 seeks paper contributions on (but not limited to) the following key
              areas:</p>

            <h4>Evaluation of Interactive Applications</h4>
            <ul>
              <li>New methods and methodologies</li>
              <li>Tools for evaluation</li>
              <li>Case studies</li>
              <li>Accessibility evaluation</li>
              <li>Theoretical aspects of HCI</li>
            </ul>

            <h4>Theories for HCI</h4>
            <ul>
              <li>Theoretical discussions or challenges to current theories</li>
              <li>Formal modeling</li>
            </ul>

            <h4>Design</h4>
            <ul>
              <li>New methods and methodologies</li>
              <li>Case studies</li>
              <li>Tools for designing</li>
              <li>Information visualization</li>
              <li>Adaptive interfaces</li>
              <li>Universal design</li>
              <li>Participatory design</li>
            </ul>

            <h4>User evaluation</h4>
            <ul>
              <li>New methods and methodologies</li>
              <li>Tools for evaluations</li>
              <li>Case studies</li>
              <li>Evaluation of user experience</li>
              <li>User evaluation with people with disabilities</li>
              <li>Human error and cognitive studies</li>
              <li>Contextual evaluation and ethno-methodologies</li>
              <li>Games user research</li>
            </ul>

            <h4>Education in HCI</h4>
            <ul>
              <li>Case studies of education in HCI</li>
              <li>HCI to improve the teaching/learning</li>
            </ul>

            <h4>Topics related to HCI</h4>
            <ul>
              <li>Usability</li>
              <li>Accessibility</li>
              <li>Ergonomics</li>
              <li>Computer Graphics</li>
              <li>Virtual Reality</li>
              <li>Augmented Reality</li>
              <li>Multi-modal Interaction</li>
              <li>Social Networks</li>
              <li>Mobile Devices</li>
              <li>HCI in the Medical Context</li>
              <li>Video Games</li>
              <li>Ludic and Aesthetic Applications</li>
              <li>Cultural aspects in the design</li>
              <li>Brain-Computer Interaction</li>
              <li>e-Government</li>
            </ul>

            <h3>Program Chairs</h3>
            <div class="row">
              <div class="col-md-6 ms-auto mt-md-0 mt-4">
                <OrganizerItem>
                  <template #image>
                    <div class="d-block blur-shadow-image">
                      <img src="/assets/img/people/sane.jpg" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                      style="background-image: url(&quot;./assets/img/people/sane.jpg&quot;);"></div>
                  </template>
                  <template #name>
                    Laura Sanely Gaytán Lugo
                  </template>
                  <template #institution>
                    Universidad de Colima
                  </template>
                  <template #email>
                    <a class="uline" href="mailto:tpc.2022@mexihc.org">tpc.2022@mexihc.org</a>
                  </template>
                </OrganizerItem>
              </div>

              <div class="col-md-6 ms-auto mt-md-0 mt-4">
                <OrganizerItem>
                  <template #image>
                    <div class="d-block blur-shadow-image">
                      <img src="/assets/img/people/lizbeth.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                      style="background-image: url(&quot;./assets/img/people/lizbeth.png&quot;);"></div>
                  </template>
                  <template #name>
                    Lizbeth Escobedo
                  </template>
                  <template #institution>
                    CETYS Universidad
                  </template>
                  <template #email>
                    <a class="uline" href="mailto:tpc.2022@mexihc.org">tpc.2022@mexihc.org</a>
                  </template>
                </OrganizerItem>
              </div>
            </div>
            <br>
            <p><a class="uline" href="./call-for-participation#top">Back to top of page</a></p>
            <!-- end call for papers -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <hr class="horizontal dark mb-5">
  <section>
    <div class="container">
      <div class="row">
        <div class="row justify-content-center my-3">
          <div class="col-lg-8">
            <!-- Graduate Consortium-->
            <h2 id="gc-call">Graduate Consortium</h2>

            <p>
              We invite to both master and doctoral students enrolled in graduate programs related
              to human-computer interaction (HCI) to submit research proposal to be considered in
              the Graduate Colloquium of the IX Mexican Conference on Human-Computer Interaction
              (MexIHC 2022).
            </p>

            <h3>Objective</h3>
            <p>
              The MexIHC graduate colloquium provides graduate students the opportunity to share
              their research with Mexico’s Human Computer Interaction (HCI) academic community,
              meet other graduate students, network, and receive mentoring from renowned
              international HCI leaders from both industry and academia.
            </p>

            <h3>Participating in the MexIHC Graduate Consortium</h3>
            <p>
              If you wish to participate
              in the graduate consortium, you will be asked to complete a form with general
              information about yourself, your research, motivations for participating in the
              graduate consortium, and to submit a four-page abstract about your research. Student
              participants should be prepared to:

            <ul>
              <li>Give a 10-minute online talk about their research during the consortium</li>
              <li>Participate in online group discussion about their work and that of their peers.
              </li>
              <li>Receive one-on-one online mentoring from renowned HCI researchers.</li>
            </ul>
            </p>

            <h3>Preparing the submission materials to the graduate consortium</h3>
            <p>
              The research proposal must be written in English or Spanish,
              using <a class="bline" href="https://mexihc.org/aihc_template.zip">the AmexIHC "Avances en
                Interacción
                Humano-Computadora"
                Journal Template</a> (up to 4 pages), and the student
              presenting at the colloquium should be the first author, the accepted papers will be published in the <a
                href="http://publicaciones.amexihc.org/index.php/aihc">AMexIHC journal</a>. Student participants
              should be prepared to give a <strong>10-minute online talk during the colloquium
                about their
                work in progress</strong>. Proposed experiments if appropriate; Any
              preliminary evaluation and findings are welcomed, but this is not required. At the end of
              each talk, a
              group discussion will be held.
            </p>

            <p>We encourage you to read the <a class="uline"
                href="./accessibility-recommendations-for-authors">Accessibility
                recommendations for authors</a></p>

            <h3>Paper requirements</h3>
            <p>
              Applicants must submit via the online form a 4-page paper explaining their research.
            <ol>
              <li>
                <p>
                  <strong>Research Explanation.</strong> While final versions of accepted
                  papers will be published in the AMexIHC journal, on the Graduate Consortium
                  website and publicized in the MEXIHC community.
                </p>
                <p>
                  The research explanation should include:
                <ul>
                  <li>Motivation for the proposed research</li>
                  <li>Background and related work (including key references)</li>
                  <li>Description of proposed research, including key research questions and/or
                    hypothesis, as well as the planned methodology to be used for
                    investigating </li>
                  <li>Specific research issues and/or challenges the student would like to
                    discuss</li>
                </ul>
                </p>
              </li>
              <li>
                <p>
                  <strong>Format Requirements.</strong> Submitted papers must be written in
                  English or Spanish, formatted according to Avances en Interacción
                  Humano-Computadora (AMexIHC) format guidelines, and submitted as a single
                  PDF file (embedding all required fonts). The paper should be no more than 4
                  pages in length including figures and references.
                  The title and the abstract must be written in English if the paper is in Spanish.
                </p>
              </li>
            </ol>
            </p>

            <h3>Submission guidelines</h3>
            <p>
              It is the responsibility of the student to ensure that their submissions use no
              unusual format features and are printable on a standard printer. Submissions will be
              reviewed by the members of the Graduate Consortium’s Program Committee.
            </p>
            <p>
              Proposals should be submitted using the <a href="https://forms.gle/JusgmNWckX5Duejx8">Graduate consortium
                submission form</a>
            </p>
            <h3>Selection criteria</h3>
            <p>
              This call is open for all graduate students. Submissions will be assessed based on
              the four-page research summary. Clarity and quality of the submitted paper will be
              the primary criteria for the selection of the works.
            </p>

            <h3 id="gc-dates">Important dates</h3>
            <p>
            <ul>
              <li><del class="text-muted">August 15th</del> August 31st, 2022 EXTENDED – Submission deadline (12pm
                (noon) PDT / 3pm EDT)</li>
              <li>September 26th, 2022 – Notification of acceptance</li>
              <li>October 10th, 2022 – Camera-ready submission</li>
              <li>November 17th, 2022 - Consortium</li>
            </ul>
            </p>

            <h3>Graduate Consortium Chairs</h3>
            <div class="row">
              <div class="col-md-6 ms-auto mt-md-0 mt-4">
                <OrganizerItem>
                  <template #image>
                    <div class="d-block blur-shadow-image">
                      <img src="/assets/img/people/vania.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                      style="background-image: url(&quot;./assets/img/people/vania.png&quot;);"></div>
                  </template>
                  <template #name>
                    Vania Carolina Alvarez Olivas
                  </template>
                  <template #institution>
                    Universidad Autónoma de Chihuahua
                  </template>
                  <template #email>
                    <a class="uline" href="mailto:gc.2022@mexihc.org">gc.2022@mexihc.org</a>
                  </template>
                </OrganizerItem>
              </div>

              <div class="col-md-6 ms-auto mt-md-0 mt-4">
                <OrganizerItem>
                  <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/nophoto.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow" style="background-image: url(&quot;./assets/img/nophoto.png&quot;);"></div>
                  </template>               
                  <template #name>
                    Joaquín Sergio Zepeda Hernández
                  </template>
                  <template #institution>
                    Universidad Autónoma Metropolitana, Unidad Cuajimalpa
                  </template>
                  <template #email>
                    <a class="uline" href="mailto:gc.2022@mexihc.org">gc.2022@mexihc.org</a>
                  </template>
                </OrganizerItem>
              </div>
            </div>
            <br>
            <p><a class="uline" href="./call-for-participation#top">Back to top of page</a></p>
            <!-- end Graduate Consortium -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <hr class="horizontal dark mb-5">
  <section>
    <div class="container">
      <div class="row">
        <div class="row justify-content-center my-3">
          <div class="col-lg-8">
            <!-- begin Poster track -->
            <h2 id="pt-call">Poster track</h2>

            <p>We invite practitioners, researchers, and students to submit their work to the poster track at MexIHC
              2022.
              Posters provide a great opportunity for academics and practitioners to get valuable feedback on
              early-stage
              work and discuss potential collaborations. Posters must present work in progress, preliminary results,
              small-scale studies, late-breaking scientific and professional news showing promise, a demonstration of a
              technical tool, etc. Contributions will be exhibited in a poster session during the MexIHC conference.
              Works
              submitted to the poster track can be written either in English or Spanish (title and abstract in English).
            </p>

            <h3 id="pt-dates">Important dates</h3>
            <p>
            <ul>
              <li>Tuesday, <del class="text-muted">September 27th</del> October 4th EXTENDED - Submission deadline</li>
              <li>Monday, October 24th – Notification of acceptance</li>
              <li>Monday, October 31th – Camera-ready final submissions</li>
            </ul>
            </p>

            <h3>Submission details</h3>
            <p>
              Authors wishing to submit a paper must:
            <ul>
              <li>
                Format their papers (four pages maximum) following the official <a class="uline"
                  href="https://mexihc.org/aihc_template.zip">AmexIHC Journal Format</a>. Accepted papers will be
                published in the AMexIHC publication “Avances en Interacción
                Humano-Computadora”.
              </li>
              <li>
                Proposals should be submitted by email with subject “MexIHC 2022 Poster” to: <a class="uline"
                  href="mailto:posters.2022@mexihc.org">posters.2022@mexihc.org</a>
              </li>
              <li>
                We encourage you to read the <a class="uline"
                href="./accessibility-recommendations-for-authors">Accessibility
                recommendations for authors</a>
              </li>
            </ul>
            </p>

            <p>
              Your submission must be original work. It cannot be under concurrent review for publication by another
              conference or journal, nor has it been published elsewhere. Please submit accurate and complete
              references.
            </p>

            <h3>Reviewing Process</h3>

            <p>
              Papers will be anonymously peer-reviewed by the members of the MexIHC 2022 program committee. Submissions
              will be evaluated based on their originality, significance of the contribution to the field, technical
              correctness, and presentation.
            </p>

            <p>
              Accepted proposals should be presented in a foster layout, of 90x120cm (PDF). The text must be legible,
              the images and tables have a minimum size of 20x20cm. It is suggested to include a brief explanation of
              the content and source of the information at the bottom of each image and table. We suggest that the
              resolution of the poster is 300 ppp.
            </p>

            <p>
              Additionally, the authors of the accepted papers will make a 3-minutes video to exhibit their work in
              virtual media.
            </p>

            <h3>Attendance</h3>
            <p>
              At least one author of each accepted submission must register for the conference and present the poster.
            </p>

            <h3>Poster Track Chairs</h3>
            <div class="row">
              <div class="col-md-6 ms-auto mt-md-0 mt-4">
                <OrganizerItem>
                  <template #image>
                    <div class="d-block blur-shadow-image">
                      <img src="/assets/img/people/maria.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                      style="background-image: url(&quot;./assets/img/people/maria.png&quot;);">
                    </div>
                  </template>
                  <template #name>
                    María del Rosario Peralta Calvo
                  </template>
                  <template #institution>
                    Universidad de la Cañada, México
                  </template>
                  <template #email>
                    <a class="uline" href="mailto:posters.2022@mexihc.org">posters.2022@mexihc.org</a>
                  </template>
                </OrganizerItem>
              </div>

              <div class="col-md-6 ms-auto mt-md-0 mt-4">
                <OrganizerItem>
                  <template #image>
                    <div class="d-block blur-shadow-image">
                      <img src="/assets/img/people/cams.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                      style="background-image: url(&quot;./assets/img/people/cams.png&quot;);">
                    </div>
                  </template>
                  <template #name>
                    Carlos Alberto Martínez Sandoval
                  </template>
                  <template #institution>
                    Universidad Tecnológica de la Mixteca
                  </template>
                  <template #email>
                    <a class="uline" href="mailto:posters.2022@mexihc.org">posters.2022@mexihc.org</a>
                  </template>
                </OrganizerItem>
              </div>
            </div>
            <br>
            <p><a class="uline" href="./call-for-participation#top">Back to top of page</a></p>
            <!-- end Poster track -->
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
}
</style>