//load all tasks
function loadTasks(){
    // 9AM 
    let nineAM = localStorage.getItem("9AM");
    if(!nineAM){
        $(".nineAM").val(nineAM);
    }
    $(".nineAM").text(nineAM);

    // 10AM
    let tenAM = localStorage.getItem("10AM");
    if(!tenAM){
        $(".tenAM").val(tenAM);
    }
    $(".tenAM").text(tenAM);

    // 11AM
    let elevenAM = localStorage.getItem("11AM");
    if(!elevenAM){
        $(".elevenAM").val(elevenAM);
    }
    $(".elevenAM").text(elevenAM);

    // 12PM
    let twelvePM = localStorage.getItem("12PM");
    if(!twelvePM){
        $(".twelvePM").val(twelvePM);
    }
    $(".twelvePM").text(twelvePM);

    // 1PM
    let onePM = localStorage.getItem("1PM");
    if(!onePM){
        $(".onePM").val(onePM);
    }
    $(".onePM").text(onePM);

    // 2PM
    let twoPM = localStorage.getItem("2PM");
    if(!twoPM){
        $(".tenAM").val(twoPM);
    }
    $(".twoPM").text(twoPM);

    // 3PM
    let threePM = localStorage.getItem("3PM");
    if(!threePM){
        $(".threePM").val(threePM);
    }
    $(".threePM").text(threePM);

    // 4PM
    let fourPM = localStorage.getItem("4PM");
    if(!fourPM){
        $(".fourPM").val(fourPM);
    }
    $(".fourPM").text(fourPM);

    // 5PM
    let fivePM = localStorage.getItem("5PM");
    if(!fivePM){
        $(".fivePM").val(fivePM);
    }
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
