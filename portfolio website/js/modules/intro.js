export function Intro() {
    console.log("intro loaded");
    //container
    const container = document.getElementById("introcontainer");
    if (!container) return null;

    const sec = document.createElement("section");
    sec.classList.add("home","mt40");
    sec.id = "home";

    //title and info
    const par = document.createElement("p");
    par.classList.add("eyebrow");
    par.innerHTML = "Web Developer";
    const H1 = document.createElement("h1");
    H1.innerHTML = "Victor Gerogiannis";
    const intro = document.createElement("p");
    intro.innerHTML = "A project collection built around PHP storefronts, dashboards, catalogs, JavaScript modules, and database-backed web apps.";


    //action btns
    const act = document.createElement("div");
    act.classList.add("actions");

    const projectbtn = document.createElement("a");
    projectbtn.classList.add("button");
    projectbtn.innerHTML = "View Projects";
    projectbtn.href = "index.html#projects";
    const archivebtn = document.createElement("a");
    archivebtn.classList.add("button");
    archivebtn.innerHTML = "View CV";
    archivebtn.href = "cv.html";

    act.appendChild(projectbtn);
    act.appendChild(archivebtn);


    //skill section
    const sec1=document.createElement("section");
    sec1.classList.add("skills");
    sec1.id="skills";

    const skillp=document.createElement("p");
    skillp.classList.add("eyebrow");
    skillp.innerHTML="Core toolkit";
    const H2=document.createElement("h2");
    H2.innerHTML="Skills Used Across projects";
    const pcont=document.createElement("div");

    const skills=[
        "JavaScript",
        "HTML5/CSS",
        "MySQL",
        "PHP",
        "C++",
        "React",
        "Angular",
    ]
    skills.forEach(skill=>{
        const sk=document.createElement("p");
        sk.innerHTML=skill;
        pcont.appendChild(sk);
    })

    sec.appendChild(par);
    sec.appendChild(H1);
    sec.appendChild(intro);
    sec.appendChild(act);
    sec1.appendChild(skillp);
    sec1.appendChild(H2);
    sec1.appendChild(pcont);
    container.appendChild(sec);
    container.appendChild(sec1);

    return container;
}
