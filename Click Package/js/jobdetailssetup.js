$(document).ready(function () {

});
function JobDetails(){
     // alert("1111");
     $('#tabPageJobDetails').show();
     // alert("222");
     $('#tabPagePayGrades').hide();
     document.getElementById("tabPageJobDetails").style.display = "block";
    document.getElementById("tabPagePayGrades").style.display="none";
    document.getElementById("tabPageEmployementStatus").style.display="none";

    document.getElementById("jobdtls2").style.border = "0px";
    document.getElementById("jobdtls3").style.border = "0px";
    document.getElementById("jobdtls1").style.border = "1px  solid  rgb(199, 199, 199)";
}

function PayGrades(){
    // alert("1111");
    $('#tabPageJobDetails').hide();
    // alert("222");
    $('#tabPagePayGrades').show();
    //alert("1111");
    document.getElementById("tabPageJobDetails").style.display = "none";
    document.getElementById("tabPageEmployementStatus").style.display = "none";
   // alert("222");
   document.getElementById("tabPagePayGrades").style.display="block";
  // alert("3333");

   document.getElementById("jobdtls1").style.border = "0px";
   document.getElementById("jobdtls3").style.border = "0px";
   document.getElementById("jobdtls2").style.border = "1px  solid  rgb(199, 199, 199)";
}
function EmployementStatus(){
     // alert("1111");
     $('#tabPageJobDetails').hide();
     // alert("222");
     $('#tabPagePayGrades').hide();
     //alert("1111");
     document.getElementById("tabPageJobDetails").style.display = "none";
    // alert("222");
    document.getElementById("tabPagePayGrades").style.display="none";

    document.getElementById("tabPageEmployementStatus").style.display="block";

   // alert("3333");
 
    document.getElementById("jobdtls1").style.border = "0px";
    document.getElementById("jobdtls2").style.border = "0px";
    document.getElementById("jobdtls3").style.border = "1px  solid  rgb(199, 199, 199)";
 }
