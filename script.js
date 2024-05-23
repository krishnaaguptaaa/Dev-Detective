const url = "https://api.github.com/users/";
let input=document.querySelector("#text");
let button=document.querySelector(".btn");
let night=document.querySelector(".nightmode");
let nameOftheme=document.querySelector(".nameOftheme");

button.addEventListener("click",function(){
    if(input.value!==""){
        displayData(url + input.value);
    }
})

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (input.value !== "") {
            displayData(url + input.value);
        }
    }
}, false);

async function displayData(gitUrl){
    const response= await fetch(gitUrl);
    const data= await response.json();
    if (!data) {
        throw data;
    }
    renderData(data);
}

function renderData(data){
    try{
    document.querySelector(".userimage").src=data?.avatar_url;
    document.querySelector(".user-name").innerHTML=data?.name;
    document.querySelector(".user-id").innerHTML="@"+data?.login;
    document.querySelector(".user-id").href=data?.html_url;
    document.querySelector(".user-joined-date").innerHTML="Joined " + data?.created_at;
    document.querySelector(".user-bio").innerHTML=(data?.bio === null) ? "This Profile has no Bio" : data?.bio;
    document.querySelector(".repos").innerHTML=data?.public_repos;
    document.querySelector(".Followers").innerHTML=data?.followers;
    document.querySelector(".following").innerHTML=data?.following;
    
    document.querySelector(".location").innerHTML=(data?.location === null) ? "Not Available" : data?.location;
    document.querySelector(".website").innerHTML=(data?.blog === "") ? "Not Available" : data?.blog;
    document.querySelector(".website").href=data?.blog;
    document.querySelector(".twitter").innerHTML=(data?.twitter === null) ? "Not Available" : data?.twitter_username;
    document.querySelector(".twitter").href=`https://twitter.com/${data?.twitter_username}`;
    document.querySelector(".company").innerHTML=(data?.company === null) ? "Not Available" : data?.company;
    
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    dateSegment = data?.created_at.split("T").shift().split("-");
    document.querySelector('.user-joined-date').innerText = `Joined ${dateSegment[2]} ${month[dateSegment[1] - 1]} ${dateSegment[0]}`;
    document.querySelector('.defaultImage').src="";
    document.querySelector(".user-location").classList.remove('active')
    document.querySelector(".user-followers").classList.remove('active')
    document.querySelector(".userimage").classList.remove('active')
    }
    catch(error){
        document.querySelector('.defaultImage').src='404_error_checking_FI (1).webp';
        document.querySelector(".userimage").src = "";
        document.querySelector(".user-name").innerHTML = "";
        document.querySelector(".user-id").innerHTML = "";
        document.querySelector(".user-id").href = "";
        document.querySelector(".user-joined-date").innerHTML = "";
        document.querySelector(".user-bio").innerHTML = "";
        document.querySelector(".repos").innerHTML = "";
        document.querySelector(".Followers").innerHTML = "";
        document.querySelector(".following").innerHTML = "";
        document.querySelector(".location").innerHTML = "";
        document.querySelector(".website").innerHTML = "";
        document.querySelector(".website").href = "";
        document.querySelector(".twitter").innerHTML = "";
        document.querySelector(".twitter").href = "";
        document.querySelector(".company").innerHTML = "";
        document.querySelector(".user-location").classList.add('active')
        document.querySelector(".user-followers").classList.add('active')
        document.querySelector(".userimage").classList.add('active')
    }
}
function darkthemelighttheme(){
    document.body.classList.toggle('dark-theme')
    if(document.body.classList.contains('dark-theme')){
        night.src='Images/sun-icon.svg'
        nameOftheme.innerHTML="Light";
    }
    else{
        night.src='Images/moon-icon.svg'
        nameOftheme.innerHTML="Dark";
    }
}
displayData(url+"krishnagupta2004");


