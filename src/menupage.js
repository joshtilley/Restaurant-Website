import {logo} from './html-inserts.js'

export function menupage(){
    const pageContent_div = document.querySelector('.content');

    // controls transition and prevents duplication of content
    if (document.querySelector('.menu-container')) {
        menuPageTransition();

        return;
    }; 

    // creates menu content
    const menuContainer_div = document.createElement('div');
    menuContainer_div.classList.add('page-content', 'menu-container');

    const menuBody_div = document.createElement('div');
    menuBody_div.classList.add('menu-body');

    const menuFooter_div = document.createElement('div');
    menuFooter_div.classList.add('menu-footer');

    const menuLogo_div = document.createElement('div');
    menuLogo_div.classList.add('logo-small');

    menuBody_div.innerHTML =
        `<h2>Dinner menu <span class="non-bold-header-text">at </span><span class="brand-name-text">Tilley's</span></h2>
        <p class="menu-items price-options"><span><em>Two courses:</em> £26</span><span><em>Three courses:</em> £30</span></p>
        <h3>Starters:</h3>
        <ul class="menu-items">
            <li><em>Smoked merguez</em> - curried lentils & red onion chutney</li> 
            <li><em>French onion soup</em> - garlic croutons <em>(v)</em></li> 
            <li><em>Mushroom Risotto</em> - porcini mushrooms, watercress <em>(v)</em></li> 
            <li><em>Brie crostini</em> - apple compote, pomegranate salad, pecan nuts, apple & mustard vinaigrette <em>(v)</em></li> 
            <li><em>Prawn cocktail</em> - little gem lettuce, smoked tomato chutney</li> 
        </ul>
        <h3>Mains:</h3>
        <ul class="menu-items">
            <li><em>Chicken supreme</em> - potatoes dauphinoise & koffman cabbage</li> 
            <li><em>Braised shin of beef</em> - mashed potato, red cabbage & red wine jus</li> 
            <li><em>Slow roasted lamb</em> - potato fondant, garden peas & red wine jus</li> 
            <li><em>Signature shephard's pie</em> - garden peas, red wine & onion gravy</li>
            <li><em>Beer battered cod</em> - triple-cooked chips, pea pur&#233;e, tartare sauce</li>
            <li><em>Pan fried fillet of salmon</em> - new potatoes, samphire, wilted spinach & bouillabaisse</li> 
            <li><em>Caramelised onion quiche</em> - grilled goat's cheese salad, spiced port reduction <em>(v)</em></li> 
        </ul>
        <h3>Desserts:</h3>
        <ul class="menu-items">
            <li><em>Sticky toffee pudding</em> - toffee sauce, vanilla ice cream</li> 
            <li><em>Chocolate fudge cake</em> - pouring cream</li> 
            <li><em>Lemon posset</em> - raspberry sorbet</li> 
            <li><em>Cheeseboard</em> - vintage cheddar, stilton, wensleydale, quince & assorted biscuits</li> 
            <li><em>Ice cream</em> - served with a coffee of your choice</li>
        </ul>`
    
    menuLogo_div.innerHTML = 

    menuFooter_div.appendChild(menuLogo_div);
    menuContainer_div.append(menuBody_div, menuFooter_div);
    pageContent_div.appendChild(menuContainer_div);

    menuPageTransition();
}

export function hideMenuPage() {
    const menuContainer_div = document.querySelector('.menu-container');
    menuContainer_div.classList.add('hide');
}

function menuPageTransition() {
    const backgroundImage_div = document.querySelector('.background-container');
    const homeContent_div = document.querySelector('.homepage-content');
    const menuContainer_div = document.querySelector('.menu-container');

    setTimeout(() => {
        backgroundImage_div.classList.add('left-background');
        homeContent_div.classList.add('homepage-transition');
        menuContainer_div.classList.add('menu-transition');
    }, 10);
}