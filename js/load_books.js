function email(user){
        console.log(user);
    var sendtoemail= document.getElementById('selleremail').innerHTML;
    var email=(sendtoemail);
    var subject = ('I want to buy your book!');
    var body = ('I am the body of the feedback that you are sending.');
    
    document.write('<button type="button"><a href="mailto:' + email +
    
    '?subject=' +subject+
    '&body=' +body+
    
    '">' + 'Click here to send feedback' + '<' + '/a></button>');
    }

 var pictureshash= {
 "Glencoe Algebra 1 2014":["https://guideimg.alibaba.com/images/shop/2016/09/08/63/algebra-1-common-core-teachers-edition-by-john-a.-carter-gilbert-j.-cuevas-roger-day-carol-mallory-dinah-zike-jay-mctigh_25317463.jpeg"],"Holt Geometry Student Edition":["https://images-na.ssl-images-amazon.com/images/I/51rH9wo2XFL._SX375_BO1,204,203,200_.jpg"], "Holt Geometry Student Edition":["https://images-na.ssl-images-amazon.com/images/I/51rH9wo2XFL._SX375_BO1,204,203,200_.jpg"], "Algebra 2 (2011 Edition)":["https://images-na.ssl-images-amazon.com/images/I/91Q0zfuyEAL._AC_UL320_SR258,320_.jpg"],"Precalculus Enhanced with Graphing Utilities, 6th Edition":["https://images-na.ssl-images-amazon.com/images/I/51huP-BE8FL._SX363_BO1,204,203,200_.jpg"], "Statistics Through Applications":["https://images-na.ssl-images-amazon.com/images/I/515YbDV3R5L._SX383_BO1,204,203,200_.jpg"],"Financial Algebra: Advanced Algebra with Financial Applications":["http://pages.nxtbook.com/nxtbooks/ngsp/financialalgebra_advanced2ndedition/iphone/ngsp_financialalgebra_advanced2ndedition_p0001_hires.jpg"], "World History(National Edition)Patterns of Interaction":["https://images-na.ssl-images-amazon.com/images/I/912gOC3ZbLL.jpg"],"World History, Volume I: To 1800 8th Edition":["https://images-na.ssl-images-amazon.com/images/I/51JY4b8NnxL._SX388_BO1,204,203,200_.jpg"],"Western Civilization: Alternate Volume: Since 1300, Seventh Edition":["https://pictures.abebooks.com/isbn/9780495555285-us.jpg" ],"America: Pathways to the Present - Modern American History":[ "https://images-na.ssl-images-amazon.com/images/I/514KRvrwHhL._SX379_BO1,204,203,200_.jpg"],"American Pageant (AP* Edition)":["https://images-na.ssl-images-amazon.com/images/I/613RBr2qsLL.jpg"], "Principles of Economics, 7th Edition":["https://images-na.ssl-images-amazon.com/images/I/51yTB68wLtL._SX423_BO1,204,203,200_.jpg"],"American Government: Brief Version, 11th Edition":["https://images-na.ssl-images-amazon.com/images/I/51GL74-lo9L._SX402_BO1,204,203,200_.jpg"],"Principles of Economics, 7th Edition":[ "https://images-na.ssl-images-amazon.com/images/I/51yTB68wLtL._SX423_BO1,204,203,200_.jpg"],"Government by the People, AP* Edition, 25/E":["https://www.pearsonhighered.com/assets/bigcovers/0/1/3/2/0132566974.jpg"],"Sacred Scripture: A Catholic Study of God's Word":["https://images-na.ssl-images-amazon.com/images/I/51CJ3JOpPcL._SX258_BO1,204,203,200_.jpg"],"The Message Remix":["https://images.gr-assets.com/books/1439321322l/842746.jpg"], "Responding to the Call of Jesus Christ":["https://www.comcenter.com/size/files/1ff1856177e4d21fa44ac8121e2d6c6f/veri-305497.jpg.710x.jpg"],"Tattoos on the Heart: The Power of Boundless Compassion":["https://images-na.ssl-images-amazon.com/images/I/51X9jU3SvBL._SX324_BO1,204,203,200_.jpg"],"The Sacraments: Encounters With Christ (Student Text)":["https://images-na.ssl-images-amazon.com/images/I/51U98ysDkXL._SX332_BO1,204,203,200_.jpg"], "New Seeds of Contemplation":["https://images-na.ssl-images-amazon.com/images/I/51NTWuRIomL._SX322_BO1,204,203,200_.jpg"], "The Little Prince":["https://images-na.ssl-images-amazon.com/images/I/51uWEc5jV7L._SX258_BO1,204,203,200_.jpg"],"Growing in Christian Morality":["https://images-na.ssl-images-amazon.com/images/I/51hmNY7cIyL._SX258_BO1,204,203,200_.jpg"], "Living and Loving as Disciples of Christ":["https://www.comcenter.com/size/files/9dfb57ca0f80de644b5d731f0ef095df/veri-302847.jpg.710x.jpg"],"Tuesdays with Morrie":["https://images-na.ssl-images-amazon.com/images/I/41Xo3rlQT%2BL._SX311_BO1,204,203,200_.jpg"],"An American Childhood":["https://images-na.ssl-images-amazon.com/images/I/41G38l4VzZL._SX331_BO1,204,203,200_.jpg"], "Small Wonder: Essays":["https://images-na.ssl-images-amazon.com/images/I/51asNdO68uL._SX330_BO1,204,203,200_.jpg"],"Gift from the Sea":["https://images-na.ssl-images-amazon.com/images/I/41gB0dGlXBL._SX318_BO1,204,203,200_.jpg"],"Justice: What's the Right Thing to Do?":["https://images-na.ssl-images-amazon.com/images/I/41LqwCGYUmL._SX328_BO1,204,203,200_.jpg"],"World Religions: A Voyage of Discovery, 4th Edition":["https://images-na.ssl-images-amazon.com/images/I/51D6mOjRoNL._SX258_BO1,204,203,200_.jpg"],"Houghton Mifflin Harcourt Biology":["http://prodimage.images-bn.com/pimages/9780547687728_p0_v1_s1200x630.jpg"],"Biology: Concepts and Connections":["https://images-na.ssl-images-amazon.com/images/I/51KiQztb8XL._AC_UL320_SR264,320_.jpg"],"Introductory Chemistry: A Foundation":["https://images-na.ssl-images-amazon.com/images/I/51yflqMFSSL._SX385_BO1,204,203,200_.jpg"],"Chemistry: The Central Science (12th Edition)":["https://images-na.ssl-images-amazon.com/images/I/518CB5pYvXL._SX258_BO1,204,203,200_.jpg"],"Holt Physics":["https://pictures.abebooks.com/isbn/9780030368172-us.jpg"],"Marine Biology, 9th Edition":["https://images-na.ssl-images-amazon.com/images/I/41M53NsBhpL._SX399_BO1,204,203,200_.jpg"], "Marine Biology Coloring Book":["https://images-na.ssl-images-amazon.com/images/I/61Ckcf13Z6L._SX382_BO1,204,203,200_.jpg"],"Campbell Biology in Focus":["https://images-na.ssl-images-amazon.com/images/I/514yn255rxL._SX412_BO1,204,203,200_.jpg"],"Essentials of Human Anatomy & Physiology [Eleventh Editon]":["https://www.pearsonhighered.com/assets/bigcovers/0/3/2/1/0321799992.jpg"],"Descubre 2014, Level 1":["https://images-na.ssl-images-amazon.com/images/I/51%2BC97Q6qJL._SX360_BO1,204,203,200_.jpg"], "Descubre 1: Cuaderno de Practica":["https://images-na.ssl-images-amazon.com/images/I/61uYeBeY3xL._SX383_BO1,204,203,200_.jpg"],"Descubre 2014, Level 2":["https://images-na.ssl-images-amazon.com/images/I/A1sHg2GUkWL._AC_UL320_SR248,320_.jpg"], "Descubre 2: Cuaderno de Practica":["https://images-na.ssl-images-amazon.com/images/I/A1sHg2GUkWL.jpg"],"Descubre 2014, Level 3":["https://images-na.ssl-images-amazon.com/images/I/A1gKnSHFv2L._AC_UL320_SR246,320_.jpg"], "Descubre 3: Cuaderno de Practica":["https://images-na.ssl-images-amazon.com/images/I/51LHohOMk1L._SX381_BO1,204,203,200_.jpg"],"Temas":["https://vistahigherlearning.com/media/catalog/product/cache/a287e3aa69c39507a37488dc63e2d379/t/e/temas1e_cover_1_5.jpg"], "AP Spanish, Preparing for the Language and Culture Examination":["https://images-na.ssl-images-amazon.com/images/I/518f-%2BisqjL._SX373_BO1,204,203,200_.jpg"],"T'es branché? Level 1":["http://emclanguages.com/tes-branche/TEB1.jpg"], "T'es branché? Level One: Student Edition Workbook":["https://images-na.ssl-images-amazon.com/images/I/91Uj8ssw5oL._SY450_.jpg"],"T'es branché? Level 2":["http://emclanguages.com/tes-branche/TEB1.jpg"], "T'es branché? Level Two: Student Edition Workbook":["https://images-na.ssl-images-amazon.com/images/I/51fvU1yqOcL._SX258_BO1,204,203,200_.jpg"],"T'es branché? Level 3":["https://images-na.ssl-images-amazon.com/images/I/91a0USu8bcL.jpg"], "T'es branché? Level Three: Student Edition Workbook":["https://images-na.ssl-images-amazon.com/images/I/91zU2n5rMFL.jpg"],"T'es branché? Level 4":["http://store.emcp.com/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/t/e/teb_level_4.jpg"], "T'es branché? Level Four: Student Edition Workbook":["https://images-na.ssl-images-amazon.com/images/I/91Uj8ssw5oL._SY550_.jpg"]
}
function loadAllBooks(){
    var b = firebase.firestore().collection('books')
    console.log(b.doc)
    
    firebase.firestore().collection('books')
    .where('status','==',"available",)
    .get()
    .then(function(querySnapshot){
        var resultingHTML = `
                <div class="row buydiv">
                    
                        <div id="searchbar">
                            <div id="searchbar">
                            <input type="search" id="mySearch" name="q"
                            placeholder="Search for books.." size="28">
                            <button onclick="loadSearchedBooks('mySearch')">Search</button>
                        </div>
                    
                    </br>
                </div>`
        querySnapshot.forEach(function(doc){
            var data = doc.data()
            var status= data.status
            if (status == "in_progress"){
                var status= "In Progress";
                console.log(status);
            }
            for(var c in pictureshash){
                if (c== data.title){
                    var imgsrc= pictureshash[c][0];
                    console.log(imgsrc);
                    
                }
            }
            resultingHTML += `<div class="row buydiv">
                                 <div class="media tm-flexbox-ie-fix tm-width-ie-fix book">
                                    <div class="tm-media-img-container">
                                        <div class="text-center pt-31 pb-31 tm-timeline-date tm-bg-green">${status}</div>
                                <img class="d-flex img-fluid" src="${imgsrc}">
                                 </div>
                          
                          <div class="media-body tm-flexbox-ie-fix tm-width-ie-fix tm-bg-light-gray">
                            <div class="p-5">
                                <h1 class="mb-4 mt-0 tm-timeline-item-title">Book Title: ${data.title}</h1>
                                <h2 class="mb-4">Seller Email: <p id="selleremail">${data.seller}</p></h2>
                                <h2 class="mb-4">Course Name: ${data.course}</h2>
                                <h2 class="mb-4">Price: $${data.price}</h2>
                                <h2 class="mb-4">Condition: ${data.condition}</h2>

                            </div>
                                </div>
                                <h2></h2>
                                <a class="btn btn-primary tm-button-rounded tm-button-no-border tm-button-normal tm-button-timeline" onclick="email()">Buy Book</a> 

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
//End of Load All Books function
function loadSearchedBooks(searchTerm){
    var b = firebase.firestore().collection('books')
    console.log(b.doc)
    
    firebase.firestore().collection('books')
    .where('status','==',"available")
    .get()
    .then(function(querySnapshot){
        var resultingHTML = `
                <div class="row buydiv">
                    
                        <div id="searchbar">
                            <div id="searchbar">
                            <input type="search" id="mySearch" name="q"
                            placeholder="Search for books.." size="28">
                            <button onclick="loadSearchedBooks('mySearch')">Search</button>
                        </div>
                    
                    </br>
                </div>`
        querySnapshot.forEach(function(doc){
            var data = doc.data()
            var status= data.status
            console.log(searchTerm)
            if(data.title.includes(searchTerm)){ 
                if (status == "in_progress"){
                    var status= "In Progress";
                    console.log(status);
                }
                for(var c in pictureshash){
                    if (c== data.title){
                        var imgsrc= pictureshash[c][0];
                        console.log(imgsrc);
                        
                    }
                }
                resultingHTML += `<div class="row buydiv">
                                     <div class="media tm-flexbox-ie-fix tm-width-ie-fix book">
                                        <div class="tm-media-img-container">
                                            <div class="text-center pt-31 pb-31 tm-timeline-date tm-bg-green">${status}</div>
                                    <img class="d-flex img-fluid" src="${imgsrc}">
                                     </div>
                              
                              <div class="media-body tm-flexbox-ie-fix tm-width-ie-fix tm-bg-light-gray">
                                <div class="p-5">
                                    <h1 class="mb-4 mt-0 tm-timeline-item-title">Book Title: ${data.title}</h1>
                                    <h2 class="mb-4">Seller Email: <p id="selleremail">${data.seller}</p></h2>
                                    <h2 class="mb-4">Course Name: ${data.course}</h2>
                                    <h2 class="mb-4">Price: $${data.price}</h2>
                                    <h2 class="mb-4">Condition: ${data.condition}</h2>
    
                                </div>
                                    </div>
                                    <h2></h2>
                                    <a class="btn btn-primary tm-button-rounded tm-button-no-border tm-button-normal tm-button-timeline" onclick="email()">Buy Book</a> 
    
                                    </div>
                                </div> <!-- row -->`
            }
            /*
            This is where you would create an HTML element for a card 
            Each loop creates a new element
            Equivalent to the "resultingHTML" tag in Jeff's app
            */
        })
         document.getElementById('results_html').innerHTML = resultingHTML

    })
}



// function sendEmail(user, title, seller) {
//   const mailOptions = {
//     from: user
//     to: seller
//   };
//   // hmtl message constructions
//   mailOptions.subject = 'I want to buy your book';
//   mailOptions.html = `<p><b>Name: </b>${body.rsName}</p>
//                       <p><b>Email: </b>${body.rsEmail}</p>
//                       <p><b>Subject: </b>${body.rsSubject}</p>
//                       <p><b>Message: </b>${body.rsMessage}</p>`;
//   return mailTransport.sendMail(mailOptions);
// }

