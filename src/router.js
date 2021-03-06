import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/mentor.list.container.vue'
import Authentication from './views/auth.container.vue'
import Login from '@/components/local/auth.container/login'
import Register from '@/components/local/auth.container/register'
import ResultDetails from '@/components/global/isolate.result.data'
import TokenService from '@/services/token.service'
Vue.use(Router)
 

const router = new Router({
  routes: [
    
    {
    // root routes
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true, // Allow access to if logged in
      metaTags:[
        {
          name:'description',
          content:'See your created quizes information whom are played '
        },
        {
          name:'keywords',
          content:'career,careerki,quize,quizard,play,make,'
        },
        {
          property:'og:description',
          content:'See your created quizes information whom are played '
        },
        {
          property:'og:title',
          content:'',
        },
        {
          property:'og:site_name',
          content:'www.careerKi.com',
        },
        {
          property:'og:image',
          content:'/home/darahat/Desktop/JOB/Project/chatcat/src/assets/logo.png',
        },
        {
        property:'og:url',
        content:'https://www.careerki.com/'
        }
      ]
    },
    },
    // result details
    {
      path: '/ResultDetails/title=:title/playerId/:quize_id',
      name: 'resultDetails',
      component: ResultDetails,
    },
    // auth routes
    {
      path: '/Authentication',
      name: 'auth',
      component: Authentication,
      children: [{
          name: 'Login',
          path: '/Authentication/Login',
          component: Login,
          meta: {
            requiresAuth: false, // Allow access to if not logged in
          },
        },
        {
          name: 'Register',
          path: '/Authentication/Register',
          component: Register,
          meta: {
            requiresAuth: false, // Allow access to if not logged in
          },
        }

      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  var requiresAuth = to.matched.some( record => record.meta.requiresAuth );
    const currentUser = !!TokenService.getToken().token
    console.log(currentUser)
   
    if(requiresAuth && !currentUser){
      next('/Authentication/Login');
    // when we go to login route and are already logged in, we can skip this page
    // so we redirect to the homepage
    } else if (to.path == '/Authentication/Login' && currentUser){
      next('/');
    // if none of the above matches, we have a normal navigation that should just go through
    // so we call `next()`
    } else {
      next(); // you called `next('/')` which redirected to the homepage over and over again.
    }
})
export default router
