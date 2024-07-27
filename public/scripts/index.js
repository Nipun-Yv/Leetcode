//Javascript code for the badges section
let i=0;
badges=Number(badges);
console.log(badges);
    document.querySelector(`.badges>img:nth-child(${i+1})`).removeAttribute("hidden"); 
    document.querySelector(".badges>button").addEventListener("click",()=>{
        document.querySelector(`.badges>img:nth-child(${i+1})`).setAttribute("hidden","true")
        i=(i+1)%badges;
        document.querySelector(`.badges>img:nth-child(${i+1})`).removeAttribute("hidden")
    })
//End of Javascript code for the badges section