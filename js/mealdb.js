const searchFood = () => {
    console.log('food searching');
    const food = document.getElementById('food');
    const foodName = food.value;
    console.log(foodName);
    foodName.value = "";
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
    fetch(url)
    .then(res => res.json())
    .then (data => console.log(data));
}
