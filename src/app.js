import angular from 'angular';
import 'angular-material';
import 'angular-ui-router';
// import '../style.css';

//import services;
import './services';

import FamilyTreeController from './family-tree/family.tree.controller.js';
import GalleryController from './gallery/gallery.controller.js';
import HomeController from './home/home.controller.js';


var app = angular.module('myApp', ['ui.router', 'ngMaterial','service']);

app.config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'src/home/home.html',
            controller: HomeController
        })
        .state('familyTree', {
            url: '/familyTree',
            templateUrl: 'src/family-tree/family-tree.html',
            controller: FamilyTreeController
        })
        .state('gallery', {
            url: '/gallery',
            templateUrl: 'src/gallery/gallery.html',
            controller: GalleryController
        })
        .state('contactUs', {
            url: '/contactus',
            templateUrl: 'src/contact-us/contact-us.html'
        });
    $urlRouterProvider.otherwise('/');
});

export default app;
