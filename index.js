const submitbtn = document.getElementById("subbtn");
const minimumcal = document.getElementById("min-cal");
const maxmimumcal = document.getElementById("max-cal");

function valueallocator(){
    minc = minimumcal.value;
    maxc = maxmimumcal.value;
    
}
// create api
function api(){
    valueallocator()
    recipebycal = "https://api.spoonacular.com/recipes/findByNutrients?apiKey=5f6c3bcea03b4ac99bcabe53b6033899&minCarbs="+ minc + "&maxCarbs=" + maxc
    
}





submitbtn.addEventListener("click",api)

