<script setup>
import TheHeader from '@/components/Header.vue'
import SpeakerLargeItem from '@/components/SpeakerLargeItem.vue'
</script>

<template>
  <TheHeader>
    <template #page-name>
      Keynote speakers
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
                  <div class="fw-bold"><a href="./keynote-speakers#cleotilde-gonzalez" class="uline">Cleotilde (Coty) Gonzalez</a>
                  </div>
                </div>
              </li>

              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold"><a href="./keynote-speakers#sergio-lujan" class="uline">Sergio Luján Mora</a>
                  </div>
                </div>
              </li>
            </ol>

            <SpeakerLargeItem>
              <template #image>
                <img id="cleotilde-gonzalez" class="img border-radius-lg max-width-200 w-100 position-relative z-index-2"
                  src="/assets/img/people/cleotilde-gonzalez.jpg" alt="Cleotilde (Coty) Gonzalez" />
              </template>
              <template #image-shadow>
                <div class="colored-shadow"
                  style="background-image: url(&quot;./assets/img/people/cleotilde-gonzalez.jpg&quot;);">
                </div>
              </template>
              <template #name>
                Cleotilde (Coty) Gonzalez
              </template>

              <p>Cleotilde (Coty) Gonzalez is a Research Professor of Decision Sciences in the Department of Social and
                Decision Sciences and the Founding Director of the Dynamic Decision Making Laboratory (<a
                  href="https://www.cmu.edu/dietrich/sds/ddmlab/" class="uline">DDMLab</a>) at
                Carnegie Mellon University. She is also affiliated to the Security and Privacy Institute (<a
                  href="https://www.cylab.cmu.edu/" class="uline">CyLab</a>), the
                Center for Behavioral Decision Research (<a href="https://www.cmu.edu/cbdr/people/index.html"
                  class="uline">CBDR</a>) and other research centers at Carnegie Mellon University.
                Her work focuses on the experimental studies and computational representations of the cognitive
                processes involved in decisions from experience in dynamic environments.
              </p>
            </SpeakerLargeItem>            

            <SpeakerLargeItem>
              <template #image>
                <img id="sergio-lujan" class="img border-radius-lg max-width-200 w-100 position-relative z-index-2"
                  src="/assets/img/people/sergiolujan.jpg" alt="Sergio Luján Mora"/>
              </template>
              <template #image-shadow>
                  <div class="colored-shadow"
                      style="background-image: url(&quot;./assets/img/people/sergiolujan.jpg&quot;);">
                  </div>
              </template>               
              <template #name>
                Sergio Luján Mora
              </template>

              <p>Sergio Luján Mora received the Ph.D. degree in computer engineering from the Department of Software and
                Computing Systems, University of Alicante, Alicante, in 2005, and the Computer Science and Engineering
                degree from the University of Alicante, in 1998, where he is currently a Full Professor with the
                Department of Software and Computing Systems. He has authored several books and many published articles
                in various conferences, including ER, UML, and DOLAP, and high-impact journals, including DKE, JCIS,
                JDBM, JECR, JIS, JWE, IJEE, and UAIS. His main research interests include data warehousing, web
                development, web accessibility, and usability. In recent years, he has focused on e-learning, massive
                open online courses (MOOCs), open educational resources (OERs), and the accessibility of video games.
              </p>
            </SpeakerLargeItem>

          </div>
        </div>
      </div>
    </div>
  </section>

</template>