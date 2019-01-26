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
function select(id){
    if(confirm("Looks like you are ready to rent "+id+". You will be charged $0.30 per minute")){
        localStorage.setItem("board",id);
        window.location.href = "./surf_up_timer.html";
    }
}
function unavailable(id){
    alert(id+" is unavailable. Please make another selection.")
}
function set_comb(){
    var board= localStorage.getItem("board");
    var combo;
    if(board=="Board 1"){
        combo="01-01-01";
    }
    else if(board=="Board 2"){
        combo="02-02-02";
    }
    else if(board=="Board 3"){
        combo="03-03-03";
    }
    else if(board=="Board 4"){
        combo="04-04-04";
    }
    else if(board=="Board 5"){
        combo="05-05-05";
    }
    else if(board=="Board 6"){
        combo="06-06-06";
    }

    document.getElementById("combo").innerHTML = combo;
}
function set_end(){
    var min=localStorage.getItem("minutes");
    var sec= localStorage.getItem("seconds");
    var cost=(parseInt(min))*.3;
    document.getElementById("time").innerHTML = min+":"+sec;
    document.getElementById("cost").innerHTML = "$"+(cost.toFixed(2));
}