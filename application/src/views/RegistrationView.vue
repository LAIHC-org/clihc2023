<script setup>
import TheHeader from '@/components/Header.vue'
import SpeakerLargeItem from '@/components/SpeakerLargeItem.vue'
</script>

<template>
  <TheHeader>
    <template #page-name>
      Rates & Registration
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
                  <div class="fw-bold">
                    <strong class="text-primary text-gradient">Papers and Short Papers</strong> $3,500.00 Mexican pesos
                  </div>
                </div>
              </li>

              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">
                    <strong class="text-primary text-gradient">Posters and Graduate Consortium</strong> $1,500.00 Mexican pesos
                  </div>
                </div>
              </li>

              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div>
                    <span class="fw-bold"><strong class="text-primary text-gradient">Attendance to the conference for general public</strong>
                    is completely free.</span> Pick <strong><em>Attendee</em></strong> to obtain a free registration (If you need an attendance
                    certificate, you may select it right there as well).
                  </div>
                </div>
              </li>              
            </ol>
            <h2 class="mt-5 mb-3 text-center">Bank Account Information</h2>
            <p>To register to the event, please follow the next steps:</p>
            <ol>
              <li>Filling out the form with your information using the <a href="https://conferencias.app/" class="uline">registration system</a></li>
              <li>Make the payment (bank transfer preferably or deposit below) using the bank details provided and the Registration Code provided by the registration system.</li>
              <li>Send a copy of payment invoice to <a href="mailto:registration.2022@mexihc.org" class="uline">registration.2022@mexihc.org</a> (especially deposits at the bank)</li>
              <li>Also, if you need a fiscal invoice (factura), you can request it through the system and it will be emailed to you.</li>
              <li>Payments made from outside Mexico can use PayPal to complete the registration. Instructions will appear in the confirmation page.</li>
            </ol>
            <div class="text-center mt-4">
              <a href="https://conferencias.app/" class="btn btn-lg bg-gradient-primary btn-round">Register</a>
            </div>
            <h3 class="my-3 text-center">From Payments from Mexican Bank Accounts, Please Use:</h3>
            <p>
              (Only <strong>spanish</strong> at the moment)<br><br>
              <span class="text-primary text-gradient">Nombre:</span> <strong>ASOCIACION MEXICANA DE INTERACCION HUMANO COMPUTADORA AC</strong><br>
              <span class="text-primary text-gradient">Banco:</span> <strong>BANCO DEL BAJIO</strong><br>
              <span class="text-primary text-gradient">Clabe interbancaria:</span> <strong>030767900000120128</strong><br>
              <span class="text-primary text-gradient">Cuenta:</span> <strong>88823590201</strong><br>
              <span class="text-primary text-gradient">Concepto:</span> <strong>{Registration code}</strong><br>
            </p>       
          </div>
        </div>
      </div>
    </div>
  </section>

</template>