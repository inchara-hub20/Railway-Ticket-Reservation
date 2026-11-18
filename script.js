
document.getElementById("bookingForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let date = document.getElementById("date").value;
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    document.getElementById("result").innerHTML =
        "<h2>Booking Confirmation</h2>" +
        "<p>Passenger Name: " + name + "</p>" +
        "<p>Passenger Age: " + age + "</p>" +
        "<p>From Station: " + from + "</p>" +
        "<p>To Station: " + to + "</p>" +
        "<p>Journey Date: " + date + "</p>" +
        "<h3>Ticket Booked Successfully!</h3>";

});
