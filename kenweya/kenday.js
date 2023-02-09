const loadData=()=>{
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(data=>blog(data))
}

const blog= quate=>{
    const newBlog=document.getElementById('blockquote');

    newBlog.innerText=(quate.quote)
}
loadData()