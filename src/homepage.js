
export function homepage() {
    const pageContent_div = document.querySelector('.content');
    
    // creates textbox 
    const homeContent_div = document.createElement('div');
    homeContent_div.classList.add('homepage-content')
    const homeText_div = document.createElement('div');
    homeText_div.classList.add('homepage-text')
    const logoContainer_div = document.createElement('div');
    logoContainer_div.classList.add('logo-large');
    const header_h2 = document.createElement('h2');
    const tagline_p = document.createElement('p');
    tagline_p.classList.add('tagline');
    const desc_p = document.createElement('p');
    desc_p.classList.add('desc');
    
    logoContainer_div.innerHTML = `
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:bx="https://boxy-svg.com">
            <defs></defs>
            <path d="M 0 0 H 500 V 500 H 0 V 0 Z M 15.872 16.025 V 483.975 H 484.128 V 16.025 H 15.872 Z" style="stroke: rgba(0, 0, 0, 0); fill: rgb(168, 0, 16);" bx:shape="frame 0 0 500 500 15.872 16.025 0 0 0 0 1@67eee14e"></path>
            <text style="fill: rgb(168, 0, 16); font-family: &quot;Bitter Pro&quot;; font-size: 132.8px; font-weight: 700; white-space: pre;" x="30.101" y="251.043">Tilley's</text>
            <text style="fill: rgb(168, 0, 16); font-family: &quot;Bitter Pro&quot;; font-size: 75px; white-space: pre;" x="63.093" y="355.903">Bar &amp; Bistro</text>
            <text style="fill: rgb(168, 0, 16); font-family: &quot;Bitter Pro&quot;; font-size: 37px; white-space: pre;" x="312.583" y="442.426">est. 2008</text>
        </svg>`
    header_h2.innerText = "Located in the beating heart of England...";
    tagline_p.innerText = "...focussed on delivering simple, modern British cuisine.";
    desc_p.innerText = "Our mission is to show the world that there's more to our nation than beans on toast.";
    
    homeText_div.appendChild(header_h2);
    homeText_div.appendChild(tagline_p);
    homeText_div.appendChild(desc_p);
    homeContent_div.appendChild(logoContainer_div);
    homeContent_div.appendChild(homeText_div)
    pageContent_div.appendChild(homeContent_div);
    
    // creates background image 
    const backgroundImage_div = document.createElement('div');
    backgroundImage_div.classList.add('background-container');
    
    let img = document.createElement('div');
    img.classList.add('background-image');

    backgroundImage_div.appendChild(img);
    pageContent_div.appendChild(backgroundImage_div);
}
