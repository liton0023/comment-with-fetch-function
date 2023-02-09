
const loadUser=()=>{
    fetch('https://randomuser.me/api/?results=50')
    .then(res=>res.json())
    .then(data=>userLoad(data.results))
}

const userLoad=(users)=>{
 const userContainer=document.getElementById('user-container')
console.log(users)
 for(user of users){
    const userInfo=document.createElement('div');
    // console.log(user);
    userInfo.innerHTML=`
    <img src="${user.picture.thumbnail}" alt="">
    <h1>${user.name.title}  ${user.name.first}   ${user.name.last}</h1>
    <p>${user.gender}</p>
    <p>${user.location.street.name} ${user.location.city} ${user.location.country}</p>
    <p>${user.location.timezone.description}</p>
    <p>${user.gender}</p>

 `
    userInfo.classList.add('user')
    userContainer.appendChild(userInfo)
 }

}
loadUser();