 pizza_list =  ["Chicken Tandoori Pizza",
 "Veg Supreme Pizza","Paneer Tikka Pizza",
 "Deluxe Veggie Pizza","Veg Extravaganza Pizza"];

 function getmenu() {
    var html_data;
    html_data = "<ol class= 'list_pizza'>";
    
    pizza_list.sort();
    
    for(var x=0;x<pizza_list.length; x++){
    html_data = html_data+"<li>" + pizza_list[x] + "</li>"}



    html_data = html_data+"</ol>"
    document.getElementById("menu_display").innerHTML = html_data; }


    function add_item(){

      var new_pizza = document.getElementById("add_item").value;


pizza_list.push(new_pizza);

var html_data = "<section class = 'cards' >";
pizza_list.sort;

for(var x=0;x<pizza_list.length; x++){
   html_data = html_data+"<div class ='card'> <img src= 'images/pizzaImg.png' >" + pizza_list[x] +"</div>";}

   html_data  = html_data + "</section>";
document.getElementById("display_addedmenu").innerHTML = html_data;

    }
    
    
