export function Autoslideshow(imgcont){
    let autoslide=0;
    displayslides();

    function displayslides(){
        let i=0;
        let slides=imgcont.querySelectorAll(".slide");
       
        if(!slides.length)return;
        
        
        slides.forEach(slide => {
            slide.style.display="none"
        });
        
        autoslide++
        if(autoslide>=slides.length){
            autoslide=0;
        }
        slides[autoslide].style.display='block';
        setTimeout(displayslides,5000);
    }

    displayslides();
    
}
