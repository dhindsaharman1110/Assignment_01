let but_1=document.querySelector(".button_1")

let but_2=document.querySelector(".button_2")

let but_3=document.querySelector(".button_3")

let but_4=document.querySelector(".button_4")

let txt_area=document.querySelector(".textarea")

let side_nav=document.querySelector("body > main > nav")


function change_theme(){


    if (but_2.innerHTML=="Dark Theme"){
        side_nav.style.backgroundColor= '#696969'
        but_1.style.backgroundColor='#696969'
        but_3.style.backgroundColor="#696969"
        but_4.style.backgroundColor='#696969'
        txt_area.style.color='tan'
        txt_area.style.backgroundColor='#696969'

        but_2.innerHTML="Light Theme"

    }


    else {

        side_nav.style.backgroundColor= 'silver'
        but_1.style.backgroundColor='green'
        but_3.style.backgroundColor="green"
        but_4.style.backgroundColor='red'
        txt_area.style.color='black'
        txt_area.style.backgroundColor= 'white'

        but_2.innerHTML="Dark Theme"

    }
}



function cancel_every_thing(){
    txt_area.value=" "
    but_3.style.visibility='hidden'
    but_4.style.visibility='hidden'
}






but_2.addEventListener("click", change_theme)


but_4.addEventListener("click", cancel_every_thing)


