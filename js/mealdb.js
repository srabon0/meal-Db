const searchFood = () => {
    console.log('food searching');
    const food = document.getElementById('food');
    const foodName = food.value;
    food.value = " ";
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
    fetch(url)
    .then(res => res.json())
    .then (data => resutFood(data.meals));
}

const resutFood = (foodData) =>{
    console.log(foodData);
    const result = document.getElementById('result');
    foodData.forEach(food => {
        console.log(food.strMeal);
        const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = 
             ` <div class="card">
                <img src="${food.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${food.strMeal}</h5>
                  <p class="card-text">Origin: ${food.strArea}</p>
                  <p class="card-text">Origin: ${food.strCategory}</p>
                </div>
              </div>`;
    result.appendChild(div);
        
    });
    

}