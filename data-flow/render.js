function Render() {
    let nameInput = $("#name")
    let postList = $(".posts")
    let postInput = $("#post")
    
    function showPosts(posts) {
        
        postList.empty()
        for (let post in posts) {
            let li = `<li class="postLi" data-id="${posts[post].num}"><b>${posts[post].name}</b>: ${posts[post].text}</li>`
            postList.append(li)
        }
    }

    function getName() {
        return nameInput.val()
    }

    function clearName() {
        nameInput.val('')
    }

    function getPost() {
        return postInput.val()
    }

    function clearPost() {
        postInput.val('')
    }

    return {
        showPosts,
        getName,
        getPost,
        clearName,
        clearPost
    }
}