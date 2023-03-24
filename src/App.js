import './categories.styles.scss'
import CategoryItem from './components/category-item/Category-item.component';
import categories from './data/categories.json'

const App = () => {

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>

  );
}

export default App;
