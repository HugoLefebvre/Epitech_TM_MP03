import Vue from 'vue'
import Router from 'vue-router'
import WorkingTimes from './components/WorkingTimes/index'
import ClockManager from "./components/ClockManager/index";
import ChartManager from "./components/ChartManager/index";
import User from './components/User/index'
import HelloWorld from './components/HelloWorld'
import WorkingTime from './components/WorkingTime/index';
import PopinClockManager from "./components/PopinClockManager/index";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/working-times',
            name: 'working-times',
            component: WorkingTimes
        },
        {
            path: '/clock-manager',
            name: 'clock-manager',
            component: ClockManager
        },
        {
            path: '/chart-manager',
            name: 'chart-manager',
            component: ChartManager
        },
        {
            path: '/user',
            name: 'home',
            component: User
        },
        {
            path: '/',
            name: 'home',
            component: HelloWorld
        },
        {
            path: '/working-time/:userID',
            name: 'working-time',
            component: WorkingTime
        },
        {
            path: '/clock-manager/:userID',
            name: 'clock-manage-create',
            component: PopinClockManager
        }
    ]
})
