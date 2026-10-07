export function Header() {

    console.log("Header loaded");
    //header container
    const headercont = document.getElementById("headercontainer");
    if (!headercont) return null;

    headercont.classList.add("header");
    const head = document.createElement("div");
    head.classList.add("header-inner","mb30");

    //logo
    const logo = document.createElement("a");
    logo.classList.add("logo");
    logo.href = "index.html#home";
    const initials = document.createElement("span");
    initials.innerHTML = "VG";
    const name = document.createElement("strong");
    name.innerHTML = "Victor Gerogiannis";
    logo.appendChild(initials);
    logo.appendChild(name);

    //ham
    const hamburger = document.createElement("button");
    hamburger.classList.add("hamburger");
    hamburger.type = "button";

    for (let i = 0; i < 3; i++) {
        const line = document.createElement("span");
        line.classList.add("line");
        hamburger.appendChild(line);
    }

    //nav
    const navigation = document.createElement("nav");
    navigation.classList.add("nav");
    navigation.id = "nav";
    const links = [
        { name: "Home", address: "index.html#home" },
        { name: "Projects", address: "index.html#projects" },
        { name: "CV", address:"cv.html"}
        // { name: "Archive", address: "index.html#archive" }
    
    ];

    links.forEach(link => {
        const navlink = document.createElement("a");
        navlink.innerHTML = link.name;
        navlink.href = link.address;
        navigation.appendChild(navlink);
    });

    hamburger.addEventListener("click",()=>{
        hamburger.classList.toggle("is-open");
        navigation.classList.add("SlideIn");
        navigation.classList.toggle("nav-open");

 
    })

    //wrapper
    head.appendChild(logo);
    head.appendChild(navigation);
    head.appendChild(hamburger);
    headercont.appendChild(head);


    return headercont;
}
