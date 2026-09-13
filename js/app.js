import { Header } from "./components/header.js";
import { Footer } from "./components/footer.js";
import { Intro } from "./modules/intro.js";
import { Projects } from "./modules/projects.js";
import { Project} from "./modules/project.js";
import { Modal } from "./components/modal.js";
import { Archive } from "./modules/archive.js";
import {CV} from "./modules/cv.js";
import { Bg } from "./components/bg.js";
document.addEventListener("DOMContentLoaded", () => {

    Header();
    Bg();

    const page = window.location.pathname.split("/").pop();
    if (page === "" || page === "index.html") {
        Intro();
        Projects();
        Archive();
    }
    if (page==="project.html"){
        Project();
    }
    if (page==="cv.html"){
        CV();
    }
    
    Footer();

});
