// Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
// O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
// O menu deve ter a opção de salvar um imóvel.
// Nome do proprietário.
// Quantidade de quartos.
// Quantidade de banheiros.
// Se possui garagem.
// O menu também deve ter a opção de mostrar todos os imóveis salvos.

let option;
let properties = [];

do {
    option = prompt(`${properties.length} properties\n1- New property\n2- Show properties\n3- Exit`)
    switch(option){

        case "1":
            let property = {};
            
            property.owner = prompt("Owner name:");
            property.bedrooms = parseFloat(prompt("Bedrooms quantity:"));
            property.bathrooms = parseFloat(prompt("Bathrooms quantity:"));
            property.garage = confirm("Does it have garage?");

            properties.push(property);
            break
        case "2":
            if(!properties) {
                alert("You dont have properties saved!");
            } else {
                for(let i = 0; i < properties.length; i++) {
                    alert(`Owner: ${properties[i].owner}, Bedrooms: ${properties[i].bedrooms}, Bathrooms: ${properties[i].bathrooms}, Garage: ${properties[i].garage}\n`);
                }
            }
            break
        case "3":
            break
        default:
            alert("Invalid option!");
    }


}while(option != 3);