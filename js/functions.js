function afficherSousMenu(obj) {
    menu = obj.getElementsByClassName('sous')[0];

    if(menu.style.display === "none") {
        menu.style.display = "block";
        obj.classList.remove('deroulant');
        obj.classList.add('deroule');
    }
    else{
        menu.style.display = "none";
        obj.classList.remove('deroule');
        obj.classList.add('deroulant');
    }

}