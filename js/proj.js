
var Orders = function(size,crust,toppings,number,addition){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.amount = number;
    this.comment = addition;
}
Orders.prototype.fullOrder = function (){
    return this.amount + " " + this.size + ", " +  this.crust + ",with( " + this.toppings + ") toppings. Comments: " + this.comment;
}
var toppingsArray = ["Ham, pineapple, Cheese","Bacon, shrimp, tomato sauce","Barbecue sauce, chicken","Taco toppings, picante sauce","Kale, ricotta, and sausage","Garlic and ranch, Garlic ranch sauce"];
var sizePrice,crustPrice,toppingsPrice;
var totalPrice = [];
var sumTotal = 0;
function price(size,crust,toppings){ 
    if(size==="Small"){
        sizePrice = 500;
        if(crust==="Thin Crust"){
            crustPrice = 100;
            if (toppings===toppingsArray[0] || toppings===toppingsArray[1]){
                toppingsPrice = 200;
            }
            else if(toppings===toppingsArray[2] || toppings===toppingsArray[3]){
                toppingsPrice = 300;
            }
            else if(toppings===toppingsArray[4] || toppings===toppingsArray[5]){
                toppingsPrice = 300;
            }
        }
        else if(crust==="Thick Crust" || crust==="Stuffed Crust"){
            crustPrice=250;
            if (toppings===toppingsArray[0] || toppings===toppingsArray[1]){
                toppingsPrice = 200;
            }
            else if(toppings===toppingsArray[2] || toppings===toppingsArray[3]){
                toppingsPrice = 300;
            }
            else if(toppings===toppingsArray[4] || toppings===toppingsArray[5]){
                toppingsPrice = 350;
            }
        }
        
        else if(crust==="Cheese Filled Crust"){
            crustPrice=300;
            if (toppings===toppingsArray[0] || toppings===toppingsArray[1]){
                toppingsPrice = 200;
            }
            else if(toppings===toppingsArray[2] || toppings===toppingsArray[3]){
                toppingsPrice = 300;
            }
            else if(toppings===toppingsArray[4] || toppings===toppingsArray[5]){
                toppingsPrice = 350;
            }
        }
    }
    else if(size==="Medium"){
        sizePrice = 600;
        if(crust==="Thin Crust"){
            crustPrice = 150;
            if (toppings===toppingsArray[0] || toppings===toppingsArray[1]){
                toppingsPrice = 200;
            }
            else if(toppings===toppingsArray[2] || toppings===toppingsArray[3]){
                toppingsPrice = 300;
            }
            else if(toppings===toppingsArray[4] || toppings===toppingsArray[5]){
                toppingsPrice = 300;
            }
        }
        else if(crust==="Thick Crust" || crust==="Stuffed Crust"){
            crustPrice=250;
            if (toppings===toppingsArray[0] || toppings===toppingsArray[1]){
                toppingsPrice = 200;
            }
            else if(toppings===toppingsArray[2] || toppings===toppingsArray[3]){
                toppingsPrice = 300;
            }
            else if(toppings===toppingsArray[4] || toppings===toppingsArray[5]){
                toppingsPrice = 350;
            }
        }
        
        else if(crust==="Cheese Filled Crust"){
            crustPrice=400;
            if (toppings===toppingsArray[0] || toppings===toppingsArray[1]){
                toppingsPrice = 250;
            }
            else if(toppings===toppingsArray[2] || toppings===toppingsArray[3]){
                toppingsPrice = 350;
            }
            else if(toppings===toppingsArray[4] || toppings===toppingsArray[5]){
                toppingsPrice = 350;
            }
        }
    }
    else if(size==="Large"){
        sizePrice = 800;
        if(crust==="Thin Crust"){
            crustPrice = 200;
            if (toppings===toppingsArray[0] || toppings===toppingsArray[1]){
                toppingsPrice = 200;
            }
            else if(toppings===toppingsArray[2] || toppings===toppingsArray[3]){
                toppingsPrice = 300;
            }
            else if(toppings===toppingsArray[4] || toppings===toppingsArray[5]){
                toppingsPrice = 300;
            }
        }
        else if(crust==="Thick Crust" || crust==="Stuffed Crust"){
            crustPrice=300;
            if (toppings===toppingsArray[0] || toppings===toppingsArray[1]){
                toppingsPrice = 200;
            }
            else if(toppings===toppingsArray[2] || toppings===toppingsArray[3]){
                toppingsPrice = 300;
            }
            else if(toppings===toppingsArray[4] || toppings===toppingsArray[5]){
                toppingsPrice = 350;
            }
        }
        
        else if(crust==="Cheese Filled Crust"){
            crustPrice=500;
            if (toppings===toppingsArray[0] || toppings===toppingsArray[1]){
                toppingsPrice = 250;
            }
            else if(toppings===toppingsArray[2] || toppings===toppingsArray[3]){
                toppingsPrice = 350;
            }
            else if(toppings===toppingsArray[4] || toppings===toppingsArray[5]){
                toppingsPrice = 350;
            }
        }
    }
    var pricing = (sizePrice + toppingsPrice + crustPrice) * amount;
    console.log("pricing: "+pricing);
    totalPrice.push(pricing);
    console.log(totalPrice);
    if(totalPrice.length>0){
        for(var i=0;i<totalPrice.length;i++){
            sumTotal+=totalPrice[i];
            console.log("sum "+sumTotal);
        }
    }
    return (sizePrice + toppingsPrice + crustPrice) * amount;
}
function resetInputs(){
    $("#size").val("");
    $("#crust").val("");
    $("#toppings").val("");
    $("#comment").val("");
    $("#num").val("1");
}

var pizzaSize,pizzaCrust,pizzaToppings,comments,amount;
$(document).ready(function(){
    $("#order").click(function(event){
        event.preventDefault();
        alert("Please enter a new order, if this was your last... select deliver or reservation to proceed to checkout");
        pizzaSize = $("#size").val();
        console.log(pizzaSize);
        pizzaCrust = $("#crust").val();
        console.log(pizzaCrust);
        pizzaToppings = $("#toppings").val();
        console.log(pizzaToppings);
        comments = $("#comment").val();
        console.log(comments);
        amount = $("#num").val();
        console.log(amount);
        
        var newOrder = new Orders(pizzaSize,pizzaCrust,pizzaToppings,amount,comments);
        // console.log(newOrder);

        $("ol#ordered").append('<li><span>'+ newOrder.fullOrder() +'</span></li>');
        $("ol#prices").append('<li><span>'+ "cost: " +  "Ksh." + price(pizzaSize,pizzaCrust,pizzaToppings) +'</span></li>');
        resetInputs();
    });
    $("#checkout").click(function(){
        $(".hidden").show();
        $("h4#total").append(" Ksh. "+ sumTotal + ".");
    });
    $("#chooseDeliver").click(function(event){
        event.preventDefault();
        alert("A delivery charge of Ksh. 500 is charged after the pizza delivery. Press 'OK' to continue")
        $("#deliver").show();
        
    });
    $("#submitDeliver").click(function(event){
        event.preventDefault();
        alert("your order will be delivered to your location");
        $("#checkout").show();
    });
});