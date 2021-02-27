const Home = () => {
//** getting the event object data */
    const handleClick = (e) => {
        console.log('hello people', e)
    }
//** creating an event that can pass in a string, function argument etc.   */
//** goes with line 16 button 'handleClickAgain' */
    const handleClickAgain = (name,e) => {
        console.log('hello ' + name, e.target)
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={ handleClick }>Click me</button>
            <button onClick={(e) => 
                handleClickAgain('mario', e)
            }>Click me again</button>
        </div>
 );
}
 
export default Home;