function calculateCost() {
    const productType = document.getElementById('productType').value;
    const quantity = parseInt(document.getElementById('quantity').value, 10);
    const color = document.getElementById('color').value;

    let costPerUnit = 0;

    switch (productType) {
        case 'businessCards':
            costPerUnit = color === 'color' ? 5 : 3;
            break;
        case 'posters':
            costPerUnit = color === 'color' ? 10 : 7;
            break;
        case 'flyers':
            costPerUnit = color === 'color' ? 2 : 1;
            break;
    }

    const totalCost = costPerUnit * quantity;
    document.getElementById('calcResult').textContent = `Стоимость: ${totalCost} руб.`;
}
