var selectedRow = null;

function submitForm() {
    if (nameValidation() && cnpValidation()) {
        let formData = readFormData();
        if (selectedRow == null)
            newRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    let formData = {};
    formData["firstName"] = document.getElementById("firstName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["CNP"] = document.getElementById("CNP").value;
    formData["phone"] = document.getElementById("phone").value;
    formData["email"] = document.getElementById("email").value;
    formData["address"] = document.getElementById("address").value;
    return formData;
}

function newRecord(data) {
    let table = document.getElementById("usersList").getElementsByTagName('tbody')[0];
    let newRaw = table.insertRow(table.length);
    let cell0 = newRaw.insertCell(0);
    cell0.innerHTML = data.firstName;
    let cell1 = newRaw.insertCell(1);
    cell1.innerHTML = data.lastName;
    let cell2 = newRaw.insertCell(2);
    cell2.innerHTML = data.CNP;
    let cell3 = newRaw.insertCell(3);
    cell3.innerHTML = data.phone;
    let cell4 = newRaw.insertCell(4);
    cell4.innerHTML = data.email;
    let cell5 = newRaw.insertCell(5);
    cell5.innerHTML = data.address;
    let cell6 = newRaw.insertCell(6);
    cell6.innerHTML = `<input type="button" value="Edit" onclick="editForm(this)">`;
    let cell7 = newRaw.insertCell(7);
    cell7.innerHTML = `<input type="button" value="Delete" onclick="deleteForm(this)">`;

}

function resetForm() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("CNP").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    selectedRow = null;
}

function editForm(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("CNP").value = selectedRow.cells[2].innerHTML;
    document.getElementById("phone").value = selectedRow.cells[3].innerHTML;
    document.getElementById("email").value = selectedRow.cells[4].innerHTML;
    document.getElementById("address").value = selectedRow.cells[5].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.firstName;
    selectedRow.cells[1].innerHTML = formData.lastName;
    selectedRow.cells[2].innerHTML = formData.CNP;
    selectedRow.cells[3].innerHTML = formData.phone;
    selectedRow.cells[4].innerHTML = formData.email;
    selectedRow.cells[5].innerHTML = formData.address;
}

function deleteForm(td) {
    if (confirm('Are you sure you want to delete this record?')) {
        let row = td.parentElement.parentElement;
        document.getElementById("usersList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function nameValidation(){
    let isValid;
    if(document.getElementById("firstName").value==="" || document.getElementById("lastName").value==="")
    {
        isValid=false;
        document.getElementById("nameValidationError").style.visibility='visible';
    }
    else
    {
        isValid=true;
        if(document.getElementById("nameValidationError").style.visibility === "visible")
            document.getElementById("nameValidationError").style.visibility= "hidden";
    }
    return isValid;
}

function cnpValidation(){
    let isValid;
    if(document.getElementById("CNP").value.length!==13)
    {
        isValid=false;
        document.getElementById("CNPValidationError").style.visibility='visible';
    }
    else
    {
        isValid=true;
        if(document.getElementById("CNPValidationError").style.visibility === "visible")
            document.getElementById("CNPValidationError").style.visibility = "hidden";
    }
    return isValid;
}