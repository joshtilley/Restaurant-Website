import './style.css';
import {homepage} from './homepage.js';
import {clearHomepage} from './homepage.js';
import { backgroundImages } from './imagedata.js';
import { menupage } from './menupage.js';

const generateImageElement = function (source, desc) {
    let img = document.createElement('img');
    img.src = source;
    img.alt = desc;
    
    return img
}

const home_btn = document.getElementById('home');
const menu_btn = document.getElementById('menu');
const story_btn = document.getElementById('story');

window.addEventListener('DOMContentLoaded', function() {
    homepage();
});

home_btn.addEventListener('click', function() {
    homepage();
})

menu_btn.addEventListener('click', function() {
    // clearHomepage();
    menupage();
})

story_btn.addEventListener('click', function() {
    clearHomepage();
})

