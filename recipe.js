const appId = "d94b65c9";
const appKey = "caa85b8af6dbce63b203c7eb3696d6f1";
const baseUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${appId}&app_key=${appKey}`;
const recipeContainer = document.querySelector("#recipe-container");
function loadRecipes(type = "paneer") {

    const url = baseUrl + `&q=${type}`;
    fetch(url)
    .then(res=>res.json())
    .then((data) => renderRecipes(data.hits))
    .catch((error)  => console.log(error));


}
loadRecipes();

const getRecipesStepsStr =(ingredientLines = []) => {
    let str = "";
    for (var step of ingredientLines) {
        str = str+ `<li>${step}</li>`
    }
}


const renderRecipes = (recipeList=[]) => {
    recipeList.forEach(recipeObj => {
        const {label: recipeTitle, ingredientLines, image:recipeImage,
        } = recipeObj.recipe;
        const htmlStr= ` <div class="recipe">
        <div class="recipe-title">${recipeTitle}</div>
        <div class="recipe-pic">
            <img src="${recipeImage}" />
        </div>
        <div class="recipe-text">
            <ul>
                <li>step</li>
                <li>step</li>
                <li>step</li>
                <li>step</li>
                <li>step</li>
            </ul>
        </div>
    </div>`;

    recipeContainer.insertAdjacentHTML("beforeend", htmlStr)

    });
};