function fetchMessage() {
    fetch("http://13.232.155.200:5000/api/message")
        .then(response => response.json())
        .then(data => {
            document.getElementById("message").innerText = data.message;
        })
        .catch(error => console.error("Error fetching data:", error));
}
