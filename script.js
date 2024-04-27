const input = document.getElementById("input");
const btn = document.getElementById("btn");
const list = document.getElementById("list");

btn.onclick = () => {
  if (input.value === "") {
    alert("You must add something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
  }
  input.value = "";
  saveData();
};

list.addEventListener("click", function (e) {
  e.target.remove();
  saveData();
});

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}

function showData() {
  list.innerHTML = localStorage.getItem("data");
}

showData();
