// Show current time
var update  = function(){
    var time = moment().format('MMMM Do YYYY, h:mm a');
    var timeNowEl = document.getElementById("currentDay");
    timeNowEl.textContent = time;
}
setInterval(update,1000);

//load all tasks
function loadTasks(){
    let nineAM = localStorage.getItem("9AM");
    if(!nineAM){
        $(".nineAM").val(nineAM);
    }
    let tenAM = localStorage.getItem("10AM");
    if(!tenAM){
        $(".tenAM").val(tenAM);
    }
    let elevenAM = localStorage.getItem("11AM");
    if(!elevenAM){
        $(".elevenAM").val(elevenAM);
    }
    let twelvePM = localStorage.getItem("12PM");
    if(!twelvePM){
        $(".twelvePM").val(twelvePM);
    }
    let onePM = localStorage.getItem("1PM");
    if(!onePM){
        $(".onePM").val(onePM);
    }
    let twoPM = localStorage.getItem("2PM");
    if(!twoPM){
        $(".tenAM").val(twoPM);
    }
    let threePM = localStorage.getItem("3PM");
    if(!threePM){
        $(".threePM").val(threePM);
    }
    let fourPM = localStorage.getItem("4PM");
    if(!fourPM){
        $(".fourPM").val(fourPM);
    }
    let fivePM = localStorage.getItem("5PM");
    if(!fivePM){
        $(".fivePM").val(fivePM);
    }
    $(".nineAM").text(nineAM);
    $(".tenAM").text(tenAM);
    $(".elevenAM").text(elevenAM);
    $(".twelvePM").text(twelvePM);
    $(".onePM").text(onePM);
    $(".twoPM").text(twoPM);
    $(".threePM").text(threePM);
    $(".fourPM").text(fourPM);
    $(".fivePM").text(fivePM);

}

// save tasks after pressing corresponding save button
$("#save9").on("click", function(){
    localStorage.setItem("9AM", $(".nineAM").val());

})

$("#save10").on("click", function(){
    localStorage.setItem("10AM", $(".tenAM").val());

})

$("#save11").on("click", function(){
    localStorage.setItem("11AM", $(".elevenAM").val());

})

$("#save12").on("click", function(){
    localStorage.setItem("12PM", $(".twelvePM").val());

})

$("#save1").on("click", function(){
    localStorage.setItem("1PM", $(".onePM").val());

})

$("#save2").on("click", function(){
    localStorage.setItem("2PM", $(".twoPM").val());

})

$("#save3").on("click", function(){
    localStorage.setItem("3PM", $(".threePM").val());

})

$("#save4").on("click", function(){
    localStorage.setItem("4PM", $(".fourPM").val());

})

$("#save5").on("click", function(){
    localStorage.setItem("5PM", $(".fivePM").val());

})

loadTasks();