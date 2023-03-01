const removeTableNoDataMessage = () =>{
	const tableBody = document.querySelector("#myTable tbody")
	const row = document.querySelectorAll("#myTable tr")[1]

	const isEmptyMessg = emptyMessagOptions.some(opt => row.innerHTML.includes(opt))
	
	if(isEmptyMessg){
		tableBody.removeChild(row)
	}
}


const stringToElement = (stringElmt="<div></div>") => {
	const parent = document.createElement('div')
	parent.innerHTML = stringElmt
	
	return parent.firstElementChild
}
