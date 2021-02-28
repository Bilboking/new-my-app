import { useState, useEffect } from 'react'
import BlogList from './BlogList';
//** storing data in useState so React can update the DOM when things change */

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null);
   

        useEffect(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch data for that resource.')
                }

           
                return res.json();
            })
            .then(data => {
            setBlogs(data);
            setIsPending(false)
            setError(null)
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message)
            })
        }, []);

    return ( 
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>}
            { blogs && <BlogList blogs={ blogs } title= 'Blogs From Middle-Earth'/> }
           
        </div>
    );
}
 
export default Home;