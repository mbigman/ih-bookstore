var loggedInUser;
// window.onload = function (){
//     initializeApp()
// }

function initializeApp(){
    var w =window.location.href
    firebase.auth().onAuthStateChanged( function(user){
        loggedInUser = user
        console.log(loggedInUser)
        if (user) {
            console.log(user)
            displayUserName(user)  
            buttonToSignOut()
            // sendWelcomeEmail(user.displayName,user.email)
            // if(w == "https://preview.c9users.io/linkacleo1/book-app/bookapp/sellerpage.html" || w=="https://mbigman.github.io/ih-bookstore/sellerpage.html"){
            //     Books(user)
            // } 
            loadSellersBooks()
            
        } else {
            // removeUserProfile()    
            buttonToSignIn()
        }
    })
}

function displayUserProfile(user){
    document.getElementById('avator')
    .setAttribute('src', user.photoURL)
    document.getElementById('welcome').textContent = user.displayName
    document.getElementById('my-email').textContent = user.email
    document.getElementById('my-firbase-uid').textContent = user.uid
    document.getElementById('show-name').innerHTML = ` <p id="show-name" class="tm-banner-subtitle">${user.displayName}</p><br>${user.email}</br>`
    
}

function displayUserName(user) {
        // document.getElementById('welcome-name').textContent = user.displayName
        document.getElementById('welcome-name').innerHTML = ` <p id="welcome-name" class="tm-banner-subtitle">Welcome back ${user.displayName}</p><br>${user.email}</br>`
}

function removeUserProfile(){
    document.getElementById('avator')
    .setAttribute('src', "")
    document.getElementById('my-name').textContent = ""
    document.getElementById('my-email').textContent = ""
    document.getElementById('my-firebase-uid').textContent = ""
}

function signOut(){
    firebase.auth().signOut()
    removeUserProfile()
}

function buttonToSignIn(){
    document.getElementById('auth-button').innerHTML = ` <li id = "auth-button" class="tm-nav-item-link tm-button"> <a onclick= "authenticateWithGoogle()">Sign In</a>
                            </li>`
}

function buttonToSignOut() {
    document.getElementById('auth-button').innerHTML = `<a class="tm-nav-item-link tm-button" onclick= "signOut()">Sign Out</a>`
}

function authenticateWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('profile')
    provider.addScope('email')
    
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
        console.log(result)
        
        // document.getElementById('avator')
        // .setAttribute('src', result.additionalUserInfo.profile.picture)
        
        // document.getElementById("my-name").textContent = result.additionalUserInfo.profile.name
        // document.getElementById("my-email").textContent = result.additionalUserInfo.profile.email
        // document.getElementById("my-firbase-uld").textContent = result.user.uld
    })
    .catch(function(error) {
        console.error(error)
        alert('Google Authentication was unsuccessful.')
    })
}

/* UPLOADING BOOK FUNCTIONS */
var geninfo = [
    [9, "Math", ["Algebra I", "Geometry", "Honors Geometry"]], [9, "English", ["English I","Honors English I"]], [9, "History", ["World Civilizations I","Honors World Civilizations I"]], [9, "Theology", ["The Sacred Scriptures","The New Testament"]], [9, "Science", ["Biology","Honors Biology"]], [10, "Math", ["Geometry","Honors Geometry", "Algebra II with Trigonometry", "Honors Algebra II with Trigonometry"]], [10, "English", ["American Literature","Honors American Literature"]], [10, "History", ["World Civilizations II","AP European History"]], [10, "Theology", ["Love, Choices and Vocations","Sacraments Church & Liturgy"]], [10, "Science", [ "Chemistry","Honors Chemistry", "Biology", "Honors Biology"]], [11, "Math", ["Algebra II with Trigonometry", "Honors Algebra II with Trigonometry","Pre-Calculus", "Honors PreCal", "AP Statistics"]], [11, "English", ["British Literature","AP English Language"]], [11, "History", ["U.S. History","AP U.S. History"]], [11, "Theology", ["The Paschal Mystery", "Contemporary Moral Issues"]], [11, "Science", ["Chemistry","Honors Chemistry","Marine Biology", "Physiology", "AP Chemistry", "AP Biology"]], [12, "Math", ["Pre-Calculus", "Honors PreCal", "AP Statistics","Statistic and Probability", "Discrete Math Topics", "Advanced Algebra with Financial Applications", "AP Calculus"]], [12, "English", ["AP English Literature","Ethnic Women Writers","LA Noir Mystery Fiction","Shakespeare B","Women in Literature","Exploring Monsters in Lit","Creative Writing"]], [12, "History", ["Economics A","U.S Government","Economics B","AP U.S. Government","Supreme Court"]], [12, "Theology", ["Spirituality in Literature","Women's Studies","Working Towards Justice and Peace","Religions of the World"]], [12, "Science", [ "Engineering", "Physics", "Marine Biology", "AP Biology", "Physiology", "AP Chemistry"]]
    ];
    
var languagecourses = ["Spanish I", "Spanish II", "Spanish III", "Spanish IV", "AP Spanish Language", "French I", "French II", "French III", "French IV" ];

var booksByCourse = {
    "Algebra I":["Glencoe Algebra 1 2014"], "Geometry":["Holt Geometry Student Edition"], "Honors Geometry":["Holt Geometry Student Edition"], "Algebra II with Trigonometry":["Algebra 2 (2011 Edition)"], "Honors Algebra II with Trigonometry":["Algebra 2 (2011 Edition)"], "Pre-Calculus":["Precalculus Enhanced with Graphing Utilities, 6th Edition"], "Honors PreCal":[], "AP Statistics":[], "Statistic and Probability":["Statistics Through Applications"], "Discrete Math Topics":[], "Advanced Algebra with Financial Applications":["Financial Algebra: Advanced Algebra with Financial Applications "],"World Civilizations I":["World History(National Edition) Patterns of Interaction"], "Honors World Civilizations I":["World History, Volume I: To 1800 8th Edition"], "World Civilizations II":["World History(National Edition) Patterns of Interaction"], "AP European History":["Western Civilization: Alternate Volume: Since 1300, Seventh Edition"], "U.S. History":["America: Pathways to the Present - Modern American History"], "AP U.S. History":["American Pageant (AP* Edition)"], "Economics A":["Principles of Economics, 7th Edition"], "U.S Government":["American Government: Brief Version, 11th Edition"], "Economics B":["Principles of Economics, 7th Edition"], "AP U.S. Government":["Government by the People, AP* Edition, 25/E"],"The Sacred Scriptures & The New Testament":["Sacred Scripture: A Catholic Study of God's Word", "The Message Remix"], "Love, Choices and Vocations":["Responding to the Call of Jesus Christ", "Tattoos on the Heart: The Power of Boundless Compassion"], "Sacraments Church & Liturgy":["The Sacraments: Encounters With Christ (Student Text)", "Tattoos on the Heart: The Power of Boundless Compassion"], "The Paschal Mystery":["New Seeds of Contemplation", "The Little Prince"], "Contemporary Moral Issues":["Growing in Christian Morality", "Living and Loving as Disciples of Christ"], "Spirituality in Literature":["Tuesdays with Morrie", "An American Childhood", "Small Wonder: Essays", "Gift from the Sea"], "Women's Studies":[], "Working Towards Justice and Peace":["Justice: What's the Right Thing to Do?"], "Religions of the World":["World Religions: A Voyage of Discovery, 4th Edition"],"Biology":["Houghton Mifflin Harcourt Biology"], "Honors Biology":["Biology: Concepts and Connections"], "Chemistry":["Introductory Chemistry: A Foundation"], "Honors Chemistry":["Chemistry: The Central Science (12th Edition)"], "Engineering ":[], "Physics":["Holt Physics"], "Marine Biology":["Marine Biology, 9th Edition", "Marine Biology Coloring Book"], "AP Biology":["Campbell Biology in Focus"], "Physiology":["Essentials of Human Anatomy & Physiology [Eleventh Editon]"], "Spanish I":["Descubre 2014, Level 1", "Descubre 1: Cuaderno de Practica"], "Spanish II": ["Descubre 2014, Level 2", "Descubre 2: Cuaderno de Practica"], "Spanish III":["Descubre 2014, Level 3", "Descubre 3: Cuaderno de Practica"], "AP Spanish Language":["Temas", "AP Spanish, Preparing for the Language and Culture Examination"], "French I":["T'es branché? Level 1", "T'es branché? Level One: Student Edition Workbook"], "French II":["T'es branché? Level 2", "T'es branché? Level Two: Student Edition Workbook"], "French III":["T'es branché? Level 3", "T'es branché? Level Three: Student Edition Workbook"], "French IV":["T'es branché? Level 4", "T'es branché? Level Four: Student Edition Workbook"]

}
 var pictureshash= {
 "Glencoe Algebra 1 2014":["https://guideimg.alibaba.com/images/shop/2016/09/08/63/algebra-1-common-core-teachers-edition-by-john-a.-carter-gilbert-j.-cuevas-roger-day-carol-mallory-dinah-zike-jay-mctigh_25317463.jpeg"],"Holt Geometry Student Edition":["https://images-na.ssl-images-amazon.com/images/I/51rH9wo2XFL._SX375_BO1,204,203,200_.jpg"], "Holt Geometry Student Edition":["https://images-na.ssl-images-amazon.com/images/I/51rH9wo2XFL._SX375_BO1,204,203,200_.jpg"], "Algebra 2 (2011 Edition)":["https://images-na.ssl-images-amazon.com/images/I/91Q0zfuyEAL._AC_UL320_SR258,320_.jpg"],"Precalculus Enhanced with Graphing Utilities, 6th Edition":["https://images-na.ssl-images-amazon.com/images/I/51huP-BE8FL._SX363_BO1,204,203,200_.jpg"], "Statistics Through Applications":["https://images-na.ssl-images-amazon.com/images/I/515YbDV3R5L._SX383_BO1,204,203,200_.jpg"],"Financial Algebra: Advanced Algebra with Financial Applications":["http://pages.nxtbook.com/nxtbooks/ngsp/financialalgebra_advanced2ndedition/iphone/ngsp_financialalgebra_advanced2ndedition_p0001_hires.jpg"], "World History(National Edition)Patterns of Interaction":["https://images-na.ssl-images-amazon.com/images/I/912gOC3ZbLL.jpg"],"World History, Volume I: To 1800 8th Edition":["https://images-na.ssl-images-amazon.com/images/I/51JY4b8NnxL._SX388_BO1,204,203,200_.jpg"],"Western Civilization: Alternate Volume: Since 1300, Seventh Edition":["https://pictures.abebooks.com/isbn/9780495555285-us.jpg" ],"America: Pathways to the Present - Modern American History":[ "https://images-na.ssl-images-amazon.com/images/I/514KRvrwHhL._SX379_BO1,204,203,200_.jpg"],"American Pageant (AP* Edition)":["https://images-na.ssl-images-amazon.com/images/I/613RBr2qsLL.jpg"], "Principles of Economics, 7th Edition":["https://images-na.ssl-images-amazon.com/images/I/51yTB68wLtL._SX423_BO1,204,203,200_.jpg"],"American Government: Brief Version, 11th Edition":["https://images-na.ssl-images-amazon.com/images/I/51GL74-lo9L._SX402_BO1,204,203,200_.jpg"],"Principles of Economics, 7th Edition":[ "https://images-na.ssl-images-amazon.com/images/I/51yTB68wLtL._SX423_BO1,204,203,200_.jpg"],"Government by the People, AP* Edition, 25/E":["https://www.pearsonhighered.com/assets/bigcovers/0/1/3/2/0132566974.jpg"],"Sacred Scripture: A Catholic Study of God's Word":["https://images-na.ssl-images-amazon.com/images/I/51CJ3JOpPcL._SX258_BO1,204,203,200_.jpg"],"The Message Remix":["https://images.gr-assets.com/books/1439321322l/842746.jpg"], "Responding to the Call of Jesus Christ":["https://www.comcenter.com/size/files/1ff1856177e4d21fa44ac8121e2d6c6f/veri-305497.jpg.710x.jpg"],"Tattoos on the Heart: The Power of Boundless Compassion":["https://images-na.ssl-images-amazon.com/images/I/51X9jU3SvBL._SX324_BO1,204,203,200_.jpg"],"The Sacraments: Encounters With Christ (Student Text)":["https://images-na.ssl-images-amazon.com/images/I/51U98ysDkXL._SX332_BO1,204,203,200_.jpg"], "New Seeds of Contemplation":["https://images-na.ssl-images-amazon.com/images/I/51NTWuRIomL._SX322_BO1,204,203,200_.jpg"], "The Little Prince":["https://images-na.ssl-images-amazon.com/images/I/51uWEc5jV7L._SX258_BO1,204,203,200_.jpg"],"Growing in Christian Morality":["https://images-na.ssl-images-amazon.com/images/I/51hmNY7cIyL._SX258_BO1,204,203,200_.jpg"], "Living and Loving as Disciples of Christ":["https://www.comcenter.com/size/files/9dfb57ca0f80de644b5d731f0ef095df/veri-302847.jpg.710x.jpg"],"Tuesdays with Morrie":["https://images-na.ssl-images-amazon.com/images/I/41Xo3rlQT%2BL._SX311_BO1,204,203,200_.jpg"],"An American Childhood":["https://images-na.ssl-images-amazon.com/images/I/41G38l4VzZL._SX331_BO1,204,203,200_.jpg"], "Small Wonder: Essays":["https://images-na.ssl-images-amazon.com/images/I/51asNdO68uL._SX330_BO1,204,203,200_.jpg"],"Gift from the Sea":["https://images-na.ssl-images-amazon.com/images/I/41gB0dGlXBL._SX318_BO1,204,203,200_.jpg"],"Justice: What's the Right Thing to Do?":["https://images-na.ssl-images-amazon.com/images/I/41LqwCGYUmL._SX328_BO1,204,203,200_.jpg"],"World Religions: A Voyage of Discovery, 4th Edition":["https://images-na.ssl-images-amazon.com/images/I/51D6mOjRoNL._SX258_BO1,204,203,200_.jpg"],"Houghton Mifflin Harcourt Biology":["https://images-na.ssl-images-amazon.com/images/I/519G8S6KzmL._SX391_BO1,204,203,200_.jpg"],"Biology: Concepts and Connections":["https://images-na.ssl-images-amazon.com/images/I/51KiQztb8XL._AC_UL320_SR264,320_.jpg"],"Introductory Chemistry: A Foundation":["https://images-na.ssl-images-amazon.com/images/I/51yflqMFSSL._SX385_BO1,204,203,200_.jpg"],"Chemistry: The Central Science (12th Edition)":["https://images-na.ssl-images-amazon.com/images/I/518CB5pYvXL._SX258_BO1,204,203,200_.jpg"],"Holt Physics":["https://pictures.abebooks.com/isbn/9780030368172-us.jpg"],"Marine Biology, 9th Edition":["https://images-na.ssl-images-amazon.com/images/I/41M53NsBhpL._SX399_BO1,204,203,200_.jpg"], "Marine Biology Coloring Book":["https://images-na.ssl-images-amazon.com/images/I/61Ckcf13Z6L._SX382_BO1,204,203,200_.jpg"],"Campbell Biology in Focus":["https://images-na.ssl-images-amazon.com/images/I/514yn255rxL._SX412_BO1,204,203,200_.jpg"],"Essentials of Human Anatomy & Physiology [Eleventh Editon]":["https://www.pearsonhighered.com/assets/bigcovers/0/3/2/1/0321799992.jpg"],"Descubre 2014, Level 1":["https://images-na.ssl-images-amazon.com/images/I/51%2BC97Q6qJL._SX360_BO1,204,203,200_.jpg"], "Descubre 1: Cuaderno de Practica":["https://images-na.ssl-images-amazon.com/images/I/61uYeBeY3xL._SX383_BO1,204,203,200_.jpg"],"Descubre 2014, Level 2":["https://images-na.ssl-images-amazon.com/images/I/A1sHg2GUkWL._AC_UL320_SR248,320_.jpg"], "Descubre 2: Cuaderno de Practica":["https://images-na.ssl-images-amazon.com/images/I/A1sHg2GUkWL.jpg"],"Descubre 2014, Level 3":["https://images-na.ssl-images-amazon.com/images/I/A1gKnSHFv2L._AC_UL320_SR246,320_.jpg"], "Descubre 3: Cuaderno de Practica":["https://images-na.ssl-images-amazon.com/images/I/51LHohOMk1L._SX381_BO1,204,203,200_.jpg"],"Temas":["https://vistahigherlearning.com/media/catalog/product/cache/a287e3aa69c39507a37488dc63e2d379/t/e/temas1e_cover_1_5.jpg"], "AP Spanish, Preparing for the Language and Culture Examination":["https://images-na.ssl-images-amazon.com/images/I/518f-%2BisqjL._SX373_BO1,204,203,200_.jpg"],"T'es branché? Level 1":["http://emclanguages.com/tes-branche/TEB1.jpg"], "T'es branché? Level One: Student Edition Workbook":["https://images-na.ssl-images-amazon.com/images/I/91Uj8ssw5oL._SY450_.jpg"],"T'es branché? Level 2":["http://emclanguages.com/tes-branche/TEB1.jpg"], "T'es branché? Level Two: Student Edition Workbook":["https://images-na.ssl-images-amazon.com/images/I/51fvU1yqOcL._SX258_BO1,204,203,200_.jpg"],"T'es branché? Level 3":["https://images-na.ssl-images-amazon.com/images/I/91a0USu8bcL.jpg"], "T'es branché? Level Three: Student Edition Workbook":["https://images-na.ssl-images-amazon.com/images/I/91zU2n5rMFL.jpg"],"T'es branché? Level 4":["http://store.emcp.com/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/t/e/teb_level_4.jpg"], "T'es branché? Level Four: Student Edition Workbook":["https://images-na.ssl-images-amazon.com/images/I/91Uj8ssw5oL._SY550_.jpg"]


 }
//Testing that the books work => THEY DO!
// for (var c in booksByCourse){
//     console.log(c)
//     console.log(booksByCourse[c])
// }


//populates the courses based on grade level and subject
function populate(subject,grade,course) 
    
{

var subject = document.getElementById(subject);

var grade = document.getElementById(grade);

var course = document.getElementById(course);



 if (subject.value== "Language"){
  for(var option in languagecourses){
     var langpair = languagecourses[option];
     var newOption = document.createElement("option");
     newOption.value = langpair;
     newOption.innerHTML=langpair;
     course.options.add(newOption);
 } 
  }
            
      
     
 
for (var i=0;i<geninfo.length;i++){
    if (geninfo[i][0]== grade.value && geninfo[i][1]==subject.value)
    { 
        var choicesArray= geninfo[i][2];
        console.log(choicesArray);
    }
}
for(var option in choicesArray){
    var pair = choicesArray[option];
    console.log(pair);
    var newOption = document.createElement("option");
    newOption.value = pair;
    newOption.innerHTML=pair;
    course.options.add(newOption);
}
}

function changestatus(id){
    console.log(id);
    var statusvalue= document.getElementById(`newStatus${id}`).value;
    var thedoc= firebase.firestore().collection('books').doc(id);
    thedoc.update({
        status: statusvalue
       
    })
    alert("Status changed sucessfully! Reload page to see changes")
}


//populates the book based on course
function populateBooks(course, book){
    
    var course= document.getElementById('Class').value;
    console.log(course);
    var book = document.getElementById(book);
    

    
    for(var c in booksByCourse){
      //trying to find the course, then display the books
      if (course == c){
           //populate options with the value (and the value is a list)
           var booksList = booksByCourse[c];
           console.log(booksList);
      }
    }
      for( var selection in booksList){
          var choice= booksList[selection];
          console.log(booksList);
          var newOption= document.createElement("option");
          console.log(newOption);
          newOption.value= choice;
          newOption.innerHTML= choice;
          book.options.add(newOption);
      }
           
}
    
function uploadingBooks(){
    console.log("okay");
    var subjectSelect = document.getElementById('Subject').value
    var gradeSelect = document.getElementById('Grade').value
    var classSelect = document.getElementById('Class').value
    var booktitleSelect= document.getElementById('Book').value
    var conditionSelect = document.getElementById('Condition').value
    var priceSelect= document.getElementById('Price').value
    var currentUser = firebase.auth().currentUser;

    if (!currentUser){
        alert('no current user')
    }
    var uid= currentUser.uid //user unique id
    var newBookRef = firebase.firestore().collection('books').doc()
    newBookRef.set({
        condition: conditionSelect,
        course: classSelect,
        grade_level: gradeSelect,
        price: priceSelect,
        seller: currentUser.email,
        status: "Available",
        title:  booktitleSelect,
        timestamp: new Date(),
    })
    window.location.replace("sellerpage.html");
}

/*SELLER INFO PAGE FUNCTIONS*/

function displayUserProfile(user){
    
    document.getElementById('my-email').textContent = user.email
    // .innerHTML = ` <p id="welcome-name" class="tm-banner-subtitle">Welcome back ${user.displayName}</p>`
}
// function displayUserEmail(user) {
//         document.getElementById('my-email').textContent = user.email
        
//         document.getElementById('my-email').innerHTML = ` <p id="my-email" > Email: ${user.email}</p>`
// }

function loadSellersBooks(){
    console.log(loggedInUser)
    var user = loggedInUser
    console.log(user)
    // var currentUser = firebase.auth().currentUser;
    // console.log(currentUser);
    // var b = firebase.firestore().collection('books'); /*global firebase*/
    // console.log(b.doc);
    var user_email = user.email
    // document.getElementById('my-email').textContent;
   
    firebase.firestore().collection('books')
    .where('seller','==', user_email)
    .get()
    .then(function(querySnapshot){
        var resultingHTML = ''
        querySnapshot.forEach(function(doc){
            var data = doc.data()
            var docID = doc.id
            var status= data.status
            if (status == "in_progress"){
                var status= "In Progress";
            }
            for(var c in pictureshash){
                if (c== data.title){
                    var imgsrc= pictureshash[c][0];

                }
            }
           
            resultingHTML += `<div class="row mb-5">
                                 <div class="media tm-flexbox-ie-fix tm-width-ie-fix book">
                                    <div class="tm-media-img-container">
                                        <div class="text-center pt-31 pb-31 tm-timeline-date tm-bg-green">${status}</div>
                                <img class="d-flex img-fluid" src="${imgsrc}">
                            </div>
                          
                          <div class="media-body tm-flexbox-ie-fix tm-width-ie-fix tm-bg-light-gray ">
                            <div class="p-5">
                                <h1 class="mb-4 mt-0 tm-timeline-item-title">Book Title: ${data.title}</h1>
                                <h2 class="mb-4">Seller Email: ${data.seller}</h2>
                                <h2 class="mb-4">Course Name: ${data.course}</h2>
                                <h2 class="mb-4">Price: $${data.price}</h2>
                                <h2 class="mb-4">Condition: ${data.condition}</h2>
                                <h3 class="mb-4 mt-0 tm-timeline-item-title">Change Status Of Book:</h3>
                                <select id="newStatus${docID}" name= "NewStatus" class="status-dropdown">
                                    <option value= "available">Available</option>
                                    <option value= "in_progress">In Progress</option>
                                    <option value= "sold">Sold</option> 
                                </select>
                                <button type="submit" class="changestatus" id="${docID}" onclick="changestatus(this.id)">Submit</button>
                        
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
         document.getElementById('resultsbooks').innerHTML=resultingHTML

    })
}



// /* EMAIL -- Don't touch right now*/
// const functions = require('firebase-functions');
// const nodemailer = require('nodemailer');
// // Configure the email transport using the default SMTP transport and a GMail account.
// // For Gmail, enable these:
// // 1. https://www.google.com/settings/security/lesssecureapps
// // 2. https://accounts.google.com/DisplayUnlockCaptcha
// // For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// // TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
// const gmailEmail = functions.config().gmail.email;
// const gmailPassword = functions.config().gmail.password;
// const mailTransport = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: gmailEmail,
//     pass: gmailPassword,
//   },
// });

// function sendWelcomeEmail(email, displayName) {
//   const mailOptions = {
//     from: `IH Bookstore <noreply@firebase.com>`,
//     to: email,
//   };

//   // The user subscribed to the newsletter.
//   mailOptions.subject = `Welcome to the IH Bookstore!`;
//   mailOptions.text = `Hey ${displayName || ''}! Welcome to the IH Bookstore. I hope you will enjoy our service.`;
//   return mailTransport.sendMail(mailOptions).then(() => {
//     return console.log('New welcome email sent to:', email);
//   });
// }

//almost works, problem with getting the infromation from the timeline pg to the sendemail 
function emails(email, booktitle){
    console.log("yes");
// var w =window.location.href
// if (w== "https://preview.c9users.io/linkacleo1/book-app/bookapp/timeline.html"){
// var email= document.getElementById('selleremail').innerHTML
// console.log(email);
// var booktitle= document.getElementById('emailbook').innerHTML
// console.log(booktitle);
// }
// console.log(email);
// var resultingHTML=''
// resultingHTML += `
// <div class="container">
//     <label for="subject">Hello, I would like to purchse the book: ${booktitle} </label>
//     <input type="text" id="subject" name="subject" placeholder="Email subject...">

//     <label for="message">Message</label>
//     <textarea id="message" name="message" placeholder="Type message..." style="height:200px"></textarea>

//     <input type="submit" value="Submit">
// </div>`

//this code works if its okay to do it like this
var subject = (booktitle);
var body = ('');

document.write('<body style="padding-top:300px;"><center><button type="button" style="font-size: 80;border: 5px solid #349999;background-color: #349999;"><a style="color: black;text-decoration: none;font-family: "Trebuchet MS", Helvetica, sans-serif;" href="mailto:' + email+

'?subject=' +subject+
'&body=' +body+

'">' + 'Click To Contact Seller ' + '<' + '/a></button></center></body>');
}

 var pictureshash= {
 "Glencoe Algebra 1 2014":["https://guideimg.alibaba.com/images/shop/2016/09/08/63/algebra-1-common-core-teachers-edition-by-john-a.-carter-gilbert-j.-cuevas-roger-day-carol-mallory-dinah-zike-jay-mctigh_25317463.jpeg"],"Holt Geometry Student Edition":["https://images-na.ssl-images-amazon.com/images/I/51rH9wo2XFL._SX375_BO1,204,203,200_.jpg"], "Holt Geometry Student Edition":["https://images-na.ssl-images-amazon.com/images/I/51rH9wo2XFL._SX375_BO1,204,203,200_.jpg"], "Algebra 2 (2011 Edition)":["https://images-na.ssl-images-amazon.com/images/I/91Q0zfuyEAL._AC_UL320_SR258,320_.jpg"],"Precalculus Enhanced with Graphing Utilities, 6th Edition":["https://images-na.ssl-images-amazon.com/images/I/51huP-BE8FL._SX363_BO1,204,203,200_.jpg"], "Statistics Through Applications":["https://images-na.ssl-images-amazon.com/images/I/515YbDV3R5L._SX383_BO1,204,203,200_.jpg"],"Financial Algebra: Advanced Algebra with Financial Applications":["http://pages.nxtbook.com/nxtbooks/ngsp/financialalgebra_advanced2ndedition/iphone/ngsp_financialalgebra_advanced2ndedition_p0001_hires.jpg"], "World History(National Edition)Patterns of Interaction":["https://images-na.ssl-images-amazon.com/images/I/912gOC3ZbLL.jpg"],"World History, Volume I: To 1800 8th Edition":["https://images-na.ssl-images-amazon.com/images/I/51JY4b8NnxL._SX388_BO1,204,203,200_.jpg"],"Western Civilization: Alternate Volume: Since 1300, Seventh Edition":["https://pictures.abebooks.com/isbn/9780495555285-us.jpg" ],"America: Pathways to the Present - Modern American History":[ "https://images-na.ssl-images-amazon.com/images/I/514KRvrwHhL._SX379_BO1,204,203,200_.jpg"],"American Pageant (AP* Edition)":["https://images-na.ssl-images-amazon.com/images/I/613RBr2qsLL.jpg"], "Principles of Economics, 7th Edition":["https://images-na.ssl-images-amazon.com/images/I/51yTB68wLtL._SX423_BO1,204,203,200_.jpg"],"American Government: Brief Version, 11th Edition":["https://images-na.ssl-images-amazon.com/images/I/51GL74-lo9L._SX402_BO1,204,203,200_.jpg"],"Principles of Economics, 7th Edition":[ "https://images-na.ssl-images-amazon.com/images/I/51yTB68wLtL._SX423_BO1,204,203,200_.jpg"],"Government by the People, AP* Edition, 25/E":["https://www.pearsonhighered.com/assets/bigcovers/0/1/3/2/0132566974.jpg"],"Sacred Scripture: A Catholic Study of God's Word":["https://images-na.ssl-images-amazon.com/images/I/51CJ3JOpPcL._SX258_BO1,204,203,200_.jpg"],"The Message Remix":["https://images.gr-assets.com/books/1439321322l/842746.jpg"], "Responding to the Call of Jesus Christ":["https://www.comcenter.com/size/files/1ff1856177e4d21fa44ac8121e2d6c6f/veri-305497.jpg.710x.jpg"],"Tattoos on the Heart: The Power of Boundless Compassion":["https://images-na.ssl-images-amazon.com/images/I/51X9jU3SvBL._SX324_BO1,204,203,200_.jpg"],"The Sacraments: Encounters With Christ (Student Text)":["https://images-na.ssl-images-amazon.com/images/I/51U98ysDkXL._SX332_BO1,204,203,200_.jpg"], "New Seeds of Contemplation":["https://images-na.ssl-images-amazon.com/images/I/51NTWuRIomL._SX322_BO1,204,203,200_.jpg"], "The Little Prince":["https://images-na.ssl-images-amazon.com/images/I/51uWEc5jV7L._SX258_BO1,204,203,200_.jpg"],"Growing in Christian Morality":["https://images-na.ssl-images-amazon.com/images/I/51hmNY7cIyL._SX258_BO1,204,203,200_.jpg"], "Living and Loving as Disciples of Christ":["https://www.comcenter.com/size/files/9dfb57ca0f80de644b5d731f0ef095df/veri-302847.jpg.710x.jpg"],"Tuesdays with Morrie":["https://images-na.ssl-images-amazon.com/images/I/41Xo3rlQT%2BL._SX311_BO1,204,203,200_.jpg"],"An American Childhood":["https://images-na.ssl-images-amazon.com/images/I/41G38l4VzZL._SX331_BO1,204,203,200_.jpg"], "Small Wonder: Essays":["https://images-na.ssl-images-amazon.com/images/I/51asNdO68uL._SX330_BO1,204,203,200_.jpg"],"Gift from the Sea":["https://images-na.ssl-images-amazon.com/images/I/41gB0dGlXBL._SX318_BO1,204,203,200_.jpg"],"Justice: What's the Right Thing to Do?":["https://images-na.ssl-images-amazon.com/images/I/41LqwCGYUmL._SX328_BO1,204,203,200_.jpg"],"World Religions: A Voyage of Discovery, 4th Edition":["https://images-na.ssl-images-amazon.com/images/I/51D6mOjRoNL._SX258_BO1,204,203,200_.jpg"],"Houghton Mifflin Harcourt Biology":["http://prodimage.images-bn.com/pimages/9780547687728_p0_v1_s1200x630.jpg"],"Biology: Concepts and Connections":["https://images-na.ssl-images-amazon.com/images/I/51KiQztb8XL._AC_UL320_SR264,320_.jpg"],"Introductory Chemistry: A Foundation":["https://images-na.ssl-images-amazon.com/images/I/51yflqMFSSL._SX385_BO1,204,203,200_.jpg"],"Chemistry: The Central Science (12th Edition)":["https://images-na.ssl-images-amazon.com/images/I/518CB5pYvXL._SX258_BO1,204,203,200_.jpg"],"Holt Physics":["https://pictures.abebooks.com/isbn/9780030368172-us.jpg"],"Marine Biology, 9th Edition":["https://images-na.ssl-images-amazon.com/images/I/41M53NsBhpL._SX399_BO1,204,203,200_.jpg"], "Marine Biology Coloring Book":["https://images-na.ssl-images-amazon.com/images/I/61Ckcf13Z6L._SX382_BO1,204,203,200_.jpg"],"Campbell Biology in Focus":["https://images-na.ssl-images-amazon.com/images/I/514yn255rxL._SX412_BO1,204,203,200_.jpg"],"Essentials of Human Anatomy & Physiology [Eleventh Editon]":["https://www.pearsonhighered.com/assets/bigcovers/0/3/2/1/0321799992.jpg"],"Descubre 2014, Level 1":["https://images-na.ssl-images-amazon.com/images/I/51%2BC97Q6qJL._SX360_BO1,204,203,200_.jpg"], "Descubre 1: Cuaderno de Practica":["https://images-na.ssl-images-amazon.com/images/I/61uYeBeY3xL._SX383_BO1,204,203,200_.jpg"],"Descubre 2014, Level 2":["https://images-na.ssl-images-amazon.com/images/I/A1sHg2GUkWL._AC_UL320_SR248,320_.jpg"], "Descubre 2: Cuaderno de Practica":["https://images-na.ssl-images-amazon.com/images/I/A1sHg2GUkWL.jpg"],"Descubre 2014, Level 3":["https://images-na.ssl-images-amazon.com/images/I/A1gKnSHFv2L._AC_UL320_SR246,320_.jpg"], "Descubre 3: Cuaderno de Practica":["https://images-na.ssl-images-amazon.com/images/I/51LHohOMk1L._SX381_BO1,204,203,200_.jpg"],"Temas":["https://vistahigherlearning.com/media/catalog/product/cache/a287e3aa69c39507a37488dc63e2d379/t/e/temas1e_cover_1_5.jpg"], "AP Spanish, Preparing for the Language and Culture Examination":["https://images-na.ssl-images-amazon.com/images/I/518f-%2BisqjL._SX373_BO1,204,203,200_.jpg"],"T'es branché? Level 1":["http://emclanguages.com/tes-branche/TEB1.jpg"], "T'es branché? Level One: Student Edition Workbook":["https://images-na.ssl-images-amazon.com/images/I/91Uj8ssw5oL._SY450_.jpg"],"T'es branché? Level 2":["http://emclanguages.com/tes-branche/TEB1.jpg"], "T'es branché? Level Two: Student Edition Workbook":["https://images-na.ssl-images-amazon.com/images/I/51fvU1yqOcL._SX258_BO1,204,203,200_.jpg"],"T'es branché? Level 3":["https://images-na.ssl-images-amazon.com/images/I/91a0USu8bcL.jpg"], "T'es branché? Level Three: Student Edition Workbook":["https://images-na.ssl-images-amazon.com/images/I/91zU2n5rMFL.jpg"],"T'es branché? Level 4":["http://store.emcp.com/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/t/e/teb_level_4.jpg"], "T'es branché? Level Four: Student Edition Workbook":["https://images-na.ssl-images-amazon.com/images/I/91Uj8ssw5oL._SY550_.jpg"]
}
function loadAllBooks(){
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
                            placeholder="Search for books by Title.." size="28">
                            <button onclick="loadSearchedBooks()">Search</button>
                        </div>
                    
                    </br>
                </div>`
        querySnapshot.forEach(function(doc){
            var data = doc.data()
            var docID = doc.id
            console.log(docID);
            var email = data.seller;
            var booktitle= data.title;
            // for(i = 0; i < booktitle.length; i++) {
            // booktitle = booktitle.replace(" ", "_");
            // }
            console.log( typeof "email")
            console.log( typeof "booktitle")
            console.log(booktitle);
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
                                <h1 class="mb-4 mt-0 tm-timeline-item-title">Book Title: <p id="emailbook"> ${data.title}</p></h1>
                                <h2 class="mb-4">Seller Email: <p id="selleremail">${data.seller}</p></h2>
                                <h2 class="mb-4">Course Name: ${data.course}</h2>
                                <h2 class="mb-4">Price: ${data.price}</h2>
                                <h2 class="mb-4">Condition: ${data.condition}</h2>
                                <p id="docID">${docID}</p>

                            </div>
                                </div>
                                <h2></h2>
                                <a class="btn btn-primary tm-button-rounded tm-button-no-border tm-button-normal tm-button-timeline" onclick = "emails('${email}', '${booktitle}')">Buy Book</a> 

                                </div>
                            </div> <!-- row -->`
            
            // var email = data.seller
            // var booktitle= data.title
            // console.log(email)
            // if()
            // emails(email, booktitle);
                            
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
function loadSearchedBooks(){
    var b = firebase.firestore().collection('books');
    console.log(b.doc)
    var searchTerm = document.getElementById('mySearch').value
    firebase.firestore().collection('books')
    .where('status','==',"available")
    .get()
    .then(function(querySnapshot){
        var resultingHTML = `
                <div class="row buydiv">
                    
                        <div id="searchbar">
                            <div id="searchbar">
                            <input type="search" id="mySearch" name="q"
                            placeholder="Search for books by Title.." size="28">
                            <button onclick="loadSearchedBooks()">Search</button>
                        </div>
                    
                    </br>
                </div>`
        querySnapshot.forEach(function(doc){
            var data = doc.data()
            var docID= doc.id
            var status= data.status
            console.log(searchTerm)
            if(data.title.toLowerCase().includes(searchTerm.toLowerCase()) || data.course.toLowerCase().includes(searchTerm.toLowerCase())){ 
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
                                    <h1 class="mb-4 mt-0 tm-timeline-item-title">Book Title:<p id="emailbook"> ${data.title} </p></h1>
                                    <h2 class="mb-4">Seller Email: <p id="selleremail_${docID}">${data.seller}</p></h2>
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

