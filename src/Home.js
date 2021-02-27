const Home = () => {
//** getting the event object data */
    const handleClick = (e) => {
        console.log('hello people', e)
    }
//** creating an event that can pass in a string etc.   */
//** goes with line 16 button 'handleClickAgain' */
    const handleClickAgain = (name) => {
        console.log('hello ' + name)
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={ handleClick }>Click me</button>
            <button onClick={() => 
                handleClickAgain('mario')
            }>Click me again</button>
        </div>
 );
}
 
export default Home;