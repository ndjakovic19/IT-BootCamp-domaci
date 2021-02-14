import { Link } from "react-router-dom";

const Categories = ({ products }) => {
  let categories = [...new Set(products.map((product) => product.category))];

  console.log(categories);

  return (
    <>
      <h1>CATEGORIES</h1>
      {categories.map((category) => {
        return (
          <div key={category}>
            <Link to={`categories/${category}`}>{category}</Link>
          </div>
        );
      })
      }
    </>
  );
};

export default Categories;

