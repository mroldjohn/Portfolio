import{Modal} from "../components/modal.js";
import { Autoslideshow } from "../components/autoslideshow.js";
export function Projects(){

    const container=document.getElementById("projectcontainer");
    container.classList.add("project-cont");
    container.id="projects";

    //section heading
    const headcont=document.createElement("div");


    const par=document.createElement("p");
    par.classList.add("eyebrow");
    par.innerHTML="Featured Work"
    const H2=document.createElement("h2");
    H2.innerHTML="Main Projects";

    headcont.appendChild(par);
    headcont.appendChild(H2);
    container.appendChild(headcont);

    //project container
    const projectcont=document.createElement("div");
    projectcont.classList.add("project-grid");
    //get projects
    fetch('./data/projects.json')
    .then(res=>res.json())
    .then(projects=>{
        projects.forEach(project=>{
            const projectarticle=document.createElement("article");
            projectarticle.classList.add("project-card");
            const imgcont=document.createElement("div");
            imgcont.classList.add("imgcont");
            project.pictures.forEach(picture=>{
                const image=document.createElement("img");
                image.classList.add("image");
                image.src=picture;
                image.alt=project.title;
                image.classList.add("slide");
                imgcont.appendChild(image);

            });
            Autoslideshow(imgcont);

            const projectbody=document.createElement("div");
            projectbody.classList.add("project-card-body");

            const projectstatus=document.createElement("div");
            projectstatus.classList.add("project-card-info")
            const status=document.createElement("span");
            status.innerHTML=project.status;
            const pskills=document.createElement("span");
            (project.skills).forEach(skill=>{
                const sp=document.createElement("p");
                sp.innerHTML=skill;
                pskills.appendChild(sp);
            })
            projectstatus.appendChild(status);
            projectbody.appendChild(projectstatus);

            const title=document.createElement("h3");
            title.innerText=project.title;
            const desccont=document.createElement("div");
            desccont.classList.add("desccont");
            const desc=document.createElement("p");
            desc.innerText=project.description;
            const viewmore=document.createElement("a");
            viewmore.classList.add("button");
            viewmore.href=project.link;
            viewmore.innerHTML="View project";
                //add modal here
            desccont.appendChild(desc);
            projectbody.appendChild(title);
            projectbody.appendChild(desccont);
            projectbody.appendChild(viewmore);
            projectarticle.appendChild(imgcont);
            projectarticle.appendChild(projectbody);

            projectcont.appendChild(projectarticle);

        });
    })
    container.appendChild(projectcont);
    
    return container;
}