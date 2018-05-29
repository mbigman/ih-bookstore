var geninfo = [
    [9, "Math", ["Algebra I", "Geometry", "Honors Geometry"]], [9, "English", ["English I","Honors English I"]], [9, "History", ["World Civilizations I","Honors World Civilizations I"]], [9, "Theology", ["The Sacred Scriptures","The New Testament"]], [9, "Science", ["Biology","Honors Biology"]], [10, "Math", ["Geometry","Honors Geometry", "Algebra II with Trigonometry", "Honors Algebra II with Trigonometry"]], [10, "English", ["American Literature","Honors American Literature"]], [10, "History", ["World Civilizations II","AP European History"]], [10, "Theology", ["Love, Choices and Vocations","Sacraments Church & Liturgy"]], [10, "Science", [ "Chemistry","Honors Chemistry", "Biology", "Honors Biology"]], [11, "Math", ["Algebra II with Trigonometry", "Honors Algebra II with Trigonometry","Pre-Calculus", "Honors PreCal", "AP Statistics"]], [11, "English", ["British Literature","AP English Language"]], [11, "History", ["U.S. History","AP U.S. History"]], [11, "Theology", ["The Paschal Mystery", "Contemporary Moral Issues"]], [11, "Science", ["Chemistry","Honors Chemistry","Marine Biology", "Physiology", "AP Chemistry", "AP Biology"]], [12, "Math", ["Pre-Calculus", "Honors PreCal", "AP Statistics","Statistic and Probability", "Discrete Math Topics", "Advanced Algebra with Financial Applications", "AP Calculus"]], [12, "English", ["AP English Literature","Ethnic Women Writers","LA Noir Mystery Fiction","Shakespeare B","Women in Literature","Exploring Monsters in Lit","Creative Writing"]], [12, "History", ["Economics A","U.S Government","Economics B","AP U.S. Government","Supreme Court"]], [12, "Theology", ["Spirituality in Literature","Women's Studies","Working Towards Justice and Peace","Religions of the World"]], [12, "Science", [ "Engineering", "Physics", "Marine Biology", "AP Biology", "Physiology", "AP Chemistry"]]
    ];

var booksByCourse = {
    "Algebra I":["Glencoe Algebra 1 2014"], "Geometry":["Holt Geometry Student Edition"], "Honors Geometry":["Holt Geometry Student Edition"], "Algebra II with Trigonometry":["Algebra 2 (2011 Edition)"], "Honors Algebra II with Trigonometry":["Algebra 2 (2011 Edition)"], "Pre-Calculus":["Precalculus Enhanced with Graphing Utilities, 6th Edition"], "Honors PreCal":[], "AP Statistics":[], "Statistic and Probability":["Statistics Through Applications"], "Discrete Math Topics":[], "Advanced Algebra with Financial Applications":["Financial Algebra: Advanced Algebra with Financial Applications "],"World Civilizations I":["World History(National Edition)\nPatterns of Interaction"], "Honors World Civilizations I":["World History, Volume I: To 1800 8th Edition"], "World Civilizations II":["World History(National Edition)\nPatterns of Interaction"], "AP European History":["Western Civilization: Alternate Volume: Since 1300, Seventh Edition"], "U.S. History":["America: Pathways to the Present - Modern American History"], "AP U.S. History":["American Pageant (AP* Edition),"], "Economics A":["Principles of Economics, 7th Edition"], "U.S Government":["American Government: Brief Version, 11th Edition"], "Economics B":["Principles of Economics, 7th Edition"], "AP U.S. Government":["Government by the People, AP* Edition, 25/E"],"The Sacred Scriptures & The New Testament":["Sacred Scripture: A Catholic Study of God's Word", "The Message Remix"], "Love, Choices and Vocations":["Responding to the Call of Jesus Christ", "Tattoos on the Heart: The Power of Boundless Compassion"], "Sacraments Church & Liturgy":["The Sacraments: Encounters With Christ (Student Text)", "Tattoos on the Heart: The Power of Boundless Compassion"], "The Paschal Mystery":["New Seeds of Contemplation", "The Little Prince"], "Contemporary Moral Issues":["Growing in Christian Morality", "Living and Loving as Disciples of Christ"], "Spirituality in Literature":["Tuesdays with Morrie", "An American Childhood", "Small Wonder: Essays", "Gift from the Sea"], "Women's Studies":[], "Working Towards Justice and Peace":["Justice: What's the Right Thing to Do?"], "Religions of the World":["World Religions: A Voyage of Discovery, 4th Edition"],"Biology":["Houghton Mifflin Harcourt Biology\n"], "Honors Biology":["Biology: Concepts and Connections"], "Chemistry":["Introductory Chemistry: A Foundation"], "Honors Chemistry":["Chemistry: The Central Science (12th Edition)"], "Engineering ":[], "Physics":["Holt Physics"], "Marine Biology":["Marine Biology, 9th Edition", "Marine Biology Coloring Book"], "AP Biology":["Campbell Biology in Focus"], "Physiology":["Essentials of Human Anatomy & Physiology [Eleventh Editon]"]
    
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


course.innerHTML="";

/**
 * if subject==Ireland print Dublin
 */

for (var i=0;i<geninfo.length;i++){
    if (geninfo[i][0]== grade.value && geninfo[i][1]==subject.value)
    { 
        var choicesArray= geninfo[i][2];
        console.log(choicesArray);
    }
  }
for(var option in choicesArray){
    var pair = choicesArray[option];
    var newOption = document.createElement("option");
    newOption.value = pair;
    newOption.innerHTML=pair;
    course.options.add(newOption);
}
}

//populates the book based on course
function populateBooks(course, book){
    
    var course= document.getElementById('Class').value
    console.log(course);
    var book = document.getElementById(book)
    
    book.innerHTML="";
    
    for(var c in booksByCourse){
      //trying to find the course, then display the books
      if (course == c){
           //populate options with the value (and the value is a list)
           var booksList = booksByCourse[c];
      }
    }
      for( var selection in booksList){
          var choice= booksList[selection];
          var newOption= document.createElement("option");
          console.log(newOption);
          newOption.value= choice;
          newOption.innerHTML= choice;
          book.options.add(newOption);
      }
           
}
    
function uploadingBooks(){
    var subjectSelect = document.getElementById('Subject').value
    var gradeSelect = document.getElementById('Grade').value
    var classSelect = document.getElementById('Class').value
    var booktitleSelect= document.getElementById('Book').value
    var conditionSelect = document.getElementById('Condition').value
    var imageUploaded = document.getElementById('Image').value
    var priceSelect= document.getElementById('Price').value
    var currentUser = firebase.auth().currentUser

    if (!currentUser){
        alert('no current user')
        return
    }
    var uid= currentUser.uid //user unique id
    var newBookRef = firebase.firestore().collection('books').doc()
    newBookRef.set({
        book_img: imageUploaded,
        condition: conditionSelect,
        course: classSelect,
        grade_level: gradeSelect,
        price: priceSelect,
        seller: currentUser.email,
        status: "",
        title:  booktitleSelect,
        timestamp: new Date(),
    })
}

