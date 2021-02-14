
const Home = ({products}) => {
    return (
        <div>
            {
               products.map(product =><p key={product.id}>{product.name} --- {product.category}</p>)
            }
        </div>
    )
}
export default Home