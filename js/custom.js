grudMend();
function grudMend(){
    var getcoolloc = window.location.href
    var currento = getcoolloc.substr(getcoolloc.lastIndexOf('/') + 1);
    if(currento == "index.html" || currento.includes("index")){
        document.getElementById("homeLk").classList.add("active");
    }else if(currento == "about.html" || currento.includes("about")){
        document.getElementById("aboutLk").classList.add("active");
    }else if(currento == "team.html" || currento.includes("team")){
        document.getElementById("teamLk").classList.add("active");
    }else if(currento == "services.html" || currento.includes("services")){
        document.getElementById("serviceLk").classList.add("active");
    }else if(currento == "contacts.html" || currento.includes("contacts")){
        document.getElementById("contactLk").classList.add("active");
    }else{
        document.getElementById("homeLk").classList.add("active");
    }
}