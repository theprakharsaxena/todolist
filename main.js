// add
// search
// delete

// 1.add
// find the id
let form=document.getElementById("addForm")  // holds form
let list=document.getElementById("items")  // holds ul 
let itemlist=document.getElementById("items") //holds ul
let filter=document.getElementById("filter")  // hold input search

function additem(a){
    // a parameter = click of submit
    a.preventDefault()
    let newitem=document.getElementById("item").value // value of input box in form
    if(newitem==""){
        alert("Enter Some Value") // if your feild is blank
        return
    }
    // adding the element in th list
    let li=document.createElement("li") // list is created to add the element in ul
    li.className="list-group-item" // adding class in value
    let node=document.createTextNode(newitem)
    li.appendChild(node)  // the type of the field is text

    // adding the button in the elemet
    let btn=document.createElement("button")
    btn.className="btn btn-danger btn-sm float-right delete"
    btn.appendChild(document.createTextNode("X"))
    li.appendChild(btn)

    // app
    list.appendChild(li)  // li tag with value
    document.getElementById("item").value="" // value of the box deleted
}
form.addEventListener("submit",additem)

// 2.delete
// find the id
function removeItem(l){  // function to remove element
    l.preventDefault()
    if(l.target.classList.contains("delete")){  // holds the classes
        if(confirm("Are you sure")){  
            itemlist.removeChild(l.target.parentElement)  // holds li
        }
        else{
            alert("chala ja yahan se")
        }
    }
}
itemlist.addEventListener("click",removeItem) // call function

// 3.search
function filteritem(m){
    let text=m.target.value.toLowerCase() //value of the search item
    let items=itemlist.getElementsByTagName("li") // li in html collection
    let itemsArray=Array.from(items)  // change into array
    itemsArray.forEach(function(value){
        let itemName=value.firstChild.textContent  //  text content of the box 
        if(itemName.toLowerCase().indexOf(text) !=-1){  // index value of the box
            value.style.display="block"
        }
        else{
            value.style.display="none"
        }
    })
}
filter.addEventListener("keyup",filteritem)