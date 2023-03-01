
/* 
	=================
		Table Actions 
	=================
*/

function save(event){
	if (event.key == `Enter`) {
		const cell = event.target.parentElement
		const inputValue = event.target.value
		cell.textContent = inputValue
	}
}



function editMode(event){
	const cell = event.target
	const value = cell.innerText
		cell.innerHTML = InputField(`value='${value}'`)
}

function onDelete(r) {
	PopUp({
		Element: r,
		position: "top",
		content: "Are You Sure You Want To Delete?" ,
		onOk: () => null,
		onCancel: ()=> null,
	})	
}


function deleteRow(r) {
	let i = r.parentNode.parentNode.rowIndex;
	table.deleteRow(i);
	EmptyTableMessage()
}



function addRow() {
	removeTableNoDataMessage()
	
	let row = table.insertRow(1);
	const cellsIndexs = [0, 1, 2, 3, 4]

	cellsIndexs.forEach(cellIdx => {
		const cell = row.insertCell(cellIdx)

		// All Other Cells
		if (cellIdx !== 4 && cellIdx !== 3) {
			cell.innerHTML = InputField()
			cell.addEventListener("dblclick", editMode)
		} 

		// Phone Number Cell
		if (cellIdx == 3){
			const phoneNumberCell = cell
      cell.innerHTML = InputField()
      phoneNumberCell.setAttribute("id", "phoneNumber")
			setEventListenersOnPhoneCell(phoneNumberCell)
    };

		// Delete Button
		if (cellIdx === 4) {
			cell.append(DeleteButton())
		}
	})
}
