// Show updated time continuously
var update  = function(){
    var updatingTime = moment().format('MMMM Do YYYY, h:mm:ss a')
    var timeNowEl = document.getElementById("currentDay");
    timeNowEl.textContent = updatingTime;
}
setInterval(update,1000);

// set times to corresponding hour (24 hour format)
var nineTime = moment().set("hour", 10);
var tenTime = moment().set("hour", 11);
var elevenTime = moment().set("hour", 12);
var noon = moment().set("hour", 13);
var oneTime = moment().set("hour", 14);
var twoTime = moment().set("hour", 15);
var threeTime = moment().set("hour", 16);
var fourTime = moment().set("hour", 17);
var fiveTime = moment().set("hour", 18);

// set all hours to present as default
$(".description").addClass("present");

// compare hours to current time change class
if(moment().isAfter(nineTime)){ // if current time is after 9AM
    $(".nineAM").addClass("past").removeClass("present");

}else if(moment().diff(nineTime, "hour") < 0) { // if current time is before 9AM
    $(".nineAM").addClass("future").removeClass("present");
}

if(moment().isAfter(tenTime)){
    $(".tenAM").addClass("past").removeClass("present");

}else if(moment().diff(tenTime, "hour") < 0) {
    $(".tenAM").addClass("future").removeClass("present");
}

if(moment().isAfter(elevenTime)){
    $(".elevenAM").addClass("past").removeClass("present");

}else if(moment().diff(elevenTime, "hour") < 0) {
    $(".elevenAM").addClass("future").removeClass("present");
}

if(moment().isAfter(noon)){
    $(".twelvePM").addClass("past").removeClass("present");

}else if(moment().diff(noon, "hour") < 0) {
    $(".twelvePM").addClass("future").removeClass("present");
}

if(moment().isAfter(oneTime)){
    $(".onePM").addClass("past").removeClass("present");

}else if(moment().diff(oneTime, "hour") < 0) {
    $(".onePM").addClass("future").removeClass("present");
}

if(moment().isAfter(twoTime)){
    $(".twoPM").addClass("past").removeClass("present");

}else if(moment().diff(twoTime, "hour") < 0) {
    $(".twoPM").addClass("future").removeClass("present");
}

if(moment().isAfter(threeTime)){
    $(".threePM").addClass("past").removeClass("present");

}else if(moment().diff(threeTime, "hour") < 0) {
    $(".threePM").addClass("future").removeClass("present");
}

if(moment().isAfter(fourTime)){
    $(".fourPM").addClass("past").removeClass("present");

}else if(moment().diff(fourTime, "hour") < 0) {
    $(".fourPM").addClass("future").removeClass("present");
}

if(moment().isAfter(fiveTime)){
    $(".fivePM").addClass("past").removeClass("present");

}else if(moment().diff(fiveTime, "hour") < 0) {
    $(".fivePM").addClass("future").removeClass("present");
}

