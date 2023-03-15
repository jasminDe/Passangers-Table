const PopUpBox = stringToElement(`
	<div class="popup">
		<div>
			Are You Sure You Want To Delete This?
		</div>
		
		<div>
			<button>Cancel</button>
			<button>Ok</button>
		</div>
	</div>
`)


const AddTableNoDataMessage = `
	<tr>
		<td colspan="5">
		NO DATA FOUND
		</td>
	</tr>
`

const Spinner = `
<tr>
	<td colspan="5">
 		<div class="spinner"></div>
 	</td>
 </tr>
`

const InputField = (attributes = "") => `
 	<input ${attributes} class="tableVal" onkeypress="save(event)" />
`

const DeleteButton = () => {
	const deleteBtn = document.createElement('button');
	deleteBtn.className = "deleteBTN"
	deleteBtn.innerText = 'Delete'
	deleteBtn.addEventListener('click', e => confirmDelete(e.target))

	return deleteBtn
}

const EmptyTableMessage = (msg = AddTableNoDataMessage) => {
	const tbody = table.querySelector("tbody")
	const tableRowsCount = table.querySelectorAll("tr").length
		
	if (tableRowsCount == 1) {
		tbody.innerHTML = msg
	}
}

const confirmDelete = (deleteBtn) => {
  // Get Delete Button
	console.log(deleteBtn)

	// get delete button position
	const {x, y} = deleteBtn.getClientRects()[0]
	console.log({x,y})

	// Create a popup Box
	console.log({PopUpBox})

	document.body.appendChild(PopUpBox)
}
