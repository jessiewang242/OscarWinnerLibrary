var url = "https://raw.githubusercontent.com/jessiewang242/AP-CSP/main/Oscar%20Winners.csv";

const year = getColumn(url,1);
const category = getColumn(url,2);
const nominee = getColumn(url,3);


//function #1

function getMatchYearOscar (matchYear){
  //Create a function called getMatchYearOscar. This function will generate the Oscars in a year the user inputed
  var matchYearOscar = [];
  //We first create a empty list called matchYearOscar
  for (var i in year) {
  //Then loop through the year array in the oscar data
    if (year[i] == matchYear){
    // if the year in the oscar data equal to the year user inputs
      matchYearOscar.push(nominee[i]);
      //push the nominee of that item into the empty list matchYearOscar we created earlier
    }
    
  }
  if(matchYearOscar.length > 0){
  // if there are (more than 0) items in the list matchYearOscar
    return matchYearOscar;
    //return the list matchYearOscar
  }
  else{
    return "No Oscar found in the " + matchYear + " year, try another year.";
    //if not return text "No Oscar found in the __ (whatever year the user inputed) year, try another year"
  }
}

//console.log(getMatchYearOscar(2006));


//function #2

//generate the name of nominees with the category the user inputed
// matchCategory
//irst create a empty array matchCategroy. Then, loop through the list category. if the input cate is included in an item of the category list, return the list matchCategory for this function. push the items in the nominee list and the item in the category list in to a empty list called matchCategory that's created earlier in the function. Push it by the format "'item of nominee' found in 'item of category'". If there are (more than 0) items in the list matchCategory, return the list matchCategory for this function. if not, return text "No nominee found with the __ (category user inputed)category"

function getNomineesInCategory(cate){
  var matchCategory = [];
  for (var i in category){
    if (category[i].includes(cate)){
      matchCategory.push(nominee[i] + " found in " + category[i] + " category");
    }
    
  }
  if (matchCategory.length > 0){
    return matchCategory;
    //
  } 
  else {
    return "No nominee found with the " + cate + " category.";
  }
}

//console.log(getNomineesInCategory("Actor"));




//Fuction #3

function getNumberOfAwardsByYear(chosenYear){
//This function is called getNumberOfAwardsByYear. It will generate the number of Oscar awards that's given out by the year the user inputed
  var count = 0;
  //create a count varible, and set it equal to 0
  for (var i in year){
  //loop through the items in the list year
    if (year[i] == chosenYear){
    //if the item in the year list is equal to the year user inputed
      count ++;
      //count variable plus 1
    }
  }
  return count + " Award found in the chosen year";
  //at the end of the function, return text "__ (number of Award) Award found in the chosen year"
}

//console.log(getNumberOfAwardsByYear(2005));


//Function #4

function getNomineeAfterYear(afterYear){
//create a function called getNomineeAfterYear. This function will generate nominees after the year user inputed (data is only avaliable from 1975 to 2015, anything generated will fall between this range)
  var nomineeAfterYear = [];
  //first create a empty array called nomineeAfterYear
  for (var i in year){
  //then loop through all the items in the list year
    if (year[i] >= afterYear){
    //if the item in the year list equal to is biger than or equal to the user's input
      nomineeAfterYear.push(nominee[i]);
      //push the item of nominee into the empty list nomineeAfterYear
    }
  }

  if (nomineeAfterYear.length > 0){
  //if there are (more than 0) items in the list nomineeAfterYear
    return nomineeAfterYear;
    //return the list nomineeAfterYear for this function
  }
  else{
    return "Nothing found, try another year.";
    //if not return text "Nothing found, try another year."
  }
}

//console.log(getNomineeAfterYear(2012));


//Function #5

function getAwardsByNominee(nom){
//create a function called getAwardsByNominee. This function will generate the Award a person when a user input the name for that person
  var matchCategory = [];
  //first create a empty array called matchCategory
  for (var i in nominee){
  //loop through the items in the nominee
    if (nominee[i].includes(nom)){
    //if the input is included in one of the item in category
      matchCategory.push(category[i]);
      //push the item of category into the matchCategory list we created earlier
    }
    
  }
    if (matchCategory.length > 0){
    //if there are (more than 0) items in the list matchCategory
     return matchCategory; 
     //return matchCategory for this function
    }
    else{
     return "No awards for " + nom;
     //if not, return text "No award for" + "__"(name the user inputed)
    }
  
}

//console.log(getAwardsByNominee("Jessie"));