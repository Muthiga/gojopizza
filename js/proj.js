
var Orders = function (size, crust, toppings, number, addition) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.amount = number;
    this.comment = addition;
}
Orders.prototype.fullOrder = function () {
    return this.amount + " " + this.size + ", " + this.crust + ",with( " + this.toppings + ") toppings. Comments: " + this.comment;
}
var toppingsArray = ["Ham, pineapple, Cheese", "Bacon, shrimp, tomato sauce", "Barbecue sauce, chicken", "Taco toppings, picante sauce", "Kale, ricotta, and sausage", "Garlic and ranch, Garlic ranch sauce"];
var sizePrice, crustPrice, toppingsPrice;
var totalPrice = [];
var sumTotal = 0;
function price(size, crust, toppings) {
    if (size === "Small") {
        sizePrice = 500;
        if (crust === "Thin Crust") {
            crustPrice = 100;
            if (toppings === toppingsArray[0] || toppings === toppingsArray[1]) {
                toppingsPrice = 200;
            }
            else if (toppings === toppingsArray[2] || toppings === toppingsArray[3]) {
                toppingsPrice = 300;
            }
            else if (toppings === toppingsArray[4] || toppings === toppingsArray[5]) {
                toppingsPrice = 300;
            }
        }
        else if (crust === "Thick Crust" || crust === "Stuffed Crust") {
            crustPrice = 250;
            if (toppings === toppingsArray[0] || toppings === toppingsArray[1]) {
                toppingsPrice = 200;
            }
            else if (toppings === toppingsArray[2] || toppings === toppingsArray[3]) {
                toppingsPrice = 300;
            }
            else if (toppings === toppingsArray[4] || toppings === toppingsArray[5]) {
                toppingsPrice = 350;
            }
        }

        else if (crust === "Cheese Filled Crust") {
            crustPrice = 300;
            if (toppings === toppingsArray[0] || toppings === toppingsArray[1]) {
                toppingsPrice = 200;
            }
            else if (toppings === toppingsArray[2] || toppings === toppingsArray[3]) {
                toppingsPrice = 300;
            }
            else if (toppings === toppingsArray[4] || toppings === toppingsArray[5]) {
                toppingsPrice = 350;
            }
        }
    }
    else if (size === "Medium") {
        sizePrice = 600;
        if (crust === "Thin Crust") {
            crustPrice = 150;
            if (toppings === toppingsArray[0] || toppings === toppingsArray[1]) {
                toppingsPrice = 200;
            }
            else if (toppings === toppingsArray[2] || toppings === toppingsArray[3]) {
                toppingsPrice = 300;
            }
            else if (toppings === toppingsArray[4] || toppings === toppingsArray[5]) {
                toppingsPrice = 300;
            }
        }
        else if (crust === "Thick Crust" || crust === "Stuffed Crust") {
            crustPrice = 250;
            if (toppings === toppingsArray[0] || toppings === toppingsArray[1]) {
                toppingsPrice = 200;
            }
            else if (toppings === toppingsArray[2] || toppings === toppingsArray[3]) {
                toppingsPrice = 300;
            }
            else if (toppings === toppingsArray[4] || toppings === toppingsArray[5]) {
                toppingsPrice = 350;
            }
        }

        else if (crust === "Cheese Filled Crust") {
            crustPrice = 400;
            if (toppings === toppingsArray[0] || toppings === toppingsArray[1]) {
                toppingsPrice = 250;
            }
            else if (toppings === toppingsArray[2] || toppings === toppingsArray[3]) {
                toppingsPrice = 350;
            }
            else if (toppings === toppingsArray[4] || toppings === toppingsArray[5]) {
                toppingsPrice = 350;
            }
        }
    }
    else if (size === "Large") {
        sizePrice = 800;
        if (crust === "Thin Crust") {
            crustPrice = 200;
            if (toppings === toppingsArray[0] || toppings === toppingsArray[1]) {
                toppingsPrice = 200;
            }
            else if (toppings === toppingsArray[2] || toppings === toppingsArray[3]) {
                toppingsPrice = 300;
            }
            else if (toppings === toppingsArray[4] || toppings === toppingsArray[5]) {
                toppingsPrice = 300;
            }
        }
        else if (crust === "Thick Crust" || crust === "Stuffed Crust") {
            crustPrice = 300;
            if (toppings === toppingsArray[0] || toppings === toppingsArray[1]) {
                toppingsPrice = 200;
            }
            else if (toppings === toppingsArray[2] || toppings === toppingsArray[3]) {
                toppingsPrice = 300;
            }
            else if (toppings === toppingsArray[4] || toppings === toppingsArray[5]) {
                toppingsPrice = 350;
            }
        }

        else if (crust === "Cheese Filled Crust") {
            crustPrice = 500;
            if (toppings === toppingsArray[0] || toppings === toppingsArray[1]) {
                toppingsPrice = 250;
            }
            else if (toppings === toppingsArray[2] || toppings === toppingsArray[3]) {
                toppingsPrice = 350;
            }
            else if (toppings === toppingsArray[4] || toppings === toppingsArray[5]) {
                toppingsPrice = 350;
            }
        }
    }
    var pricing = (sizePrice + toppingsPrice + crustPrice) * amount;
    console.log("pricing: " + pricing);
    totalPrice.push(pricing);
    console.log(totalPrice);
    if (totalPrice.length > 0) {
        for (var i = 0; i < totalPrice.length; i++) {
            sumTotal += totalPrice[i];
            console.log("sum " + sumTotal);
        }
    }
    return (sizePrice + toppingsPrice + crustPrice) * amount;
}
function resetInputs() {
    $("#size").val("");
    $("#crust").val("");
    $("#toppings").val("");
    $("#comment").val("");
    $("#num").val("1");
}

var pizzaSize, pizzaCrust, pizzaToppings, comments, amount;
$(document).ready(function () {
    $("#order").click(function (event) {
        event.preventDefault();
        alert("If this is your only order, please select deliver and proceed to checkout. To make another order kindly repeat the process");
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

        var newOrder = new Orders(pizzaSize, pizzaCrust, pizzaToppings, amount, comments);
        // console.log(newOrder);

        $("ol#ordered").append('<li><span>' + newOrder.fullOrder() + '</span></li>');
        $("ol#prices").append('<li><span>' + "cost: " + "Ksh." + price(pizzaSize, pizzaCrust, pizzaToppings) + '</span></li>');
        resetInputs();
    });
    $("#checkout").click(function () {
        $(".hidden").show();
        $("h4#total").append(" Ksh. " + sumTotal + ".");
    });
    $("#chooseDeliver").click(function (event) {
        event.preventDefault();
        alert("A delivery charge of Ksh. 500 is charged after the pizza delivery. Press 'OK' to continue")
        $("#deliver").show();

    });
    $("#submitDeliver").click(function (event) {
        event.preventDefault();
        alert("Your order will be delivered to your location");
        $("#checkout").show();
    });
});
$(".word1").hide();
$(".img1").animate({
    opacity: 1
});
$('.img1').hover(function () {
    $(this).stop().animate({ opacity: 0.5 }, 200);
    $(".word1").fadeIn();

}, function () {
    $(this).stop().animate({ opacity: 1 }, 200)
    $(".word1").fadeOut();
});
$(".word2").hide();
$(".img2").animate({
    opacity: 1
});
$('.img2').hover(function () {
    $(this).stop().animate({ opacity: 0.5 }, 200);
    $(".word2").fadeIn();

}, function () {
    $(this).stop().animate({ opacity: 1 }, 200)
    $(".word2").fadeOut();
});
$(".word3").hide();
$(".img3").animate({
    opacity: 1
});
$('.img3').hover(function () {
    $(this).stop().animate({ opacity: 0.5 }, 200);
    $(".word3").fadeIn();

}, function () {
    $(this).stop().animate({ opacity: 1 }, 200)
    $(".word3").fadeOut();
});
$(".word4").hide();
$(".img4").animate({
    opacity: 1
});
$('.img4').hover(function () {
    $(this).stop().animate({ opacity: 0.5 }, 200);
    $(".word4").fadeIn();

}, function () {
    $(this).stop().animate({ opacity: 1 }, 200)
    $(".word4").fadeOut();
});
$(".word5").hide();
$(".img5").animate({
    opacity: 1
});
$('.img5').hover(function () {
    $(this).stop().animate({ opacity: 0.5 }, 200);
    $(".word5").fadeIn();

}, function () {
    $(this).stop().animate({ opacity: 1 }, 200)
    $(".word5").fadeOut();
});
$(".word6").hide();
$(".img6").animate({
    opacity: 1
});
$('.img6').hover(function () {
    $(this).stop().animate({ opacity: 0.5 }, 200);
    $(".word6").fadeIn();

}, function () {
    $(this).stop().animate({ opacity: 1 }, 200)
    $(".word6").fadeOut();
});
$(".word7").hide();
$(".img7").animate({
    opacity: 1
});
$('.img7').hover(function () {
    $(this).stop().animate({ opacity: 0.5 }, 200);
    $(".word7").fadeIn();

}, function () {
    $(this).stop().animate({ opacity: 1 }, 200)
    $(".word7").fadeOut();
});
$(".word8").hide();
$(".img8").animate({
    opacity: 1
});
$('.img8').hover(function () {
    $(this).stop().animate({ opacity: 0.5 }, 200);
    $(".word8").fadeIn();

}, function () {
    $(this).stop().animate({ opacity: 1 }, 200)
    $(".word8").fadeOut();
})

$(".button").click(function () {
    var name = $("#Name").val();
    alert(name + ", We have received your message. Thank you for reaching out to us.");
});