function boardSelection() {
    var name= document.getElementById("name").value;
    var phone= document.getElementById("phone").value;
    var email=document.getElementById("email").value;
    if(name=="" || phone=="" || email==""){
        alert("Please Enter All Fields");
    }
    else{
        localStorage.setItem("name",name);
        localStorage.setItem("phone",phone);
        localStorage.setItem("email",email);
        window.location.href = "./surf_up_board_selection.html";
    }
}
function boardSelection2() {
    var name= document.getElementById("name").value;
    var phone= document.getElementById("phone").value;
    var email=document.getElementById("email").value;
    if(name=="" || phone=="" || email==""){
        alert("Please Enter All Fields");
    }
    else{
        localStorage.setItem("name",name);
        localStorage.setItem("phone",phone);
        localStorage.setItem("email",email);
        window.location.href = "./surf_up_board_selection2.html";
    }
}
function select(id){
    if(confirm("Looks like you are ready to rent "+id+". You will be charged $0.30 per minute")){
        localStorage.setItem("board",id);
        var seconds = new Date().getTime() / 1000;
        seconds=""+seconds;
        localStorage.setItem("start",seconds)
        window.location.href = "./surf_up_timer.html";
    }
}
function select2(){
    if(isNaN(parseInt(document.getElementById("num").value))){
        alert("Code does not match any board. Please enter a valid code.");
        return;
    }
    var id= parseInt(document.getElementById("num").value);
    id= id%10;
    id= "board "+id;
    if(confirm("Looks like you are ready to rent "+id+". You will be charged $0.30 per minute")){
        localStorage.setItem("board",id);
        var seconds = new Date().getTime() / 1000;
        seconds=""+seconds;
        localStorage.setItem("start",seconds)
        window.location.href = "./surf_up_timer.html";
    }
}
function unavailable(id){
    alert(id+" is unavailable. Please make another selection.")
}
function pad ( val ) { return val > 9 ? val : "0" + val; }
function set_comb(){
    var board= localStorage.getItem("board");
    var combo;
    if(board=="board 1"){
        combo="1-1-1-2";
    }
    else if(board=="board 2"){
        combo="2-2-2-3";
    }
    else if(board=="board 3"){
        combo="3-3-3-4";
    }
    else if(board=="board 4"){
        combo="4-4-4-5";
    }
    else if(board=="board 5"){
        combo="5-5-5-6";
    }
    else if(board=="board 6"){
        combo="6-6-6-7";
    }

    document.getElementById("combo").innerHTML = combo;
    
    var start= parseInt(localStorage.getItem("start"));
    var now = parseInt(new Date().getTime() / 1000);
    sec=now-start;
    document.getElementById("seconds").innerHTML=pad(sec%60);
    document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
}
function set_end(){
    var min=localStorage.getItem("minutes");
    var sec= localStorage.getItem("seconds");
    var cost=(parseInt(min))*.3;
    document.getElementById("time").innerHTML = min+":"+sec;
    document.getElementById("cost").innerHTML = "$"+(cost.toFixed(2));
}