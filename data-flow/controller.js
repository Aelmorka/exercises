$(document).ready(function(){
    let buttonPost = $("#btn")
    let render = Render()
    let model = Posts()
    let counter = 0

    buttonPost.click(function() {
        let nameVal = render.getName()
        let postVal = render.getPost()
        if (nameVal && postVal) {
            let post = {name: nameVal, text: postVal, num: counter}
            model.addPost(post)
            counter++
            render.showPosts(model.getPosts())
            render.clearName()
            render.clearPost()
        }
    })

    $("body").on("click", "li", function() {
        model.removePost($(this).data().id)
        render.showPosts(model.getPosts())
    })
})