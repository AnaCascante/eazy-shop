
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

interface OpenCardProps {
    itemCount: number;
}

export default  function OpenCard({ itemCount }: OpenCardProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/CheckoutPage');
    };

    return (
        <div className="relative">
            <button onClick={handleClick} className="hover:text-gray-400">
                <FaShoppingCart size={24} />
                {itemCount > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-pink-400 rounded-full">
                        {itemCount}
                    </span>
                )}
            </button>
        </div>
    );
};
