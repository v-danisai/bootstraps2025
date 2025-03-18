$(document).ready(function(){
    
    // On click listener
        // Edit Button
        $("#editButton").click(function(){
            editItem();
        });

        // Delete Button
        $("#deleteButton").click(function(){
            delItem();
        });

    // On submit listener
        $("#newProductForm").submit(function(e){
            e.preventDefault();
            registerItem();
        });
});

// Function to edit item
function editItem(){
    alert("Item being edited.");
}

// Function to delete item
function delItem(){
    alert("Item being deleted.")
}

//Function to register item
function registerItem(){
    let itemName = $("inpProduct").val();
    let itemDesc = $("inpDesc").val();
    let itemPrice = $("inpPrice").val();
    let itemImage = $("inpImage").val();

    alert("Product name is: "+itemName);
}
