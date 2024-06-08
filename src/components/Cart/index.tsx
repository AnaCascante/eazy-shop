import React, { useState } from 'react';
import OpenCard from './OpenCard';

// Add the correct file extension if necessary



const Cart: React.FC = () => {
    const [cartItems, setCartItems] = useState<number>(5); // Example item count

    return (
        <div>
            <OpenCard itemCount={cartItems} />
        </div>
    );
};

export default Cart;
