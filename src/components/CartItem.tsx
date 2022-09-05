import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/products.json";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
    id: number;
    quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart();
    const item = storeItems.find((i) => i.id === id);
    if (item == null) return null;

    return (
        <Stack
            direction="horizontal"
            gap={2}
            className="d-flex align-items-center"
        >
            <img
                src={item.imgUrl}
                style={{
                    width: "75px",
                    height: "75px",
                    objectFit: "cover",
                }}
            />
            <div className="me-auto">
                <div className="d-flex flex-column">
                    <span className="fw-semibold">{item.name}</span>
                    {quantity > 1 && (
                        <span className="text-muted">Q : {quantity}</span>
                    )}
                    <div className="text-muted">
                        {formatCurrency(item.price)}
                    </div>
                </div>
            </div>
            <div> {formatCurrency(item.price * quantity)}</div>
            <Button
                variant="outline-danger"
                size="sm"
                onClick={() => removeFromCart(item.id)}
            >
                &times;
            </Button>
        </Stack>
    );
}
