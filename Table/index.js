
// async
// differnt loops
// callback functions / High Order Functions
// default

async function initTableData() {
	const data = await getData()
	removeTableNoDataMessage()
	CreateRowsForPassengers(data)
	loading = false
	addBtn.disabled = loading
}




function CreateRowsForPassengers(passengers) {
	passengers.forEach(({ name, medicaidID, address, phone }) => {
		let row = table.insertRow(1);
		const cellsIndexs = [0, 1, 2, 3, 4]

		cellsIndexs.forEach(cellIdx => {
			const cell = row.insertCell(cellIdx)
			cell.addEventListener("dblclick", editMode)

			const setCell = v => {
				cell.innerText = v
			}

			switch (cellIdx) {
				case 0:
					setCell(name)
					break;

				case 1:
					setCell(medicaidID)
					break;

				case 2:
					setCell(address)
					break;

				case 3:
					cell.innerText = phone
					cell.setAttribute("id", "phoneNumber")
					setEventListenersOnPhoneCell(cell)
					break;

				default:
					cell.append(DeleteButton())
					break;
			}
		})
	})
}


addBtn.disabled = loading
EmptyTableMessage(Spinner)

initTableData()




















/* 
	===================
		EVENT LISTENERS 
	===================
*/

setEventListenersOnPhoneCell(phoneNumberElement)

