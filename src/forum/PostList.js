import Post from "./Post";

const PostList = (props) => {
    const {posts, auth} = props
    return ( 
        <div className="post-list">
            { posts && posts.map((post) => {
                return (
                    <Post post={post} auth={auth}/>   
                )
            })}
        </div>
     );
}
 
export default PostList;