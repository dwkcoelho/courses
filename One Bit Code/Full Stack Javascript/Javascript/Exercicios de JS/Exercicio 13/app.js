class App {
    addProperty() {
        event.preventDefault()
        let kind = document.querySelector("select[name='kind']").value
        let area = document.querySelector("input[name='area']").value
        let rented = document.querySelector("input[name='rented']").value
        let property = new Property(kind, area, rented)
        this.addOnPropertiesList(property)
        this.cleanForm()
    }

    addOnPropertiesList(property) {
        let listElement = document.createElement('li')
        let propertyInfo = "Type: " + property.kind + " (Area: " + property.area + "m2)"
        
        let rented = document.querySelector("input[name='rented']")

        if(rented.checked === true) {
            let rentedMark = this.createRentedMark()
            listElement.appendChild(rentedMark)
        }
        listElement.innerHTML += propertyInfo

        let buttonToRemove = this.createRemoveButton()
        listElement.appendChild(buttonToRemove)

        document.getElementById('properties').appendChild(listElement)
    }

    createRentedMark() {
        let rentedMark = document.createElement('span')
        rentedMark.style.color = 'white'
        rentedMark.style.backgroundColor = 'red'
        rentedMark.innerText = 'RENTED'
        return rentedMark
    }

    createRemoveButton() {
        let buttonToRemove = document.createElement('button')
        buttonToRemove.setAttribute('onclick', 'app.remove()')
        buttonToRemove.innerText = 'Delete'
        return buttonToRemove
    }

    cleanForm() {
        document.querySelector("input[name='area']").value = ''
        document.querySelector("input[name='rented']").checked = false
    }

    remove() {
        let liToRemove = event.target.parentNode
        document.getElementById('properties').removeChild(liToRemove)
    }
}