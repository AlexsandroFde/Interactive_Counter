const loadingMessage = document.getElementById("loading-message");

function loadData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve("Dados carregados!");
        }, 2000);
    });
}
  
async function loadDataAsync() {
    loadingMessage.style.display = "block";
    try {
        const result = await loadData();
        loadingMessage.style.display = "none";
        alert(result);
    } catch (error) {
        console.error(error);
    }
}

window.addEventListener("load", () => {
    loadDataAsync();
});