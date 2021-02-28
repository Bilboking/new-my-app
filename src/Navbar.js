const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Bilbo Baggin's Blog</h1>
            <div className="links">
                <a href="/" style={{
                    color: "white",
                    background: "green",
                    borderRadius: '8px'
                }}>Bag End </a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "blue",
                    borderRadius: '8px'
                }}>The Shire</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "grey",
                    borderRadius: '8px'
                }}>Mirkwood</a>
            </div>
        </nav>
 );
}
 
export default Navbar;