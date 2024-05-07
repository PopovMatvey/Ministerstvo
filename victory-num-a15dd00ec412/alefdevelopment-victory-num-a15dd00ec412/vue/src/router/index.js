import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/people',
		name: 'People',
		props: (route) => ({ id: route.query.pid }),
		component: () => import('../views/People.vue')
	},
	{
		path: '/people/:id',
		name: 'PeopleID',
		props: true,
		component: () => import('../views/People.vue')
	},
	{
		path: '/graphics',
		name: 'Graphics',
		component: () => import('../views/Graphics.vue')
	}
];

const router = new VueRouter({
	routes,
	mode: 'history'
});

export default router;
