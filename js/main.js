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

function showMileStoneImage(){
 const mileStoneDetails = document.querySelector(".milestoneDetails");
  
 mileStoneDetails.innerHTML = `${mileStonesData.map( (mileStoneDetail) =>{
   return `<div class="milestoneDetails">
   <img class="milestoneImage" src="${mileStoneDetail.image}" alt="" />

   <h1 class="title">Module title here</h1>
   <p class="details">Module description here</p>
 </div>`
 } ).join("")}`

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

    showMileStoneImage(id);
}

loadMileStoneData();
