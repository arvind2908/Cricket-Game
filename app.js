var a;
var b=0;
var c=0;
var d=0;

var balls = 0;
var wickets = 0;
var target = 0;

var india_runs=0;
var aus_runs=0;
var indRunEle = document.getElementById("ind_runs");
var ausRunEle = document.getElementById("aus_runs");
var wicketEle = document.getElementById("wickets");
var ballsEle = document.getElementById("balls");
var indiaBtn = document.getElementById("india");

var ausBtn = document.getElementById("aus");
var indiaBatFirst = false;
var ausBatFirst = false;

function toss(){
    var a = Math.round(Math.random());
    if(a==0){
        window.alert("INDIA won the Toss!!!\n\nChoose your willing option (Bat/Field)...");
        b=b+1;
    }
    else{
        window.alert("AUSTRALIA won the Toss!!!\n\nChoose your willing option (Bat/Field)...");
    }
}   
function bat(){
    if(b==1){
        window.alert("INDIA choose to Bat first...");
        indiaBatFirst = true;
        ausBtn.setAttribute("disabled", true);
        b=0;
    }
    else{
        window.alert("AUSTRALIA choose to Bat first...");
        indiaBtn.setAttribute("disabled", true);
        ausBatFirst = true;
    }
}
function field(){
    if(b==1){
        window.alert("INDIA choose to Field first...");
        indiaBtn.setAttribute("disabled", true);
        ausBatFirst = true;
        b=0;
    }
    else{
        window.alert("AUSTRALIA choose to Field first...");
        ausBtn.setAttribute("disabled", true);
        indiaBatFirst = true;

    }
}

const scoreRuns =  (team) => {
    let score = getRandomScore();

    balls+=1;

    ballsEle.innerHTML = balls;

    if (team === 1) {
        if (balls === 13) {
            balls = 0;
            wickets = 0;
            wicketEle.innerHTML = wickets;
            ballsEle.innerHTML = balls;
            ausBtn.removeAttribute("disabled");
            indiaBtn.setAttribute("disabled", true);
            if (ausBatFirst === true) {
                if (india_runs >= target) {
                    window.alert(`2 overs completed. India won the match.`);
                    window.location.reload();
                    return;
                }
                window.alert(`2 overs completed. India lost the match`);
                window.location.reload();
                return;
            }
            target = india_runs + 1;
            window.alert(`2 overs completed. Target is ${india_runs + 1}`);
            return; 
        }
        if (score === 0) {
            wickets += 1;
            wicketEle.innerHTML = wickets;
            if (wickets >= 2) {
                wickets = 0;
                balls=0;
                wicketEle.innerHTML = wickets;
                window.alert("You have lost all your wickets! Please, let the other team bat.");
                indiaBtn.setAttribute("disabled", true);
                ausBtn.removeAttribute("disabled");
                return;
            }
        }
        india_runs+=score;
        if (ausBatFirst === true) {
            if (india_runs >= target) {
                window.alert(`You have scored ${score} runs`);
                window.alert(`India won the match.`);
                window.location.reload();
                return;
            }
        }
        indRunEle.innerHTML = india_runs;
    } else {
        if (balls === 13) {
            balls = 0;
            wickets = 0;
            wicketEle.innerHTML = wickets;
            ballsEle.innerHTML = balls;
            indiaBtn.removeAttribute("disabled");
            ausBtn.setAttribute("disabled", true);
            if (indiaBatFirst === true) {
                if (aus_runs >= target) {
                    window.alert(`2 overs completed. Australia won the match.`);
                    window.location.reload();
                    return;
                }
                window.alert(`2 overs completed. Australia lost the match`);
                window.location.reload();
                return;
            }
            window.alert(`2 overs completed. Target is ${aus_runs + 1}`);
            target = aus_runs + 1;
            return; 
        }
        if (score === 0) {
            wickets += 1;
            wicketEle.innerHTML = wickets;
            if (wickets >= 2) {
                wickets = 0;
                balls=0;
                wicketEle.innerHTML = wickets;
                window.alert("You have lost all your wickets! Please, let the other team bat.");
                ausBtn.setAttribute("disabled", true);
                indiaBtn.removeAttribute("disabled");
                return;

            }
        }
        aus_runs += score;
        if (indiaBatFirst === true) {
            if (aus_runs >= target) {
                window.alert(`You have scored ${score} runs`);
                window.alert(`Australia won the match.`);
                window.location.reload();
                return;
            }
        }
        ausRunEle.innerHTML = aus_runs;
    }

    window.alert(`You have scored ${score} runs`);
    
}
const getRandomScore = () => {
    let values = [0,1,2,3,4,6]
    let random = Math.floor(Math.random() * 10);
    while(values.indexOf(random) == -1) {
        random = Math.floor(Math.random() * 10);
    }
    return random;

}