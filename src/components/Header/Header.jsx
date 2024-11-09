import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex gap-4 justify-center my-10 font-bold text-3xl">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
        </div>
    );
};

export default Header;