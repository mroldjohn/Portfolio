export function Bg(){
    console.log("background loaded");
    const bg=document.querySelector("#bgcont, .bgcont");
    
    if(!bg)return;

    let count=400;
    

    for(let i=0;i<count;i++){
        const drop=document.createElement("div");
        drop.classList.add("drop");


        //removes decimals,num 0 to amlost 1,range,starting point
        let width=Math.floor(Math.random() * 2 ) + 1;
        let height=Math.floor(Math.random() * 50 ) + 25;
        let left=Math.floor(Math.random() * 100 );
        let duration=Math.floor(Math.random() * 4  ) + 0.8;
        let delay=Math.random() * 8;

        drop.style.width=`${width}px`;
        drop.style.height=`${height}px`;
        drop.style.left=`${left}%`;
        drop.style.animationDuration=`${duration}s`;
        drop.style.animationDelay=`${delay}s`;

        bg.appendChild(drop)
    }

    // let count=15;
    // const page= window.location.pathname.split('/').pop();
    // if(page==="shop.php"){
    //     count=40;
    // }
    // if(page==="view-products.php"){
    //     count=70;
    // }
// console.log("glow count: ",count);
//     for(let i=0;i<count;i++){
//         const glow=document.createElement("div");
//         glow.classList.add("glow");


//         //removes decimals,num 0 to amlost 1,range,starting point
//         let size=Math.floor(Math.random() * 180 ) + 50;
//         let top=Math.floor(Math.random() * 100 );
//         let left=Math.floor(Math.random() * 100 );
//         let duration=Math.floor(Math.random() * 16  ) + 8;
//         let delay=Math.random() * 10;

//         glow.style.width=`${size}px`;
//         glow.style.height=`${size}px`;
//         glow.style.top=`${top}%`;
//         glow.style.left=`${left}%`;
//         glow.style.animationduration=`${duration}s`;
//         glow.style.delay=`${delay}s`;

//         bg.appendChild(glow)
//     }
       //add function when scrolling categories get .scrolled
         window.addEventListener("scroll",()=>{
            document.querySelectorAll(".glow").forEach(card=>{
                const pageheight=document.documentElement.scrollHeight*0.5;
                console.log(pageheight);
                if(scrollY>pageheight){
                    card.classList.add("scrolled");
                    card.classList.remove("scrolledup");
                }else if(scrollY<pageheight){
                    card.classList.remove("scrolled");
                    card.classList.add("scrolledup");
                }
               
            })
        })
    return bg;
}
