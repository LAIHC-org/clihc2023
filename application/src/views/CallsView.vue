<script setup>
import TheHeader from '@/components/Header.vue'
import OrganizerItem from '@/components/OrganizerItem.vue';
</script>

<template>
  <TheHeader>
    <template #page-name>
      Call for Participation
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
                  <strong class="text-primary text-gradient">Deadline for Abstract submission:</strong> <del>June 12th</del><strong class="text-danger"> June 26th EXTENDED</strong>
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
                  July 31st<br>
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
                  July 31st<br>
                  <a class="uline" href="./call-for-participation#cwt-dates">See all CWT important dates</a>
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">
                    <a href="./call-for-participation#sdc-call" class="uline">
                      Student design competition (SDC)
                    </a>
                  </div>
                  <strong class="text-primary text-gradient">Deadline for submission:</strong>
                  July 31st<br>
                  <a class="uline" href="./call-for-participation#sdc-dates">See all SDC important dates</a>
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">
                    <a href="./call-for-participation#cgc-call" class="uline">
                      Graduate Colloquium (GC)
                    </a>
                  </div>
                  <strong class="text-primary text-gradient">Deadline for submission:</strong> July 31st<br>
                  <a class="uline" href="./call-for-participation#cgc-dates">See all GC important dates</a>
                </div>
              </li>
            </ol>

            <!-- call for papers-->

            <!-- <h2 id="cfp-call">Call for papers</h2> -->
            <h2 id="cfp-call" class="text-primary text-gradient text-center py-4">Call for Papers</h2>

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

            <h4 id="cpf-dates">Important Dates (Full and Short Papers)</h4>
            <ul>
              <li>Abstract submission: <del>June 12th</del> <strong class="text-danger">June 26th EXTENDED</strong></li>
              <li>Paper submission: <del>June 19th</del> <strong class="text-danger">July 3rd EXTENDED</strong></li>
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

            <h3>Submission Process</h3>
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

            <h4>Full Papers (10 Pages)</h4>
            <p>
              Research projects that have achieved a mature stage and present an original contribution to the state of the
              art are welcome to submit in the full paper category. Submissions must be relevant to the subject of the
              conference, and may not have been published nor be under review in any other conference or journal. The
              maximum length for full papers is 10 pages including references, and papers must be written in English,
              Portuguese, or Spanish.
            </p>

            <h4>Short Papers (4 Pages)</h4>
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
            <h2 id="cpt-call" class="text-primary text-gradient text-center py-4">Call for Poster Track</h2>
            <p>
              We invite practitioners, researchers, and students to submit their work to the poster track at CLIHC 2023.
              Posters provide a great opportunity for academics and practitioners to get valuable feedback on early-stage
              work and discuss potential collaborations. Posters must present work-in-progress, preliminary results,
              small-scale studies, late-breaking scientific and professional news showing promise, a demonstration of a
              technical tool, etc. Contributions will be exhibited in a poster session during the CLIHC conference. Papers
              submitted to the poster track can be written either in English, Spanish, or Portuguese and must be written
              in the form of self-contained short research papers.
            </p>

            <h3 id="cpt-dates">Important Dates (Posters)</h3>
            <ul>
              <li>Submission of poster papers: July 31th</li>
              <li>Notification: August 28th</li>
              <li>Camera ready: September 14th</li>
              <li>Event Oct 30 - 31, Nov 1</li>
            </ul>

            <h3>Submission Details</h3>

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

            <h3>Review Process</h3>
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
            <h2 id="cwt-call" class="text-primary text-gradient text-center py-4">Call for Workshops and Tutorials</h2>
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

            <h3 id="cwt-dates">Important Dates</h3>
            <ul>
              <li>Submission deadline: July 31th</li>
              <li>Notification: August 28th</li>
              <li>Camera ready: September 14th</li>
              <li>Event Oct 30 - 31, Nov 1</li>
            </ul>

            <h3>Submission Platform</h3>

            <p>
              All materials must be submitted electronically to the <a
                href="https://easychair.org/conferences/?conf=clihc2023" class="uline">EasyChair Conference System</a>, to
              the Workshop and Tutorials’ track, by the deadline.
            </p>

            <h3>Submission Format and Length</h3>

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

            <!-- Student design competition-->
            <hr>
            <h2 id="sdc-call" class="text-primary text-gradient text-center py-4">Student Design Competition</h2>

            <h3 id="sdc-dates">Important Dates</h3>
            <ul>
              <li>Submission deadline: July 31th</li>
              <li>Notification: August 28th</li>
              <li>Camera ready: September 14th (for English publication in ACM DL or Spanish publication in “Avances en
                Interacción Humano-Computadora”)</li>
              <li>Event Oct 30 - 31, Nov 1</li>
            </ul>
            <p>
              Deadlines are at midnight AoE (Anywhere on Earth).
            </p>

            <h3>What is the Student Design Competition at CLIHC 2023?</h3>

            <p>The Student Design Competition is aimed at meeting three goals:</p>
            <ul>
              <li>Provide an opportunity for students from a variety of backgrounds (e.g., computer science, HCI,
                industrial design, product design, visual design, interaction design, entrepreneurship etc.) to
                participate and demonstrate their problem solving and design skills in an international competition with
                their peers.</li>
              <li>Provide an opportunity for students presenting at the design competition to meet with the CLIHC
                community.</li>
              <li>Provide refreshing perspectives on how design teams from different disciplines and different parts of
                the world approach a common design problem.</li>
            </ul>

            <h3>The Design Brief: Appropriate Solutions for All</h3>
            <p>
              We ask you to contribute to one (or several) of the 17 Sustainable Development Goals identified by the
              United Nations:
            </p>

            <ul>
              <li>No Poverty</li>
              <li>Zero Hunger</li>
              <li>Good Health and Well-being</li>
              <li>Quality Education</li>
              <li>Gender Equality</li>
              <li>Clean Water and Sanitation</li>
              <li>Affordable and Clean Energy</li>
              <li>Decent Work and Economic Growth</li>
              <li>Industry, Innovation and Infrastructure</li>
              <li>Reduced Inequality</li>
              <li>Sustainable Cities and Communities</li>
              <li>Responsible Consumption and Production</li>
              <li>Climate Action</li>
              <li>Life Below Water</li>
              <li>Life on Land</li>
              <li>Peace, Justice and Strong Institutions</li>
              <li>Partnerships for the Goals</li>
            </ul>

            <p>
              Your problem and your solution needs to be clearly linked to one (or several) of the goals. Engage with and
              involve prospective users. Show that the problem is relevant and the solution actually solves the problem in
              a sustainable way. Look at how others might have tried to solve the problem in the past and come up with a
              new and innovative approach. Assure meeting ethical criteria.
            </p>

            <h3>Student Team Requirements</h3>
            <p>
              Teams must consist of at least two and no more than four students. There is no limit to the number of teams
              that may compete from any given university or organization. However, one student cannot be part of multiple
              teams.
            </p>
            <p>
              Submissions are invited from students at all stages of their university careers, from undergraduate to
              postgraduate level. While not a mandatory requirement, it is strongly encouraged that the teams put forward
              a multidisciplinary and/or multi-national team.
            </p>
            <p>
              The Student Design Competition is for students. Submit proof of student status by sending a note signed by
              your academic supervisor verifying the following information:
            </p>
            <ul>
              <li>Your university</li>
              <li>Whether you were a graduate (i.e., Masters or Doctoral level) or undergraduate (i.e., Bachelor level)
                when the work was done, or confirm that you are either currently registered in an academic program
                full-time, or will return to be a student in the upcoming semester.</li>
            </ul>

            <h3>Supervising Team Requirements</h3>

            <ul>
              <li>Groups of up to four students with one supervisor.</li>
              <li>Each team must have at least two students and one supervisor.</li>
              <li>Each supervisor can have only one team.</li>
              <li>The supervisor may be a professor or industry professional.</li>
            </ul>

            <p>
              Academic supervisors, mentors, trainers or people providing additional support must not be co-chairs,
              reviewers or judges for the competition at the same time. <span class="text-danger">Mentors cannot be
                authors of the article</span>.
            </p>

            <h3>Preparing the Submission and Structure of the Competition</h3>
            <p>The submissions can be in English, Spanish or Portuguese.</p>

            <ol>
              <li>
                Submission to enter the competition, by July 31st
                <ul>
                  <li>
                    <strong>Slide-deck</strong>: the pdf of a presentation with a maximum of 15 slides (first slide with
                    name of the students and name of the project). The presentation may include relevant information from
                    the paper (description of the problem and the solution, research and design methods, why your solution
                    will be used by prospective users).
                  </li>
                  <li>
                    <strong>Paper</strong>: a non-anonymized written report of up to 6 pages including references (format:
                    ACM Master Article Submission Templates), the paper needs to include:
                    <ul>
                      <li>A clear description of the problem and the solution</li>
                      <li>An overview of the research and design methods</li>
                      <li>The reasons why your solution will be used by prospective users</li>
                      <li>Acknowledgement of partial or incomplete solutions</li>
                      <li>Acknowledgement of any assistance drawn from outside the student team (e.g., advisors, domain
                        experts, existing solutions, users)</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Submission upon acceptance to the competition, by August 25th
                <ul>
                  <li>
                    <strong>Paper</strong>: camera-ready version to be published (instructions will be given together with
                    the acceptance email).
                  </li>
                  <li>
                    <strong>Video</strong>: illustrating how your solution fits the lives of the users with the help of
                    scenarios, or addresses human aspects of the chosen sustainable development goals. It may also
                    illustrate some details of the interface and the information presented (maximum 5 minutes). The Video
                    may include:
                    <ul>
                      <li>Examples of significant contextual data and its analysis (primary, secondary research, or both)
                      </li>
                      <li>
                        Key creative sources of design inspiration (existing designs and systems)
                        <ul>
                          <li>Sketches of the evolving solution</li>
                        </ul>
                      </li>
                      <li>Scenarios depicting how the solution fits in the life of users and solves problems / engages or
                        entertains users</li>
                      <li>Details of the interface and information design where relevant</li>
                      <li>Highlights of significant evaluation results</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>

            <p>
              Selected submissions will be invited to show their work at the conference in a final presentation
              (face-to-face or virtual). Likewise, all students (authors of the article) must register for the conference,
              either face-to-face or virtual. The presentations will be evaluated by a panel of judges and must include:
            </p>

            <ul>
              <li>The design process that was followed</li>
              <li>A concise description of the proposed solution</li>
              <li>Reference to design principles and theory where appropriate</li>
              <li>Acknowledgement of partial or incomplete solution</li>
            </ul>

            <p>
              All submissions must include title and author information, including affiliations. Please ensure that
              submissions do not contain proprietary or confidential material and do not cite proprietary or confidential
              publications.
            </p>

          <p>
            Accepted paper can choose one of the following publication media:
          </p>

          <ul>
            <li>Conference Proceedings published in ACM DL. Only English submissions can be published in this medium. If
              your submission was accepted in Spanish or Portuguese and wish to publish here, you will have to translate
              your original submission to English.</li>
            <li>Avances en Interacción Humano-Computadora. Only Spanish or English submissions can be published in this
              medium. If your submission was accepted in Portuguese and wish to publish here, you will have to translate
              your original submission to either Spanish or English.</li>
          </ul>
          <h3 class="my-4">Student Design Competition Chairs</h3>
            <div class="row">
              <div class="col-md-4">
                <OrganizerItem>
                  <template #image>
                    <div class="d-block blur-shadow-image">
                      <img src="/assets/img/people/christian.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/christian.png&quot;);">
                    </div>
                  </template>
                  <template #name>
                    Christian Sturm
                  </template>
                  <template #institution>
                    DE
                  </template>
                  <template #email>
                  </template>
                </OrganizerItem>
              </div>

              <div class="col-md-4">
                <OrganizerItem>
                  <template #image>
                    <div class="d-block blur-shadow-image">
                      <img src="/assets/img/people/iyubanit.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                      style="background-image: url(&quot;./assets/img/people/iyubanit.png&quot;);">
                    </div>
                  </template>
                  <template #name>
                    Iyubanit Rodriguez
                  </template>
                  <template #institution>
                    CR
                  </template>
                  <template #email>
                  </template>
                </OrganizerItem>
              </div>

            </div>
            <br>
            <!-- p><a class="uline" href="./call-for-participation#top">Back to top of page</a></p -->          
          <!-- end Student design competition -->
		  
		
		<!-- Graduate colloquium-->
		<hr>
		<h2 id="cgc-call" class="text-primary text-gradient text-center py-4">Graduate Colloquium</h2>
		<p>
		  CLIHC 2023 is the bi-ennial conference that aims to bring together the Latin American HCI community. The CLIHC 2023 Graduate Colloquium provides an opportunity for Latin American graduate students working in HCI and its related fields to explore and develop their research interests in an interdisciplinary workshop, under the guidance of a panel of prominent researchers.
		</p>
		
		<p>We invite students who feel they would benefit from this kind of feedback on their dissertation/final project work to apply for this unique opportunity to share their research with fellow students in a similar situation as well as senior researchers in the field. Successful applicants will be those who show a clear topic and research approach and have made some progress, but who are not so far along that they can no longer make changes to their plan. In-person attendance is expected for this track.
		</p>
		
		<p>
		In addition to stating how you will benefit from participation, both you and your advisor should be clear on what you can contribute to the Graduate Colloquium. Being accepted into the Colloquium involves a commitment to giving and receiving thoughtful commentary with an eye toward shaping HCI in Latin America and fellow participants in their respective fields.
		</p>

		<h3>Objectives</h3>
		<ul>
		  <li>Offer Latin American HCI graduate students the opportunity to share and discuss their work before experienced researchers.</li>
		  <li>Provide feedback on students’ current research and guidance on future research directions.</li>
		  <li>Offer each student comments and fresh perspectives on their work from researchers and students outside their own institution.</li>
		  <li>Promote the development of a supportive community of scholars and a spirit of collaborative research among graduate students across different universities in Latin America.</li>
		  <li>Let the community learn about research projects being developed by graduate students.</li>
		</ul>
		
		<h3>During the Graduate Colloquium</h3>
		
		<p>Accepted students will present their work to the group with substantial time allowed for discussion and questions by participating researchers and fellow participants. Detailed instructions will be provided upon acceptance.
		</p>
		
		<p>Each participant should also bring a small version of a poster presenting their work (e.g., using letter-size or A4 paper) for sharing with faculty mentors and other students during the Colloquium sessions. In-person attendance is expected for this track.
		</p>

		<h3>Submissions</h3>

		<P>
		  The proposal must have the following four components, all written in English, Portuguese, or Spanish.
		</P>
		<ul>
		  <li>
			Extended Abstract: a 4-page (including references) research description covering central aspects of your graduate work. This document must adhere to the latest version of the <a
			href="https://www.acm.org/publications/proceedings-template"
			class="uline"> ACM Primary Article Template </a> format. Key points of this document include:
			<ul>
			  <li>Your situation, i.e., the graduate program context in which your work is being conducted (home institution, country, program, year of study, etc).</li>
			  <li>Context and motivation that drives your research.</li>
			  <li> Research objectives / goals / questions.</li>
			  <li>Background/literature review of key work that frames your research.</li>
			  <li>Hypothesis/thesis and/or problem statement.</li>
			  <li>Followed research approach and methods, including relevant rationale.</li>
			  <li>Results to date and their validity.</li>
			  <li>Dissertation status and next steps (i.e., what you have done and what you have left to do).</li>
			  <li>Current and expected contributions.</li>
			</ul>
		  </li>
		  
		  <li>A one-paragraph statement of expected benefits of participation for both yourself and the other colloquium participants (i.e., what will you contribute as well as gain) (max 1 page).
		  </li>
		  
		  <li>A letter of nomination from your primary dissertation/final project advisor, that addresses the value that the Graduate Colloquium would have for you, what contribution you are likely to make to the event, and why this is a good time for you to participate (max 1 page).
		  </li>
		  
		   <li>A concise version of your current Curriculum Vita, emphasizing academic background, research background, and relevant publications (if any) (1-2 pages).
		  </li>
		  
		   <li>Submit your proposal as a single PDF file through <a
			href="https://easychair.org/conferences/?conf=clihc2023"
			class="uline">
		   EasyChair Conference System </a>,
		   to the Graduate Colloquim’s track, by the deadline.
		  </li> 

		</ul>
		<p>
		  Your submission must be original work. It cannot be under concurrent review for publication by another 
		  conference or journal nor has been published elsewhere. Please submit accurate and complete references.
		</p>
		<p>
		  Accepted proposals can choose one of the following publication media:
		</p>
		<ul>
		  <li>Conference Proceedings published in ACM DL. Only English submissions can be published in this medium. If
			your submission was accepted in Spanish or Portuguese and wish to publish here, you will have to translate
			your original submission to English.</li>
		  <li>Avances en Interacción Humano-Computadora. Only Spanish or English submissions can be published in this
			medium. If your submission was accepted in Portuguese and wish to publish here, you will have to translate
			your original submission to either Spanish or English.</li>
		</ul>

		<h3>Selection Process</h3>
		<p>
		  The review and decision of acceptance will balance many factors. This includes the quality of your proposal and where you are within your graduate program. Candidates who have a clearly developed idea, who are formally considered by their institution to be working on their dissertation or final project, and who still have time to be influenced by participation in the Colloquium will receive the strongest consideration.
		</p>
		<p>
		  Over and above an assessment of research quality, the selection process will also consider additional factors. The goal is to identify a set of students that will benefit significantly from the Colloquium and support each other in their growth. As a group, the accepted candidates will exhibit a diversity of backgrounds and topics. Your institution will be taken into account, where we are unlikely to accept more than two students from the same institution and almost certainly will not accept more than one student with the same advisor.
		</p>
		
		<h3 id="cgc-dates">Important Dates (GC)</h3>
		<ul>
		  <li>Submission of GC proposals: July 31st</li>
		  <li>Notification: August 28th</li>
		  <li>Camera ready: September 11th</li>
		  <li>Graduate Colloquium: TBD</li>
		</ul>
		
		
		<h3 class="my-4">Graduate Colloquium Chairs</h3>
		<div class="row">
		  <div class="col-md-4">
			<OrganizerItem>
			  <template #image>
				<div class="d-block blur-shadow-image">
				  <img src="/assets/img/people/huizilopoztli.png" alt="" class="img-fluid shadow rounded-3">
				</div>
				<div class="colored-shadow" style="background-image: url(&quot;./assets/img/people/huizilopoztli.png&quot;);">
				</div>
			  </template>
			  <template #name>
				Huizilopoztli Luna Garcia
			  </template>
			  <template #institution>
				UAZ, MX
			  </template>
			  <template #email>
			  </template>
			</OrganizerItem>
		  </div>

		  <div class="col-md-4">
			<OrganizerItem>
			  <template #image>
				<div class="d-block blur-shadow-image">
				  <img src="/assets/img/people/carolina.png" alt="" class="img-fluid shadow rounded-3">
				</div>
				<div class="colored-shadow"
				  style="background-image: url(&quot;./assets/img/people/carolina.png&quot;);">
				</div>
			  </template>
			  <template #name>
				Carolina Fuentes
			  </template>
			  <template #institution>
				Cardiff University, UK
			  </template>
			  <template #email>
			  </template>
			</OrganizerItem>
		  </div>
		</div>
		<br>
		<p><a class="uline" href="./call-for-participation#top">Back to top of page</a></p>
		<!-- end Graduate Colloquium -->

        </div>
      </div>
    </div>
  </div>
</section></template>

<style>dt {
  display: list-item;
  list-style-type: disc;
  list-style-position: inside;
}</style>