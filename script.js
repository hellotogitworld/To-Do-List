const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
  if(inputBox.value=== ''){
    alert("Please enter a text");
  }
  else{
    let li = document.createElement("li");
    li.innerText = inputBox.value;
    listContainer.appendChild(li);
    inputBox.value = "";
    let span = document.createElement("span");
    span.innerText = "\u00d7";
    li.appendChild(span);
    saveData();
  }
}

listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else(e.target.tagName === "SPAN")
  {
    confirm("Are you sure want to delete task-list? ");
    if{
      confr
    }
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData(){
  localStorge.setItem("data", listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML = localStorge.getItem("data");
}
showTask();