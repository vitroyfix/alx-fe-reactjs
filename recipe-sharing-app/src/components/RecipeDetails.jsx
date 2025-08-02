import { useParams } from 'react-router-dom'
import { useRecipeStore } from '../store/recipeStore'
import EditRecipeForm from './EditRecipeForm'
import DeleteRecipeButton from './DeleteRecipeButton'

const RecipeDetails = () => {
  const { id } = useParams()
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === parseInt(id))
  )

  if (!recipe) return <p>Recipe not found</p>

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton id={recipe.id} />
    </div>
  )
}

export default RecipeDetails
