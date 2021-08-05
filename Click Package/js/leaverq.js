$("#date1").datetimepicker({
    timepicker: false,
    format:'Y-m-d',
    changeMonth:true,
    changeYear:true,
    minDate:new Date()
  
});
var startDate = $("#date1");

$("#date2").datetimepicker({
    timepicker: false,
    format: 'Y-m-d',
    changeMonth:true,
    changeYear:true,
    // showOn:"button",
    // buttonImage:"images/Calendar.png",
    // buttonImageOnly: true,
    // buttonText: "Select Date",
    minDate: startDate
    
});
function datediff(){ 
    var date1 = new Date($("#date1").val());
    var date2 = new Date($("#date2").val());

    var timeDifference = date2.getTime() - date1.getTime();
    var msInDay = (1000 * 3600 * 24);
    //alert(msInDay);
    
    var daysDiff = (timeDifference / msInDay) + 1;

    $("#noleave").val(daysDiff);

}
function noofleave(){
    if(document.getElementById("type").value == 'Sick')
    {  
        
        $("#total").val('13');
    }
   else if(document.getElementById("type").value == 'Casual')
    {
        $("#total").val('15');
    }
    else if(document.getElementById("type").value == 'Paid')
    {
        $("#total").val('19');
    }

    
}
function subleave(){
    var tleave=$('#total').val();
    var nleave = $('#noleave').val();
    var diff =parseInt(tleave)-parseInt(nleave);
    if(document.getElementById("type").value == 'Sick')
    {  
        
        $("#subsist").val(diff);
    }
   else if(document.getElementById("type").value == 'Casual')
    {
        $("#subsist").val(diff);
    }
    else if(document.getElementById("type").value == 'Paid')
    {
        $("#subsist").val(diff);
    }
    else{
        alert("Please Select Leave Type");
    }

}
// function onFormSubmit(){
//     var formData = readFormData();
//     insertNewRecord(formData);
//     resetForm();
// }

// function readFormData(){
//     var formData= {};
//     formData["Employee ID"] = document.getElementById("name").value;
//     formData["Start Date"] = document.getElementById("date1").value;
//     formData["End Date"] = document.getElementById("date2").value;
//     formData["No.Of Leave"] = document.getElementById("noleave").value;
//     formData["Leave Type"] = document.getElementById("type").value;
//     formData["Total Leave"] = document.getElementById("total").value;
//     formData["Subsist Leave"] = document.getElementById("subsist").value;
//     formData["Take"] = document.getElementById("officetype").value;
//     formData["Leave Reason Type"] = document.getElementById("reason-type").value;
//     formData["Leave Reason "] = document.getElementById("details").value;
//     formData["Attachment"] = document.getElementById("attachments").value;
//     formData["status"] = "Pending";
//     return formData;
// }

// function insertNewRecord(data){
//     var table = document.getElementById("loanApplyTable").getElementsByTagName('tbody')[0];
//     var newRow= table.insertRow(table.length);
//     cell1= newRow.insertCell(0); 
//     cell1.innerHTML = data.name;
//     cell2= newRow.insertCell(1); 
//     cell2.innerHTML = data.date1;
//     cell3= newRow.insertCell(2); 
//     cell3.innerHTML = data.date2;
//     cell4= newRow.insertCell(3); 
//     cell4.innerHTML = data.noleave;
//     cell5= newRow.insertCell(4); 
//     cell5.innerHTML = data.type;
//     cell6= newRow.insertCell(5); 
//     cell6.innerHTML = data.total;
//     cell7= newRow.insertCell(6); 
//     cell7.innerHTML = data.subsist;
//     cell8= newRow.insertCell(7); 
//     cell8.innerHTML = data.officetype;
//     cell9= newRow.insertCell(8); 
//     cell9.innerHTML = data.reason-type;
//     cell10= newRow.insertCell(9); 
//     cell10.innerHTML = data.details;
//     cell11= newRow.insertCell(10); 
//     cell11.innerHTML = data.attachments;
//     cell12= newRow.insertCell(11); 
//     cell12.innerHTML = data.status;
// }

// function resetForm(){
//     document.getElementById("name").value="";
//     document.getElementById("date1").value="";
//     document.getElementById("date2").value="";
//     document.getElementById("noleave").value="";
//     document.getElementById("type").value="";
//     document.getElementById("total").value="";
//     document.getElementById("subsist").value="";
//     document.getElementById("officetype").value="";
//     document.getElementById("reason-type").value="";
//     document.getElementById("details").value="";
//     document.getElementById("attachments").value="";
// }

