const BlogList = ({blogs, title}) => {

    return ( 
        <div className="blog-list">
                <h2>{ title } </h2>
             {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}> 
                    <h2>{ blog.title }</h2>
                    <p>by { blog.author }</p><br/>
                    {/* <h4>{ blog.body }</h4> */}
                    
                </div>
        ))}
        </div>
    );
}
 
export default BlogList;