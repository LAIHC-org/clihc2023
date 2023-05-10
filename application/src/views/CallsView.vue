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
                  <strong class="text-primary text-gradient">Deadline for Abstract submission:</strong> May 29th
                  <br><a class="uline" href="./call-for-participation#cpf-dates">See all CFP important dates</a>
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Graduate Colloquium (GC)</div>
                  <strong class="text-primary text-gradient">Deadline for submission:</strong> Pending<br>
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Poster Track (PT)</div>
                  <strong class="text-primary text-gradient">Deadline for submission:</strong> Pending<br>
                </div>
              </li>
            </ol>

            <!-- call for papers-->

            <!-- <h2 id="cfp-call">Call for papers</h2> -->
            <h2 id="cfp-call" class="text-primary text-gradient text-center py-4">Call for papers</h2>

            <p>
              The 10th Latin American Conference on Human-Computer Interaction (CLIHC 2023), aims to provide a premier
              forum that brings together the Latin American and international Human-Computer Interaction (HCI) research
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
              <li>Short papers (Poster)</li>
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
                href="https://chi2021.acm.org/for-authors/presenting/papers/chi-anonymization-policy">guidelines
                provided by CHI</a>). Please consider an international audience: e.g., avoid local terms, and use the
              international system of units.
            </p>

            <h4 id="cpf-dates">Important dates (full and short papers)</h4>
            <ul>
              <li>Abstract submission: May 29th</li>
              <li>Paper submission: June 5th</li>
              <li>Notification: July 17th</li>
              <li>Camera ready: August 11th</li>
              <li>Event Oct 30 - 31, Nov 1</li>
            </ul>
            <p>Deadlines are at midnight AoE (Anywhere on Earth).</p>

            <h3>Code of Ethics</h3>
            <p>
              We abide by the <a href="https://www.acm.org/code-of-ethics">ACM Code of Ethics</a>. We expect that all
              submissions, underlying research, and behavior during
              the review process and conference comply with the principles and responsibilities outlined by the code.
            </p>

            <p>
              Submission format to be used for each category will follow the new ACM Master Article format. Authors may
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

            <h3 class="my-4">Program (Paper) Chairs</h3>
            <div class="row">
              <div class="col-md-4">
                <OrganizerItem>
                    <template #image>
                        <div class="d-block blur-shadow-image">
                            <img src="/assets/img/nophoto.png" alt=""
                                class="img-fluid shadow rounded-3">
                        </div>
                        <div class="colored-shadow"
                            style="background-image: url(&quot;./assets/img/nophoto.png&quot;);">
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
                            <img src="/assets/img/nophoto.png" alt=""
                                class="img-fluid shadow rounded-3">
                        </div>
                        <div class="colored-shadow"
                            style="background-image: url(&quot;./assets/img/nophoto.png&quot;);"></div>
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