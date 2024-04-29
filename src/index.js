import './style.css';
import {homepage} from './homepage.js';
import {hideHomepage} from './homepage.js';
import { menupage } from './menupage.js';

const home_btn = document.getElementById('home');
const menu_btn = document.getElementById('menu');
const story_btn = document.getElementById('story');

window.addEventListener('DOMContentLoaded', function() {

});

home_btn.addEventListener('click', function() {
    homepage();
    if (document.querySelector('.menu-container')) {
        // function to clear menu content
    }
    else if (story) return;
})

menu_btn.addEventListener('click', function() {

    menupage();

    if (document.querySelector('.homepage-content')) {
        setTimeout(() => {hideHomepage()}, 1500);
    }

    else if (story) return;
})

story_btn.addEventListener('click', function() {
    hideHomepage();
})

