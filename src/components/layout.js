import {Link, Outlet} from 'react-router-dom'

const Layout = () => {
    return (
        <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/destination">Destination</Link>
            <Link to="/crew">Crew</Link>
            <Link to="/technology">Technology</Link>
        </nav>
            <Outlet />
        </>
    )
}

export default Layout