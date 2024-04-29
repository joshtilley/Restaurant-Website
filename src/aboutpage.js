import {logo} from './html-inserts.js';
import {aboutUs} from './html-inserts.js';

export function aboutpage() {
    const pageContent_div = document.querySelector('.content');
    
    // transition and duplicate prevention

    // initial render of elements
    const aboutContainer_div = document.createElement('div');
    aboutContainer_div.classList.add('page-content', 'about-container');

    const aboutTextBox_div = document.createElement('div');
    aboutTextBox_div.classList.add('about-textbox');
    aboutTextBox_div.innerHTML = aboutUs["our story"];

    const aboutFooter_div = document.createElement('div');
    aboutFooter_div.classList.add('about-footer');

    const aboutLogo_div = document.createElement('div');
    aboutLogo_div.classList.add('logo-inline');
    aboutLogo_div.innerHTML = logo;

    const aboutFooterContent_div = document.createElement('div');
    aboutFooterContent_div.classList.add('about-footer-content');
    aboutFooterContent_div.innerHTML = aboutUs["footer content"];

    aboutFooter_div.append(aboutLogo_div, aboutFooterContent_div);

    aboutTextBox_div.append(aboutFooter_div);

    aboutContainer_div.append(aboutTextBox_div);

    pageContent_div.append(aboutContainer_div);
}