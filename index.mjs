import {posts} from './data.mjs'

const container = document.getElementById('container')
const header = document.getElementById('header')

function renderPost(){
    header.style.visibility = 'visible'
   let postHtml =  ''
    for(let post of posts){
     postHtml += `
        <section class="post">
        <div class="info">
            <img class="user-img" src=${post.avatar}>
            <div class="user-info">
                <h3>${post.name}</h3>
                <p>${post.location}</p>
            </div>
        </div>
        <img  class="post-img" src=${post.post}>
       <div id='buttons' class="buttons">
            <img id=${post.id}  data-like="${post.uuid}"  id="heart"  class="heart" src="${post.src}">
            <img src="images/icon-comment.png">
            <img src="images/icon-dm.png">
       </div>

       <div id="post-info" class="post-info">
       <h4 id=${post.likeId}>${post.likes} likes</h4>
       <p><span class="username">${post.username}</span> ${post.comment}</p>
     </div>
    </section>
        `
    }
container.innerHTML = postHtml
}



document.addEventListener('click', function(e){
     if(e.target.id){
         let ID = e.target.id
         document.getElementById(ID).src = "images/red-heart.png"
         console.log(ID)
     }
     if(e.target.dataset.like){
        handleLikeClick(e.target.dataset.like) 
 }
   
})

function handleLikeClick(postId){ 
    const targetPost = posts.filter(function(post){
        return post.uuid === postId
    })[0]
    


    if (targetPost.isLiked){
        targetPost.likes--
        targetPost.src = "images/icon-heart.png"
    }
    else{
        targetPost.likes++ 
        targetPost.src = "images/red-heart.png"
    }
    targetPost.isLiked = !targetPost.isLiked
    

    renderPost()
}


    
    setTimeout(renderPost, 4000);