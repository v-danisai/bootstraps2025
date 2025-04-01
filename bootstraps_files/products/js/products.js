var itemCounter = 0;
$(document).ready(function(){
    
    // // On click listener
    //     // Edit Button
    //     $("#editButton").click(function(){
    //         editItem();
    //     });

    // // Delete Button
    // $("#deleteButton").click(function(){
    //     delItem();
    // });

    // On click listener for a class
        $(document).on("click", ".deleteButton", function(){
           delItem(this); 
        });

        $(document).on("click", ".editButton", function(){
            editItem(this); 
         });

        // $(document).on("click", ".editButton", function(){
        //     editItem();
        // });

    // On submit listener
        $("#newProductForm").submit(function(e){
            e.preventDefault();
            registerItem();
        });
});

// Function to edit item
function editItem(btn){
    let name = $(btn).attr("dataName");
    let desc = $(btn).attr("dataDesc");
    let price = $(btn).attr("dataPrice");
    let url = $(btn).attr("dataImage");

    $("#editProduct").val(name);
    $("#editDesc").val(desc);
    $("#editPrice").val(price);
    $("#editImage").val(url);
    
    $("#editProductModal").modal("show");
}

// Function to delete item
function delItem(btn){
    // $.confirm({
    //     title: 'Encountered an error!',
    //     content: 'Something went downhill, this may be serious',
    //     type: 'red',
    //     typeAnimated: true,
    //     buttons: {
    //         tryAgain: {
    //             text: 'Try again',
    //             btnClass: 'btn-red',
    //             action: function(){
    //             }
    //         },
    //         close: function () {
    //         }
    //     }
    // });
    let id = $(btn).attr("data-id");
    $("#tr_"+id).fadeOut("slow");
}

//Function to register item
function registerItem(){
    itemCounter++;

    let itemName = $("#inpProduct").val();
    let itemDesc = $("#inpDesc").val();
    let itemPrice = $("#inpPrice").val();
    let itemImage = $("#inpImage").val();

    let html = "";

    html += "<tr id='tr_"+itemCounter+"'>";
    html += "<td>"+itemCounter+"</td>";
    html += "<td> <img src='"+itemImage+"' width='75px' /> </td>";
    html += "<td><strong>"+itemName+"</strong><br><small>"+itemDesc+"</small></td>";
    html += "<td>"+itemPrice+"</td>";
    html += "<td><button  class='btn btn-outline-primary editButton' dataName="+itemName+" dataDesc="+itemDesc+" dataPrice="+itemPrice+" dataImage="+itemImage+">Edit</button> <button data-id="+itemCounter+" class='btn btn-outline-danger deleteButton'>Delete</button></td>";
    html +="</tr>";

    $("#tableProducts").append(html);
    $("#modal").modal("hide");
}
