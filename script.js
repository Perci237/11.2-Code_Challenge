var form = document.getElementById("form");
const URL = "https://jsonplaceholder.typicode.com/users"

form.addEventListener("submit", function(e) {
    e.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var fecha = document.getElementById("fecha").value;

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({
            firstName: nombre,
            lasName: apellido,
            birthDate: fecha,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    })
    .then(response => response.json())
    .then(json => console.log("Success:", json))
    .catch(error => console.error("Error:", error));
});


