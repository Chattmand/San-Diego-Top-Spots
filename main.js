$(document).ready(function() {
// write your code here
// FETCHING DATA FROM JSON FILE
$.getJSON(
    "./data.json", 
    function (data) {
        
        // ITERATING THROUGH OBJECTS
        $.each(data, function (key, value) {

            //CONSTRUCTION OF ROWS HAVING
            // DATA FROM JSON OBJECT
            var spot = `<tr> 
            <td>${value.name}</td>
            <td> ${value.description} </td>
            <td> <a class="btn btn-primary custom"  role="button" href="https://www.google.com/maps?q=${value.location[0]},${value.location[1]}" > Open In Google Maps</a>
            </td>

            </tr>`;
            $('#spots').append(spot);
        });

        //INSERTING ROWS INTO TABLE 

    });
}); 
