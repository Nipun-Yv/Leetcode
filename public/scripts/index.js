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
        const totalQuestions =Number(totalSolved);
        const totalSubmissions = 3236;
        const easyQuestions =Number(easySolved) ;
        const mediumQuestions =Number(mediumSolved);
        const hardQuestions = Number(hardSolved);
        const easyAcceptance =Number(easySubmissionsPerc);
        const mediumAcceptance=Number(mediumSubmissionsPerc);
        const hardAcceptance=Number(hardSubmissionsPerc);


    const easyPercentage = (easySolved / 814) * 100;
    const mediumPercentage = (mediumSolved / 1699) * 100;
    const hardPercentage = (hardSolved / 723) * 100;

    document.querySelector('.total-count').textContent = totalSolved;
    document.querySelector('.total-total').textContent = totalSubmissions;

    document.querySelector('.easy .count').textContent = easySolved;
    document.querySelector('.medium .count').textContent = mediumSolved;
    document.querySelector('.hard .count').textContent = hardSolved;

    function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
        const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
        };
    }

    function describeArc(x, y, radius, startAngle, endAngle) {
        const start = polarToCartesian(x, y, radius, endAngle);
        const end = polarToCartesian(x, y, radius, startAngle);
        const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
        return [
            "M", start.x, start.y,
            "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
        ].join(" ");
    }

    function setProgress(arc, radius, startPercentage, endPercentage) {
        const startAngle = startPercentage / 100 * 360;
        const endAngle = endPercentage / 100 * 360;
        const arcPath = describeArc(200, 200, radius, startAngle, endAngle);
        arc.setAttribute("d", arcPath);
    }

    const easyArc = document.querySelector(".easy-arc");
    const mediumArc = document.querySelector(".medium-arc");
    const hardArc = document.querySelector(".hard-arc");

    setProgress(easyArc, 180, 0, easyPercentage);
    setProgress(mediumArc, 180, easyPercentage, easyPercentage + mediumPercentage);
    setProgress(hardArc, 180, easyPercentage + mediumPercentage, easyPercentage + mediumPercentage + hardPercentage);

    const circleText = document.getElementById('circle-text');
    const details = document.querySelectorAll('.detail');

    details.forEach(detail => {
        detail.addEventListener('mouseover', function() {
            const difficulty = detail.getAttribute('data-acceptance').split(':')[0].toLowerCase();
            let acceptanceRatio = '';
            let difficultyClass = '';

            switch (difficulty) {
                case 'easy':
                    acceptanceRatio = `Acceptance Ratio ${(easyAcceptance).toFixed(2)}%`;
                    difficultyClass = 'easy';
                    break;
                case 'medium':
                    acceptanceRatio = `Acceptance Ratio ${(mediumAcceptance).toFixed(2)}%`;
                    difficultyClass = 'medium';
                    break;
                case 'hard':
                    acceptanceRatio = `Acceptance Ratio ${(hardAcceptance).toFixed(2)}%`;
                    difficultyClass = 'hard';
                    break;
            }

            circleText.innerHTML = `<div class="acceptance-ratio ${difficultyClass}">${acceptanceRatio}</div>`;
        });

        detail.addEventListener('mouseout', function() {
            circleText.innerHTML = `
                <div class="total-text">All</div>
                <div class="total-count">${totalSolved}</div>
                <hr class="divider">
                <div class="total-total">${totalSubmissions}</div>
            `;
        });
    });
});
