let numChildren = [1,2,3,4,5];
let partnerNames = ['Ayse', 'Fatma', 'Sevda', 'Seyda', 'Zeynep'];
let locations = ['Turkey', 'Germany', 'Netherlands', 'Italy', 'France'];
let jobs = ['engineer', 'developer', 'driver', 'office boy', 'teacher'];
function randomFive () {
    return Math.floor(Math.random() * 5);
}

function tellFortune (numChildren, partnerNames, locations, jobs){
    let rchild = randomFive();
    let rpart = randomFive();  
    let rloc = randomFive();
    let rjobs = randomFive();
    console.log(`You will be a ${jobs[rjobs]} in ${locations[rloc]}, and married to ${partnerNames[rpart]} with ${numChildren[rchild]} kids.`);


}

tellFortune(numChildren, partnerNames, locations, jobs);