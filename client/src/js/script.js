
const url = "http://localhost:5000/api/posts";

class PostService {

    //Get Posts
    static async getPosts() {
        try {
                const res = await fetch(url);
                const data = await res.text();
                mostraResultats(data);
            } catch (error) {
                console.log('Error:' + error);
            }
        }    
}


function mostraResultats(data) {
    document.getElementById("resultats").innerHTML = data
}


window.onload = function() {

    console.log("Iniciant...")

    var posts = PostService.getPosts();

    console.log(posts);


    console.log("Final")

}