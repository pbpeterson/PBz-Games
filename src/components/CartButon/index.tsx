import {
  AddShoppingCart,
  RemoveShoppingCart
} from '@styled-icons/material-outlined'
import Button, { ButtonProps } from 'components/Button'
import { useCart } from 'hooks/use-cart'

type CartButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

const CartButton = ({
  id,
  size = 'small',
  hasText = false
}: CartButtonProps) => {
  const { isInCart, addToCart, removeFromCart } = useCart()

  const customButtonText = isInCart(id) ? 'Remove from cart' : 'Add to cart'

  return (
    <Button
      aria-label={customButtonText}
      icon={isInCart(id) ? <RemoveShoppingCart /> : <AddShoppingCart />}
      onClick={() => (isInCart(id) ? removeFromCart(id) : addToCart(id))}
      size={size}
    >
      {hasText && customButtonText}
    </Button>
  )
}

export default CartButton
