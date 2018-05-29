function populate(grade,subj){
    
    /*
    1) Create an array OR a hash with all of the grade levels, subjects and courses
    2) Select the corresponding books based on the user inputs
    3) Populate a new dropdown field with all of the course options 
    4) Repeat the process for courses and books
    
    */
    
    
    

 for(var option in optionArray){
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML=pair[1];
        s2.options.add(newOption);
    }
    
}