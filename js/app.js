
function memory( memoryPrice){

}

document.getElementById('sixteenGB').addEventListener('click', function(){
    const memory = document.getElementById('memory-cost');
    memory.innerText = 300;
    const memoryCost = memory.innerText;

    const storageCost = document.getElementById('storage-cost').innerText;

    const delevaryCost = document.getElementById('delivery-cost').innerText;

    const bestPrice = 1299;

    const totalCost = parseFloat(bestPrice) + parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(delevaryCost);

    const totalCostDisplay = document.getElementById('total-price');
    totalCostDisplay.innerText = totalCost;
});

document.getElementById('eightGB').addEventListener('click', function(){
    const memory = document.getElementById('memory-cost');
    memory.innerText = 0;
    const memoryCost = memory.innerText;

    const storageCost = document.getElementById('storage-cost').innerText;

    const delevaryCost = document.getElementById('delivery-cost').innerText;

    const bestPrice = 1299;

    const totalCost = parseFloat(bestPrice) + parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(delevaryCost);

    const totalCostDisplay = document.getElementById('total-price');
    totalCostDisplay.innerText = totalCost;
});


// storage part
document.getElementById('ssd2').addEventListener('click', function(){
    const memory = document.getElementById('memory-cost');
    const memoryCost = memory.innerText;

    const storage = document.getElementById('storage-cost');
    storage.innerText = 200;
    const storageCost = storage.innerText;

    const delevaryCost = document.getElementById('delivery-cost').innerText;
    const bestPrice = 1299;
    const totalCost = parseFloat(bestPrice) + parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(delevaryCost);
    const totalCostDisplay = document.getElementById('total-price');
    totalCostDisplay.innerText = totalCost;
});

document.getElementById('ssd1').addEventListener('click', function(){
    const memory = document.getElementById('memory-cost');
    const memoryCost = memory.innerText;

    const storage = document.getElementById('storage-cost');
    storage.innerText = 0;
    const storageCost = storage.innerText;

    const delevaryCost = document.getElementById('delivery-cost').innerText;
    const bestPrice = 1299;
    const totalCost = parseFloat(bestPrice) + parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(delevaryCost);
    const totalCostDisplay = document.getElementById('total-price');
    totalCostDisplay.innerText = totalCost;
});

document.getElementById('ssd3').addEventListener('click', function(){
    const memory = document.getElementById('memory-cost');
    const memoryCost = memory.innerText;

    const storage = document.getElementById('storage-cost');
    storage.innerText = 400;
    const storageCost = storage.innerText;

    const delevaryCost = document.getElementById('delivery-cost').innerText;
    const bestPrice = 1299;
    const totalCost = parseFloat(bestPrice) + parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(delevaryCost);
    const totalCostDisplay = document.getElementById('total-price');
    totalCostDisplay.innerText = totalCost;
});

// delevary option
document.getElementById('free-delivery').addEventListener('click', function(){
    const memory = document.getElementById('memory-cost');
    const memoryCost = memory.innerText;

    const storage = document.getElementById('storage-cost');
    const storageCost = storage.innerText;

    const delevary = document.getElementById('delivery-cost');
    delevary.innerText  = 0;
    const delevaryCost = delevary.innerText;

    const bestPrice = 1299;
    const totalCost = parseFloat(bestPrice) + parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(delevaryCost);
    const totalCostDisplay = document.getElementById('total-price');
    totalCostDisplay.innerText = totalCost;
});
document.getElementById('paid-delivery').addEventListener('click', function(){
    const memory = document.getElementById('memory-cost');
    const memoryCost = memory.innerText;

    const storage = document.getElementById('storage-cost');
    const storageCost = storage.innerText;

    const delevary = document.getElementById('delivery-cost');
    delevary.innerText  = 20;
    const delevaryCost = delevary.innerText;

    const bestPrice = 1299;
    const totalCost = parseFloat(bestPrice) + parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(delevaryCost);
    const totalCostDisplay = document.getElementById('total-price');
    totalCostDisplay.innerText = totalCost;
});




//apply button 
document.getElementById('apply-btn').addEventListener('click', function(){
    const promoCode = 'NextHero';
    const totalPriceField = document.getElementById('total-price');
    const totalPriceText = totalPriceField.innerText;
    const totalPrice = parseFloat(totalPriceText);

    const userCode = document.getElementById('promo-input').value;
    if(promoCode == userCode){
        const discount = (totalPrice*20)/100;
        const newPrice = totalPrice - discount;
        totalPriceField.innerText = newPrice;
    }
    else{
        console.log('eror');
    }
});