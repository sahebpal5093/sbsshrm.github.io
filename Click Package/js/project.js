$(document).ready(function () {

});
function Project(){
     // alert("1111");
     $('#tabPageProject').show();
     // alert("222");
     $('#tabPageEmployeeProject').hide();
     document.getElementById("tabPageProject").style.display = "block";
    document.getElementById("tabPageEmployeeProject").style.display="none";

    document.getElementById("pr2").style.border = "0px";
    document.getElementById("pr1").style.border = "1px  solid  rgb(199, 199, 199)";
}

function EmployeeProject(){
    // alert("1111");
    $('#tabPageProject').hide();
    // alert("222");
    $('#tabPageEmployeeProject').show();
    //alert("1111");
    document.getElementById("tabPageProject").style.display = "none";
   // alert("222");
   document.getElementById("tabPageEmployeeProject").style.display="block";
  // alert("3333");

   document.getElementById("pr1").style.border = "0px";
   document.getElementById("pr2").style.border = "1px  solid  rgb(199, 199, 199)";
}