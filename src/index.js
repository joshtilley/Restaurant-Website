import './style.css';
import {homePage} from './homepage.js';
import {homePageTransition_out} from './homepage.js'
import {menuPage} from './menupage.js';
import {menuPageTransition_out} from './menupage.js'
import {aboutPage} from './aboutpage.js';
import {aboutPageTransition_out} from './aboutpage.js'

const home_btn = document.getElementById('home');
const menu_btn = document.getElementById('menu');
const story_btn = document.getElementById('about');
let currentPage = "home";
let prevPage = "home";

window.addEventListener('DOMContentLoaded', function() {
    homePage();
});

home_btn.addEventListener('click', function() {
    homePage();

    prevPage = currentPage;
    currentPage = "home";
    if (prevPage === "home") {
        return;
    }
    else if (prevPage === "menu") {
        menuPageTransition_out();
        // setTimeout(() => hideMenuPage(), 1000)
    }
    else if (prevPage === "about"){
        aboutPageTransition_out();
        // setTimeout(() => hideAboutPage(), 1000)
    }
})

menu_btn.addEventListener('click', function() {
    menuPage();
    prevPage = currentPage;
    currentPage = "menu";
    if (prevPage === "home") {
        homePageTransition_out();
        // setTimeout(() => hideHomePage(), 1000)
    }
    else if (prevPage === "menu") {
        menuPageTransition_out();
        // setTimeout(() => hideMenuPage(), 1000)
    }    
    else if (prevPage === "about"){
        aboutPageTransition_out();
        // setTimeout(() => hideAboutPage(), 1000)
    }
})

story_btn.addEventListener('click', function() {
    aboutPage();

    prevPage = currentPage;
    currentPage = "about";
    if (prevPage === "home") {
        homePageTransition_out();
        // setTimeout(() => hideHomePage(), 1000)
    }
    else if (prevPage === "menu") {
        menuPageTransition_out();
        // setTimeout(() => hideMenuPage(), 1000)
    }
    else if (prevPage === "about"){
        return;
    }
})