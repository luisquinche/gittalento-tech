
const addForm = document.getElementById
("form-validation");
addForm.addEventListener("submit", (e)=>{
  if(addForm.checkValidity() === false){
    e.preventDefault();
    e.stopPropagation();
    addForm.classList.add('was-validated');
    return false

  }
});
