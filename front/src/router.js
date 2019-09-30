import Vue from 'vue';
import Router from 'vue-router';

import ClockManager from "./components/ClockManager/index";

import ChartManager from "./components/ChartManager/index";


import WorkingTimes from './components/WorkingTimesManagement/WorkingTimes/index';
import WorkingTime from './components/WorkingTimesManagement/WorkingTime/index';
import WorkingTimeEdit from './components/WorkingTimesManagement/WorkingTimeEdit/index';

import Users from './components/UsersManagement/Users/';
import EditUser from './components/UsersManagement/EditUser/';
import UserMenu from "./components/UsersManagement/UserMenu/index";

Vue.use(Router)

export default new Router({
    routes: [
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
            path: '/working-times',
            name: 'working-times',
            component: WorkingTimes
        },
        {
            path: '/working-times/:userID',
            name: 'working-time',
            component: WorkingTime
        },
        {
            path: '/working-times/:userID/edit/:start&:end',
            name: 'working-time-user-edit',
            component: WorkingTimeEdit
        },
        {
            path: '/user',
            name: 'UserMenu',
            component: UserMenu
        },
        {
            path: '/user/edit-user/:userID',
            name: 'edit-user',
            component: EditUser
        }
    ]
})
