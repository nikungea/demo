import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Skills from '../views/Skills.vue'
import Works from '../views/Works.vue'
import Person from '../views/Person.vue'
import Projects from '../views/Projects.vue'
import Education from '../views/Education.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      { path: '', component: Skills },
      { path: '/works', component: Works },
      { path: '/person', component: Person },
      { path: '/projects', component: Projects },
      { path: '/education', component: Education }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
