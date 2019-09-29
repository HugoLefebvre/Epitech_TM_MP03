import Vue from 'vue';
import Router from 'vue-router';

import ClockManager from "./components/ClockManager/index";
import ClockManagerDetail from "./components/ClockManagerDetail/index";
import ClockManagerCreate from "./components/ClockManagerCreate/index"

import ChartManager from "./components/ChartManager/index";

import HelloWorld from './components/HelloWorld';

import WorkingTimes from './components/WorkingTimesManagement/WorkingTimes/index';
import WorkingTime from './components/WorkingTimesManagement/WorkingTime/index';
import WorkingTimeEdit from './components/WorkingTimesManagement/WorkingTimeEdit/index';

import Users from './components/UsersManagement/Users/';
import CreateUser from './components/UsersManagement/CreateUser/';
import EditUser from './components/UsersManagement/EditUser/';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/clock-manager',
            name: 'clock-manager',
            component: ClockManager
        },
        {
            path: '/clock-manager/:userID',
            name: 'clock-manager',
            component: ClockManagerDetail
        },
        {
            path: '/clock-manager/:userID/create',
            name: 'clock-manager',
            component: ClockManagerCreate
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
            name: 'users',
            component: Users
        },
        {
            path: '/user/create-user',
            name: 'create-user',
            component: CreateUser
        },
        {
            path: '/user/edit-user/:userID',
            name: 'edit-user',
            component: EditUser
        }
    ]
})
