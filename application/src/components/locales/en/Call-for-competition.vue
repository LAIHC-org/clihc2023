<script>
  import OrganizerItem from '@/components/OrganizerItem.vue';

  import Tr from '@/i18n/translation'

  export default {
    components: {
        OrganizerItem
    },
    setup() {
      return {
          Tr
      }
    }
  }
</script>

<template>
    <ol class="list-group list-group-numbered my-3">
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <strong class="text-primary text-gradient">Deadline for submission:</strong> <del>July 31st</del> <del>August 11th EXTENDED</del> <strong class="text-danger"> {{ $t("about.closed") }}</strong><br>
        </div>
        </li>
    </ol>

    <h3 id="sdc-dates">Important Dates</h3>
    <ul>
        <li>Submission deadline: <del>July 31st</del> August 11th EXTENDED</li>
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
    <h3 class="my-4">{{ $t("organizers.student_design_competition_title") }}</h3>
    <div class="row">
        <div class="col-md-4">
            <OrganizerItem>
                <template #image>
                    <div class="d-block blur-shadow-image">
                        <img src="/assets/img/people/christian.png" alt="" class="img-fluid shadow rounded-3">
                    </div>
                    <div class="colored-shadow"
                        style="background-image: url(&quot;./assets/img/people/christian.png&quot;);">
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
</template>