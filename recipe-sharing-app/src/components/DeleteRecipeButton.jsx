import { useRecipeStore } from '../store/recipeStore'
import { useNavigate } from 'react-router-dom'

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe)
  const navigate = useNavigate()

  return (
    <button onClick={() => { deleteRecipe(id); navigate('/') }}>
      Delete
    </button>
  )
}

export default DeleteRecipeButton
