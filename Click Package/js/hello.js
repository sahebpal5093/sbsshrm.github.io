$(document).ready(function () {

});
function employeedetails(){
    alert("1111");
    $('#tabPageEmployee').show();
    alert("222");
    $('#tabPageSkills').hide();
     alert("333");
    document.getElementById("tabPageSkills").style.display = "none";
    document.getElementById("tabPageEmployeeEducation").style.display="none";
    document.getElementById("tabPageEmployeeCertificate").style.display="none";
    document.getElementById("tabPageEmployeeLanguage").style.display="none";
    
    //Border:
    document.getElementById("empstr1").style.border = "0px";
    document.getElementById("empstr").style.border = "1px  solid  rgb(199, 199, 199)";
     document.getElementById("empstr2").style.border="0px";
    document.getElementById("empstr3").style.border="0px";
    



}
function skills(){
    // alert("1111");
    $('#tabPageEmployee').hide();
     //alert("2222");
    $('#tabPageSkills').show();
    
    document.getElementById("tabPageEmployee").style.display = "none";
    document.getElementById("tabPageEmployeeEducation").style.display="none";
    document.getElementById("tabPageSkills").style.display = "block";
    document.getElementById("tabPageEmployeeCertificate").style.display="none";
    document.getElementById("tabPageEmployeeLanguage").style.display="none";
    //border:
    document.getElementById("empstr").style.border = "0px";
    document.getElementById("empstr1").style.border = "1px  solid  rgb(199, 199, 199) ";
    document.getElementById("empstr2").style.border="0px";
    document.getElementById("empstr3").style.border="0px";
    document.getElementById("empstr4").style.border="0px";


    //  alert("3333");
}
function education(){
   // alert("1111");
    $('#tabPageEmployeeEducation').show();
    // alert("222");
    document.getElementById("tabPageEmployee").style.display = "none";
   // alert("3333");
    document.getElementById("tabPageEmployeeEducation").style.display="block";
    //alert("444");
    document.getElementById("tabPageSkills").style.display="none";
    document.getElementById("tabPageEmployeeCertificate").style.display="none";
    document.getElementById("tabPageEmployeeLanguage").style.display="none";
    //border:
    document.getElementById("empstr").style.border = "0px";
    document.getElementById("empstr2").style.border = "1px  solid  rgb(199, 199, 199) ";
    document.getElementById("empstr1").style.border="0px";
    document.getElementById("empstr3").style.border="0px"
    document.getElementById("empstr4").style.border="0px";
    alert("4444");

}
function certification(){
    $('#tabPageEmployeeCertificate').show();
    // alert("222");
    document.getElementById("tabPageEmployee").style.display = "none";
   // alert("3333");
    document.getElementById("tabPageEmployeeEducation").style.display="none";
    //alert("444");
    document.getElementById("tabPageSkills").style.display="none";
    document.getElementById("tabPageEmployeeCertificate").style.display="block";
    document.getElementById("tabPageEmployeeLanguage").style.display="none";
    //border:
    document.getElementById("empstr").style.border = "0px";
    document.getElementById("empstr3").style.border = "1px  solid  rgb(199, 199, 199) ";
    document.getElementById("empstr1").style.border="0px";
    document.getElementById("empstr2").style.border="0px"
    document.getElementById("empstr4").style.border="0px";

    


}
function language(){
    $('#tabPageEmployeeLanguage').show();
    document.getElementById("tabPageEmployee").style.display = "none";
    
     document.getElementById("tabPageEmployeeEducation").style.display="none";
     
     document.getElementById("tabPageSkills").style.display="none";
     document.getElementById("tabPageEmployeeCertificate").style.display="none";
     document.getElementById("tabPageEmployeeLanguage").style.display="block";
    
     document.getElementById("empstr").style.border = "0px";
     document.getElementById("empstr4").style.border = "1px  solid  rgb(199, 199, 199) ";
     document.getElementById("empstr1").style.border="0px";
     document.getElementById("empstr2").style.border="0px"
     document.getElementById("empstr3").style.border="0px";
}
