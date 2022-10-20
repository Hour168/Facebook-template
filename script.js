var settingsmenu = document.querySelector(".settings-menu");
var darkbotton = document.getElementById("dark-botton");

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}

darkbotton.onclick = function(){
    darkbotton.classList.toggle("dark-botton-on");
    document.body.classList.toggle("dark-theme");
}

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }


if(localStorage.getItem("theme") == "light"){
    darkbotton.classList.remove("dark-botton-on");
    document.body.classList.remove("dark-theme");
}

else if(localStorage.getItem("theme") == "dark"){
    darkbotton.classList.add("dark-botton-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme", "light");
}
