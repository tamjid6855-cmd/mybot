function cleanSession() {
    localStorage.clear();
    sessionStorage.clear();
    console.log("Session Cleaned");
}
setInterval(cleanSession, 300000); 

function getDelay() {
    return Math.floor(Math.random() * (8000 - 2000 + 1) + 2000); 
}
