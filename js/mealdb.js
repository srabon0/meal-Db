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
    div.classList.add('col','mb-3');
    div.innerHTML = 
             ` <div class="card">
                <img src="${food.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${food.strMeal}</h5>
                  <p class="card-text">Origin: ${food.strArea}</p>
                  <p class="card-text fw-bold -mt-2 ">Category: ${food.strCategory}</p>
                  <p class="card-text -mt-2 "> Instructions: ${food.strInstructions.slice(0,150)}</p>
                </div>
              </div>`;
    result.appendChild(div);
        
    });
    

}