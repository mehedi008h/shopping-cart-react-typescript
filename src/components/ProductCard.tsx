import { BsCartPlusFill, BsStarHalf } from "react-icons/bs";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
type ProductProps = {
    id: number;
    name: string;
    price: number;
    rating: number;
    imgUrl: string;
};

const ProductCard = ({ id, name, price, rating, imgUrl }: ProductProps) => {
    const { increaseCartQuantity } = useShoppingCart();

    return (
        <div className="product">
            <div className="cartBtn" onClick={() => increaseCartQuantity(id)}>
                <BsCartPlusFill />
            </div>
            <div className="text-center">
                <img
                    className="image"
                    src={imgUrl}
                    alt=""
                    style={{ height: "200px", width: "300px" }}
                />
            </div>

            <div className="px-4 pb-3">
                <h5 className="text-center">{name}</h5>
                <p className="text-muted ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro, maiores. Repellat dolor amet ipsa veniam.
                </p>

                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-center align-items-center gap-2">
                        <BsStarHalf color="#B9005B" />{" "}
                        <span className="fw-bold">{rating}</span>
                    </div>
                    <span className="text-success fw-bold">
                        {formatCurrency(price)}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
