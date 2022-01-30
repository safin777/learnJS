const mileStonesData = JSON.parse(data).data;

//this function for laoding  all mile stone data as individual object from the json data
function loadMileStoneData() {
    //selecting the div where i want load each mile stone using js map() function
    const mileStones = document.querySelector(".milestones");

    mileStones.innerHTML = `${mileStonesData
        .map(function (milestone) {
            return `<div class="milestone border-b" id="${milestone._id}">
      <div class="flex" >
        <div class="checkbox"><input type="checkbox" onclick="markMileStone(this,${milestone._id})"/></div>
        <div onclick="openMileStone(this,${milestone._id})">
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

function showMileStone(id){
 const mileStoneImage = document.querySelector(".milestoneImage");
 const mileStoneTitle = document.querySelector(".title");
 const mileStoneDesc = document.querySelector(".details");

  mileStoneImage.style.opacity = "0";
  mileStoneImage.src = mileStonesData[id].image;
  mileStoneTitle.innerText = mileStonesData[id].name;
  mileStoneDesc.innerText = mileStonesData[id].description;
}

// event listener for hero image 
//checking if any image loaded or not
const mileStoneImage = document.querySelector(".milestoneImage");
mileStoneImage.onload = function(){
  this.style.opacity = "1";
}

function markMileStone(checkbox,id){
   const doneList = document.querySelector(".doneList");
   const mileStoneList = document.querySelector(".milestones");

   const item = document.getElementById(id);

   if (checkbox.checked){
     //mark as done
     mileStoneList.removeChild(item);
     doneList.appendChild(item);
     
   }else{
     //send it to mailestones div as unchecked poroperty
     doneList.removeChild(item);
     mileStoneList.appendChild(item);

   }

   
}


function openMileStone(mileStoneElement , id) {
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

    showMileStone(id);
}

loadMileStoneData();
