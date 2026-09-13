export function Archive(){
    console.log("Archive loaded");
    const container=document.getElementById("archivecontainer");
    container.id="archive";
    container.classList.add("bgsage");
    const eyebrow=document.createElement("p");
    eyebrow.classList.add("eyebrow");
    eyebrow.innerHTML="Archived beginner projects"
    const H2=document.createElement("h2");
    H2.innerHTML="Archive";
    const listcont=document.createElement("div");

    const projects=[
        "JavaScript",
        "HTML5/CSS",
        "MySQL",
        "PHP",
        "C++",
        "React",
        "Angular",
    ]
    const list=document.createElement("ul");
    projects.forEach(project=>{
        const item=document.createElement("li");
        item.innerHTML="";
        list.appendChild(item);
    })
    listcont.appendChild(list);
    container.appendChild(eyebrow);
    container.appendChild(H2);
    container.appendChild(listcont);


    return container;
}