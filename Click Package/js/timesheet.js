$("#date1").datetimepicker({

    //timepicker:'HH:mm:ss',
    format:'Y-m-d H:m:s',
    timepicker:true,
    changeMonth:true,
    changeYear:true,
    minDate:new Date()
});
$("#date2").datetimepicker({

    //timepicker:'HH:mm:ss',
    format:'Y-m-d H:m:s',
    timepicker:true,
    changeMonth:true,
    changeYear:true,
    minDate:new Date()
});
$(document).ready(function () {

});
function Punchin(){
     // alert("1111");
     $('#tabPagePunchIn').show();
     // alert("222");
     $('#tabPagePunchOut').hide();
     document.getElementById("tabPagePunchIn").style.display = "block";
    document.getElementById("tabPagePunchOut").style.display="none";

    document.getElementById("comstr2").style.border = "0px";
    document.getElementById("comstr1").style.border = "1px  solid  rgb(199, 199, 199)";
}

function Punchout(){
    // alert("1111");
    // $('#tabPagePunchIn').hide();
    // alert("222");
    $('#tabPagePunchOut').show();
    //alert("1111");
    document.getElementById("tabPagePunchIn").style.display = "none";
   //alert("222");
   document.getElementById("tabPagePunchOut").style.display="block";
  // alert("3333");

   document.getElementById("comstr1").style.border = "0px";
   document.getElementById("comstr2").style.border = "1px  solid  rgb(199, 199, 199)";
}