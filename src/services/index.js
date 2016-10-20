import angular from 'angular';
import scrollService from './scroll.service.js';
let service = angular.module('service',[]);
service.service('scrollService',scrollService);
export default service;
