const listContainer = document.querySelector(".list-container");
const inpCon = document.getElementById("inp-con");
const numItems = document.querySelector(".numOfItems span");
let count = 0;
const all = document.getElementById("all");
const active = document.getElementById("active");
const completed = document.getElementById("Completed");
const clear = document.getElementById("clear");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const main = document.querySelector("main");
const imgCon = document.querySelector(".img-con");
const items = document.querySelector(".items");
const middle = document.querySelector(".middle");


inpCon.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    if (inpCon.value == "") {
    } else {
      let li = document.createElement("li");
      li.innerHTML = inpCon.value;
      let span = document.createElement("img");
      listContainer.appendChild(li);
      span.src = "images/icon-cross.svg";
      li.appendChild(span);
      count++;
      numItems.innerHTML = count;
    }
    inpCon.value = "";
  }
});

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("done");
  } else if (e.target.tagName == "IMG") {
    e.target.parentElement.remove();
    count--;
    numItems.innerHTML = count;
  }
});

function filterList(action) {
  const listItems = document.querySelectorAll(".list-container li");
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.classList.remove("active1");
    button.addEventListener("click", (e) => {
      e.target.classList.add("active1");
    });
  });

  listItems.forEach((item) => {
    if (action === "all") {
      if (item.classList.contains("done")) {
        item.classList.remove("hidden");
      } else {
        item.classList.remove("hidden");
      }
    } else if (action === "active") {
      if (item.classList.contains("done")) {
        item.classList.add("hidden");
      } else {
        item.classList.remove("hidden");
      }
    } else if (action === "completed") {
      if (item.classList.contains("done")) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    }
  });
}
all.addEventListener("click", () => filterList("all"));
active.addEventListener("click", () => filterList("active"));
completed.addEventListener("click", () => filterList("completed"));

clear.addEventListener("click", () => {
  const listItems = document.querySelectorAll(".list-container li");
  listItems.forEach((item) => {
    if (item.classList.contains("done")) {
      item.remove();
      count--;
      numItems.innerHTML = count;
    }
  });
});

sun.addEventListener("click", () => {
  const listItems2 = document.querySelectorAll('.list-container li');
  if (window.innerWidth <= 500) {
    imgCon.style.backgroundImage = `url('images/bg-mobile-light.jpg')`;
  } else {
    imgCon.style.backgroundImage = `url('images/bg-desktop-light.jpg')`;
  }
  listContainer.classList.add('suncolor')
  document.querySelector('body').style.backgroundColor = "white";
  inpCon.style.backgroundColor = "white";
  inpCon.style.color = "black";
  listContainer.style.backgroundColor = "white";
  items.style.backgroundColor = "white";
  items.style.boxShadow = "5px 5px 15px rgba(0, 0, 0, 0.3)";
  listContainer.style.boxShadow = "5px 5px 15px rgba(0, 0, 0, 0.3)";
  sun.style.display = "none";
  moon.style.display = "block";
  middle.classList.add('new-middle')
  clear.classList.add('new-clear')
});
moon.addEventListener("click", () => {
  if (window.innerWidth <= 500) {
    imgCon.style.backgroundImage = `url('images/bg-mobile-dark.jpg')`;
  } else {
    imgCon.style.backgroundImage = `url('images/bg-desktop-dark.jpg')`;
  }
  listContainer.classList.remove('suncolor')
  document.querySelector('body').style.backgroundColor = "hsl(235, 21%, 11%)";
  inpCon.style.backgroundColor = "#25273c";
  inpCon.style.color = "white";
  listContainer.style.backgroundColor = "#25273c";
  items.style.backgroundColor = "#25273c";
  sun.style.display = "block";
  moon.style.display = "none";
  middle.classList.remove('new-middle')
  clear.classList.remove('new-clear')

});


Sortable.create(listContainer);