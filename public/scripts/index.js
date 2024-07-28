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

//Javascript code for progress-bar section
totalSolved=Number(totalSolved);
easySolved=Number(easySolved);
console.log(easySolved)
mediumSolved=Number(mediumSolved);
hardSolved=Number(hardSolved);
easySolved=Math.ceil((easySolved/totalSolved)*20)
mediumSolved=Math.ceil((mediumSolved/totalSolved)*20);
hardSolved=Math.ceil((hardSolved/totalSolved)*20);
var s,r,q;
for(s=1;s<=easySolved;s++){
    document.querySelector(`.progress-bar>div>:nth-child(${s})`).style.backgroundColor="rgb(49, 49, 141)";
    document.querySelector(`.progress-bar>div>:nth-child(${s})`).style.color="gold";
}
for(;s<=4;s++){
    document.querySelector(`.progress-bar>div:nth-child(1)>:nth-child(${s})>h3`).style.color="rgb(49, 49, 141)";
}
for(r=1;r<=mediumSolved;r++){
    document.querySelector(`.progress-bar>div:nth-child(2)>:nth-child(${r})`).style.backgroundColor="rgb(49, 49, 141)";
    document.querySelector(`.progress-bar>div:nth-child(2)>:nth-child(${r})`).style.color="gold";
}
for(;r<=6;r++){
    document.querySelector(`.progress-bar>div:nth-child(2)>:nth-child(${r})>h3`).style.color="rgb(49, 49, 141)";
}
for(q=1;q<=hardSolved;q++){
    document.querySelector(`.progress-bar>div:nth-child(3)>:nth-child(${q})`).style.backgroundColor="rgb(49, 49, 141)";
    document.querySelector(`.progress-bar>div:nth-child(3)>:nth-child(${q})`).style.color="gold";
}
for(;q<=4;q++){
    document.querySelector(`.progress-bar>div:nth-child(3)>:nth-child(${q})>h3`).style.color="rgb(49, 49, 141)";
}
//End of javascript code for progress-bar