import './category-item.styles.scss'
import categories from "../../data/categories.json"

const CategoryItem = () => {

    return (
        <>
            {
                categories.map(({ id, title, imageUrl }) => (
                    <div className="category-container" key={id} >
                        <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
                        <div className="category-body-container">
                            <h2>{title}</h2>
                            <p>Show Now</p>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default CategoryItem;
