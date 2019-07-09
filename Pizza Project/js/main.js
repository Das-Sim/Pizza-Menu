
function submit() {
    var sizePrice = size();
    var crustPrice = crust();
    sauce();
    var chzPrice = chz();
    var meatPrice = meat();
    var vegPrice = veg();
    total(sizePrice, crustPrice, meatPrice, chzPrice, vegPrice);
}

function size() {
    var sizeCost = 0;
    var sizeRadio = document.getElementsByName("pizza-size");
    for (var i = 0; i < sizeRadio.length; i++) {

    //to swtich between radio buttons and find selected item
        
        if (sizeRadio[i].checked) {
            var checkedSize = sizeRadio[i].value
            document.getElementById("receipt-pizza-size").innerHTML = checkedSize;
            if (checkedSize == "Personal") {

            //this is to check size and give to items correct "prices"
               
                sizeCost = 6.00;
            } else if (checkedSize == "Medium") {
                sizeCost = 10.00;
            } else if (checkedSize == "Large") {
                sizeCost = 14.00
            } else if (checkedSize == "Extra Large") {
                sizeCost = 16.00
            }
        }
    }
    
    document.querySelector("div.receipt-body .cost").innerHTML = "$" + sizeCost.toFixed(2);
    return sizeCost;
    
    //calling the value in our receipt ^
}

function crust() {
    var crustCost = 0;                                                              
    var crustRadio = document.getElementsByName("crust-type");                      
    for (var i = 0; i < crustRadio.length; i++) {
        
        //to add items to array
        
        if (crustRadio[i].checked) {
            
            //to add extras: change variable value to desired amount when "extras" is selected
            
            if (crustRadio[i].value == "Chz Stuffed Crust") {    
                crustCost = 3.00;
            }
            document.getElementById("crust-type").innerHTML = crustRadio[i].value;
            document.querySelector("div.crust-type div.cost").innerHTML = "$" + crustCost.toFixed(2);
        }
    }
    return crustCost;
}

function sauce() {
    var sauceRadio = document.getElementsByName("sauce-type");                      
    for (var i = 0; i < sauceRadio.length; i++) {                                   
        if (sauceRadio[i].checked) {
            document.getElementById("sauce-receipt").innerHTML = sauceRadio[i].value;
            document.querySelector("div.receipt-item div.sauce-cost").innerHTML = "$0.00"
        }
    }
}

function chz() {
    var chzRadio = document.getElementsByName("chz-type");
    var chzCost = 0;
    for (var i = 0; i < chzRadio.length; i++) {
        if (chzRadio[i].checked) {
            if(chzRadio[i].value == "Extra Chz") {
                chzCost = 3;
            }
            
            document.getElementById("chz-receipt").innerHTML = chzRadio[i].value;
            document.querySelector("div.receipt-item div.chz-cost").innerHTML = "$" + chzCost.toFixed(2);
            
        }
    }
    
    return chzCost;
}

function meat() {
    var meat = [];
    var meatCost = 0;
    var receiptBody = document.getElementById("meat-receipt");
    var meatChecklist = document.getElementsByName("meat-type");                        
    for (var i = 0; i < meatChecklist.length; i++) {
        if (meatChecklist[i].checked) {
            meat.push(meatChecklist[i].value);
        }
    }
    
    for (var i = 0; i < meat.length; i++) {
        if (i < meat.length - 1) {
            receiptBody.innerHTML+= (meat[i] + ", ");
        } else {
            receiptBody.innerHTML+= meat[i];
        }
    }

    if (meat.length > 1) {
        meatCost = meat.length - 1;
    }


    if (meat.length == 0) {document.getElementById("meat-receipt").innerHTML = "No Meat"}
    document.querySelector("div.receipt-item div.meat-cost").innerHTML = "$" + meatCost.toFixed(2);
    return meatCost;
}

function veg() {
    var veg = [];
    var vegCost = 0;
    var receiptBody = document.getElementById("veg-receipt");
    var vegChecklist = document.getElementsByName("veg-type");
    for (var i = 0; i < vegChecklist.length; i++) {
        if (vegChecklist[i].checked) {
            veg.push(vegChecklist[i].value)
        }
    }
    
    for (var i = 0; i < veg.length; i++) {
        if (i < veg.length - 1) {
            receiptBody.innerHTML+= (veg[i] + ", ");
        } else {
            receiptBody.innerHTML+= (veg[i]);
        }
    }

    if (veg.length > 1) {
        vegCost = veg.length - 1;
    }

    if (veg.length == 0) {receiptBody.innerHTML = "No Veg";}
    document.querySelector("div.receipt-item div.veg-cost").innerHTML = "$" + vegCost.toFixed(2);
    return vegCost;
}

function total(sizePrice, crustPrice, chzPrice, meatPrice, vegPrice) {
    document.getElementById("total").innerHTML = "Total: $" + (sizePrice + crustPrice + chzPrice + meatPrice + vegPrice).toFixed(2);
}
