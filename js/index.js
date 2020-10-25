let width=800;
let height = 800;

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};
console.log(target);

let click = 0;
$('#click').text(`Осталось кликов: ${40-click}`);

$('#map').click(function(event) {
    click++;
    let distance = getDistance(event, target);
    let distanceHint = getDistanceHint(distance);
    $('#distance').text(distanceHint);
    if (distance<10) {
        alert(`Клад найден! Зделано кликов: ${click}`);
    };
    $('#click').text(`Осталось кликов: ${40-click}`);
    if (click>=40){
        alert("Конец игры!!! Обнови страницу!");
    };
});






function getDistanceHint (distance) {
    if (distance<10){
        return "Обожжешься!"
    } else if (distance<30){
        return "Очень горячо"
    } else if (distance<60){
        return "Горячо";
    } else if (distance<100){
        return "Тепло";
    } else if (distance<200){
        return "Холодно";
    } else if (distance<400){
        return "Очень холодно";
    } else if(distance<600){
        return "Очень-очень холодно"
    } else {
        return "Замерзнешь!";
    }
};

function getDistance (event, target) {
    let diffx = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffx*diffx)+(diffY*diffY));
};

function getRandomNumber (size) {
    return Math.floor(Math.random()*size);
};