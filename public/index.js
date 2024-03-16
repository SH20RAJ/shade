
function showSection(section) {
    // Remove 'active' class from all sections
    document.querySelectorAll('.playground .layout').forEach(function(el) {
        el.classList.remove('active');
    });

    // Add 'active' class to the selected section
    document.querySelector(`.${section}`).classList.add('active');

    // Scroll the selected section into view
    document.querySelector(`.${section}`).scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

document.querySelectorAll(".post .comment").forEach((e)=>{
    e.addEventListener("click",(e)=>showComments(e))
})
let showComments = (e) => {
    e.target.classList.toggle("tomato")
    let postId = e.target.parentElement.parentElement.parentElement.id;
    let post = e.target.parentElement.parentElement.parentElement;
    // commentviewer.style.display = "block";
    let html = `
    <div class="commentviewer ">
                        <div class="comment">
                            <span class="author"><img src="../assets/logo.png" alt=""><span><span class="tomato">@</span>sh20raj</span></span>
                            <span class="content">Hii, It's Just Wonderful Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, ipsam. Quia incidunt nam, natus illo possimus eligendi hic animi unde asperiores repellendus eaque nostrum ea quidem tempora. Ea, maiores totam!</span>
                        </div>
                    </div>
                    `;
    post.insertAdjacentHTML("beforeend",html);
    let commentviewer = post.querySelector(".commentviewer") ;
    console.log("cv",commentviewer);
    commentviewer.classList.toggle("visible");
    commentviewer.insertAdjacentHTML = postId;
    console.log(post);

}