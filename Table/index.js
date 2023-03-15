
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

const dataSource = [
	{
		name: "Jazz",
		greeting: "This is how you say Hello",
		phone: "555-555-5555",
	},
	{
		name: "Danny Boy",
		greeting: "Evening and the Morning",
		phone: "555-777-8845",
	},
	{
		name: "Kurt Thomas",
		greeting: "What a wonderful world",
		phone: "555-878-3352",
	},
]

const columns = [
	{
		title: "Name",
		dataIndex: "name"
	},
	{
		title: "Hello",
		dataIndex: "greeting"
	},
	{
		title: "Phone Number",
		dataIndex: "phone"
	}
]

// const tableInfo = new Table({ columns, dataSource, onCellEdit:(e) => console.log(e, "MY EDIT") })
// console.log(tableInfo.findCell("Phone Number",0))
// console.log(tableInfo.setCell("Phone Number",1,"845-5595-5555"))

















/* 
	===================
		EVENT LISTENERS 
	===================
*/

setEventListenersOnPhoneCell(phoneNumberElement)

