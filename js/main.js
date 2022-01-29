const mileStonesData = JSON.parse(data).data;

//this function for laoding  all mile stone data as individual object from the json data
function loadMileStoneData() {
    //selecting the div where i want load each mile stone using js map() function
    const mileStones = document.querySelector(".milestones");

    mileStones.innerHTML = `${mileStonesData
        .map(function (milestone) {
            return `<div class="milestone border-b">
      <div class="flex" >
        <div class="checkbox"><input type="checkbox" /></div>
        <div onclick="openMileStone(this)">
          <p>
            ${milestone.name}
            <span><i class="fas fa-chevron-down"></i></span>
          </p>
        </div>
      </div>
      <div class="hidden_panel">
       ${milestone.modules
           .map(function (module) {
               return `<div class="module border-b">
            <p>${module.name}</p>
          </div>`;
           })
           .join("")}
      </div>
    </div>`;
        })
        .join("")}`;
}

function openMileStone(mileStoneElement) {
    const currentPanel = mileStoneElement.parentNode.nextElementSibling;
    const shownPanel = document.querySelector(".show");
    const active = document.querySelector(".active");

    if (active && !mileStoneElement.classList.contains("active")) {
        active.classList.remove("active");
    }
    mileStoneElement.classList.toggle("active");

    if (!currentPanel.classList.contains("show") && shownPanel) {
        shownPanel.classList.remove("show");
    }

    currentPanel.classList.toggle("show");
}

loadMileStoneData();
