let but_1=document.querySelector(".button_1")

let but_2=document.querySelector(".button_2")

let but_3=document.querySelector(".button_3")

let but_4=document.querySelector(".button_4")

let txt_area=document.querySelector(".textarea")

let side_nav=document.querySelector("body > main > nav")

let nav_element=document.querySelector("body > main > nav > ul")

// let nav_a=document.querySelector("#list_items>li a")

// let nav_a2=document.querySelector("#list_items > li:nth-child(2) > a")

let nav_a3=document.querySelectorAll("#list_items li a")

let nav_element_p=document.querySelector("body > main > nav  >p")

let input_area=document.querySelector(".input")



function change_theme(){


    if (but_2.innerHTML=="Dark Theme"){
        side_nav.style.backgroundColor= 'black'
        input_area.style.backgroundColor='black'
        but_2.innerHTML="Light Theme"
        but_2.style.backgroundColor="silver"
        but_2.style.color="black"
    }

    else {

        side_nav.style.backgroundColor= 'grey'
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







// function save_notes(){
//     let text_title=txt_area.value.split("\n")
//     let temp_list=[]
//     let string_value=""
//     for (let items of text_title){
        
//         if (items==text_title[0]){
//             temp_list.push(text_title[0])
//         }
//         else{
//             string_value=string_value+ " " +items
//         }
    
//     }




//     let item_entry=document.querySelector('#list_items')
//     let entry=document.createElement('li')
//     let anchor_entry=document.createElement('a')
//     let cls=document.createAttribute("class")
//     cls.value="triggerClass"
//     anchor_entry.setAttributeNode(cls)
//     let att=document.createAttribute("href")
//     att.value="#"
//     anchor_entry.setAttributeNode(att)
//     entry.appendChild(anchor_entry)
//     anchor_entry.appendChild(document.createTextNode(temp_list[0]))
//     item_entry.appendChild(entry)


//     return temp_list






// }




// function make_array(){
//     let notes_array=[]


//     temp_list.push(string_value)
//     let note_one={title: "note one" ,
//                   field: "These are the first notes with title 'note one"}
//     notesArray.push(note_one)

//     let note_two={title: "note two" , field: "These are the second notes with title 'note two"}
//     notesArray.push(note_two)

//     let new_note={title: temp_list[0], field: temp_list[1]}
//     notesArray.push(new_note)

// }


let notesArray=[{title:"note one", body:"some text 1"}, {title:"note two", body: "some text 2"}]





function get_sorted_list(){

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

    return temp_list

}


function save_notes(){

    let temp_list=get_sorted_list()
    if (temp_list[0] != ""){
        notesArray.push({title: temp_list[0], body: temp_list[1]})
    }

    

    let item_entry=document.querySelector('#list_items')
    let entry=document.createElement('li')
    let anchor_entry=document.createElement('a')
    let cls=document.createAttribute("class")
    cls.value="triggerClass"
    anchor_entry.setAttributeNode(cls)
    let att=document.createAttribute("href")
    att.value="#"
    anchor_entry.setAttributeNode(att)
    entry.appendChild(anchor_entry)
    anchor_entry.appendChild(document.createTextNode(temp_list[0]))
    item_entry.appendChild(entry)
    

    

    document.querySelectorAll('.triggerClass').forEach(item => {
        item.addEventListener('click', event => {
            
            for (notes of notesArray){
                if (item.innerHTML == notes.title){
                    txt_area.value=notes.body
                }
            }
    
        })
      })


    
    

}




but_2.addEventListener("click", change_theme)

but_4.addEventListener("click", cancel_every_thing)

but_1.addEventListener("click",get_every_thing)

but_3.addEventListener("click", save_notes)


// document.querySelectorAll('.triggerClass').forEach(item => {
//     item.addEventListener('click', event => {
//         txt_area.innerHTML=item.innerHTML
//     })
//   })


document.querySelectorAll('.triggerClass').forEach(item => {
    item.addEventListener('click', event => {
        txt_area.value=item.innerHTML

    })
  })


