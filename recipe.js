const appId = "d94b65c9";
const appKey = "caa85b8af6dbce63b203c7eb3696d6f1";
//const baseUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${appId}&app_key=${appKey}`;
const baseUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=bread&app_id=${appId}&app_key=${appKey}&diet=low-carb`;
//const baseUrl = ``;
const recipeContainer = document.querySelector("#recipe-container");
const txtSearch=document.querySelector("#txtSearch");

txtSearch.addEventListener("keyup", (e)=> {
    const inputVal = txtSearch.value;
    if(e.keyCode === 13) {
        loadRecipes()
    }
})

function loadRecipes(type = "paneer") {

    const url = baseUrl + `&q=${type}`;
    fetch(url)
    .then((res) => res.json())
    .then((data) => renderRecipes(data.hits))
    .catch((error)  => console.log(error));


}
loadRecipes();

const getRecipeStepsStr =(ingredientLines = []) => {
    let str = "";
    for (var step of ingredientLines) {
        str = str+ `<li>${step}</li>`
    }
    return str;
}


const renderRecipes = (recipeList=[]) => {
    recipeContainer.innerHTML ="";
    recipeList.forEach(recipeObj => {
        const {label: recipeTitle, ingredientLines, image:recipeImage,
        } = recipeObj.recipe;
        const recipeStepStr=getRecipeStepsStr(ingredientLines);
        const htmlStr= ` <div class="recipe">
        <div class="recipe-title">${recipeTitle}</div>
        <div class="recipe-pic">
            <img src="${recipeImage}" />
        </div>
        <div class="recipe-text">
            <ul>
                ${recipeStepStr}
            </ul>
        </div>
    </div>`;

    recipeContainer.insertAdjacentHTML("beforeend", htmlStr)

    });
};