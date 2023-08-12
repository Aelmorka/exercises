import Post from './Post'
import { useState, useEffect } from 'react'
export default function Posts() {
    let [posts, setPosts] = useState([])
    let [postWidth, setPostWidth] = useState(4)
    let [windowWidth, setWindowWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
            if (windowWidth < 600) {
                setPostWidth(1)
            } else if (windowWidth < 800){
                setPostWidth(2)
            } else if (windowWidth < 1000){
                setPostWidth(3)
            } else {
                setPostWidth(4)
            }
        }
        console.log(windowWidth)
        window.addEventListener('resize', handleResize)

        return () => {window.removeEventListener('resize', handleResize)}
    }, [windowWidth])
    useEffect(() => {
        async function getPosts(){
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const allPosts = await response.json();
            setPosts(allPosts.slice(0, 10));
        }
        getPosts()
    })

    function resizePosts() {
        setPostWidth(postWidth - 1)
    }
    return (
        <div>
            <h1>Top posts</h1>
            {postWidth > 1 &&
                <button onClick={resizePosts}>Resize posts</button>
            }
            <div className='posts'>
                {posts.map(post => <Post key={post.id} title={post.title} text={post.body} width={postWidth}/>)}
            </div>
        </div>
    )
}