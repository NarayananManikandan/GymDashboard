let namecall = document.getElementById('Nameinput');
let emailcall = document.getElementById('EmailInput');
let gendercall = document.getElementById('Genderinput');
let citycall = document.getElementById('Cityinput');
let commentscall = document.getElementById('Commentsinput');
let submitcall = document.getElementById("submitbtn");
let tablecontent = document.getElementById("tablecontent");

submitcall.addEventListener("click", (event) => {
    event.preventDefault();
    let newtable = document.createElement('tr');
    tablecontent.appendChild(newtable);

    if (!namecall.value.trim() || !emailcall.value.trim() || !gendercall.value.trim() || !citycall.value.trim() || !commentscall.value.trim()) {
        alert("All fields are mandatory. Please fill out all the fields.");
        return;
    }

    let newtabledata = document.createElement("td");
    let newinputtag = document.createElement("input");
    newtabledata.appendChild(newinputtag);
    newinputtag.classList.add("formborder");
    newinputtag.value = namecall.value;
    newinputtag.setAttribute('readonly', 'readonly');
    newtable.appendChild(newtabledata);

    let newtabledata1 = document.createElement("td");
    let newinputtag1 = document.createElement("input");
    newtabledata1.appendChild(newinputtag1);
    newinputtag1.classList.add("formborder");
    newinputtag1.value = emailcall.value;
    newinputtag1.setAttribute('readonly', 'readonly');
    newtable.appendChild(newtabledata1);

    let newtabledata2 = document.createElement("td");
    let newinputtag2 = document.createElement("input");
    newtabledata2.appendChild(newinputtag2);
    newinputtag2.classList.add("formborder");
    newinputtag2.value = gendercall.value;
    newinputtag2.setAttribute('readonly', 'readonly');
    newtable.appendChild(newtabledata2);

    let newtabledata3 = document.createElement("td");
    let newinputtag3 = document.createElement("input");
    newtabledata3.appendChild(newinputtag3);
    newinputtag3.classList.add("formborder");
    newinputtag3.value = citycall.value;
    newinputtag3.setAttribute('readonly', 'readonly');
    newtable.appendChild(newtabledata3);

    let newtabledata4 = document.createElement("td");
    let newinputtag4 = document.createElement("input");
    newtabledata4.appendChild(newinputtag4);
    newinputtag4.classList.add("formborder");
    newinputtag4.value = commentscall.value;
    newinputtag4.setAttribute('readonly', 'readonly');
    newtable.appendChild(newtabledata4);

    let newtabledata5 = document.createElement("td");
    let editcall = document.createElement('button');
    editcall.innerHTML = "Edit";
    editcall.classList.add("formedit");
    newtabledata5.appendChild(editcall);

    let savecall = document.createElement('button');
    savecall.innerHTML = "save";
    savecall.classList.add("formsave");
    newtabledata5.appendChild(savecall);

    let deletecall = document.createElement('button');
    deletecall.innerHTML = "delete";
    deletecall.classList.add("formdelete");
    newtabledata5.appendChild(deletecall);

    newtable.appendChild(newtabledata5);
    editcall.addEventListener("click", function (params) {
        newinputtag.removeAttribute("readonly", "readonly");
        newinputtag1.removeAttribute("readonly", "readonly");
        newinputtag2.removeAttribute("readonly", "readonly");
        newinputtag3.removeAttribute("readonly", "readonly");
        newinputtag4.removeAttribute("readonly", "readonly");
        newinputtag5.removeAttribute("readonly", "readonly");
    })

    newtable.appendChild(newtabledata5);
    editcall.addEventListener("click", function (params) {
        newinputtag.removeAttribute("readonly", "readonly");
        newinputtag1.removeAttribute("readonly", "readonly");
        newinputtag2.removeAttribute("readonly", "readonly");
        newinputtag3.removeAttribute("readonly", "readonly");
        newinputtag4.removeAttribute("readonly", "readonly");
    })

    savecall.addEventListener("click", function (params) {
        newinputtag.setAttribute("readonly", "readonly");
        newinputtag1.setAttribute("readonly", "readonly");
        newinputtag2.setAttribute("readonly", "readonly");
        newinputtag3.setAttribute("readonly", "readonly");
        newinputtag4.setAttribute("readonly", "readonly");
        newinputtag5.setAttribute("readonly", "readonly");
    })

    deletecall.addEventListener("click", function (params) {
        newtable.style.display = "none";
    })

})