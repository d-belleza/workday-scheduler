// Show updated time continuously
var update  = function(){
    var updatingTime = moment().format('MMMM Do YYYY, h:mm:ss a')
    var timeNowEl = document.getElementById("currentDay");
    timeNowEl.textContent = updatingTime;
}
setInterval(update,1000);


var nineTime = moment().set("hour", 10);
var tenTime = moment().set("hour", 11);
var elevenTime = moment().set("hour", 12);
var noon = moment().set("hour", 13);
var oneTime = moment().set("hour", 14);
var twoTime = moment().set("hour", 15);
var threeTime = moment().set("hour", 16);
var fourTime = moment().set("hour", 17);
var fiveTime = moment().set("hour", 18);


// compare hours to current time
if(moment().isAfter(nineTime)){
    console.log("nine is in the past");

}else if(moment().diff(nineTime, "hour") < 0) {
    console.log("nine is in the future");
}

// hour is in the past
if(moment().isAfter(tenTime)){
    console.log("ten is in the past");

}else if(moment().diff(tenTime, "hour") < 0){
    console.log("ten is in the future");
}