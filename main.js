$(document).ready(function() {

$.getJSON(
    "./data.json", 
    function (data) {
        
       
        $.each(data, function (key, value) {

            
            var spot = `<tr> 
            <td>${value.name}</td>
            <td> ${value.description} </td>
            <td> <a class="btn btn-primary custom"  role="button" href="https://www.google.com/maps?q=${value.location[0]},${value.location[1]}" > Open In Google Maps</a>
            </td>

            </tr>`;
            $('#spots').append(spot);
        });

    

    });
}); 
