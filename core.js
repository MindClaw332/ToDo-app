//render the list based on what is in local storage
//ability to place something into local storage based on key value pairs
//what value pairs?
//be able to delete something from the list
//completely clear list

const outputs = document.getElementById("todolist");
const addButton = document.getElementById("addbutton");
const input = document.getElementById("textinput");
const clearButton = document.getElementById("clearbutton");
let posts;


function AddPost() {
    console.log("clicked")
    console.log(posts, ' posts na parse')
    const post = {
        toDoText: GetTodo()

    }
    posts.push(post);
    console.log(posts);
    localStorage.setItem("storedPosts", JSON.stringify(posts))
    DrawList();
    console.log(localStorage.getItem("storedPosts"), " posts na toevoeging")

}

function GetTodo() {
    let todoData = document.getElementById("textinput").value;
    console.log(todoData);
    if (todoData) {
        console.log('niet undefined');

        input.value = '';
        return todoData;
    } else {
        throw new Error('no input');
    }
}

function DrawList() {
    outputs.innerHTML = '';
    for (i = 0; i < posts.length; i++) {
    outputs.innerHTML += `
        <fieldset role="group">
            <li class = ""><p>${i + 1}. ${posts[i].toDoText}<p>
             <button class ="outline" onclick = "DeletePost(${i})">delete</button>
            </li>
        </fieldset>
        `
    }
}

function InitializeLocalStorage() {
    posts = JSON.parse(localStorage.getItem("storedPosts")) || [];
    console.log(posts);
}

function ClearCache() {
    console.log('cleared')
    localStorage.clear();
    InitializeLocalStorage();
    DrawList();
}

function DeletePost(id){
    posts.splice(id, 1);
    localStorage.setItem("stored posts", JSON.stringify(posts));
    DrawList();
}

//localStorage.clear();
InitializeLocalStorage();
DrawList();
console.log(addButton);
addButton.addEventListener("click", AddPost);
clearButton.addEventListener("click", ClearCache);