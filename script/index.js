let but_1=document.querySelector(".button_1")

let but_2=document.querySelector(".button_2")

let but_3=document.querySelector(".button_3")

let but_4=document.querySelector(".button_4")

let txt_area=document.querySelector(".textarea")

let side_nav=document.querySelector("body > main > nav")

let nav_element=document.querySelector("body > main > nav > ul")

let nav_a=document.querySelector("#list_items>li a")

let nav_a2=document.querySelector("#list_items > li:nth-child(2) > a")

let nav_element_p=document.querySelector("body > main > nav  >p")

let input_area=document.querySelector(".input")



function change_theme(){


    if (but_2.innerHTML=="Dark Theme"){

        side_nav.style.backgroundColor= 'black'
        nav_element.style.color='white'
        nav_element_p.style.color='white'
        nav_a.style.color='white'
        nav_a2.style.color="white"
        input_area.style.backgroundColor='black'
        but_2.innerHTML="Light Theme"
        but_2.style.backgroundColor="silver"
        but_2.style.color="black"
    }

    else {

        side_nav.style.backgroundColor= 'silver'
        nav_element.style.color='black'
        nav_element_p.style.color='black'
        input_area.style.backgroundColor='tan'
        txt_area.style.backgroundColor= 'white'
        but_2.style.backgroundColor="grey"
        but_2.innerHTML="Dark Theme"

    }
}

function cancel_every_thing(){
    txt_area.value=" "
    but_3.style.visibility='hidden'
    but_4.style.visibility='hidden'
    txt_area.style.visibility='hidden'
}




function get_every_thing(){
    txt_area.value=" "
    but_3.style.visibility='visible'
    but_4.style.visibility='visible'
    txt_area.style.visibility='visible'
}



var notesArray=[]



function save_notes(){
    let text_title=txt_area.value.split("\n")
    let temp_list=[]
    let string_value=""
    for (let items of text_title){
        
        if (items==text_title[0]){
            temp_list.push(text_title[0])
        }
        else{
            string_value=string_value+ " " +items
        }
    
    }

    temp_list.push(string_value)

    notesArray.push({"title": temp_list[0], "field": temp_list[1]})
    console.log(notesArray)
    let item_entry=document.querySelector('#list_items')
    let entry=document.createElement('li')
    let anchor_entry=document.createElement('a')
    let att=document.createAttribute("href")
    att.value="#"
    anchor_entry.setAttributeNode(att)
    entry.appendChild(anchor_entry)
    anchor_entry.appendChild(document.createTextNode(temp_list[0]))
    item_entry.appendChild(entry)


    let element_note=


}



but_2.addEventListener("click", change_theme)

but_4.addEventListener("click", cancel_every_thing)

but_1.addEventListener("click",get_every_thing)

but_3.addEventListener("click", save_notes)

nav_a.addEventListener("click", function noteone(){
    txt_area.value="These are the first notes with title 'note one'"
})

nav_a2.addEventListener("click", function notetwo(){
    txt_area.value="These are the second notes with title 'note two'"
})