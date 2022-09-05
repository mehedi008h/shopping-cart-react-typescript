type ProductProps = {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
};

const ProductCard = ({ id, name, price, imgUrl }: ProductProps) => {
    return (
        <div className="product">
            <div className="text-center">
                <img
                    src={imgUrl}
                    alt=""
                    style={{ height: "200px", width: "300px" }}
                />
            </div>

            <div className="px-4 pb-2">
                <h4>{name}</h4>
            </div>
        </div>
    );
};

export default ProductCard;
