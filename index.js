function loadData(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(data=>commentData(data))
}

function commentData(comments){
// console.log(comments)
const commentBrn=document.getElementById('comment')

for(comment of comments){
    const commentDiv=document.createElement('div');
    commentDiv.classList.add('comment')
    // console.log(comment);
    commentDiv.innerHTML=`
    <h1> ${comment.name}</h1>
    <h3>${comment.email}</h3>
    <p>${comment.body}</p>
    `
    commentBrn.appendChild(commentDiv);
}
}
loadData();