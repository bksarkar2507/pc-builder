document.getElementById('sixteenGB').addEventListener('click', function(){
    const memory = document.getElementById('memory-cost');
    memory.innerText = 200;
    const memoryCost = memory.innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const delevaryCost = document.getElementById('delivery-cost').innerText;
    const bestPrice = 1299;
    const totalCost = parseFloat(bestPrice) + parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(delevaryCost);
    
    const totalCostDisplay = document.getElementById('total-price');
    totalCostDisplay.innerText = totalCost;
});