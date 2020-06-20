


// Show current time
var update  = function(){
    var time = moment().format('MMMM Do YYYY, h:mm a');
    var timeNowEl = document.getElementById("currentDay");
    timeNowEl.textContent = time;
}
setInterval(update,1000);


function loadTasks(){
    let nineAM = localStorage.getItem("9AM");
    if(!nineAM){
        $(".nineAM").val(nineAM);
    }
    $(".nineAM").text(nineAM);

}

// save tasks after edit
$("#save9").on("click", function(){
    localStorage.setItem("9AM", $(".nineAM").val());

})

$("#save10").on("click", function(){
    localStorage.setItem("10AM", $(".tenAM").val());

})

$("#save11").on("click", function(){
    localStorage.setItem("10AM", $(".elevenAM").val());

})

$("#save12").on("click", function(){
    localStorage.setItem("10AM", $(".twelvePM").val());

})

$("#save1").on("click", function(){
    localStorage.setItem("10AM", $(".onePM").val());

})

$("#save2").on("click", function(){
    localStorage.setItem("10AM", $(".twoPM").val());

})

$("#save3").on("click", function(){
    localStorage.setItem("10AM", $(".threePM").val());

})

$("#save4").on("click", function(){
    localStorage.setItem("10AM", $(".fourPM").val());

})

$("#save5").on("click", function(){
    localStorage.setItem("10AM", $(".fivePM").val());

})

loadTasks();