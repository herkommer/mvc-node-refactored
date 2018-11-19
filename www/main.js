$(document).ready(function(){

    var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function() {
            if (this.readyState == 4)
            {
                document.getElementById('content').innerHTML = this.responseText;
            }
        };
        
        //xhr.open('GET', 'http://te4-test-001.herokuapp.com/products', true);
        xhr.open('GET', 'http://localhost:4242/products', true);
        xhr.send();

});

