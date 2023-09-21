// Tambahkan kode JavaScript kalian di file ini
// Tentang Kami
const tentangKami = document.querySelector(".tentangKami");
const detailTentangKami = document.querySelector("#detailtentangkami");
detailTentangKami.style.display = "none";
tentangKami.addEventListener("click", function () {
  if (detailTentangKami.style.display === "none") {
    detailTentangKami.style.display = "block";
  } else {
    detailTentangKami.style.display = "none";
  }
});

// Program Kami
const programKami = document.querySelector(".programKami");
const detailProgramKami = document.querySelector("#detailprogramkami");

detailProgramKami.style.display = "none";

programKami.addEventListener("click", function () {
  if (detailProgramKami.style.display === "none") {
    detailProgramKami.style.display = "block";
  } else {
    detailProgramKami.style.display = "none";
  }
});

// FORM
// AMBIL NILAI DARI DOM

function handleGetFormData () {
   const name = document.getElementById("name").value;
   const email = document.getElementById("email").value;
   const city = document.getElementById("city").value;
   const zipCode = document.getElementById("zip-code").value;
   const status = document.getElementById("status").checked;

  return {
    name, email, city, zipCode, status
  }
}

function isNumber(inputString){
  return !isNaN(inputString);
 
}


  
function checkboxIsChecked (){
  if (handleGetFormData().status == true){
    return true
  }
  else {
    return false
  }
}

const data = handleGetFormData();

function validateFormData(data) {
  if (data !== null && isNumber(data.zipCode) && checkboxIsChecked() ) {
  
    return true;
  } else {
    
    return false;
  }
}

const warning = document.getElementById("warning");
function submit (){
  if(validateFormData(data) == false){
    warning.innerHTML = "Periksa form anda sekali lagi";
  }
  else{
     warning.innerHTML = "";
  }

}

const submitForm = document.getElementById("submit-form");
submitForm.addEventListener("click", function(event){
  event.preventDefault();
  submit();
})



















