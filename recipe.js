const appId = "d94b65c9";
const appKey = "caa85b8af6dbce63b203c7eb3696d6f1";
const baseUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=d94b65c9&app_key=caa85b8af6dbce63b203c7eb3696d6f1&ingr=5-8&diet=low-carb&health=low-sugar&cuisineType=American&mealType=Dinner&dishType=Main%20course&calories=100-300';
const recipeContainer = document.querySelector("#recipe-container");
function loadRecipes(type = "paneer") {

    const url = baseUrl + `&q=${type}`;
    fetch(url)
    .then(res=>res.json())
    .then(data => console.log(data.hits))
    .catch((error)  => console.log(error));


}
loadRecipes();

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
                <li>Calories: 262 - Carbs: 9g - Protein: 46g - Fat: 4g</li>
                <li>Mozzarella, Basil Leaves, Sundried Tomatoes,</li>
                <li>Curry, and Paprika.</li>
                <li>Make Time: 25 Minutes</li>
                <li><a href="">FULL RECIPE</a></li>
            </ul>
        </div>
    </div>`

    });
};