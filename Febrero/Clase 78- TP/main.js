
//Flujo para agregar empleados

const buttonAddEmployees = document.getElementById("buttonAdd");
const modalAddEmployees = document.getElementById("modalAdd");

buttonAddEmployees.onclick = () => {
	modalAddEmployees.classList.remove("dontShow");

	const buttonCloseModal = document.getElementById("buttonClose");

	buttonCloseModal.onclick = () => {
		modalAddEmployees.classList.add("dontShow");
	};

	const buttonCancelAdd = document.getElementById("buttonCancel");
	buttonCancelAdd.onclick = () => {
		modalAddEmployees.classList.add("dontShow");
	};
	
	const buttonConfirmAdd = document.getElementById("buttonModalAdd");

    buttonConfirmAdd.onclick = () => {
        const formAddEmployee = document.forms[0];
        formAddEmployee.onsubmit = (e) => {
            e.preventDefault();
			addUser
			modalAddEmployees.classList.add("dontShow");
        }
    }
};


//Cargar Usuario
 const addUser = (newUser) => {
 	fetch("https://tp-js-2-api-wjfqxquokl.now.sh/users",{
	method:"POST",
	headers: {"Content-Type": "application/json"},
	body: JSON.stringify(newUser),
})
	.then(data => data.json())
	.then(users => );
 };


//Mostrar Usuarios
const showUsers = () => {
	fetch("https://tp-js-2-api-wjfqxquokl.now.sh/users")
	.then( data => data.json())
	.then( users => )
}



//Filtrar Usuarios
//Eliminar Usuarios
//Editar Usuarios