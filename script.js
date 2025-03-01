function fetchMessage() {
    fetch("http://your-backend-url/api/message")
        .then(response => response.json())
        .then(data => {
            document.getElementById("message").innerText = data.message;
        })
        .catch(error => console.error("Error fetching data:", error));
}
