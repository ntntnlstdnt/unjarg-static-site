import home from './pages/home'
import mathematics from './pages/mathematics'
import physics from './pages/physics'
import statistics from './pages/statistics'

export default router => {
  router.map({
    '/home': {
      name: 'home',
      component: home
    },

    '/mathematics': {
      name: 'mathematics',
      component: mathematics
    },

    '/physics': {
      name: 'physics',
      component: physics
    },

    '/statistics': {
      name: 'statistics',
      component: statistics
    }
  })
}
