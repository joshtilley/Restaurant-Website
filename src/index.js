import './style.css';
import {homepage} from './homepage.js';
import { backgroundImages } from './imagedata.js';

const generateImageElement = function (source, desc) {
    let img = document.createElement('img');
    img.src = source;
    img.alt = desc;
    
    return img
}

homepage(generateImageElement, backgroundImages[0].img_src, backgroundImages[0].desc);