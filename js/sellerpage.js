// var userRef = firebase.database().ref("books/")


var currentUser;
window.onload = function (){
    initializeApp()
}

function initializeApp(){
    firebase.auth().onAuthStateChanged( function(user){ /*global firebase*/
        if (user) {
            console.log(user);
            currentUser = user;
        } else {
            // removeUserProfile()    
            buttonToSignIn(); /*global buttonToSignIn*/
        }
    })
}

function displayUserProfile(user){
    document.getElementById('avator')
    .setAttribute('src', user.photoURL)
    document.getElementById('my-email').textContent = user.email
    document.getElementById('my-firbase-uid').textContent = user.uid
    
}


function loadAllBooks(){
    var b = firebase.firestore().collection('books')
    console.log(b.doc)
    
    firebase.firestore().collection('books')
    .where('seller','==',"available")
    .get()
    .then(function(querySnapshot){
        var resultingHTML = `
                <div class="row mb-5">
                    <form>
                        <div id="searchbar">
                            <div id="searchbar">
                            <input type="search" id="mySearch" name="q"
                            placeholder="Search for books.." size="28">
                            <button>Search</button>
                        </div>
                    </form>
                    </br>
                </div>`
        querySnapshot.forEach(function(doc){
            var data = doc.data()
            console.log(data)
            resultingHTML += `<div class="row mb-5">
                                 <div class="media tm-flexbox-ie-fix tm-width-ie-fix">
                                    <div class="tm-media-img-container">
                                        <div class="text-center pt-31 pb-31 tm-timeline-date tm-bg-green">${data.status}</div>
                                <img class="d-flex img-fluid" src="${data.book_img}">
                            </div>
                          
                          <div class="media-body tm-flexbox-ie-fix tm-width-ie-fix tm-bg-light-gray">
                            <div class="p-5">
                                <h2 class="mb-4 mt-0 tm-blue-text tm-timeline-item-title">${data.title}</h2>
                                <p class="mb-4" src="http://ecx.images-amazon.com/images/I/41NchhmwaVL._SX378_BO1,204,203,200_.jpg" id="results_html">
                                    ${data.seller}, ${data.price}, ${data.course}, ${data.condition}
                                </p>
                                
                                <a href="buyone.html" class="btn btn-primary tm-button-rounded tm-button-pink tm-button-no-border tm-button-normal tm-button-timeline" onclick="sendEmail(user.email,${data.title},${data.seller})">Buy Book</a>
                                </div>                            
                            </div>
                            </div>
                        </div> <!-- row -->`
                        

            /*
            This is where you would create an HTML element for a card 
            Each loop creates a new element
            Equivalent to the "resultingHTML" tag in Jeff's app
            */
        })
         document.getElementById('results_html').innerHTML = resultingHTML

    })
}

