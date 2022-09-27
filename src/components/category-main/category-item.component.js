import { useNavigate } from "react-router";
import "./category-item.styles.scss";

const CategoryItem = ({category}) => {
    const {title, imageUrl, route} = category;
    const navigate = useNavigate();

    const onNavigationHandler = () => navigate(route);

return (
    <div  className = "category-containers">
    <div className= "background-image" style = {{backgroundImage: `url(${imageUrl})`}}/>
    <div className= "body" onClick={onNavigationHandler}>
       <h2> {title} </h2>
       <p> Shop Now</p>
    </div>
    </div>
)
};

export default CategoryItem;