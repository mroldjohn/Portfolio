export function CV(){
    console.log("CV loaded");
    const container=document.getElementById("cvcontainer");
    if(!container) return null;
    container.id="cv";
    container.classList.add("cv-cont");

    //intro
    const intro=document.createElement("section");
    intro.classList.add("cv-intro");

    const eyebrow=document.createElement("p");
    eyebrow.classList.add("eyebrow");
    eyebrow.innerHTML="CV";

    const H1=document.createElement("h1");
    H1.innerHTML="Victor Gerogiannis";

    const role=document.createElement("h2");
    role.innerHTML="Junior Web Developer";

    const bio=document.createElement("p");
    bio.innerHTML="I am studying Web Development and Game Development at IEK Delta 360. I have finished the web design part of my studies and this year the game development part remains. I like creating simple and useful websites with HTML, CSS and JavaScript.";

    intro.appendChild(eyebrow);
    intro.appendChild(H1);
    intro.appendChild(role);
    intro.appendChild(bio);

    //main cv
    const cvmain=document.createElement("section");
    cvmain.classList.add("cv-main");

    const about=document.createElement("article");
    about.classList.add("cv-box");

    const abouttitle=document.createElement("h2");
    abouttitle.innerHTML="About Me";

    const abouttext=document.createElement("p");
    abouttext.innerHTML="I am a student web developer with knowledge in frontend design and basic programming. I have worked with web pages, project layouts, dashboards, catalogs and database websites through my studies and personal projects.";

    about.appendChild(abouttitle);
    about.appendChild(abouttext);

    const education=document.createElement("article");
    education.classList.add("cv-box");

    const edtitle=document.createElement("h2");
    edtitle.innerHTML="Education";

    const school=document.createElement("h3");
    school.innerHTML="IEK Delta 360";

    const schoolinfo=document.createElement("p");
    schoolinfo.innerHTML="Web Development / Game Development";

    const schooltext=document.createElement("p");
    schooltext.innerHTML="Finished the web design part of my studies. The gaming part remains this year.";

    const seminar=document.createElement("h3");
    seminar.innerHTML="Angular Seminar";

    const seminartext=document.createElement("p");
    seminartext.innerHTML="One month seminar in September, learning the basics of Angular.";

    education.appendChild(edtitle);
    education.appendChild(school);
    education.appendChild(schoolinfo);
    education.appendChild(schooltext);
    education.appendChild(seminar);
    education.appendChild(seminartext);

    const skillsbox=document.createElement("article");
    skillsbox.classList.add("cv-box");

    const skilltitle=document.createElement("h2");
    skilltitle.innerHTML="Skills";

    const skillcont=document.createElement("div");
    skillcont.classList.add("cv-skills");

    const skills=[
        "HTML",
        "CSS",
        "JavaScript",
        "React basics",
        "Angular basics",
        "PHP",
        "MySQL",
        "Python basics",
        "C basics",
        "C++ basics"
    ];

    skills.forEach(skill=>{
        const sk=document.createElement("p");
        sk.innerHTML=skill;
        skillcont.appendChild(sk);
    });

    skillsbox.appendChild(skilltitle);
    skillsbox.appendChild(skillcont);

    const contact=document.createElement("article");
    contact.classList.add("cv-box");

    const contacttitle=document.createElement("h2");
    contacttitle.innerHTML="Contact";

    const emailTxt=document.createElement("p");
    emailTxt.innerHTML="Email: ";
    const email=document.createElement("a");
    email.innerHTML="victorgerogianni@gmail.com";
    email.href="mailto:victorgerogianni@gmail.com";
    const githubTxt=document.createElement("p");
    githubTxt.innerHTML="GitHub: ";
    const github=document.createElement("a");
    github.innerHTML="github.com/mroldjohn";
    github.href="https://www.github.com/mroldjohn";

    contact.appendChild(contacttitle);
    contact.appendChild(emailTxt);
    contact.appendChild(email);
    contact.appendChild(githubTxt);
    contact.appendChild(github);

    cvmain.appendChild(about);
    cvmain.appendChild(education);
    cvmain.appendChild(skillsbox);
    cvmain.appendChild(contact);

    container.appendChild(intro);
    container.appendChild(cvmain);

    return container;
}
