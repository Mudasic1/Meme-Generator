const generatememebtn = document.querySelector(".meme-generator .generate-meme-btn");
const memeimg = document.querySelector(".meme-generator img");
const memetitle = document.querySelector(".meme-generator .meme-title")

const memeauthor = document.querySelector(".meme-generator meme-author");
const updateDetails = (url, title, author) => {
    memeimg.setAttribute("src",url );
    memetitle.innerHTML = title;
    memeauthor.innerHTML = author;
    
}

const generatememe = () =>{
    fetch(" https://meme-api.com/gimme").then((response) => response.json()).then(data => {
        updateDetails(data.url, data.title, data.author)
    })
}

generatememebtn.addEventListener("click", generatememe)