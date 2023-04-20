import { nextTick } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView, 
      meta: {
        title: "MexIHC 2022 - An AMexIHC conference",
      },
    },
    {
      path: '/call-for-participation',
      name: 'call-for-participation',
      component: () => import('../views/CallsView.vue'), 
      meta: {
        title: "MexIHC 2022 - Call for participation",
      },
    },
    {
      path: '/accessibility-recommendations-for-authors',
      name: 'accessibility-recommendations-for-authors',
      component: () => import('../views/AccessibilityForAuthorsView.vue'), 
      meta: {
        title: "MexIHC 2022 - Accessibility recommendations for authors",
      },
    },
    {
      path: '/organizers',
      name: 'organizers',
      component: () => import('../views/OrganizersView.vue'), 
      meta: {
        title: "MexIHC 2022 - Organizers",
      },
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: () => import('../views/ScheduleView.vue'), 
      meta: {
        title: "MexIHC 2022 - Schedule",
      },
    },    
    {
      path: '/keynote-speakers',
      name: 'keynote-speakers',
      component: () => import('../views/SpeakersView.vue'), 
      meta: {
        title: "MexIHC 2022 - Keynote speakers",
      },
    },
    {
      path: '/accepted-papers',
      name: 'accepted-papers',
      component: () => import('../views/AcceptedPapersView.vue'), 
      meta: {
        title: "MexIHC 2022 - Schedule",
      },
    },    
    {
      path: '/registration',
      name: 'registration',
      component: () => import('../views/RegistrationView.vue'), 
      meta: {
        title: "MexIHC 2022 - Registration",
      },
    },
    {
      path: '/video-archives',
      name: 'videoArchives',
      component: () => import('../views/VideoArchivesView.vue'), 
      meta: {
        title: "MexIHC 2022 - Video archives",
      },
    },    
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import("../views/PageNotFound.vue"), 
      meta: {
          title: "Not found",
      }, 
    }         
  ],
  scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
          return savedPosition;
      }
      if (to.hash) {
          return { el: to.hash };
      }
      return { x: 0, y: 0 };
  },
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  document.head.querySelector("[property~='og:title'][content]").content = `${to.meta.title}`;
  document.head.querySelector("[name='twitter:title'][content]").content = `${to.meta.title}`;
  next();
})
export default router
