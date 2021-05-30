import { Link, useLocation } from 'react-router-dom';

const PostPurchase = () => {
    const location = useLocation();

    console.log(location.state);

    return (
        <>
            <h2>
                {location.state.success
                    ? 'Thank you for purchasing!'
                    : 'Something went wrong, please try again'}
            </h2>

            {location.state.success ? (
                <Link to="/">Go Home</Link>
            ) : (
                <Link to="/checkout">Retry Purchase</Link>
            )}
        </>
    );
};

export default PostPurchase;
