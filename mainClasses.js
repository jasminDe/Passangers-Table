class Table {
    #table = document.getElementById("myTable")
    rowNodes = []
    rows = []
    #columnIdx = {}

    constructor({ columns=[], dataSource=[], onCellEdit=(e) => e }){
        this.columns = columns;
        this.data = dataSource;
        this.onCellEdit = onCellEdit
        
        this.#buildColumnIndexs()
        this.#buildRows()
    }

    #buildColumnIndexs(){
        this.columns.map((c,i) => {
            this.#columnIdx[c.title] ||= i
        })
    }

    #buildRows(){
        this.data.forEach(d => {
            const row = this.#table.insertRow(-1);

            this.columns.forEach((column,i) => {
                if(column){
                    const cell = row.insertCell(i)
                    cell.addEventListener("dblclick", this.onCellEdit)
    
                    if(d[column?.dataIndex]){
                        cell.innerText = d[column.dataIndex]
                    }
                }
            })

            this.rowNodes.push(row)
        })

        this.rows = this.rowNodes.map((r,i) => {
            this.rowNodes[i] = Array.from(r.cells)
            const cells = this.rowNodes[i].map(c => c.textContent || stringToElement(c.innerHTML))
            return cells
        })
    }

    findCell(columnName="", rowIndex=0) {
        if(this.#columnIdx[columnName] || this.#columnIdx[columnName] === 0){
            return {
                cell: this.rows[rowIndex][this.#columnIdx[columnName]],
                cellNode: this.rowNodes[rowIndex][this.#columnIdx[columnName]]
            }
        }

        return {}
    }

    setCell(columnName="", rowIndex=0, value) {
        const {cellNode=null} = this.findCell(columnName, rowIndex)
        const elmt = typeof value === "string" ? stringToElement(value) : value
    
        if(cellNode){
            if(typeof(elmt) != 'undefined' && elmt != null){
                cellNode.innerHTML = ""
                cellNode.append(elmt)
            } else{
                cellNode.textContent = value
            }
        }

        return null
    }


}

class Passenger {
    passengers = []

    constructor({ name, medicaidID="", address, phone }){
        this.name = name;
        this.address = address;
        this.medicaidID = medicaidID;
        this.phone = phone;

        Passenger.passengers.push(this)

        return this
    }

    getAllPassengers(){
        return Passenger.passengers
    }


    // findPassengerByName(){

    // }
}