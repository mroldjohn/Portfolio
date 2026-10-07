export function Slideshow(){
    let index=1;
    showSlide(index);
    
    function next(n){
        showSlide(index+n);
    }
    function prev(n){
        showSlide(index=-n);
    }
    function showSlide(n){
        let i=0;
        let dots=document.getElementsByClassName("dots");
        let slides=document.querySelectorAll(".slide");
        
        if(n>slides.length){
            index=1;
        }
        if(n<1){
            index=slides.length;
        }
        for(i=0;slides.length;i++){
            slides[i].style.display="none"
        }

        slides[index-1].style.display='block';

    }

    
        
}
