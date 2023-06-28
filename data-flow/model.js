function Posts() {
    const _posts = []

    function addPost(post) {
        _posts.push(post)
    }

    function getPosts() {
        return JSON.parse(JSON.stringify(_posts))
    }

    function removePost(id) {
       let index =  _posts.findIndex(elm => elm.num == id)
       _posts.splice(index, 1)
    }

    return {
        addPost,
        getPosts,
        removePost
    }
}