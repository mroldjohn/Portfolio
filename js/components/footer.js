export function Footer() {

    console.log("Footer loaded");
    //header container
    const container = document.getElementById("footercontainer");
    if (!container) return null;

    container.classList.add("footer");
    
    //logo
    const logo = document.createElement("a");
    logo.classList.add("logo");
    logo.href = "index.html#home";
    const copyright = document.createElement("p");
    copyright.innerHTML=`&copy Gerogiannis Victor 2026`;
    const initials = document.createElement("span");
    initials.innerHTML = "VG";
    logo.appendChild(initials);
    logo.appendChild(copyright);
    

    const links=[
        {link:"https://github.com/mroldjohn",name:"GitHub"},
        {link:"tel:+306944204482",name:"Phone Number"},
        {link:"mailto:victorgerogianni@gmail.com",name:"Email"}
    ]
    const linkcont=document.createElement("div");


    links.forEach(link => {
        const contact = document.createElement("a");
        contact.innerHTML = link.name;
        contact.href = link.link;
        linkcont.appendChild(contact);
    });

    //wrapper
    container.appendChild(logo);
    container.appendChild(linkcont);


    return container;
}
