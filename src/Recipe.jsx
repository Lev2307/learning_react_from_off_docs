
const recipes = [{
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
  }, {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
  }, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
  }];

function Recipe({name, ingredients}) {
    return (
        <div>
            <h2>{name}</h2>
            <ul>
                {ingredients.map(ingredient =>
                    <li key={ingredient}>
                        {ingredient}
                    </li>
                )}
            </ul>
        </div>  
    )
}
  

export default function RecipeList() {
    const recipes_list = recipes.map(recipe =>
        <Recipe key={recipe.id} name={recipe.name} ingredients={recipe.ingredients} />
    )
  return (
    <div>
      <h1>Recipes</h1>
      <ul>{recipes_list}</ul>
    </div>
  );
}