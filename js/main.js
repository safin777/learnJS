const mileStonesData = JSON.parse(data).data;

//this function for laoding  all mile stone data as individual object from the json data
function loadMileStoneData(){
    //selecting the div where i want load each mile stone using js map() function
    const mileStones = document.querySelector('.milestones');

    mileStones.innerHTML = `${mileStonesData.map(function(milestone){
      return `<div class="milestone border-b">
      <div class="flex">
        <div class="checkbox"><input type="checkbox" /></div>
        <div>
          <p>
            ${milestone.name}
            <span><i class="fas fa-chevron-down"></i></span>
          </p>
        </div>
      </div>
      <div class="hidden_panel">
       ${milestone.modules.map(function(module){
            return `<div class="module border-b">
            <p>${module.name}</p>
          </div>`;
       }).join("")}
      </div>
    </div>`;
    } ).join("")}`
}

loadMileStoneData();
