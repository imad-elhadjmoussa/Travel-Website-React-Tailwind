import { Link } from "react-router-dom";

export const MenuItem = ({ icon, itemName }) => {

    return (
        <Link to={itemName === "Home" ? "/" : `/${itemName}`}>
            <div className='flex text-dark1 items-center gap-4 cursor-pointer hover:text-primaryBlue transition duration-150 ease-linear'>
                <div>
                    {icon}
                </div>
                <p> {itemName} </p>
            </div>
        </Link>
    );
}