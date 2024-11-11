import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();

  return (
    <Button
      disabled={isCheckingOut}
      onClick={() => checkout(bookingId)}
      variations="primary"
      sizes="small"
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
