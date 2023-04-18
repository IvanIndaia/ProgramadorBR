
document.addEventListener('DOMContentLoaded', () => {
    executeOperations()
})

function executeOperations() {

    let operations = document.querySelectorAll(".operation")

    for (let operation of operations) {
        let result = 0
        let value1 = parseFloat(operation.dataset.value1)
        let value2 = parseFloat(operation.dataset.value2)
        switch (operation.dataset.operation) {
            
            case "sum":
                result = value1 + value2
                break
            case "mult":
                result = value1 * value2
                break
        }
        operation.innerHTML = result
    }
}