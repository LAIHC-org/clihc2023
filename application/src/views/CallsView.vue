<script>
import TheHeader from '@/components/Header.vue';
import OrganizerItem from '@/components/OrganizerItem.vue';

import Tr from '@/i18n/translation'

import { shallowRef, watch, defineAsyncComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  components: {
    TheHeader,
    OrganizerItem
  },
  setup() {
    const { locale } = useI18n()
    const tableComponent = shallowRef(null)
    const cfpComponent = shallowRef(null)
    const cptComponent = shallowRef(null)
    const cwtComponent = shallowRef(null)
    const sdcComponent = shallowRef(null)
    const cgcComponent = shallowRef(null)

    const loadComponents = async (newLocale) => {
      tableComponent.value = await getTableForLocale(newLocale)
      cfpComponent.value = await getCfpForLocale(newLocale)
      cptComponent.value = await getCptForLocale(newLocale)
      cwtComponent.value = await getCwtForLocale(newLocale)
      sdcComponent.value = await getSdcForLocale(newLocale)
      cgcComponent.value = await getCgcForLocale(newLocale)
    }

    watch(locale, loadComponents, { immediate: true })

    async function getTableForLocale(locale) {
      switch (locale) {
        case 'en':
          return defineAsyncComponent(() => import('@/components/locales/en/CallsTable.vue'))
        case 'es':
          return defineAsyncComponent(() => import('@/components/locales/es/CallsTable.vue'))
        case 'pt':
          return defineAsyncComponent(() => import('@/components/locales/pt/CallsTable.vue'))
        default:
          return null
      }
    }

    async function getCfpForLocale(locale) {
      switch (locale) {
        case 'en':
          return defineAsyncComponent(() => import('@/components/locales/en/Call-for-papers.vue'))
        case 'es':
          return defineAsyncComponent(() => import('@/components/locales/es/Call-for-papers.vue'))
        case 'pt':
          return defineAsyncComponent(() => import('@/components/locales/pt/Call-for-papers.vue'))
        default:
          return null
      }
    }

    async function getCptForLocale(locale) {
      switch (locale) {
        case 'en':
          return defineAsyncComponent(() => import('@/components/locales/en/Call-for-posters.vue'))
        case 'es':
          return defineAsyncComponent(() => import('@/components/locales/es/Call-for-posters.vue'))
        case 'pt':
          return defineAsyncComponent(() => import('@/components/locales/pt/Call-for-posters.vue'))
        default:
          return null
      }
    }

    async function getCwtForLocale(locale) {
      switch (locale) {
        case 'en':
          return defineAsyncComponent(() => import('@/components/locales/en/Call-for-workshop.vue'))
        case 'es':
          return defineAsyncComponent(() => import('@/components/locales/es/Call-for-workshop.vue'))
        case 'pt':
          return defineAsyncComponent(() => import('@/components/locales/pt/Call-for-workshop.vue'))
        default:
          return null
      }
    }

    async function getSdcForLocale(locale) {
      switch (locale) {
        case 'en':
          return defineAsyncComponent(() => import('@/components/locales/en/Call-for-competition.vue'))
        case 'es':
          return defineAsyncComponent(() => import('@/components/locales/es/Call-for-competition.vue'))
        case 'pt':
          return defineAsyncComponent(() => import('@/components/locales/pt/Call-for-competition.vue'))
        default:
          return null
      }
    }

    async function getCgcForLocale(locale) {
      switch (locale) {
        case 'en':
          return defineAsyncComponent(() => import('@/components/locales/en/call-for-coloquium.vue'))
        case 'es':
          return defineAsyncComponent(() => import('@/components/locales/es/call-for-coloquium.vue'))
        case 'pt':
          return defineAsyncComponent(() => import('@/components/locales/pt/call-for-coloquium.vue'))
        default:
          return null
      }
    }

    return {
      tableComponent,
      cfpComponent,
      cptComponent,
      cwtComponent,
      sdcComponent,
      cgcComponent,
      Tr
    }
  }
}
</script>

<template>
  <TheHeader>
    <template #page-name>
      {{ $t("calls.title") }}
    </template>
  </TheHeader>

  <section>
    <div class="container">
      <div class="row">
        <div class="row justify-content-center my-3">
          <div class="col-lg-8">

            <template v-if="tableComponent">
              <component :is="tableComponent" />
            </template>

            <!-- call for papers-->
            <template v-if="cfpComponent">
              <component :is="cfpComponent" />
            </template>

            <br>
            <p>
              <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#top' })" class="uline">
                {{ $t("nav.back_to_top") }}
              </RouterLink>
            </p>
            <hr>

            <!-- Poster track-->
            <template v-if="cptComponent">
              <component :is="cptComponent" />
            </template>

            <br>
            <p>
              <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#top' })" class="uline">
                {{ $t("nav.back_to_top") }}
              </RouterLink>
            </p>
            <hr>
            <!-- end Poster tracks -->

            <!-- Workshops and Tutorials-->
            <template v-if="cwtComponent">
              <component :is="cwtComponent" />
            </template>

            <br>
            <p>
              <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#top' })" class="uline">
                {{ $t("nav.back_to_top") }}
              </RouterLink>
            </p>
            <hr>
            <!-- end Workshops and Tutorials -->

            <!-- Student design competition-->
            <template v-if="sdcComponent">
              <component :is="sdcComponent" />
            </template>

            <br>
            <p>
              <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#top' })" class="uline">
                {{ $t("nav.back_to_top") }}
              </RouterLink>
            </p>
            <hr>
            <!-- end Student design competition -->


            <!-- Graduate colloquium-->
            <template v-if="cgcComponent">
              <component :is="cgcComponent" />
            </template>

            <br>
            <p>
              <RouterLink :to="Tr.i18nRoute({ name: 'call-for-participation', hash: '#top' })" class="uline">
                {{ $t("nav.back_to_top") }}
              </RouterLink>
            </p>
            <!-- end Graduate Colloquium -->
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