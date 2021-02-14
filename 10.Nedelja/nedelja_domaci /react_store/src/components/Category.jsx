import { useParams } from "react-router-dom";

const Category = ({ products }) => {
  let { category } = useParams();
  let filterByCategory = products.filter((product) => product.category === category)
  let single = filterByCategory.length === 1;

  return (
    <>
      {filterByCategory.map(product => single
        ?
        <h1 key={product.id} >{product.name} --- {product.category}</h1>
        :
        <p key={product.id}>{product.name} --- {product.category}</p>
      )}
    </>
  )
};

export default Category


