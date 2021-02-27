const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Bruce King's Blog</h1>
            <div className="links">
                <a href="/" style={{
                    color: "black",
                    background: "pink",
                    borderRadius: '8px'
                }}>Home </a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "blue",
                    borderRadius: '8px'
                }}>New Blog</a>
            </div>
        </nav>
 );
}
 
export default Navbar;