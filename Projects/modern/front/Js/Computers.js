var username = localStorage.getItem('username');
var password = localStorage.getItem('password');
var API_URL = "http://localhost:9779";
var token = "Basic "+ window.btoa(username+':'+password);
var selectedComputerId;
var computerBrandInput = document.getElementById("brand");
var computerModelInput = document.getElementById("model");
var computerPriceInput = document.getElementById("price");
var computerDescriptionInput = document.getElementById("description");
var computerIsNewInput = document.getElementById("new");
var computerMemoryInput = document.getElementById("memory");
var computerCpuInput = document.getElementById("cpu");
var computerDriveInput = document.getElementById("drive_memory");
var computerPhotoInput = document.getElementById('photo');

function onBackToMain(){
    window.location.assign("home.html");
}
async function onSaveComputer(event) {
    event.preventDefault();
    let formData= new FormData();
    let photo=computerPhotoInput.files[0]
    formData.append("file",photo) ;
    let response= await fetch(API_URL+'/file/upload',{
    method :"POST",
    body:formData,
    headers :{
    "Authorization":token
    }
});
    if(response.status==200){
    alert("Sekil yüklandi..")
    }
    
    
}
function loadAllComputers() {
    var http = new XMLHttpRequest();



    http.onload = function () {
        var response = this.responseText;
        var computersArray = JSON.parse(response);
        fillComputersTable(computersArray);
    }




    http.open("GET", API_URL + "/computers", true);
    http.setRequestHeader("Authorization",token);
    http.send();
   
}
function fillComputersTable(computers) {


    gridOptionsGlobal.api.setRowData(computers);
  
}
loadAllComputers();

function onDeleteComputer() {
    var selectedComputers = gridOptionsGlobal.api.getSelectedRows();
    if(selectedComputers.length>0){
    if (confirm('Silməyə əminsinizmi?')) {
        var computerId = selectedComputers[0].id;
        var http = new XMLHttpRequest();
        http.onload = function () {
            loadAllStudents();
        }




        http.open("DELETE", API_URL + "/students/" + computerId, true);
        http.setRequestHeader("Authorization",token);
        http.send();
    }
}else{
    alert("Choose Minimum 1 Computer!");
}
}
function onEditStudent() {
    var selectedComputers = gridOptionsGlobal.api.getSelectedRows();
    if(selectedComputers.length>0){
    var http = new XMLHttpRequest();
    http.onload = function () {
        var response = this.responseText;
        var computerObject = JSON.parse(response);
        computerBrandInput = computerObject.brand;
        computerModelInput = computerObject.model;
        computerPriceInput = computerObject.price;
        computerDescriptionInput = computerObject.description;
        computerIsNewInput = computerObject.is_new;
        computerMemoryInput = computerObject.memory;
        computerCpuInput = computerObject.cpu;
        computerDriveInput = computerObject.drive_memory;
        
    }
    http.open("GET", API_URL + "/computers/" + computerId, true);
    http.setRequestHeader("Authorization",token);
    http.send();
}else{
    alert("You can choose only 1 computer!")
}
}
function prepareAgGridTable(){
    const columnDefs = [
        { field: "Id", headerName:"ID"},
        { field: "Name", headerName:"Name" },
        { field: "Photo", headerName:"Photo" },
        { field: "Price", headerName:"Price" }
      ];
        
        const gridOptions = {
        columnDefs: columnDefs,
        rowData: [],
        defaultColDef:{sortable:true},
        animateRos:true,
        floatingFilter:true,
        pagination:true,
        rowSelection:'multiple'
          };
      gridOptionsGlobal = gridOptions;
      
      document.addEventListener('DOMContentLoaded', () => {
          const gridDiv = document.querySelector('#myStudents');
          new agGrid.Grid(gridDiv, gridOptions);
      });
}
prepareAgGridTable();
loadAllComputers();