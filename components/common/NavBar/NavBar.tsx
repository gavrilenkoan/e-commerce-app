import Link from "next/link"

export const NavBar = () => {
    return (
        <nav>
            <div>
                <Link href="/">Store</Link>
            </div>
            <div>
                <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
                <Link href="/checkout">Checkout</Link>
            </div>
        </nav>
    )
}