export function homepage() {
    const pageContent_div = document.querySelector('.content');
    
    // controls transition and prevents duplication of content
    if (document.querySelector('.homepage-content')) {
        const backgroundImage_div = document.querySelector('.background-container');
        const homeContent_div = document.querySelector('.homepage-content');
        const menuContainer_div = document.querySelector('.menu-container');

        setTimeout(() => {
            backgroundImage_div.classList.remove('left-background');
            homeContent_div.classList.remove('homepage-transition');
            menuContainer_div.classList.remove('menu-transition');
        }, 10);

        return;
    }; 
    
    // creates textbox 
    const homeContent_div = document.createElement('div');
    homeContent_div.classList.add('page-content', 'homepage-content');

    const homeText_div = document.createElement('div');
    homeText_div.classList.add('homepage-text');

    const logoContainer_div = document.createElement('div');
    logoContainer_div.classList.add('logo-large');

    const header_h2 = document.createElement('h2');

    const tagline_p = document.createElement('p');
    tagline_p.classList.add('tagline');

    const desc_p = document.createElement('p');
    desc_p.classList.add('desc');
    
    logoContainer_div.innerHTML = 
        `<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:bx="https://boxy-svg.com">
            <defs></defs>
            <path d="M 0 0 H 500 V 500 H 0 V 0 Z M 15.872 16.025 V 483.975 H 484.128 V 16.025 H 15.872 Z" style="stroke: rgba(0, 0, 0, 0); fill: hsl(354, 100%, 35%);" bx:shape="frame 0 0 500 500 15.872 16.025 0 0 0 0 1@67eee14e"></path>
            <text style="fill: hsl(354, 100%, 35%); font-family: &quot;Bitter Pro&quot;; font-size: 132.8px; font-weight: 700; white-space: pre;" x="30.101" y="251.043">Tilley's</text>
            <text style="fill:hsl(354, 100%, 35%); font-family: &quot;Bitter Pro&quot;; font-size: 75px; white-space: pre;" x="63.093" y="355.903">Bar &amp; Bistro</text>
            <text style="fill: hsl(354, 100%, 35%); font-family: &quot;Bitter Pro&quot;; font-size: 37px; white-space: pre;" x="312.583" y="442.426">est. 2008</text>
        </svg>`
    header_h2.innerText = 
        "Located in the beating heart of England...";
    tagline_p.innerText = 
        "...focussed on delivering simple, modern, British cuisine.";
    desc_p.innerHTML = 
        `<h4>Tuesday to Sunday :</h4>Lunch - <em>12pm</em> to <em>3pm</em> <br> Dinner - <em>5:30pm</em> to <em>9pm</em>`;
    
    homeText_div.append(header_h2, tagline_p, desc_p);

    homeContent_div.append(logoContainer_div, homeText_div);

    pageContent_div.appendChild(homeContent_div);
    
    // creates background image 
    if (!document.querySelector('.background-container')) {
        const backgroundImage_div = document.createElement('div');
        backgroundImage_div.classList.add('background-container');
        
        pageContent_div.appendChild(backgroundImage_div);
    }

    const backgroundImage_div = document.querySelector('.background-container');   
}

export function hideHomepage() {
    const homeContent_div = document.querySelector('.homepage-content');
    homeContent_div.classList.add('hide')
}
