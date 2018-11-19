//jQuery function that fires this code after the DOM has been fully loaded
$(document).ready(function(){

    //JavaScript AJAX:
    // var xhr = new XMLHttpRequest();
        
    //     xhr.onreadystatechange = function() {
    //         if (this.readyState == 4)
    //         {
    //             document.getElementById('content').innerHTML = this.responseText;
    //         }
    //     };
        
    //     //xhr.open('GET', 'http://te4-test-001.herokuapp.com/products', true);
    //     xhr.open('GET', 'http://localhost:4242/products', true);
    //     xhr.send();

    //jQuery AJAX:
    $('#btnGetProducts').click(function(){
        $.get('http://localhost:4242/products', function(data){
            $('#content').html(data);
        });
    });
    
    $('#btnShowProductPanel').click(function(){
        $('#panelProductDetails').show();
    });

    $('#frmProductDetails').submit(function(event){
       
        //AJAX call for POST
        $.ajax({
            type: 'POST',
            url: 'http://localhost:4242/products',
            data: $(this).serialize(),
            success: function(data){
                $('#log').html('product created: ' + data);
                $('#panelProductDetails').hide();
            }
        });

        //Stop the default behaviour of doing a submit and refresh
        //We will handle it with AJAX instead
        event.preventDefault();

    });
});

