import { Modal } from "../components/modal.js";
export function Project(){
    console.log("project loaded");
    const container=document.getElementById("projectdisplaycont");

    if (!container) return null;

    const projectName=new URLSearchParams(window.location.search).get("project");
    fetch("./data/projects.json")
        .then(res=>res.json())
        .then(projects=>{
            const project=projects.find(project=>{
                const link=new URL(project.link,window.location.href);
                return link.searchParams.get("project")===projectName;


            });
            if(!project){
                container.innerHTML=`
                    <p>Project not found.</p>
                    <a class="button" href="index.html">Go back</a>`
                    return;
            }

            const section=document.createElement("section");
            section.classList.add("project-view");
            const title=document.createElement("h1");
            title.innerHTML=project.title;
            const status = document.createElement("p");
            status.classList.add("eyebrow");
            status.innerText = project.status;

            const description = document.createElement("p");
            description.innerText = project.description;

            const skills = document.createElement("div");
            skills.classList.add("project-card-info");

            project.skills.forEach(skill => {
                const skillTag = document.createElement("span");
                skillTag.innerText = skill;
                skills.appendChild(skillTag);
            });

            const gallery = document.createElement("div");
            gallery.classList.add("project-grid");

            project.pictures.forEach((picture,index) => {
                const image = document.createElement("img");
                image.classList.add("image");
                image.src = picture;
                image.alt = project.title;
                image.dataset.description = project.pictureDescriptions?.[picture] || project.description;
                Modal(image, project.pictures, index, project.pictureDescriptions);
                gallery.appendChild(image);
            });

            section.appendChild(status);
            section.appendChild(title);
            section.appendChild(description);
            section.appendChild(skills);
            section.appendChild(gallery);

            container.appendChild(section);
        });

    return container;
}
