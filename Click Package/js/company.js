$(document).ready(function () {

});
function Structure(){
     // alert("1111");
     $('#tabPageCompanyStructure').show();
     // alert("222");
     $('#tabPageCompanyGraph').hide();
     document.getElementById("tabPageCompanyStructure").style.display = "block";
    document.getElementById("tabPageCompanyGraph").style.display="none";

    document.getElementById("comstr2").style.border = "0px";
    document.getElementById("comstr1").style.border = "1px  solid  rgb(199, 199, 199)";
}

function Graph(){
    // alert("1111");
    $('#tabPageCompanyStructure').hide();
    // alert("222");
    $('#tabPageCompanyGraph').show();
    //alert("1111");
    document.getElementById("tabPageCompanyStructure").style.display = "none";
   // alert("222");
   document.getElementById("tabPageCompanyGraph").style.display="block";
  // alert("3333");

   document.getElementById("comstr1").style.border = "0px";
   document.getElementById("comstr2").style.border = "1px  solid  rgb(199, 199, 199)";
}