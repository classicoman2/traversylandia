
const url = "http://localhost:5000/api/posts";

class PostService {

    //Get Posts
    static getPosts() {
        try {
            fetch(url)
            .then(response => response.json())
            .then(data => mostraResultats(data));
            } catch (error) {
                console.log('Error:' + error);
            }
        }    
}


function mostraResultats(data) {
    document.getElementById("resultats").innerHTML = JSON.stringify(data);
}


window.onload = function() {

    console.log("Iniciant...")

    var posts = PostService.getPosts();

    console.log(posts);


    console.log("Final")

}