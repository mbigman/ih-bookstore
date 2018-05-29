
function changeStatus(status) {

    // var postData = {
    //     status : status
    // };
    // var book_id = books.snapshotChanges().map(newStatusKey)
    // var newStatusKey = firebase.database().ref().child('books').push({
    //     status : status
    // }).key;
    
    document.getElementById('email').textContent = doc.email
    document.getElementById('title').textContent = doc.title
    
    db.collection("books").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.email, " => ", doc.data());
    });
});

    newStatusKey = firebase.database().ref().child('/books/' + book_id)
        .update({ status: "Requested"});
        
}



