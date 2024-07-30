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
easySolved1=Math.ceil((easySolved/totalSolved)*20)
mediumSolved1=Math.ceil((mediumSolved/totalSolved)*20);
hardSolved1=Math.ceil((hardSolved/totalSolved)*20);
var s,r,q;
for(s=1;s<=easySolved1;s++){
    document.querySelector(`.progress-bar>div>:nth-child(${s})`).style.backgroundColor="rgb(49, 49, 141)";
    document.querySelector(`.progress-bar>div>:nth-child(${s})`).style.color="gold";
}
for(;s<=4;s++){
    document.querySelector(`.progress-bar>div:nth-child(1)>:nth-child(${s})>h3`).style.color="rgb(49, 49, 141)";
}
for(r=1;r<=mediumSolved1;r++){
    document.querySelector(`.progress-bar>div:nth-child(2)>:nth-child(${r})`).style.backgroundColor="rgb(49, 49, 141)";
    document.querySelector(`.progress-bar>div:nth-child(2)>:nth-child(${r})`).style.color="gold";
}
for(;r<=6;r++){
    document.querySelector(`.progress-bar>div:nth-child(2)>:nth-child(${r})>h3`).style.color="rgb(49, 49, 141)";
}
for(q=1;q<=hardSolved1;q++){
    document.querySelector(`.progress-bar>div:nth-child(3)>:nth-child(${q})`).style.backgroundColor="rgb(49, 49, 141)";
    document.querySelector(`.progress-bar>div:nth-child(3)>:nth-child(${q})`).style.color="gold";
}
for(;q<=4;q++){
    document.querySelector(`.progress-bar>div:nth-child(3)>:nth-child(${q})>h3`).style.color="rgb(49, 49, 141)";
}
//End of javascript code for progress-bar

// JS code for pie-chart section
document.addEventListener("DOMContentLoaded", function() {
    console.log('dom loaded');
    const totalQuestions =Number(totalSolved);
    const totalSubmissions = 3236;
    const easyQuestions =Number(easySolved) ;
    const mediumQuestions = mediumSolved;
    const hardQuestions = hardSolved;
    console.log(totalSolved,easySolved,mediumSolved,hardSolved);
    const easyTries = 67;
    const mediumTries = 100;
    const hardTries = 50;

    document.querySelector('.total-count').textContent = totalQuestions;
    document.querySelector('.total-total').textContent = totalSubmissions;
    
    document.querySelector('.easy .count').textContent = easyQuestions;
    document.querySelector('.medium .count').textContent = mediumQuestions;
    document.querySelector('.hard .count').textContent = hardQuestions;

    const total = 814 + 1699 + 723;
    const easyPercentage = (easyQuestions / total) * 100;
    const mediumPercentage = (mediumQuestions / total) * 100;
    const hardPercentage = (hardQuestions / total) * 100;
    
    document.querySelector('.easy-circle').style.strokeDasharray = `${easyPercentage} ${100 - easyPercentage}`;
    document.querySelector('.medium-circle').style.strokeDasharray = `${mediumPercentage} ${100 - mediumPercentage}`;
    document.querySelector('.medium-circle').style.strokeDashoffset = `-${easyPercentage}`;
    document.querySelector('.hard-circle').style.strokeDasharray = `${hardPercentage} ${100 - hardPercentage}`;
    document.querySelector('.hard-circle').style.strokeDashoffset = `-${easyPercentage + mediumPercentage}`;

    const circleText = document.getElementById('circle-text');
    const details = document.querySelectorAll('.detail');

    const easyAcceptance = ((easyQuestions / easyTries) * 100).toFixed(2);
    const mediumAcceptance = ((mediumQuestions / mediumTries) * 100).toFixed(2);
    const hardAcceptance = ((hardQuestions / hardTries) * 100).toFixed(2);
    console.log('details added')

    details.forEach(detail => {
        detail.addEventListener('mouseover', function() {
            const difficulty = detail.getAttribute('data-acceptance').split(':')[0].toLowerCase();
            let acceptanceRatio = '';
            let difficultyClass = '';
    
            switch (difficulty) {
                case 'easy':
                    acceptanceRatio = `Acceptance Ratio ${easyAcceptance}%`;
                    difficultyClass = 'easy';
                    break;
                case 'medium':
                    acceptanceRatio = `Acceptance Ratio ${mediumAcceptance}%`;
                    difficultyClass = 'medium';
                    break;
                case 'hard':
                    acceptanceRatio = `Acceptance Ratio ${hardAcceptance}%`;
                    difficultyClass = 'hard';
                    break;
            }
    
            circleText.innerHTML = `<div class="acceptance-ratio ${difficultyClass}">${acceptanceRatio}</div>`;
       
    });

        detail.addEventListener('mouseout', function() {
            circleText.innerHTML = `
                <div class="total-text">All</div>
                <div class="total-count">${totalQuestions}</div>
                <hr class="divider">
                <div class="total-total">${totalSubmissions}</div>
            `;
        });
    });
});

