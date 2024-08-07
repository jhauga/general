// reusableJavascriptFunctions
// General purpose javascript functions.
///////////////////////////////////////////////////////////////////////////////

// Removing Elements
function removeSpace(idWhereSpaceIs, changeCase) {
 if (changeCase == undefined) changeCase = 0;
 
 let theIDWhereSpaceIs = document.getElementById(idWhereSpaceIs); 
 let theIDWhereSpaceIsText = theIDWhereSpaceIs.innerHTML;
 let spaceIsPresent = 1;
 if (theIDWhereSpaceIs) {
  while (spaceIsPresent == 1) {
   if (theIDWhereSpaceIsText.indexOf(" ") > -1) {
    theIDWhereSpaceIsText = theIDWhereSpaceIsText.replace(" ", "");
   } else {
    spaceIsPresent = 0;
   }
  }
 }
 if (changeCase == "u") {
  theIDWhereSpaceIsText = changeToUpperCase(theIDWhereSpaceIsText);
 } else if (changeCase == "l") {
  theIDWhereSpaceIsText = changeToLowerCase(theIDWhereSpaceIsText);
 }
 theIDWhereSpaceIs.innerHTML = theIDWhereSpaceIsText;
}
function removeSpaceInVariable(variableWhereSpaceIs, changeCase) {
 if (changeCase == undefined) changeCase = 0;
 
 let theVariableWhereSpaceIs = variableWhereSpaceIs; 
 let spaceIsPresent = 1;
 if (theVariableWhereSpaceIs) {
  while (spaceIsPresent == 1) {
   if (theVariableWhereSpaceIs.indexOf(" ") > -1) {
    theVariableWhereSpaceIs = theVariableWhereSpaceIs.replace(" ", "");
   } else {
    spaceIsPresent = 0;
   }
  }
 }
 if (changeCase == "u") {
  theVariableWhereSpaceIs = changeToUpperCase(theVariableWhereSpaceIs);
 } else if (changeCase == "l") {
  theVariableWhereSpaceIs = changeToLowerCase(theVariableWhereSpaceIs);
 }
 return theVariableWhereSpaceIs;
}

function removeWord(word, parElement, parElementIdentifier) {
  var useID=0, useClass=0, useData=0, useTag=0;
  var theParElement, theParElementInnerHTML, theParElementIndex = 0;
  // variables for function
  
  // CHANGE HERE and on last line of parElementConfigII.
  var removeTheWord = function() {
   let curWordText = theParElement.innerHTML; 

   let wordIsPresent = 1;
   if (theParElement) {
    while (wordIsPresent==1) {
     if (curWordText.indexOf(word) > -1) {
      curWordText = curWordText.replace(word, "");  
     } else {
      wordIsPresent = 0;
     }
    }
    theParElement.innerHTML = curWordText;
   }
  };   
  
  var parElementConfigI = function() {
   if (parElementIdentifierLowCase == "id") useID = 1;

   if (parElementIdentifierLowCase.indexOf("class") > -1) {
    useClass = 1;
    theParElementIndex = parElementIdentifierLowCase.replace("class", "");
   }
   if (parElementIdentifierLowCase.indexOf("data") > -1) {
    useData = 1;
    theParElementIndex = parElementIdentifierLowCase.replace("data", "");
   }
   if (parElementIdentifierLowCase.indexOf("tag") > -1) {
    useTag = 1;
    theParElementIndex = parElementIdentifierLowCase.replace("tag", "");
   }
  };
  var parElementConfigII = function() {
   if (useID == 1) {
     theParElement = document.getElementById(parElement);
    }
    if (useClass == 1) {
     theParElement = document.getElementsByClassName(parElement)[theParElementIndex];
    }
    if (useData == 1) {
     theParElement = document.querySelectorAll("[data-" + parElement + "]")[theParElementIndex];
    }
    if (useTag == 1) {
     theParElement = document.getElementsByTagName(parElement)[theParElementIndex];
    }    
    removeTheWord();
  };  
  
  if (parElementIdentifier == undefined) {
   parElementIdentifier = "id";
   useID = 1;
   //parElementConfigI();
   parElementConfigII();   
  } else {
   var parElementIdentifierLowCase = parElementIdentifier.toLowerCase();
   parElementConfigI();
   parElementConfigII();  
 }
}
function removeWordInVariable(word, variableWithWord) {
 let theVariableWithWord = variableWithWord;
 let wordIsPresent = 1;
 if (theVariableWithWord) {
  while (wordIsPresent == 1) {
   if (theVariableWithWord.indexOf(word) > -1) {
    theVariableWithWord = theVariableWithWord.replace(word, "");  
   } else {
    wordIsPresent = 0;
   }
  }
  return theVariableWithWord;
 }
}

function removeHTMLTag(tag, parElement, parElementIdentifier, replace) { 
 if (replace == undefined) replace = 0;
 var useID=0, useClass=0, useData=0, useTag=0, useSelf=0, replaceTag=0, remove = 0;
 var theParElements, theParElementsLen, theParElement, theParElementIndex = 0;
 
 var removeTheHTMLTag = function() {  
  let theRemoveTag = theParElement.getElementsByTagName(tag);
  if (theRemoveTag) {
   let theRemoveTagLen = theRemoveTag.length;
   for (i = 0; i < theRemoveTagLen; i++) {
    let curTagToRemove = theRemoveTag[i];   
    if (remove == 1) {
     if (curTagToRemove) {
      curTagToRemove.remove();
     }
    } else {
     if (curTagToRemove) {
      curTagToRemove.innerHTML = "";
      curTagToRemove.style.display = "none";
     }
    }
   }  
  }
 };
 var replaceTheHTMLTag = function() {
  if (replace == 0 || replace == "self") {
   if (replace == "self") { 
    let theRemoveTag = theParElement.getElementsByTagName(tag);
    if (theParElementIndex == "id") {
     for (i = 0; i < theRemoveTag.length; i++) { theRemoveTag[i].remove(); }
    } else {
     theRemoveTag[theParElementIndex].remove();
    }    
   } else {
    if (useID == 1) {
     theParElement.remove();    
    } else {
     let theRemoveTag = theParElement.getElementsByTagName(tag);
     if (theParElementIndex == "id") {
      for (i = 0; i < theRemoveTag.length; i++) { theRemoveTag[i].remove(); }
     } 
     // no else. do not want to run with other condition.
    }    
   }
  } else {   
   if (typeof tag != "object") {
    let theRemoveTag = theParElement.getElementsByTagName(tag);
    if (theRemoveTag) {
     let theRemoveTagLen = theRemoveTag.length;
     for (i = 0; i < theRemoveTagLen; i++) {
      let curTagToRemove = theRemoveTag[i];
      if (replace == "self") {
       curTagToRemove.insertAdjacentHTML("beforebegin", "");
      } else {
       curTagToRemove.insertAdjacentHTML("beforebegin", replace);   
      }     
     }  
    }   
   } else {
    let theRemoveTag = tag;
    let curTagToRemove = theRemoveTag;
    if (theRemoveTag) {
     if (replace == "self") {
      curTagToRemove.insertAdjacentHTML("beforebegin", "");
     } else {
      curTagToRemove.insertAdjacentHTML("beforebegin", replace);   
     }
    }
   }  
  }
 };  
 var runRemoveHTMLTag = function() {
  if (useID == 1) {   
   replaceTheHTMLTag();  
   removeTheHTMLTag();  
  }
  var removeFirstOrAllParElements = function() {
   if (theParElementIndex != "") {
    theParElement = theParElements[theParElementIndex];
    theParElement.remove();    
   } else {
    let tempParElementLen = theParElements.length;
    let areParElementsRemoved = 0;
    let i = 0;
    while (areParElementsRemoved == 0) {    
     tempParElementLen = theParElements.length;    
     if (tempParElementLen > 0) {
      theParElements[i].remove();  
     } else {
      areParElementsRemoved = 1;
     }            
    }    
   }
  };
  if (useSelf == 1) {
   theParElement = document.getElementById(parElement);
   theParElement.remove();
  } 
  if (useClass == 1) {
   if (replace == "self") {
    if (theParElementIndex == "l") {
     theParElements = document.getElementsByClassName(parElement);
     theParElementsLen = Number(theParElements.length - 1);
     theParElement = theParElements[theParElementsLen];
     theParElement.remove();
    } else {
     theParElements = document.getElementsByClassName(parElement);
     removeFirstOrAllParElements();     
    }
   } else {
    theParElement = document.getElementsByClassName(parElement)[theParElementIndex];  
    replaceTheHTMLTag();
    removeTheHTMLTag();
   }
  }
  if (useData == 1) {  
   if (replace == "self") {
    if (theParElementIndex == "l") {
     theParElements = document.querySelectorAll("[data-" + parElement + "]");
     theParElementsLen = Number(theParElements.length - 1);
     theParElement = theParElements[theParElementsLen];
     theParElement.remove();
    } else {
     theParElements = document.querySelectorAll("[data-" + parElement + "]"); 
     removeFirstOrAllParElements();
    }
   } else {
    theParElement = document.querySelectorAll("[data-" + parElement + "]")[theParElementIndex]; 
    replaceTheHTMLTag();
    removeTheHTMLTag();
   }
  }
  if (useTag == 1) {
   if (replace == "self") {
    if (theParElementIndex == "l") {
     theParElements = document.getElementsByTagName(parElement);
     theParElementsLen = Number(theParElements.length - 1);
     theParElement = theParElements[theParElementsLen];
     theParElement.remove();
    } else {
     theParElements = document.getElementsByTagName(parElement);    
     removeFirstOrAllParElements();
    }
   } else {

    theParElement = document.getElementsByTagName(parElement)[theParElementIndex];
    replaceTheHTMLTag();
    removeTheHTMLTag();
   }   
  }  
 };
 
 var parElementConfigI = function() {
  if (parElementIdentifierLowCase == "id") { 
   useID = 1; 
   theParElementIndex = "id"; 
  } else {
   if (parElementIdentifierLowCase.indexOf("class") > -1) {
    useClass = 1;
    theParElementIndex = parElementIdentifierLowCase.replace("class", "");
   }
   if (parElementIdentifierLowCase.indexOf("data") > -1) {
    useData = 1;
    theParElementIndex = parElementIdentifierLowCase.replace("data", "");
   }
   if (parElementIdentifierLowCase.indexOf("tag") > -1) {
    useTag = 1;
    theParElementIndex = parElementIdentifierLowCase.replace("tag", "");
   }   
  }
 };
 var parElementConfigII = function() {
  if (useID == 1) {
    theParElement = document.getElementById(parElement);
    theParElementIndex = "id";
   } else {
    if (
    parElementIdentifierLowCase == "self" || parElementIdentifierLowCase == "this" ||
    parElementIdentifier == "self" || parElementIdentifier == "this") {
     useSelf = 1;
     theParElement = document.getElementById(parElement);
    }
    if (useClass == 1) {
     theParElement = document.getElementsByClassName(parElement)[theParElementIndex];
    }
    if (useData == 1) {
     theParElement = document.querySelectorAll("[data-" + parElement + "]")[theParElementIndex];
    }
    if (useTag == 1) {
     theParElement = document.getElementsByTagName(parElement)[theParElementIndex];
    }    
   }
   runRemoveHTMLTag();
 };  

 if (parElementIdentifier == undefined) {  
  if (tag == "self" || tag == "this") {   
   useSelf = 1; useID = 0;
   parElementIdentifier = "self";
   replace = 0;
  } else {
   if (typeof tag != "object") {
    useSelf = 0; useID = 1;  
    parElementIdentifier = "id";
    replace = 0;       
   } else {
    tag.remove();
    return;
   }
  }     
  parElementConfigII();   
 } else {
  var parElementIdentifierLowCase = parElementIdentifier.toLowerCase();
  if (replace == undefined) {
   replace = 0;
   remove = 1;
  }   
  if (typeof tag != "object") {
   parElementConfigI();
   parElementConfigII();  
  } else {
   if (replace == 0) {
    tag.remove();
    return;   
   } else {
    parElementConfigI();
    parElementConfigII();  
   }
  }  
 } 
}

function removeNewLines(parElement, parElementIdentifier, removeExcessSpace) {
  var useID=0, useClass=0, useData=0, useTag=0, addingClass = 0, wrappingWords = 0;
  var theParElement, theParElementInnerHTML, theParElementIndex = 0;  
  
  var removeTheExcessSpace = function() {
   theParElementInnerHTML = theParElement.innerHTML;
   let hasExcessSpace = 1;
   while (hasExcessSpace == 1) {
    if (theParElementInnerHTML.indexOf("  ") > -1) {
     theParElementInnerHTML = theParElementInnerHTML.replace("  ", "");
    } else {
     hasExcessSpace = 0;
    }
   }
   theParElement.innerHTML = theParElementInnerHTML;
  };
  var removesTheNewLines = function() {
   theParElementInnerHTML = theParElement.innerHTML;
   let hasNewLines = 1;
   while (hasNewLines == 1) {
    if (theParElementInnerHTML.indexOf("\n") > -1) {
     theParElementInnerHTML = theParElementInnerHTML.replace("\n", "");
    } else {
     hasNewLines = 0;
    }
   }
   theParElement.innerHTML = theParElementInnerHTML;
   if (removeExcessSpace == 1) {
    removeTheExcessSpace();
   }
  };   
  
  var parElementConfigI = function() {
   if (parElementIdentifierLowCase == "id") useID = 1;

   if (parElementIdentifierLowCase.indexOf("class") > -1) {
    useClass = 1;
    theParElementIndex = parElementIdentifierLowCase.replace("class", "");
   }
   if (parElementIdentifierLowCase.indexOf("data") > -1) {
    useData = 1;
    theParElementIndex = parElementIdentifierLowCase.replace("data", "");
   }
   if (parElementIdentifierLowCase.indexOf("tag") > -1) {
    useTag = 1;
    theParElementIndex = parElementIdentifierLowCase.replace("tag", "");
   }
  };
  var parElementConfigII = function() {
   if (useID == 1) {
     theParElement = document.getElementById(parElement);
    }
    if (useClass == 1) {
     theParElement = document.getElementsByClassName(parElement)[theParElementIndex];
    }
    if (useData == 1) {
     theParElement = document.querySelectorAll("[data-" + parElement + "]")[theParElementIndex];
    }
    if (useTag == 1) {
     theParElement = document.getElementsByTagName(parElement)[theParElementIndex];
    }    
    removesTheNewLines();
  };  
  
  if (parElementIdentifier == undefined) {  
   parElementIdentifier = "id";
   useID = 1;
   removeExcessSpace = 0;
   parElementConfigI();
   parElementConfigII();   
  } else {
   var parElementIdentifierLowCase = parElementIdentifier.toLowerCase();
   if (removeExcessSpace == undefined) removeExcessSpace = 0;
   parElementConfigI();
   parElementConfigII();  
 }
}

function removeLastWord(word, parElement, parElementIdentifier, ignoreCase) {
 if (ignoreCase == undefined) { ignoreCase = 0; }
 var useID=0, useClass=0, useData=0, useTag=0, addingClass = 0, wrappingWords = 0;
 var theParElement, theParElementInnerHTML, theParElementIndex = 0;
 var arrayParElementInnerHTML, arrayParElementInnerHTMLLen, outArrayParElementInnerHTML = "";

 var removeTheLastCharacter = function() {
  theParElementInnerHTML = theParElement.innerHTML;  
  if (ignoreCase == 1) {
   let ignoreVar = "Ignore_CasSE_iS_Unlinkely_TO_B_E_iN__THe_Elements_WHere_T_H_i_S___Is_C_a__L_l__e_d_";
   let tempParElementInnerHTML = theParElementInnerHTML.toLowerCase();
   let ignoringCase = 0;
   while (ignoringCase == 0) {
    if (tempParElementInnerHTML.indexOf(word) > -1) {
     tempParElementInnerHTML = tempParElementInnerHTML.replace(word, ignoreVar);
    } else {
     ignoringCase = 1;
    }
   }
   theParElementInnerHTML = theParElementInnerHTML.substr(0, tempParElementInnerHTML.indexOf(ignoreVar)) + word + theParElementInnerHTML.substr(tempParElementInnerHTML.indexOf(ignoreVar) + word.length);
  }
  theParElementInnerHTML = theParElementInnerHTML.replace(word, "");
  theParElement.innerHTML = theParElementInnerHTML;
 };
 var reverseTheInnerHTML = function(theSwitch) {
  if (theSwitch == undefined) theSwitch = 0;
  outArrayParElementInnerHTML = "";
  theParElementInnerHTML = theParElement.innerHTML;  
  arrayParElementInnerHTML = theParElementInnerHTML.split(" ");
  arrayParElementInnerHTML.reverse();
  arrayParElementInnerHTMLLen = arrayParElementInnerHTML.length;
  for (i in arrayParElementInnerHTML) {
   if (i == arrayParElementInnerHTMLLen - 1) {
    outArrayParElementInnerHTML += arrayParElementInnerHTML[i];
   } else {
    outArrayParElementInnerHTML += arrayParElementInnerHTML[i] + " ";
   }
  }
  theParElementInnerHTML = outArrayParElementInnerHTML;
  theParElement.innerHTML = outArrayParElementInnerHTML;
  if (theSwitch == 1) {
   removeTheLastCharacter();
  }
 };   

 var parElementConfigI = function() {
  if (parElementIdentifierLowCase == "id") useID = 1;

  if (parElementIdentifierLowCase.indexOf("class") > -1) {
   useClass = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("class", "");
  }
  if (parElementIdentifierLowCase.indexOf("data") > -1) {
   useData = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("data", "");
  }
  if (parElementIdentifierLowCase.indexOf("tag") > -1) {
   useTag = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("tag", "");
  }
 };
 var parElementConfigII = function() {
  if (useID == 1) {
    theParElement = document.getElementById(parElement);
   }
   if (useClass == 1) {
    theParElement = document.getElementsByClassName(parElement)[theParElementIndex];
   }
   if (useData == 1) {
    theParElement = document.querySelectorAll("[data-" + parElement + "]")[theParElementIndex];
   }
   if (useTag == 1) {
    theParElement = document.getElementsByTagName(parElement)[theParElementIndex];
   }    
   reverseTheInnerHTML(1);
   reverseTheInnerHTML();
 };  

 if (parElementIdentifier == undefined) {
  parElementIdentifier = "id";
  useID = 1;
  parElementConfigI();
  parElementConfigII();   
 } else {
  var parElementIdentifierLowCase = parElementIdentifier.toLowerCase();
  parElementConfigI();
  parElementConfigII();  
 }
}
function removeLastWordInVariable(variableWithWord, word) {
 if (word == undefined) word = "  ";
 var tempVariableWithWord, theVariableWhereWordIs, theVariableWhereWordIsLen, theVariableOut;
 tempVariableWithWord = variableWithWord;
 var reverseTheVariable = function() {
  theVariableOut = "";
  theVariableWhereWordIs = tempVariableWithWord.split(" ");
  theVariableWhereWordIsLen = theVariableWhereWordIs.length;
  theVariableWhereWordIs.reverse();
  for (i in theVariableWhereWordIs) {
   if (i == theVariableWhereWordIsLen - 1) {
    theVariableOut += theVariableWhereWordIs[i];
   } else {
    theVariableOut += theVariableWhereWordIs[i] + " ";
   }
  }
  theVariableWhereWordIs = theVariableOut;
 };
 reverseTheVariable();
 theVariableWhereWordIs = theVariableWhereWordIs.replace(word, "");
 tempVariableWithWord = theVariableWhereWordIs;
 reverseTheVariable();   
 return theVariableWhereWordIs;
}

function removeHTMLAttribute(attribute, parElement, parElementIdentifier) {
  var useID=0, useClass=0, useData=0, useTag=0;
  var theParElement, theParElementInnerHTML, theParElementIndex = 0; 
  
  var removeTheAttribute = function() {
   theParElement.removeAttribute(attribute);  
  };   
  
  var parElementConfigI = function() {
   if (parElementIdentifierLowCase == "id") useID = 1;

   if (parElementIdentifierLowCase.indexOf("class") > -1) {
    useClass = 1;
    theParElementIndex = parElementIdentifierLowCase.replace("class", "");
   }
   if (parElementIdentifierLowCase.indexOf("data") > -1) {
    useData = 1;
    theParElementIndex = parElementIdentifierLowCase.replace("data", "");
   }
   if (parElementIdentifierLowCase.indexOf("tag") > -1) {
    useTag = 1;
    theParElementIndex = parElementIdentifierLowCase.replace("tag", "");
   }
  };
  var parElementConfigII = function() {
   if (useID == 1) {
     theParElement = document.getElementById(parElement);
    }
    if (useClass == 1) {
     theParElement = document.getElementsByClassName(parElement)[theParElementIndex];
    }
    if (useData == 1) {
     theParElement = document.querySelectorAll("[data-" + parElement + "]")[theParElementIndex];
    }
    if (useTag == 1) {
     theParElement = document.getElementsByTagName(parElement)[theParElementIndex];
    }    
    removeTheAttribute();
  };  
  
  if (parElementIdentifier == undefined) {
   parElementIdentifier = "id";
   useID = 1;
   parElementConfigI();
   parElementConfigII();   
  } else {
   var parElementIdentifierLowCase = parElementIdentifier.toLowerCase();
   parElementConfigI();
   parElementConfigII();  
 }
}

// Replacing Elements
function replaceWord(word, replaceWith,  parElement, parElementIdentifier) {
 var useID=0, useClass=0, useData=0, useTag=0;
 var theParElement, theParElementIndex = 0; 
 if (parElementIdentifier == undefined) {
  parElementIdentifier = "ID";
  replace = "";
  useID = 1;
 } else {
  let parElementIdentifierLowCase = parElementIdentifier.toLowerCase();   
  if (parElementIdentifierLowCase == "id") useID = 1;
  
  if (parElementIdentifierLowCase.indexOf("class") > -1) {
   useClass = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("class", "");
  }
  if (parElementIdentifierLowCase.indexOf("data") > -1) {
   useData = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("data", "");
  }
  if (parElementIdentifierLowCase.indexOf("tag") > -1) {
   useTag = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("tag", "");
  }
 }
  var replaceTheWord = function() {   
   if (theParElement) {
    let theParElementText = theParElement.innerHTML;
    let wordIsPresent = 1;
    while (wordIsPresent==1) {
     if (theParElementText.indexOf(word) > -1) {
      theParElementText = theParElementText.replace(word, replaceWith);
     } else {
      wordIsPresent = 0;
     }
    }
    theParElement.innerHTML = theParElementText;
   }
  };
  
 if (useID == 1) {
  theParElement = document.getElementById(parElement);
 }
 if (useClass == 1) {
  theParElement = document.getElementsByClassName(parElement)[theParElementIndex];
 }
 if (useData == 1) {
  theParElement = document.querySelectorAll("[data-" + parElement + "]")[theParElementIndex];
 }
 if (useTag == 1) {
  theParElement = document.getElementsByTagName(parElement)[theParElementIndex];
 }

 replaceTheWord();
}
function replaceWordInVariable(word, replaceWith, variableWithWord) {
 let theVariableWithWord = variableWithWord;
 let wordIsPresent = 1; 
 if (theVariableWithWord) {  
  let wordIsPresent = 1;
  while (wordIsPresent == 1) {
   if (theVariableWithWord.indexOf(word) > -1) {
    theVariableWithWord = theVariableWithWord.replace(word, replaceWith);
   } else {
    wordIsPresent = 0;
   }
  }
  return theVariableWithWord;
 }
}

function replaceInnerHTML(replaceWith, parElement, parElementIdentifier) {
 var useID=0, useClass=0, useData=0, useTag=0;
 var theParElement, theParElementIndex = 0; 
 if (parElementIdentifier == undefined) {
  parElementIdentifier = "ID";  
  useID = 1;
 } else {
  let parElementIdentifierLowCase = parElementIdentifier.toLowerCase();
  if (parElementIdentifierLowCase == "id") useID = 1;
  
  if (parElementIdentifierLowCase.indexOf("class") > -1) {
   useClass = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("class", "");
  }
  if (parElementIdentifierLowCase.indexOf("data") > -1) {
   useData = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("data", "");
  }
  if (parElementIdentifierLowCase.indexOf("tag") > -1) {
   useTag = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("tag", "");
  }
 }
 
 var replaceTheInnerHTML = function() {
  if (theParElement) {
   theParElement.innerHTML = replaceWith;
  }
 };
 
 if (useID == 1) {
  theParElement = document.getElementById(parElement);
 }
 if (useClass == 1) {
  theParElement = document.getElementsByClassName(parElement)[theParElementIndex];
 }
 if (useData == 1) {
  theParElement = document.querySelectorAll("[data-" + parElement + "]")[theParElementIndex];
 }
 if (useTag == 1) {
  theParElement = document.getElementsByTagName(parElement)[theParElementIndex];
 }
 replaceTheInnerHTML();
}

function replaceAttribute(attribute, replaceWith, curElement, curElementIdentifier) {

 var useID=0, useClass=0, useData=0, useTag=0;
 var theCurElement, theCurElementIndex = 0; 
 if (curElementIdentifier == undefined) {
  curElementIdentifier = "ID";
  replace = "";
  useID = 1;
 } else {
  let curElementIdentifierLowCase = curElementIdentifier.toLowerCase(); 
  
  if (curElementIdentifierLowCase == "id") useID = 1;
  if (curElementIdentifierLowCase.indexOf("class") > -1) {
   useClass = 1;
   theCurElementIndex = curElementIdentifierLowCase.replace("class", "");
  }
  if (curElementIdentifierLowCase.indexOf("data") > -1) {
   useData = 1;
   theCurElementIndex = curElementIdentifierLowCase.replace("data", "");
  }
  if (curElementIdentifierLowCase.indexOf("tag") > -1) {
   useTag = 1;
   theCurElementIndex = curElementIdentifierLowCase.replace("tag", "");
  }
 }
  var replaceTheAttribute = function() {   
   if (theCurElement) {
    theCurElement.setAttribute(attribute, replaceWith);
   }
  };
  
  if (useID == 1) {
  theCurElement = document.getElementById(curElement);
 }
 if (useClass == 1) {
  theCurElement = document.getElementsByClassName(curElement)[theCurElementIndex];
 }
 if (useData == 1) {
  theCurElement = document.querySelectorAll("[data-" + curElement + "]")[theCurElementIndex];
 }
 if (useTag == 1) {
  theCurElement = document.getElementsByTagName(curElement)[theCurElementIndex];
 }

 replaceTheAttribute();

}

function replaceNewLines(word, parElement, parElementIdentifier, removeExcessSpace, arrayPrep, mindElement) {
  var useID=0, useClass=0, useData=0, useTag=0, addingClass = 0, wrappingWords = 0, mindingElement = 0, mindingWhatElement;
  var theParElement, theParElementInnerHTML, theParElementIndex = 0;    
  var mindArr, mindArrA, mindArrB, mindArrC, mindArrLen;
  var mindRecurseA, mindRecurseB;
  
  var mindAnElement = function() {// MIND LINES MATCHING PATTERN
   if (mindingWhatElement == "wc") {    
    mindArr = theParElementInnerHTML.split(word);    
    let activeRecurse = 0;
    let recurseCount = 0;
    let tempMindArr = theParElementInnerHTML.split(word);
    mindRecurseA = function(mindVarA, mindIndexA) {
     for (i = mindIndexA; i < mindVarA.length; i++) {
      mindArrA = mindVarA[i].split(" ");
      if (mindArrA.length > mindElement && mindArrA[0].indexOf("<") == -1 && mindArrA[0].indexOf("</") == -1) {
       if (mindVarA[i+1]) {
        mindArrB = mindVarA[i+1].split(" ");
        if (mindArrB.length > mindElement && mindArrB[0].indexOf("<") == -1 && mindArrB[0].indexOf("</") == -1) {
         activeRecurse = 1;
         mindVarA[i] = mindVarA[i] + " " + mindVarA[i+1];        
         mindArr.splice(i, 1);
         mindArr[i] = mindVarA[i]; 
         mindVarA.splice(i+1, 1);         
         mindRecurseB(mindVarA, i);
        } else {        
        activeRecurse = 0;
        continue;
        }       
       } else {
        break;
        //continue;
       }
      } else {   
       activeRecurse = 0;
       continue;
      }
     }     
    };
    mindRecurseB = function(mindVarB, mindIndexB) {
     for (i = mindIndexB; i < mindVarB.length; i++) {
      mindArrA = mindVarB[i].split(" ");      
      if (mindArrA.length > mindElement && mindArrA[0].indexOf("<") == -1 && mindArrA[0].indexOf("</") == -1) {
        recurseCount = 1;
        if (mindVarB[i+1]) {
         mindArrB = mindVarB[i+1].split(" ");
         if (mindArrB.length > mindElement && mindArrB[0].indexOf("<") == -1 && mindArrB[0].indexOf("</") == -1) {
          activeRecurse = 1;
          mindVarB[i] = mindVarB[i] + " " + mindVarB[i+1];
          mindArr.splice(i, 1);
          mindArr[i] = mindVarB[i]; 
          mindVarB.splice(i+1, 1);          
          mindRecurseA(mindVarB, i);
         } else {          
          activeRecurse = 0;
          continue;
         }
       } else {
        break;
        //continue;
       }
      } else {             
       activeRecurse = 0;
       continue;
      }
     }         
    };
    mindRecurseA(tempMindArr, 0);    
    mindArrLen = mindArr.length;
    theParElementInnerHTML = "";
    for (i = 0; i < mindArrLen; i++) {
     if (i == mindArrLen - 1) {
      theParElementInnerHTML += mindArr[i];
     } else {
      theParElementInnerHTML += mindArr[i] + word;
     }
    }
    theParElement.innerHTML = theParElementInnerHTML;
   }
  };
  var prepForArray = function() {// PREP FOR ARRAY USE
   let checkLastMark = 0;
   theParElementInnerHTML = theParElement.innerHTML;
   let excessMarks = 1;
   while (excessMarks == 1) {
    if (theParElementInnerHTML.substring(0, word.length) == word) {
     theParElementInnerHTML = theParElementInnerHTML.replace(word, "");     
    } else {
     let negWordLen = word.length * -1;
     if (theParElementInnerHTML.substr(negWordLen, word.length) == word) {
      if (checkLastMark == 0) {
       checkLastMark+=2;
      } else {
       if (theParElementInnerHTML.substr(negWordLen*checkLastMark, word.length) == word) {
        let tempParElementInnerHTML = removeLastWordInVariable(theParElementInnerHTML, word);
        theParElementInnerHTML = tempParElementInnerHTML;       
        checkLastMark+=2;
       } else {
        checkLastMark = 0;
        excessMarks = 0;
       }  
      }
     } else {
      excessMarks = 0;
     }
    }
   }
   excessMarks = 1; let i = 0;
   theParElementInnerHTML = theParElementInnerHTML.split(word);
   let theParElementInnerHTMLLen = theParElementInnerHTML.length;
   while (excessMarks == 1) {
    if (i < theParElementInnerHTMLLen) {
     if (theParElementInnerHTML[i].length == 0) {
      theParElementInnerHTML.splice(i,1);
      theParElementInnerHTMLLen = theParElementInnerHTML.length;
     } else {
      i++;
     }
    } else {
     excessMarks = 0;
    }
   }
   let tempTheParElementInnerHTML = theParElementInnerHTML; let tempText = "";
   for (i = 0; i < tempTheParElementInnerHTML.length; i++) {
    if (i == tempTheParElementInnerHTML.length - 1) {
     tempText += tempTheParElementInnerHTML[i];
    } else {
     tempText += tempTheParElementInnerHTML[i] + word;
    }    
   }
   theParElementInnerHTML = tempText;
   theParElement.innerHTML = theParElementInnerHTML;
   let textParElementInnerHTML = theParElement.innerText;   
   if (textParElementInnerHTML.substr(0, word.length) == word) {
    theParElementInnerHTML = theParElementInnerHTML.replace(word, "");
    theParElement.innerHTML = theParElementInnerHTML;
   }   
  };
  var removeTheExcessSpace = function() {
   theParElementInnerHTML = theParElement.innerHTML;
   let hasExcessSpace = 1;
   while (hasExcessSpace == 1) {
    if (theParElementInnerHTML.indexOf("  ") > -1) {
     theParElementInnerHTML = theParElementInnerHTML.replace("  ", "");
    } else {
     hasExcessSpace = 0;
    }
   }
   theParElement.innerHTML = theParElementInnerHTML;
  };
  var replaceTheNewLines = function() {
   {// REMOVE COMMENTS FIRST   
   let tempParElement = document.createElement("div");   
   tempParElement.innerHTML = theParElement.innerHTML;
   theParElement.insertAdjacentElement("afterend", tempParElement);
   
   let theTempParElement = theParElement.nextElementSibling;   
   theTempParElement.style.display = "none";
   let parElementNodeList = theParElement.childNodes;
   let parElementNodeListLen = parElementNodeList.length;
   let tempParElementNodeList = theTempParElement.childNodes;  
   let tempParElementNodeListLen = tempParElementNodeList.length;
   
   for (i = 0; i < tempParElementNodeListLen; i++) {
    let parElementNodeListLen = parElementNodeList.length;
    var outParElementChildNode = function() {
     for (j = 0; j < parElementNodeListLen; j++) {
      if (parElementNodeList[j].nodeName == "#comment") {
       parElementNodeList[j].remove();
       break;
      }
     }
    };
   
    if (tempParElementNodeList[i].nodeType == 8) {
     outParElementChildNode();
    }
   }
   tempParElement.remove();
   }
   {// REPLACE NEW LINES
   theParElementInnerHTML = theParElement.innerHTML;
   let hasNewLines = 1;
   while (hasNewLines == 1) {
    if (theParElementInnerHTML.indexOf("\n") > -1) {
     theParElementInnerHTML = theParElementInnerHTML.replace("\n", word);          
    } else {
     hasNewLines = 0;
    }
   }
   theParElement.innerHTML = theParElementInnerHTML; 
   }   
  if (removeExcessSpace == 1) {
   removeTheExcessSpace();
   if (arrayPrep == 1) { prepForArray(); }
   if (mindingElement == 1) { mindAnElement(); }
  } else {
   if (arrayPrep == 1) { prepForArray(); }
   if (mindingElement == 1) { mindAnElement(); }
  }  
 };   
  
  var parElementConfigI = function() {
   if (parElementIdentifierLowCase == "id") useID = 1;

   if (parElementIdentifierLowCase.indexOf("class") > -1) {
    useClass = 1;
    theParElementIndex = parElementIdentifierLowCase.replace("class", "");
   }
   if (parElementIdentifierLowCase.indexOf("data") > -1) {
    useData = 1;
    theParElementIndex = parElementIdentifierLowCase.replace("data", "");
   }
   if (parElementIdentifierLowCase.indexOf("tag") > -1) {
    useTag = 1;
    theParElementIndex = parElementIdentifierLowCase.replace("tag", "");
   }
  };
  var parElementConfigII = function() {
   if (useID == 1) {
     theParElement = document.getElementById(parElement);
    }
    if (useClass == 1) {
     theParElement = document.getElementsByClassName(parElement)[theParElementIndex];
    }
    if (useData == 1) {
     theParElement = document.querySelectorAll("[data-" + parElement + "]")[theParElementIndex];
    }
    if (useTag == 1) {
     theParElement = document.getElementsByTagName(parElement)[theParElementIndex];
    }
    if (typeof mindElement == "number" && mindElement >= 2) {
     mindingWhatElement = "wc"; // word count
     mindingElement = 1;
    } else {
     mindingWhatElement = 0;
     mindingElement = 0;     
    }
    replaceTheNewLines();
  };  
  
  if (parElementIdentifier == undefined) {  
   parElementIdentifier = "id";
   useID = 1;
   removeExcessSpace = 0;
   mindElement = 0;
   parElementConfigI();
   parElementConfigII();   
  } else {
   var parElementIdentifierLowCase = parElementIdentifier.toLowerCase();
   if (removeExcessSpace == undefined) removeExcessSpace = 0;
   if (arrayPrep == undefined) arrayPrep = 0;
   if (mindElement == undefined) {
    mindElement = 0;
   } else {
    mindingElement = 1;
   }
   parElementConfigI();
   parElementConfigII();  
 }
}

// Appending/Prepending/Add Elements
function addToAttribute(attribute, addWhat, addWhere, curElement, curElementIdentifier, usingAll) {
 if (addWhere == undefined) addWhere = "before";
 
 var useID=0, useClass=0, useData=0, useTag=0;
 var runClass = 0, useAll=0;
 var theCurElement, theCurElements, theCurElementsLen, theAddContent, theCurElementIndex = 0; 
 var theCurElementAttribute, theCurElementAttributeValue;
 if (curElementIdentifier == undefined) {
  curElementIdentifier = "ID";
  usingAll = 0;
  useID = 1;
 } else {
  if (usingAll == undefined) usingAll = 0;
  var curElementIdentifierLowCase = curElementIdentifier.toLowerCase(); 
  
  if (curElementIdentifierLowCase == "id") {
   useID = 1;
   usingAll = 0;
  }
  if (curElementIdentifierLowCase.indexOf("class") > -1) {  
   useClass = 1;
   if (usingAll == 0) {
    theCurElementIndex = curElementIdentifierLowCase.replace("class", "");
   } else {
    theCurElementIndex = "false";
   }
  }
  if (curElementIdentifierLowCase.indexOf("data") > -1) {
   useData = 1;
   if (usingAll == 0) {
    theCurElementIndex = curElementIdentifierLowCase.replace("data", "");
   } else {
    theCurElementIndex = "false";
   }
  }
  if (curElementIdentifierLowCase.indexOf("tag") > -1) {
   useTag = 1;
   if (usingAll == 0) {
    theCurElementIndex = curElementIdentifierLowCase.replace("tag", "");
   } else {
    theCurElementIndex = "false";
   } 
  }
 }
 
  var addToTheAttribute = function() {
   if (theCurElement) {
    theCurElement.setAttribute(attribute, theAddContent);
   }   
  };

 if (useID == 1) {
  theCurElement = document.getElementById(curElement);
 }
 if (useClass == 1) {
  if (theCurElementIndex == "false") {
   theCurElements = document.getElementsByClassName(curElement);
   theCurElementsLen = theCurElements.length;
  } else {
   theCurElement = document.getElementsByClassName(curElement)[theCurElementIndex];
  }
 }
 if (useData == 1) {
  if (theCurElementIndex == "false") {
   theCurElements = document.querySelectorAll("[data-" + curElement + "]");
   theCurElementsLen = theCurElements.length;
  } else {
   theCurElement = document.querySelectorAll("[data-" + curElement + "]")[theCurElementIndex];
  }
 }
 if (useTag == 1) {
  if (theCurElementIndex == "false") {
   theCurElements = document.getElementsByTagName(curElement);
   theCurElementsLen = theCurElements.length;
  } else {
   theCurElement = document.getElementsByTagName(curElement)[theCurElementIndex];
  }
 }
 
 if (addWhere == "before") {
  if (usingAll == 1) {
   if (attribute == "class") {runClass = 1;}
   for (i = 0; i < theCurElementsLen; i++) {
    if (theCurElements[i].hasAttribute(attribute)) {      
     theCurElementAttributeValue = theCurElements[i].getAttribute(attribute);  
     if (attribute == "class") {
      let theCurElementsData = theCurElements[i].dataset;
      theCurElementsData.tempunlikelyaddtoattributewillbedataset = "1";      
      //theAddContent = addWhat + " " + theCurElementAttributeValue;  
     } else {
      theAddContent = addWhat + theCurElementAttributeValue;
      theCurElement = theCurElements[i];
      addToTheAttribute();      
     }      
    } else {
     let skip;
     }
    }
   } else {
   theCurElementAttributeValue = theCurElement.getAttribute(attribute);  
   theAddContent = addWhat + theCurElementAttributeValue;  
   addToTheAttribute();
  }
 } else {
  if (usingAll == 1) {
   if (attribute == "class") {runClass = 1;}
   for (i = 0; i < theCurElementsLen; i++) {
    if (theCurElements[i].hasAttribute(attribute)) {
     theCurElementAttributeValue = theCurElements[i].getAttribute(attribute);  
     if (attribute == "class") {
      let theCurElementsData = theCurElements[i].dataset;
      theCurElementsData.tempunlikelyaddtoattributewillbedataset = "1";     
      // theAddContent = theCurElementAttributeValue + " " + addWhat;  
     } else {
      theAddContent = theCurElementAttributeValue + addWhat;
      theCurElement = theCurElements[i];
      addToTheAttribute();            
     }      
    } else {
     let skip;
     }
    }
   } else { 
   theCurElementAttributeValue = theCurElement.getAttribute(attribute);  
   theAddContent = theCurElementAttributeValue + addWhat;
   addToTheAttribute();
  }
 }
 if (runClass == 1) {
  theCurElements = document.querySelectorAll("[data-tempunlikelyaddtoattributewillbedataset]");
  theCurElementsLen = theCurElements.length;  
  if (addWhere == "before") {
   for (i = 0; i < theCurElementsLen; i++) {
    theAddContent = addWhat + theCurElementAttributeValue;
    theCurElement = theCurElements[i];
    addToTheAttribute();
    theCurElement.removeAttribute("data-tempunlikelyaddtoattributewillbedataset");
   }
  } else {
   for (i = 0; i < theCurElementsLen; i++) {
    theAddContent = theCurElementAttributeValue + addWhat;
    theCurElement = theCurElements[i];
    addToTheAttribute();
    theCurElement.removeAttribute("data-tempunlikelyaddtoattributewillbedataset");
   }
  }
 }
}

function addHTMLToText(tag, parElement, parElementIdentifier, attributes, wrapWords) {
  var useID=0, useClass=0, useData=0, useTag=0, addingClass = 0, wrappingWords = 0;
  var theAttribute, theAttributeValue, addAttribute = 0, addAttributes = 0;
  var theCurHTML, theCurStoredHTML, theTag, theTagAttribute, theTagAttributes, theTagAttributesLen;
  var wrapWordsFound, wrapWordsFoundBack, storageForWrapWords, curWrapWordStorage, multipleWrapWords = 0;
  var theParElement, theParElementIndex = 0;  
  
  var addTheHTML = function() {
   if (wrappingWords == 1) {
    theCurStoredHTML = theParElement.innerHTML;    
    if (theCurStoredHTML.indexOf("<") > -1 && theCurStoredHTML.indexOf("</") > -1) {
     let skip;
    } else {
     if (theCurStoredHTML.indexOf(wrapWords) == theCurStoredHTML.lastIndexOf(wrapWords)) {
      if (theCurStoredHTML.indexOf(wrapWords) == -1) {
       let skip;
      } else {
       theCurHTML = theCurStoredHTML.substr(theCurStoredHTML.indexOf(wrapWords), wrapWords.length);       
      }
     } else {
      if (theCurStoredHTML.indexOf(wrapWords) == -1) {
       let skip;
      } else {
       multipleWrapWords = 1;
       wrapWordsFound = 0;
       storageForWrapWords = theCurStoredHTML;
       let stillWrapWord = 1;
       while (stillWrapWord ==1) {
        if (storageForWrapWords.indexOf(wrapWords) > -1) {
         storageForWrapWords = storageForWrapWords.replace(wrapWords, "--|__--__It__IS__UNlikeLY__ThIs__TeXt__wIlL__bE__hErE__--__|--");
         wrapWordsFound++;
        } else {
         stillWrapWord = 0;
        }
       }
       wrapWordsFoundBack = wrapWordsFound;
       theCurHTML = theCurStoredHTML.substr(theCurStoredHTML.indexOf(wrapWords), wrapWords.length);       
      } 
     }    
    }
   } else {
    theCurHTML = theParElement.innerHTML;
   }   
   if (attributes == 0) {
    theTag = "<" + tag + ">" + theCurHTML + "</" + tag + ">";
   } else {
    if (addAttributes == 0) {
     if (addAttribute == 1) {
      theTagAttribute = " " + theAttribute + "=\"" + theAttributeValue + "\"";
      if (wrappingWords == 1) {
       if (
        theCurStoredHTML.indexOf("<") > -1 &&
        theCurStoredHTML.indexOf(">") > -1 &&   
        theCurStoredHTML.indexOf("</") > -1
        ) {
         theTag = "<" + tag + ">" + theCurHTML + "</" + tag + ">";
        } else {
         theTag = "<" + tag + theTagAttribute + ">" + theCurHTML + "</" + tag + ">";
        }            
      } else {
       theTag = "<" + tag + theTagAttribute + ">" + theCurHTML + "</" + tag + ">";
      }      
     } else {
      let skip;
      theTag = theParElement.innerHTML;
     }
    } else {
     let updateNeeded;
     theTag = theParElement.innerHTML;
    }    
   } 
   if (wrappingWords == 1) {
    if (multipleWrapWords == 1) {
     while (wrapWordsFound >= 0) {
      storageForWrapWords = storageForWrapWords.replace("--|__--__It__IS__UNlikeLY__ThIs__TeXt__wIlL__bE__hErE__--__|--", theTag); 
      wrapWordsFound--;
     }
     theParElement.innerHTML = storageForWrapWords;
    } else {
     theParElement.innerHTML = theCurStoredHTML.replace(theCurHTML, theTag);
    }    
   } else {
    theParElement.innerHTML = theTag;
   }         
  };
  var attributeConfig = function() {
   if (attributes == 0) {
    let skip;
   } else {
    if (attributes.indexOf(",") == -1) {
     if (attributes.indexOf("::") == -1) {
      let skip;
     } else {
      theAttribute = attributes.substr(0,attributes.indexOf("::"));
      theAttributeValue = attributes.substr(attributes.indexOf("::")+2);
      addAttribute = 1;      
      addAttributes = 0;
     }
    } else {
     let updateNeeded;
    }
   }
   addTheHTML();
  };
  var parElementConfigI = function() {
   if (parElementIdentifierLowCase == "id") useID = 1;

   if (parElementIdentifierLowCase.indexOf("class") > -1) {
    useClass = 1;
    theParElementIndex = parElementIdentifierLowCase.replace("class", "");
   }
   if (parElementIdentifierLowCase.indexOf("data") > -1) {
    useData = 1;
    theParElementIndex = parElementIdentifierLowCase.replace("data", "");
   }
   if (parElementIdentifierLowCase.indexOf("tag") > -1) {
    useTag = 1;
    theParElementIndex = parElementIdentifierLowCase.replace("tag", "");
   }
  };
  var parElementConfigII = function() {
   if (useID == 1) {
     theParElement = document.getElementById(parElement);
    }
    if (useClass == 1) {
     theParElement = document.getElementsByClassName(parElement)[theParElementIndex];
    }
    if (useData == 1) {
     theParElement = document.querySelectorAll("[data-" + parElement + "]")[theParElementIndex];
    }
    if (useTag == 1) {
     theParElement = document.getElementsByTagName(parElement)[theParElementIndex];
    }    
    attributeConfig();
  };  
  
  if (parElementIdentifier == undefined) {
   parElementIdentifier = "id";
   attributes = 0;
   wrapWords = 0;
   useID = 1;
   parElementConfigI();
   parElementConfigII();   
  } else {
   var parElementIdentifierLowCase = parElementIdentifier.toLowerCase();
   if (attributes == undefined) {
    attributes = 0;
    wrapWords = 0;
   } else {
    if (wrapWords == undefined) {
     wrapWords = 0;
    } else {
     if (wrapWords != 0) { 
      wrappingWords = 1;
    }
   }
   parElementConfigI();
   parElementConfigII();
  }
 }
}

function sequentialSectionRomanNumeralItems(parElementIdentifier, parElement, nestedEle) {
  // defautl for parameter
  if (nestedEle == undefined) {
   nestedEle = "";   
  }
  // globals for function
  var romanNumerals = [
  "I",  "II", "III",  "IV",  "V",   "VI",   "VII",   "VIII",  "IX",  "X", 
  "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", 
  "XXI", "XXII", "XXIII", "XXIV", "XXV", "XXVI", "XXVII", "XXVIII", "XXIX", "XXX",
  "XXXI", "XXXII", "XXXIII", "XXXIV", "XXXV", "XXXVI", "XXXVII", "XXXVIII", "XXXIX", "XL", 
  "XLI", "XLII", "XLIII", "XLIV", "XLV", "XLVI", "XLVII", "XLVIII", "XLIX", "L", 
  "LI", "LII", "LIII", "LIV", "LV", "LVI", "LVII", "LVIII", "LIX", "LX", 
  "LXI", "LXII", "LXIII", "LXIV", "LXV", "LXVI", "LXVII", "LXVIII", "LXIX", "LXX", 
  "LXXI", "LXXII", "LXXIII", "LXXIV", "LXXV", "LXXVI", "LXXVII", "LXXVIII", "LXXIX", 
  "LXXX", "LXXXI", "LXXXII", "LXXXIII", "LXXXIV", "LXXXV", "LXXXVI", "LXXXVII", "LXXXVIII", "LXXXIX", "XC", 
  "XCI", "XCII", "XCIII", "XCIV", "XCV", "XCVI", "XCVII", "XCVIII", "XCIX", "C"];
  var domStartingPoint, nestedElementType, nestedElement, counter;
  // run the function on the provided ol element
  var parentElement, parentElementLen;
  var setParentElement = function(par_Ele, par_eleName) {
   if (idParentElement == 0) {
    if (nestedEle == "") {
     nestedElementsUsed = 0;
    } else {
     nestedElementsUsed = 1;
     nestedElementType = "tag";
     nestedElement = nestedEle; 
    }
   } else {
    nestedElementsUsed = 0;
   }
   if (par_Ele == "class") {
    parentElement = domStartingPoint.getElementsByClassName(par_eleName);
   }
   if (par_Ele == "attribute") {
    parentElement = domStartingPoint.querySelectorAll(par_eleName);
   }  
   if (par_Ele == "tag") {
    parentElement = domStartingPoint.getElementsByTagName(par_eleName);
   }
   parentElementLen = parentElement.length;
  };
  // set parent element by if first argument is id or not
  var nestedElementsUsed, idParentElement;
  if (parElementIdentifier== "id") {
   idParentElement = 1;
   domStartingPoint = document.getElementById(parElement);
   if (nestedEle != "") {
    nestedElementType = nestedEle.substr(0, nestedEle.indexOf(":"));
    nestedElement = nestedEle.replace(/.*:/g, "");    
   } else {
    nestedElementType = "tag";
    nestedElement = "h1";
   }
   //console.log(nestedElementType);
   //console.log(nestedElement);
   setParentElement(nestedElementType, nestedElement);
  } else {   
   idParentElement = 0;
   domStartingPoint = document;
   setParentElement(parElementIdentifier, parElement);
  }  
  // loop throught items adding roman numeral to beginning
  counter = 0;
  for (i = 0; i < parentElementLen; i++) {   
   let theParentElement = parentElement[i];
   if (idParentElement == 0 && nestedElementsUsed == 1) {
    let curNestElements = theParentElement.getElementsByTagName(nestedElement);
    let curNestElementsLen = curNestElements.length;
    for (ii = 0; ii < curNestElementsLen; ii++) {
     let theCurNestElement = curNestElements[ii];
     theCurNestElement.innerHTML = romanNumerals[counter] + ". " + theCurNestElement.innerHTML;     
    }
    counter++;
   } else {    
    theParentElement.innerHTML = romanNumerals[i] + ". " + theParentElement.innerHTML;
   }   
  }     
 }

function sequentialSectionOrderedListItems(parElementIdentifier, parElement) {
  // globals for function
  var numbering, counter, nestedCounter, doubleNest = 0, trackNestedListItems = 0, lastNestItem = 0;
  var inNestedList, nestItemLength, checkNumberingLength;
  var storeCounter = 0;
  // run the function on the provided ol element
  var parentElement, parentElementLen;
  if (parElementIdentifier== "class") {
   parentElement = document.getElementsByClassName(parElement);
  }
  if (parElementIdentifier== "attribute") {
   parentElement = document.querySelectorAll(parElement);
  }  
  if (parElementIdentifier== "id") {
   parentElement = document.getElementById(parElement);
  }
  if (parElementIdentifier== "tag") {
   parentElement = document.getElementsByTagName(parElement);
  } 
  // function to keep count
  var trackCount = function() {
   if (storeCounter == 0) {
    counter++;
   } else {
    counter = storeCounter + 1;
   }
  };  
  // function to count the number of occurrences of a specific character in a string
  var countNestedSection = function(str, char) {
   // split the string by the specified character and count the number of resulting elements
   return str.split(char).length;
  };      
  // function to number nested ordered list items
  var nestedOrderedListItems = function(curList, parentNumbering) {   
   if (lastNestItem == 0) {
    nestedCounter = 1;
   } 
   let items = curList.querySelectorAll("li");   
   items.forEach(function(item) {
    if (inNestedList == 1) {
     trackNestedListItems = items.length;      
    }
    if (doubleNest >= 1) {
     numbering = counter + "." + parentNumbering + "." + nestedCounter + '.';
     checkNumberingLength = Number(countNestedSection(numbering, "."));    
     if (nestItemLength == 1 && checkNumberingLength > 3) {
      // If list item is after nested items.            
      lastNestItem = 1;   
      if (doubleNest < 2) { 
       doubleNest = 0; 
      } 
      if ( // IF CONDITION
       typeof parentNumbering == "string" && parentNumbering.indexOf(".") > -1 || 
       Math.floor(parentNumbering) < parentNumbering
      ) {
       let nestedCounterArr = parentNumbering.split(".");
       nestedCounter = Math.floor(nestedCounterArr[nestedCounterArr.length-1]);   
      }              
     } else {      
       lastNestItem = 0;
       nestItemLength--;
     }
    } else {
     numbering = parentNumbering + "." + nestedCounter + '.';     
     lastNestItem = 0;   
     nestItemLength--;
    }
    //nestItemLength--;
    //nestItemLength--;
    item.innerHTML = numbering + '<br>' + item.innerHTML;
    let nestedOl = item.querySelector("ol");
    if (nestedOl) {
     if (doubleNest == 0) {
       doubleNest = 1;                   
     } else if (doubleNest >= 1 ) {
      if (nestItemLength >= 1) {
       doubleNest++;
       nestedCounter = doubleNest + "." + nestedCounter;       
      }
     }
     //nestedCounter = nestedCounter;
     nestItemLength = nestedOl.querySelectorAll("li").length;     
     nestedOrderedListItems(nestedOl, nestedCounter);    
    }
    trackNestedListItems--;     
    if (lastNestItem != 0) {
     let skip;
     lastNestItem = 0;
     //nestedCounter++;
    } else {
     nestedCounter++;
    }
   });  
   // reset counter
   //counter = (counter - nestedCounter) + 1;
  };  
  // function for topmost ordered lists
  var numberOrderedListItems = function(olElement, parentNumbering = '') {
   let items = olElement.querySelectorAll('li');
   counter = 1;

   items.forEach(function(item) {
    numbering = parentNumbering + counter + '. ';
    item.innerHTML = numbering + ' ' + item.innerHTML;
    var nestedOl = item.querySelector('ol');     
    if (nestedOl) {
     inNestedList = 1;
     storeCounter = counter;
     nestItemLength = nestedOl.querySelectorAll("li").length;     
     nestedOrderedListItems(nestedOl, counter);
    } else {
     if (doubleNest > 0) {
      doubleNest--;
     } else {
      inNestedList = 0;
      doubleNest = 0;   
     }
    }
    if (trackNestedListItems == 0) {
     let tempCounter = counter;
     trackCount();
     if (tempCounter == counter) {
      storeCounter = 0;
     }
    } else {
     trackNestedListItems--;
    }
   });      
  };  
  if (parElementIdentifier== "id") {
   let olElement = parentElement.querySelector("ol");
   numberOrderedListItems(olElement);
  } else {
   parentElementLen = parentElement.length;
   for (i = 0; i < parentElementLen; i++) {
    let olElement = parentElement[i].querySelector("ol");
    storeCounter = 0;
    numberOrderedListItems(olElement);
   }    
  }    
 }

// Changing Elements
function changeToUpperCase(variableToChange) {
 let theVariableToUpperCase = variableToChange.toUpperCase();
 return theVariableToUpperCase;
}
function changeToLowerCase(variableToChange) {
 let theVariableToLowerCase = variableToChange.toLowerCase();
 return theVariableToLowerCase;
}

function changeToTable(colNumber, colTitles, extractTags, parElement, parElementIdentifier, relocate, relocateElement, relocateElementIdentifier, addHTML) {
 var useID=0, useClass=0, useData=0, useTag=0, addingClass = 0, addingHTML = 0, usingHTML = 0,
     relocateID=0, relocateClass=0, relocateData=0, relocateTag=0;
 var theParElement, theParElementInnerHTML, theParElementInnerHTMLLen, theParElementIndex = 0, theCurParElementInnerHTML,
     theRelocateElement, theRelocateElementIndex;  
 var theColTitles, theColTitlesLen, theColTitle, useColMark = 0, colMarkCount = 0, balanceColumns = 0, columnsUnbalanced, 
     columnValueToAddedHTML = 0, columnValueToAddedHTMLIsRemoved = 0, columnValueRemovedWillBe, columnValueRemovedArray = [], columnValueRemovedArrayLen, columnValueRemovedIndex;
 var extractTagsArr, extractTagsArrLen, theExtractTag, theExtractTagStop, theExtractTags, theExtractTagsLen, useCharacterMark = 0, characterMarkCount = 0, extractMark = "", extractMarkLen, maxCol, firstRunMaxCol = 0, lessThanMax, colDiff;
 var usingText = 0, usingWhatText = 0, splittingHow = 0, isUsingWords = 0, splitWordCount = 0, isUsingSplitCharacter = 0, theSplitCharacter = 0, theTempSplitCharacter,
     splitCharacterCount, splitTableDataCount; 
 var curMarkCount = 0, curExtractTag, curExtractData, tempCurExtractData, curData;
 var theAddedHTML, curAddedHTML, addHTMLArray = [], addHTMLArrayLen, isAddingTag = 0, addingTag, addingCloseTag, addingWhere, addingWith, addingWhatIndex, addingWithWhatIndex, addingTableWithDataValue = 0, 
     addingTableWithDataValueArray, addingTableWithDataValueArrayLen, isRelocateElementIdentifierDefined = 1, hasSubstituteValue = 0, substituteValue, substitutePlaceHolderText, textValueAsAddedHTML = 0, textValueToAddToHTML;
 var addHTMLAltering, addHTMLAlterArray, addHTMLAlterArrayLen, addingHTMLAlteringByText,
     addHTMLAlterHow, addHTMLAlterWhat, addHTMLAlterAs, addHTMLAlterWithWhat, addHTMLAlterCaseHow,
     curAlterValue, curAlterText, curAlterIndexA, curAlterIndexB, curStorage, 
     curAlterInsert, curAlterCase, usedDoubleQuotes;
 var makeRowsUsingTextElements, makeRowsUsingHTMLElements;     
 var theTableCols = "", theTableRows = "", theTable = "";
 var relocateNew, whereTableIsChangedTo;
 var addHTMLHideCol = 0;

 { // OUTPUT
 var outPutTable = function() {
  if (relocate == 1) {
   if (relocateElementIdentifier == "id") {
    document.getElementById(relocateElement).innerHTML = theTable;
    whereTableIsChangedTo = document.getElementById(relocateElement);
   } else {
    theRelocateElement.innerHTML = theTable;
    whereTableIsChangedTo = theRelocateElement;
   }   
  } else {
   if (relocateElement == "self") {
    if (relocateElementIdentifier == "id") {
     theParElement.innerHTML = theTable;     
    } else {
     if (relocateElementIdentifier == parElementIdentifier) {
      theParElement.innerHTML = theTable;
     } else {
      let skip;
     }
    }
    whereTableIsChangedTo = theParElement;
   } else {
    if (relocateElementIdentifier == parElementIdentifier && useTag == 1) {
     relocateNew = document.createElement(parElement);
     
     relocateNew.innerHTML = theTable;
     theParElement.insertAdjacentElement("beforebegin", relocateNew);     
     theParElement.remove();     
    } else {
     if (relocateElementIdentifier == "tag") {
      relocateNew = document.createElement(relocateElement);      
      relocateNew.innerHTML = theTable;
      theParElement.insertAdjacentElement("beforebegin", relocateNew);
      theParElement.remove();     
     } else {

      relocateNew = document.createElement("div");      
      relocateNew.innerHTML = theTable;      
      if (relocateElement.indexOf("::") == -1) {
       relocateNew.setAttribute(relocateElementIdentifier, relocateElement);
      } else if (isRelocateElementIdentifierDefined == 0) {
       relocateNew.setAttribute(parElementIdentifier, parElement);       
      }      
      theParElement.insertAdjacentElement("beforebegin", relocateNew);                  
      theParElement.remove();      
     }
    } 
    whereTableIsChangedTo = relocateNew;
   }
  }
  // Remove any items for appending.
  if (addHTMLHideCol == 1) {
   let theRelocateElementInnerHTML = whereTableIsChangedTo.innerHTML;
   let theRelocateElementTR = theRelocateElement.getElementsByTagName("tr");
   let theRelocateElementTRLen = theRelocateElementTR.length;
   for (i = 0; i < theRelocateElementTRLen; i++) {
    let curRelocateElementTR = theRelocateElementTR[i];
    if (curRelocateElementTR.children[addingWhatIndex].innerHTML.indexOf("javascript:void(0)") > -1) {     
     curRelocateElementTR.children[addingWhatIndex].innerHTML = curRelocateElementTR.children[addingWhatIndex].innerHTML.replace("target=\"_blank\" rel=\"external\"","");     
    }
    curRelocateElementTR.children[addingWithWhatIndex].remove();
   }
  }
 };
 var makeTheTable = function() {
  if (addingClass == 0) {
   theTable += "<table>" + theTableCols + theTableRows + "</table>";
   outPutTable();
  } else {
   let updateNeeded;
  }
 };
 }
 {// MAKE
 var countCharacterMarks = function(check) {
  if (check == undefined) check = 0;
  tempCurExtractData = curExtractData;
  let markCharactersCounted = 0;
  characterMarkCount = 0;
  while (markCharactersCounted == 0) {
   if (tempCurExtractData.indexOf(extractMark) > -1) {
    tempCurExtractData = tempCurExtractData.replace(extractMark, "");
    characterMarkCount++;
   } else {
    markCharactersCounted = 1;
   }
  }
  if (extractMarkLen > 2) {
   colMarkCount = characterMarkCount;
   if (check == "findMax") {
    if (firstRunMaxCol == 0) {
     firstRunMaxCol = 1;
     maxCol = characterMarkCount;
    } else {
     if (characterMarkCount > maxCol) {
      maxCol = characterMarkCount;
     }
    }
   }   
  }
  if (check == 1) {
   checkText(1);
  }
 };
 var checkText = function(curIndex) { 
  if ((curIndex == 0 || curIndex == 1) && extractMarkLen > 2) {
   if (characterMarkCount >= colNumber) {    
    // UPDATE MAY BE NEEDED
    theExtractTags[i].id = "tag" + i;
    removeLastWord(extractMark, "tag" + i, "id");
    removeHTMLAttribute("id", "tag"+i, "id");
    curExtractData = theExtractTags[i].innerHTML;
    countCharacterMarks(1);
   }
  }
  if (curIndex != 1) {
   if (characterMarkCount == 0) {
    let updateNeeded;
    curData = curExtractData;
   } else {
    if (curExtractData.indexOf(extractMark) == curExtractData.lastIndexOf(extractMark)) {
     curData = curExtractData.substr(0, curExtractData.indexOf(extractMark));
     curExtractData = curExtractData.replace(extractMark, "");
     curExtractData = curExtractData.replace(curData, "");     
    } else {
     curData = curExtractData.substr(0, curExtractData.indexOf(extractMark));
     curExtractData = curExtractData.substr(curExtractData.indexOf(extractMark) + extractMark.length);
    }
    if (curIndex == 0) {
     if (curData.length <= 1) {     
      checkText();
     }
    }   
   } 
  }
 };
 var i;
 var makeRows = function(useHTML) { 
  if (useHTML == undefined) { useHTML = 0; }  
  if (addingClass == 0) {
   if (useCharacterMark == 1) {
    if (usingText == 1) {
     var splitTextToArrayByNewLines = function() {      
      theTempSplitCharacter = "--COL_MARK_iS_unLikELY_tO2_BE_in_the_TExT_thHat_isConVERteD_To_A_TaBlE--";      
      if (splitWordCount <= 1) {
       if (colNumber <= 2) {
        if (splitWordCount == -1) {
         replaceNewLines(theTempSplitCharacter, parElement, parElementIdentifier, 1, 1, 0);
        } else {
         if (isUsingSplitCharacter == 1) {
          replaceNewLines(theTempSplitCharacter, parElement, parElementIdentifier, 1, 1, 0);
         } else {
          replaceNewLines(theTempSplitCharacter, parElement, parElementIdentifier, 1, 1, 2);
         }         
        }
        splitWordCount = 0;        
       } else {
        splitWordCount = -1;
        replaceNewLines(theTempSplitCharacter, parElement, parElementIdentifier, 1, 1, 0);
       }
      } else {
        replaceNewLines(theTempSplitCharacter, parElement, parElementIdentifier, 1, 1, Number(splitWordCount));      
       }
     };
     makeRowsUsingTextElements = function() {// TEXT IS NESTED IN ANOTHER HTML ELEMENT
      let tempParElementInnerHTML = theParElement.innerHTML;         
      tempParElementInnerHTML = tempParElementInnerHTML.split(theTempSplitCharacter);
      if (tempParElementInnerHTML[0].indexOf("<") > -1 && tempParElementInnerHTML[0].indexOf("</") == -1) {
       theParElementInnerHTML = theParElement.innerText;
      } else {
       theParElementInnerHTML = theParElement.innerHTML;
      }

      theParElementInnerHTML = theParElementInnerHTML.split(theTempSplitCharacter);
      theParElementInnerHTMLLen = splitCharacterCount = theParElementInnerHTML.length;      
      if (splitWordCount == 0) {
       if (splitCharacterCount%2 != 0) { splitCharacterCount++; }
       splitTableDataCount = splitCharacterCount/2;       
      } else {       
       splitTableDataCount = Math.round(splitCharacterCount/splitWordCount);
      }
 // START MAKING ROWS
      let textBasedTableRowsAreMade = 0;
      addingHTMLAlteringByText = function(theColCount, theCase, theQuote, addingATag, addingAClosingTag, theCurAlteringValue, theCurAlteringText) {
       if (theColCount <= 2) theCurParElementInnerHTML = theParElementInnerHTML[i]; else theCurParElementInnerHTML = theParElementInnerHTML[i+ii];
       if (theCase == undefined) {
        theCase = "";
        theQuote = "";
        addingATag = ""; 
        addingAClosingTag = "";
        theCurAlteringValue = "";
        theCurAlteringText = "";
       } else {
        if (theCurAlteringValue == undefined) {
         theCurAlteringValue = "";
         theCurAlteringText = "";
        } else {
         if (theCurAlteringText.indexOf(">") == -1) {
          theCurAlteringText += ">";
         }
        }
        if (columnValueToAddedHTML == 1) {
         if (columnValueToAddedHTMLIsRemoved >= 1) {
          if (columnValueToAddedHTMLIsRemoved == 1) {
           if (addingWhatIndex == ii && theParElementInnerHTML[Number(i+addingWithWhatIndex)] && addingWhatIndex < addingWithWhatIndex) {                
            addingATag = addingATag.replace(substitutePlaceHolderText, theParElementInnerHTML[Number(i+addingWithWhatIndex)]); 
            theParElementInnerHTML.splice(i+addingWithWhatIndex,1);
            theParElementInnerHTMLLen = theParElementInnerHTML.length;
           }
          } else {
           let updateNeeded;
          }                             
         } else {
          if (addingWhatIndex == ii && theParElementInnerHTML[Number(i+addingWithWhatIndex)] && addingWhatIndex < addingWithWhatIndex) {
           if (columnValueRemovedArrayLen == 1) {
            addingATag = addingATag.replace(substitutePlaceHolderText, theParElementInnerHTML[Number(i+addingWithWhatIndex)]);
           } else {
            let updateNeeded;
           }                              
          }
         }
        }            
       }
       let curQuote = ""; let curCase = "";
       if (theCurParElementInnerHTML) {
        if (theCase == "l") curCase = theCurParElementInnerHTML.toLowerCase(); else if (theCase == "u") curCase = theCurParElementInnerHTML.toUpperCase(); else curCase = theCase;
        if (theQuote == 1) curQuote = '"'; else if (theQuote === 0) curQuote = "'"; else curQuote = "";
       }
       if (theColCount <= 2) {
        if (addingWhatIndex == i-i) { // will be 0
         if (theColCount == 1) {
          theTableRows += "<tr><td>" + addingATag + theCurAlteringValue + curCase + curQuote + theCurAlteringText + theCurParElementInnerHTML + addingAClosingTag + "</td></tr>";          
         } else {
          theTableRows += "<tr><td>" + addingATag + theCurAlteringValue + curCase + curQuote + theCurAlteringText + theCurParElementInnerHTML + addingAClosingTag + "</td><td>"; 
          theCurParElementInnerHTML = theParElementInnerHTML[i+1];
          theTableRows += theCurParElementInnerHTML + "</td></tr>";         
         }
         }
        else if (addingWhatIndex == i+1) { // will be 1
         if (theColCount == 1) {
          theTableRows += "<tr><td>" + theCurParElementInnerHTML + "</td></tr>";
         } else {
          theTableRows += "<tr><td>" + theCurParElementInnerHTML + "</td><td>"; 
          theCurParElementInnerHTML = theParElementInnerHTML[i+1];
          theTableRows += addingATag + theCurAlteringValue + curCase + curQuote + theCurAlteringText + theCurParElementInnerHTML + addingAClosingTag + "</td></tr>";         
         }
         } else { // not used
         if (theColCount == 1) {
          theTableRows += "<tr><td>" + theCurParElementInnerHTML + "</td></tr>"; 
         } else {
          theTableRows += "<tr><td>" + theCurParElementInnerHTML + "</td><td>"; 
          theCurParElementInnerHTML = theParElementInnerHTML[i+1];
          theTableRows += theCurParElementInnerHTML + "</td></tr>"; 
          }
         }              
       } else {
        if (ii == 0) {
         if (addingWhatIndex == ii) theTableRows += "<tr><td>" + addingATag + theCurAlteringValue + curCase + curQuote + theCurAlteringText + theCurParElementInnerHTML + addingAClosingTag + "</td><td>";                      
         else theTableRows += "<tr><td>" + theCurParElementInnerHTML + "</td><td>";
        } else if (ii == colNumber-1) {
         if (addingWhatIndex == ii) {
          if (theCurParElementInnerHTML) theTableRows += addingATag + theCurAlteringValue + curCase + curQuote + theCurAlteringText + theCurParElementInnerHTML + addingAClosingTag + "</td></tr>";
          else theTableRows += " " + "</td></tr>";             
         } else {
          if (theCurParElementInnerHTML) theTableRows += theCurParElementInnerHTML + "</td></tr>";
          else theTableRows += " " + "</td></tr>";             
         }
        } else {
         if (addingWhatIndex == ii) {
          if (theCurParElementInnerHTML) theTableRows += addingATag + theCurAlteringValue + curCase + curQuote + theCurAlteringText + theCurParElementInnerHTML + addingAClosingTag + "</td><td>";           
          else theTableRows += " " + "</td><td>";             
         } else {
          if (theCurParElementInnerHTML) theTableRows += theCurParElementInnerHTML + "</td><td>";           
          else theTableRows += " " + "</td><td>";             
         }
        }       
       }
      };           
      while (textBasedTableRowsAreMade == 0) {
       for (i = 0; i < theParElementInnerHTMLLen; i+=colNumber) {
        if (splitWordCount == 0 || splitWordCount == 2 && colNumber == 2) 
        {// TWO COLUMNS        
         if (i >= theParElementInnerHTMLLen-1 || i+1 >= theParElementInnerHTMLLen-1) {
          textBasedTableRowsAreMade = 1;
         }                  
         if (addingWhatIndex >= 0) {
          if (addHTMLAltering == 1) {
           addingHTMLAlteringByText(colNumber, curAlterCase, usedDoubleQuotes, addingTag, addingCloseTag, curAlterValue, curAlterText);
           } else {
           addingHTMLAlteringByText(colNumber, "", "", addingTag, addingCloseTag);
           }
          } else {
          addingHTMLAlteringByText(colNumber);
          }
        } else 
        { // OVER TWO COLUMNS        
         if (i >= theParElementInnerHTMLLen || i+colNumber >= theParElementInnerHTMLLen-1) {
          textBasedTableRowsAreMade = 1;
         }          
         for (ii = 0; ii < colNumber; ii++) {
          // MAKE THE TABLE DATA FUNCTION          
          if (addingWhatIndex >= 0) {          
           if (addHTMLAltering == 1) {
            addingHTMLAlteringByText("over", curAlterCase, usedDoubleQuotes, addingTag, addingCloseTag, curAlterValue, curAlterText);
           } else {
            //console.log(addingTag);
            addingHTMLAlteringByText("over", "", "", addingTag, addingCloseTag);
           }
          } else {
           addingHTMLAlteringByText("over");            
          }          
         }
        }
       }
      }
     };
     if (theSplitCharacter == "n") 
     {// NEW LINES MARK COL. DATA
      splitTextToArrayByNewLines();
      makeRowsUsingTextElements(); 
     } 
     else {      
      theTempSplitCharacter = theSplitCharacter;
      removeNewLines(parElement, parElementIdentifier, 1);
      replaceWord(theTempSplitCharacter, "\n",  parElement, parElementIdentifier);      
      splitTextToArrayByNewLines();
      makeRowsUsingTextElements();       
     }
    } else 
    {// USING HTML TAGS
     if (useHTML == 0) {      
      for (i = 0; i < theExtractTagsLen; i++) {
       curExtractData = theExtractTags[i].innerHTML;
       countCharacterMarks("findMax");
      }    
     }
     //console.log(maxCol);
     //console.log(colMarkCount);
     let byTag = 0;
     for (i = 0; i < theExtractTagsLen; i++) {       
       curExtractData = theExtractTags[i].innerHTML;
       if (useHTML == 0) { 
        countCharacterMarks(); 
        for (ii = 0; ii <= colMarkCount; ii++) {
         if (colMarkCount < maxCol) {
          lessThanMax = 1;
         } else {
          lessThanMax = 0;
         }
         if (ii == 0) {
          checkText(0); 
          if (addingWhatIndex == ii) {
           if (addHTMLAltering == 1) {
            let tempCurData = curData;
            (function () {
             let hasHTML = 1;           
             while (hasHTML == 1) {
              if (tempCurData.indexOf("<") > -1) {
               tempCurData = tempCurData.replace(tempCurData.substr(tempCurData.indexOf("<"), tempCurData.indexOf(">") + 1), "");
              } else {
               hasHTML = 0;
              }
             }           
            }) ();
            if (curAlterCase == "l") {
             if (usedDoubleQuotes == 1) {
              theTableRows += "<tr><td>" + addingTag + curAlterValue + tempCurData.toLowerCase() + '"' + curAlterText + ">" + curData + addingCloseTag + "</td><td>";            
             } else {
              theTableRows += "<tr><td>" + addingTag + curAlterValue + tempCurData.toLowerCase() + "'" + curAlterText + ">" + curData + addingCloseTag + "</td><td>";
             }          
            } else if (curAlterCase == "u") {
             if (usedDoubleQuotes == 1) {
              theTableRows += "<tr><td>" + addingTag + curAlterValue + tempCurData.toUpperCase() + '"' + curAlterText + ">" + curData + addingCloseTag + "</td><td>";
             } else {
              theTableRows += "<tr><td>" + addingTag + curAlterValue + tempCurData.toUpperCase() + "'" + curAlterText + ">" + curData + addingCloseTag + "</td><td>";
             }
            } else {
             theTableRows += "<tr><td>" + addingTag + curData + addingCloseTag + "</td><td>";
            }           
           } else {
            theTableRows += "<tr><td>" + addingTag + curData + addingCloseTag + "</td><td>";
           }          
          } else {
           theTableRows += "<tr><td>" + curData + "</td><td>";
          }
          if (colMarkCount == 0) {
           if (lessThanMax == 1) {
            //console.log(maxCol - colMarkCount);
            colDiff = (maxCol - colMarkCount) - 2;
            for (iii = 0; iii < colDiff; iii++) {            
             if (iii == colDiff - 1) {
              theTableRows += " " + "</td></tr>";            
             } else {
              theTableRows += " " + "</td><td>";            
             }
            }
           }        
          }
          byTag++;
         } else if (ii == colMarkCount) {       
          if (colNumber >= 3) {
           if (curExtractData.indexOf(extractMark) == -1) {
            if (lessThanMax == 1) {
             curExtractData = curExtractData.replace(extractMark, "");
             theTableRows += curExtractData + "</td><td>";
            } else {
             curExtractData = curExtractData.replace(extractMark, "");
             theTableRows += curExtractData + "</td></tr>";                    
            }
           } else {
            if (curExtractData.indexOf(extractMark) == curExtractData.lastIndexOf(extractMark)) {          
             checkText();          
             if (lessThanMax == 1) {
              theTableRows += curExtractData + "</td><td>";
             } else {
              theTableRows += curExtractData + "</td></tr>";
             }
            } else {          
             checkText();          
             if (lessThanMax == 1) {
              theTableRows += curData + "</td><td>";
             } else {
              theTableRows += curData + "</td></tr>";
             }           
            }
           }
          } else {
           if (lessThanMax == 1) {
            curData = curExtractData;
            theTableRows += curData + "</td><td>";                                  
           } else {
            curData = curExtractData;
            theTableRows += curData + "</td></tr>";                         
           }
          }
          if (lessThanMax == 1) {          
           colDiff = (maxCol - colMarkCount) - 2;
           for (iii = 0; iii < colDiff; iii++) {            
            if (iii == colDiff - 1) {
             theTableRows += " " + "</td></tr>";            
            } else {
             theTableRows += " " + "</td><td>";            
            }
           }
          }
          byTag++;
         } else {
          if (colNumber >= 4) { 
           if (curExtractData.indexOf(extractMark) == -1) {
            theTableRows += curExtractData + "</td><td>";
            curExtractData = "";
           } else {
            if (curExtractData.indexOf(extractMark) == curExtractData.lastIndexOf(extractMark)) {
             checkText();          
             theTableRows += curData + "</td><td>";         
            } else {
             checkText();          
             theTableRows += curData + "</td><td>";          
            }     
           }
          } else {
           checkText();
           theTableRows += curData + "</td><td>";        
          }
          byTag++;
         }
        }
       } else {
        if (byTag == 0) {
         theTableRows += "<tr>";
         theTableRows += "<td>" + curExtractData + "</td>";
         byTag++;
         continue;
        } 
        if (byTag == colNumber-1) {
         theTableRows += "<td>" + curExtractData + "</td>";
         theTableRows += "</tr>";
         byTag = 0;
         continue;        
        }
        if (byTag < colNumber) {
         theTableRows += "<td>" + curExtractData + "</td>";
         byTag++;
         continue;        
        }        
       }                               
      if (theExtractTags[i].getElementsByTagName(theExtractTag).length >= 1) {
       i = i + theExtractTags[i].getElementsByTagName(theExtractTag).length;
      } 
     }    
    }
   } else {
    let updateNeeded;
   }
  } else {
   let updateNeeded;
  }
 };
 var makeColumns = function() {
  if (addingClass == 0) {
   if (balanceColumns == 1) {
    columnsUnbalanced = colNumber - theColTitlesLen;
    let theColumnBalanceIndex = theColTitlesLen;
    let columnsAreUnbalanced = 1;
    while (columnsAreUnbalanced == 1) {
     theColTitles[theColumnBalanceIndex] = "Column";
     theColumnBalanceIndex++;
     theColTitlesLen = theColTitles.length;
     if (theColTitlesLen != colNumber) {
      columnsAreUnbalanced = 1;
     } else {
      columnsAreUnbalanced = 0;
     }
    }
   }
   for (i = 0; i < theColTitlesLen; i++) {
    if (i == 0) {
     if (theColTitlesLen == 1) {
      theTableCols += "<tr><th>" + theColTitles[i] + "</th></tr>";
     } else {
      theTableCols += "<tr><th>" + theColTitles[i] + "</th><th>";     
     }     
    } else if (i == theColTitlesLen - 1) {
     theTableCols +=  theColTitles[i] + "</th></tr>";
    } else {
     theTableCols +=  theColTitles[i] + "</th><th>";
    }
   }
  } else {
   let updateNeeded;
  }
 };
 }
// ---------------------------- 
 {// CONFIG MAKE
 var tableConfig = function() {      
  if (useColMark == 1) {
   theColTitles = replaceWordInVariable(", ", ",", colTitles);
   theColTitles = replaceWordInVariable(" ,", ",", colTitles);
   theColTitles = colTitles.split(",");
   theColTitlesLen = theColTitles.length;   
   for (i = 0; i < theColTitlesLen; i++) {
    if (theColTitles[i].indexOf("_") == 0 && theColTitles[i].lastIndexOf("_") == theColTitles[i].length-1) {
     columnValueRemovedIndex = 0;
     columnValueToAddedHTML = 1; 
     let tempColValue = theColTitles[i].substr(1);
     if (theColTitles[i][1] == ":") {
      theColTitles[i] = substituteValue = "Link";
      //columnValueToAddedHTMLIsRemoved += 1;      
      columnValueRemovedArray[columnValueRemovedIndex] = i;
      columnValueRemovedIndex++;
      columnValueRemovedWillBe = theColTitles[i].substring(2, theColTitles[i].length - 1);
      addHTMLHideCol = 1;
     } else {      
      tempColValue = tempColValue.replace("_", "");
      columnValueRemovedArray[columnValueRemovedIndex] = i;
      columnValueRemovedIndex++;
      if (tempColValue == "href") {
       theColTitles[i] = substituteValue = "Link";
       hasSubstituteValue = 1; 
      } else {
       let updateNeeded;
      }
     }
    } else {    
     let skip;
    }
   }
   if (columnValueToAddedHTML == 1) columnValueRemovedArrayLen = columnValueRemovedArray.length; else columnValueRemovedArrayLen = 0;   
   if (columnValueToAddedHTMLIsRemoved == 1) {
    theColTitlesLen -= columnValueToAddedHTMLIsRemoved;
    colNumber -= columnValueToAddedHTMLIsRemoved;
    }
   if (theColTitlesLen < colNumber) balanceColumns = 1;
   if (addingClass == 0) {
    makeColumns();
    if (usingHTML == 1) {
     makeRows("html");
    } else {
     makeRows();
    }
    makeTheTable();    
   } else {
    let updateNeeded;
   }
  } else {
   let updateNeeded;
  }   
 };
 var extractTagConfig = function() {
  // using html tag it seems
  if (extractTags.indexOf(":") == -1) {
   theExtractTagStop = false;   
   usingHTML = 1;
  } else {
   theExtractTagStop = extractTags.indexOf(":");
  } 
  var extractWithMark = function(onOff) {
   if (onOff == undefined) onOff = 0;
   useCharacterMark = 1;
   useColMark = 1;
   colMarkCount = colNumber - 1;
   if (theExtractTagStop == false) {
    theExtractTag = extractTags;
   } else {
    theExtractTag = extractTags.substr(0, theExtractTagStop);
   }
   if (usingText == 0) 
   { // BY HTML - currently onely works with one tag.
    theExtractTags = theParElement.getElementsByTagName(theExtractTag);
    theExtractTagsLen = theExtractTags.length;
   } else 
   { // BY NEW LINE or SPLIT CHAR> - Using extraction from only text with either by new lines or a split character.
    theExtractTags = theExtractTag.substr(1, theExtractTag.length - theExtractTag.lastIndexOf(":"));
    splittingHow = usingWhatText = theExtractTags;
    if (theExtractTags.length > 1) 
    {// UNBALANCED TABLE or NEW LINES
     let updateNeeded;
     isUsingWords = 1;
     splittingHow = usingWhatText = theExtractTags[0];
     splitWordCount = theExtractTags.substr(1);
    } else 
    {// BALANCED TABLE
     isUsingWords = 0;
     splittingHow = usingWhatText = theExtractTags[0];
     splitWordCount = -1;
    }
    {// BY TEXT CONFIG
    switch(splittingHow) {
     case "s":
      if (splitWordCount == -1) splitWordCount = 0;
      isUsingSplitCharacter = 1;
      theSplitCharacter = extractTags.substr(extractTags.indexOf(":") + 1);
      break;
     case "w":
      isUsingSplitCharacter = 0;
      theSplitCharacter = extractTags.substr(extractTags.indexOf(":") + 1);
      break;
     default:
      isUsingSplitCharacter = 0;
      theSplitCharacter = "n";      
    }
    }
   }
   if (
    Number(extractTags.indexOf(":")+1) == extractTags.length ||
    extractTags.indexOf(":") == -1
      ) {
    extractMark = " ";        
   } else {
    // probably not using html tag unless sloppy input
    extractMark = extractTags.substr(extractTags.indexOf(":") + 1);    
   }   
   extractMarkLen = extractMark.length;
   if (onOff == 1) tableConfig();
  };
 // Determine type of extraction. 
  if (extractTags.indexOf(",") == -1) 
  {// BY HTML (1) OR TEXT
   if (extractTags[0] == "_") {
    usingText = 1;
    extractWithMark(0);
    tableConfig();
   } else {    
    extractWithMark(1);
   }
  } else 
  {// BY MULTIPLE HTML
   let updateNeeded;
  }
 };
 }
 {// CONFIG ADDED HTML
 var alterAddedHTML = function() {// MAKE
  var nowAlterAddedHTML = function(ai, aii, aiii, aiv, av) {   
   if (isAddingTag == 1) {
    if (ai == 1) {
     if (aii == "attribute") {      
      if (aiii == "link") {       
       if (aiv == "table") {        
        if (av == "modifyText") {
         curAlterInsert = "";
         curStorage = addingTag;          
         curAlterText = curStorage.substr(curStorage.indexOf(addHTMLAlterWhat) + addHTMLAlterWhat.length + 2);
         addingTag = addingTag.replace(curAlterText, "");
         usedDoubleQuotes = 0;
         if (curAlterText.indexOf('"') > -1) usedDoubleQuotes = 1;

         if (usedDoubleQuotes == 1) {
          curIndexA = curAlterText.indexOf('"');            
          curAlterValue = curAlterText.substr(0, curIndexA);
          curStorage = curAlterValue;
          if (curAlterValue.lastIndexOf('"') == curAlterValue.length - 1) {
           curAlterValue = curAlterValue.substr(0, curAlterValue.length - 2);
          } else {
           let skip;
          }
         } else {
          curIndexA = curAlterText.indexOf("'");           
          curAlterValue = curAlterText.substr(0, curIndexA);
          curStorage = curAlterValue;
          if (curAlterValue.lastIndexOf("'") == curAlterValue.length - 1) {
           curAlterValue = curAlterValue.substr(0, curAlterValue.length - 2);
          } else {
           let skip;
          }
         }         

         if (addHTMLAlterAs == "anchor") {
          if (curAlterValue.indexOf("#") == -1) {   
           if (usedDoubleQuotes == 0) {
            curAlterText = curAlterText.replace(curStorage + "' ", "");
           } else {
            curAlterText = curAlterText.replace(curStorage + '" ', "");
           }                      
           curAlterValue += "#" + curAlterInsert;           
           if (curAlterText.lastIndexOf(">") == curAlterText.length -1 ) curAlterText = curAlterText.replace(">", "");         
          } else {
           if (usedDoubleQuotes == 0) {
            curAlterText = curAlterText.replace(curStorage + "' ", "");
           } else {
            curAlterText = curAlterText.replace(curStorage + '" ', "");
           }                      
           curAlterValue += curAlterInsert;
           if (curAlterText.lastIndexOf(">") == curAlterText.length -1 ) curAlterText = curAlterText.replace(">", "");                     
          } 
         } else {
          let updateNeeded;
         }
         if (addHTMLAlterWithWhat == "innerHTML") {
          curcurAlterInsert = "self";           
         } else {
          let updateNeeded;
         }
         if (addHTMLAlterCaseHow) {
          curAlterCase = addHTMLAlterCaseHow[0];
         } else {
          let updateNeeded;
         }          
        } else {
         let updateNeeded;
        }
       } else {
        let updateNeeded;
       }
      } else {
       let updateNeeded;
      }
     } else {
      let updateNeeded;
     }
    } else {
     let updateNeeded;
    }
   } else {
    let updateNeeded;
   }
  };
  if (addHTMLAltering == 1) {    
   if (addHTMLAlterArrayLen < 5) {
    if (addHTMLAlterArrayLen < 4) {
     if (addHTMLAlterArrayLen < 3) {
      let skip;
     } else {
      addHTMLAlterHow = addHTMLAlterArray[0];
      addHTMLAlterWhat = addHTMLAlterArray[1];
      addHTMLAlterAs = addHTMLAlterArray[2];
      addHTMLAlterWithWhat = addHTMLAlterArray[2]; 
      addHTMLAlterCaseHow = 0;
     }
    } else {
     addHTMLAlterHow = addHTMLAlterArray[0];
     addHTMLAlterWhat = addHTMLAlterArray[1];
     addHTMLAlterAs = addHTMLAlterArray[2];
     addHTMLAlterWithWhat = addHTMLAlterArray[3];      
     addHTMLAlterCaseHow = 0;
    }
   } else {
    addHTMLAlterHow = addHTMLAlterArray[0];
    addHTMLAlterWhat = addHTMLAlterArray[1];
    addHTMLAlterAs = addHTMLAlterArray[2];
    addHTMLAlterWithWhat = addHTMLAlterArray[3];      
    addHTMLAlterCaseHow = addHTMLAlterArray[4];
   }    
  }
  var alteri, alterii, alteriii, alteriv, alterv;
  {
  switch(addHTMLAlterHow) {
   case "append":
    alteri = 1;
    break;
   default:
    alteri = 0;
  }
  switch(addHTMLAlterWhat) {
   case "href":
    alterii = "attribute";
    break;
   case "class":
    alterii = "attribute";
    break;    
   case "id":
    alterii = "attribute";
    break; 
   case "style":
    alterii = "attribute";
    break;     
   default:
    alterii = 0;
  }
  switch(addHTMLAlterAs) {
   case "anchor":
    alteriii = "link";
    break;
   default:
    alteriii = 0;
  }
  switch(addHTMLAlterWithWhat) {
   case "innerHTML":
    alteriv = "table";
    break;
   default:
    alteriv = 0;
  }
  switch(addHTMLAlterCaseHow) {
   case "lc":
    alterv = "modifyText";
    break;
   case "uc":
    alterv = "modifyText";
    break;    
   default:
    alterv = 0;
  }
 }
  nowAlterAddedHTML(alteri, alterii, alteriii, alteriv, alterv);
 };
 var configAddedHTML = function() { // CONFIG
  var setAddHTMLPlacement = function() {
   if (addHTMLArray[addHTMLArrayLen - 1].indexOf("td") > -1) {
    if (addHTMLArray[addHTMLArrayLen - 1].indexOf("_:_") == -1) {
     addingWhere = "td";
     addingWhatIndex = addHTMLArray[addHTMLArrayLen - 1].replace("td","");    
    } else {
     addingTableWithDataValue = 1;
     addingTableWithDataValueArray = addHTMLArray[addHTMLArrayLen - 1].split("_:_");
     addingTableWithDataValueArrayLen = addingTableWithDataValueArray.length;
     if (addingTableWithDataValueArrayLen == 2) {
      addingWhere = "td"; 
      if (addingTableWithDataValueArray[1].indexOf("td") > -1) {
       addingWith = "td";
       addingWithWhatIndex = Number(addingTableWithDataValueArray[1].replace("td",""));       
      } else {
       let updateNeeded;
      }
      addingWhatIndex = addingTableWithDataValueArray[0].replace("td","");    
     } else {
      let updateNeeded;
     }
    }
   } else {
    let updateNeeded;
   }   
  };
  if (addHTML.indexOf(",") == -1) {
   if (addHTML.indexOf("::") == -1) {
    let skip;
   } else {
    {
    let htmlspacer = 1;
    let addHTMLArrayIndex = 0;
    theAddedHTML = addHTML;
    addHTMLArray = theAddedHTML.split("::");
    addHTMLArrayLen = addHTMLArray.length;
    substitutePlaceHolderText = "|--__Value_TO_be_REPLAced_wItH_taBLE_DaTa_Is_uNlIkEly_tO_BE_HERE__--|";
    if (addHTMLArray[0].indexOf("<") == 0) {
     isAddingTag = 1;
     addingTag = addHTMLArray[0];
     if (addingTag.indexOf("'") > -1) usedDoubleQuotes = 0; else  usedDoubleQuotes = 1;
     if (addingTag.indexOf(" ") > -1) {
      if (addingTableWithDataValue == 1) {
       if (addingTag.indexOf("href='append'") > -1 || addingTag.indexOf('href="append"') > -1 ) {
        if (addingTag.indexOf("append") == addingTag.lastIndexOf("append") && columnValueRemovedArrayLen <= 1) {
         addingTag = addingTag.replace("append", substitutePlaceHolderText ); 
        } else {
         let updateNeeded;
        }
       } else {
        let updateNeeded;
       }
      }
      addingCloseTag = addHTMLArray[0].substr(0, addingTag.indexOf(" ")) + ">";
      addingCloseTag = addingCloseTag.replace("<", "</");
      setAddHTMLPlacement();
     } else {
      addingCloseTag = addHTMLArray[0].replace("<", "</");
      setAddHTMLPlacement();
     }      
    } else if (addHTMLArray[0].indexOf("-:-") > -1) { 
    // ADD AS IF ARRAY HTML TAG AND ATTRIBUTES
     isAddingTag = 1;    
     let addHTMLArrayOne = addHTMLArray[0].split("-:-");
     let addHTMLArrayOneLen = addHTMLArrayOne.length;
     addingTag = "";
     for (i = 0; i < addHTMLArrayOneLen; i++) {
      if (i == 0) {
       addingTag += "<" + addHTMLArrayOne[i];
      } else if (i == addHTMLArrayOneLen - 1) {
       addingTag += addHTMLArrayOne[i] + "'" + ">";
      } else {
       if (i%2 != 0) {
        // ex: href(i) = "        
        addingTag += " " + addHTMLArrayOne[i] + "='";
       } else {
        // ex: href = "(i)"        
        if (addHTMLArrayOne[i] == "append") {                       
         addingTag += substitutePlaceHolderText + "'";
        } else {
         let updateNeeded;
         addingTag += addHTMLArrayOne[i] + "'";
        }        
       }        
      }       
     }     
     addingCloseTag = "</" + addHTMLArrayOne[0] + ">";      
     setAddHTMLPlacement();
    } else {
     isAddingTag = 0;
     let updateNeeded;
    }
    if (addHTMLArray[1].indexOf("-:-") > -1) {
     addHTMLAltering = 1; 
     addHTMLAlterArray = addHTMLArray[1].split("-:-");
     addHTMLAlterArrayLen = addHTMLAlterArray.length;
     alterAddedHTML();
    } else {
     addHTMLAltering = 0;
    }
    }
   }
  } else {
   let updateNeeded;
  }
 };
 }
 {// CONFIG PARENT HTML
 var parElementConfigI = function() {
  if (parElementIdentifierLowCase == "id") useID = 1;

  if (parElementIdentifierLowCase.indexOf("class") > -1) {
   useClass = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("class", "");
  }
  if (parElementIdentifierLowCase.indexOf("data") > -1) {
   useData = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("data", "");
  }
  if (parElementIdentifierLowCase.indexOf("tag") > -1) {
   useTag = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("tag", "");
  }
  if (relocate == 1) {
   if (relocateIdentifierLowCase == "id") relocateID = 1;

   if (relocateIdentifierLowCase.indexOf("class") > -1) {
    relocateClass = 1;
    theRelocateElementIndex = relocateIdentifierLowCase.replace("class", "");
   }
   if (relocateIdentifierLowCase.indexOf("data") > -1) {
    relocateData = 1;
    theRelocateElementIndex = relocateIdentifierLowCase.replace("data", "");
   }
   if (relocateIdentifierLowCase.indexOf("tag") > -1) {
    relocateTag = 1;
    theRelocateElementIndex = relocateIdentifierLowCase.replace("tag", "");
   }  
  }
 };
 var parElementConfigII = function() {
  if (useID == 1) {
    theParElement = document.getElementById(parElement);
   }
   if (useClass == 1) {
    theParElement = document.getElementsByClassName(parElement)[theParElementIndex];
   }
   if (useData == 1) {
    theParElement = document.querySelectorAll("[data-" + parElement + "]")[theParElementIndex];
   }
   if (useTag == 1) {
    theParElement = document.getElementsByTagName(parElement)[theParElementIndex];
   } 
   if (relocate == 1) {
    if (relocateID == 1) {
      theRelocateElement = document.getElementById(relocateElement);
     }
     if (relocateClass == 1) {
      theRelocateElement = document.getElementsByClassName(relocateElement)[theRelocateElementIndex];
     }
     if (relocateData == 1) {
      theRelocateElement = document.querySelectorAll("[data-" + relocateElement + "]")[theRelocateElementIndex];
     }
     if (relocateTag == 1) {
      theRelocateElement = document.getElementsByTagName(relocateElement)[theRelocateElementIndex];
     }
   }
   extractTagConfig(); 
 };  
 }
// ---------------------------- 
 {// EVALUATE OUTPUT HTML
 if (colNumber == undefined || parElement == undefined) 
  {// DEFAULT WHATEVER TAG HAS MOST TEXT
  // colNumber, colTitles, extractTags, parElement, parElementIdentifier, relocate, relocateElement, relocateElementIdentifier, addHTML
  let bodyTag = document.getElementsByTagName("body")[0];
  let skipSript = "SCRIPT";
  var makeDefaultTable = function(x) {
   if (bodyTag.children.length == 0) {
    if (x == 0) {
     colNumber = 2, colTitles = "Column I,Colum II", extractTags = "_w:n", parElement = "body", parElementIdentifier = "tag0", relocate = 0, relocateElement = "self", relocateElementIdentifier = "tag0", addHTML = 0;    
    } else {
     parElement = "body", parElementIdentifier = "tag0", relocate = 0, relocateElement = "self", relocateElementIdentifier = "tag0", addHTML = 0;
    }    
   } else {
    let tempTagLength = 0;
    let maxTagLength = 0; 
    let tempTagIndex = 0;
    let tempTagName = "";
    for (i = 0; i < bodyTag.children.length; i++) {
     if (i == 0) {
      tempTagLength = bodyTag.children[0].innerHTML.length;     
      tempTagIndex = i;
      tempTagName = bodyTag.children[0].nodeName;
     } else {
      maxTagLength = bodyTag.children[i].innerHTML.length;     
      if (bodyTag.children[i].nodeName == skipSript) {
       let skip;
      } else {
      if (maxTagLength > tempTagLength) {
       tempTagLength = maxTagLength;
       tempTagIndex = i;
       tempTagName = bodyTag.children[i].nodeName;
      }     
      }
     }
    }
    if (x == 0) {
     colNumber = 2, colTitles = "Column I,Colum II", extractTags = "_w:n", parElement = tempTagName, parElementIdentifier = "tag" + tempTagIndex, relocate = 0, relocateElement = "self", relocateElementIdentifier = "tag"+ tempTagIndex, addHTML = 0;
    } else {
     parElement = tempTagName, parElementIdentifier = "tag" + tempTagIndex, relocate = 0, relocateElement = "self", relocateElementIdentifier = "tag"+ tempTagIndex, addHTML = 0;
    }    
   }  
  };
  if (colNumber == undefined) {
   makeDefaultTable(0);
  } else {
   makeDefaultTable(1);
  }
 } else {
  if (relocate == undefined) {
   relocate = 1, relocateElement = parElement, relocateElementIdentifier = parElementIdentifier, addingClass = 0;
  } else {
   if (relocateElement == undefined) {
    if (relocate == 0) {
     relocateElement = "self", relocateElementIdentifier = parElementIdentifier, addingClass = 0;
    }
   } else {
    if (relocateElementIdentifier == undefined) {
     if (relocate == 0 && relocateElement.indexOf("::") > -1) {
      relocateElementIdentifier = parElementIdentifier;
      addingClass = 0;      
      addHTML = relocateElement;      
       if (addHTML.indexOf("class:") == -1) {
        addingClass = 0;
        addingHTML = 1;
        isRelocateElementIdentifierDefined = 0;
        configAddedHTML();
       } else {      
        addingClass = 1;
        let updateNeeded;
       }            
     } else {
      relocateElementIdentifier = parElementIdentifier, addingClass = 0;
     }
    } else {
     if (addHTML == undefined) {
      addHTML = 0;
      addingClass = 0;
     } else {
      if (addHTML == 0) {
       addingClass = 0;
       addingHTML = 0;      
      } else {
       if (addHTML.indexOf("class:") == -1) {
        addingClass = 0;
        addingHTML = 1;
        configAddedHTML();
       } else {      
        addingClass = 1;
        let updateNeeded;
       }     
      }         
     }
    }
   }
  }  
 } 
 }
 {// EVALUATE INPUT HTML
 if (parElementIdentifier == undefined) {
   parElementIdentifier = "id";
   useID = 1;
   if (extractTags[0] != "_") {removeNewLines(parElement, parElementIdentifier, 1);}
   parElementConfigII();
 } else {
  var parElementIdentifierLowCase = parElementIdentifier.toLowerCase();
  var relocateIdentifierLowCase = relocateElementIdentifier.toLowerCase();
  if (extractTags[0] != "_") {removeNewLines(parElement, parElementIdentifier, 1);}
  parElementConfigI();
  parElementConfigII();
 }
 }
} 

function changeNextElementDisplay(cur, curEl) {
 if (cur == undefined || curEl == undefined) { return; }
 let noBreakTags = 1;
 while (noBreakTags == 1) {
 if (curEl.nodeName == "BR" || curEl.nodeName == "HR") { curEl = curEl.nextElementSibling; } else { noBreakTags = 0; }
 }
 //if (curEl.nodeName == "BR") curEl = curEl.nextElementSibling;
 var toText = function(parEl, tags) {
  if (tags == undefined) tags = "";
  let hasEl = 1;
  let curText = parEl.innerHTML;
  while (hasEl == 1) {
   if (tags == "<>") {
    if (curText.indexOf("<") > -1 && curText.indexOf(">") > -1) {
     curText = curText.replace("<", "&lt;");
     curText = curText.replace(">", "&gt;");
    } else {
     hasEl = 0;
    }
   } else {
    hasEl = 0;
   }
  }
  parEl.innerHTML = curText;
 };
 if (cur.dataset.totext == 1) toText(curEl, "<>");
 if (cur.dataset.showhide == 0 || cur.hasAttribute("data-showhide") == false) {
  cur.dataset.showhide = 1;
  cur.innerHTML = cur.innerHTML.replace("Show", "Hide");
  curEl.style.display = ""; 
 } else {
  cur.dataset.showhide = 0;
  cur.innerHTML = cur.innerHTML.replace("Hide", "Show");
  curEl.style.display = "none";
 }
}

// Miscellaneous
function outputTextFile(textFilePath, parElement, parElementIdentifier, asWhat) {
 var useID=0, useClass=0, useData=0, useTag=0;
 var theParElement, theParElementIndex = 0;
 
 if (parElementIdentifier == undefined) {
  parElementIdentifier = "ID";
  replace = "";
  useID = 1;
  asWhat = "text";
 } else {
  if (asWhat == undefined) asWhat = "text";
  let parElementIdentifierLowCase = parElementIdentifier.toLowerCase();
  if (parElementIdentifierLowCase == "id") useID = 1;
  if (parElementIdentifierLowCase.indexOf("class") > -1) {
   useClass = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("class", "");
  }
  if (parElementIdentifierLowCase.indexOf("data") > -1) {
   useData = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("data", "");
  }
  if (parElementIdentifierLowCase.indexOf("tag") > -1) {
   useTag = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("tag", "");
  }
 }
 
 if (textFilePath.indexOf("manPages") > -1) isUsingManPage = 1;
 
 var outputTheTextFile = function(par) {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
    if (par) {
     if (asWhat == "text") {
      par.innerText = this.responseText;
     } else {
      par.innerHTML = this.responseText;
     }     
    } else {
     let skip;
    }
   }
  };
   xmlhttp.open("GET", textFilePath, true);
   xmlhttp.send();
 }; 
 
 if (useID == 1) {
  theParElement = document.getElementById(parElement);
 }
 if (useClass == 1) {
  theParElement = document.getElementsByClassName(parElement)[theParElementIndex];  
 }
 if (useData == 1) {
  theParElement = document.querySelectorAll("[data-" + parElement + "]")[theParElementIndex];  
 }
 if (useTag == 1) {
  theParElement = document.getElementsByTagName(parElement)[theParElementIndex];  
 } 
 if (theParElement) {
  outputTheTextFile(theParElement);
 }
}

function copyText(parElement, parElementIdentifier, copyWhat) {
 var useID=0, useClass=0, useData=0, useTag=0, useVar=0;
 var theParElement, theParElementIndex = 0;
 if (parElementIdentifier == undefined) {
  parElementIdentifier = "ID"; 
  useID = 1;
 } else {
  if (copyWhat == undefined) {
   copyWhat = "text";
  }
  let parElementIdentifierLowCase = parElementIdentifier.toLowerCase(); 
  
  if (parElementIdentifierLowCase == "id") useID = 1;
  
  if (parElementIdentifierLowCase.indexOf("class") > -1) {
   useClass = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("class", "");
  }
  if (parElementIdentifierLowCase.indexOf("data") > -1) {
   useData = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("data", "");
  }
  if (parElementIdentifierLowCase.indexOf("tag") > -1) {
   useTag = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("tag", "");
  }
  if (parElementIdentifierLowCase.indexOf("var") > -1) {
   useVar = 1;   
  }  
 }
 
 var copyTheText = function() {
  if (theParElement) {
   if (
    theParElement.tagName == "textarea" || theParElement.tagName == "TEXTAREA" ||
    theParElement.tagName == "input" || theParElement.tagName == "INPUT" ||
    theParElement.tagName == "select" || theParElement.tagName == "SELECT" ||
    theParElement.tagName == "optgroup" || theParElement.tagName == "OPTGROUP" ||
    theParElement.tagName == "option" || theParElement.tagName == "OPTION" ||
    theParElement.tagName == "fieldset" || theParElement.tagName == "FIELDSET" ||
    theParElement.tagName == "legend" || theParElement.tagName == "LEGEND" ||
    theParElement.tagName == "datalist" || theParElement.tagName == "DATALIST" ||
    theParElement.tagName == "output" || theParElement.tagName == "OUTPUT"
    ) {    
    if (copyWhat == "text") {
     theParElement.value = theParElement.innerText;
    } else {
     theParElement.value = theParElement.innerHTML;
    }    
    theParElement.select();
    navigator.clipboard.writeText(theParElement.value);  
   } else {
    let copyTextarea = document.createElement("textarea");
    copyTextarea.style.display = "none";
    copyTextarea.id = "temp-uFy95-unlikelyID-5TwU8";
    if (useVar == 1) {     
     if (copyWhat == "html") {
      theParElement = theParElement/replace(/</g, "&lt;");
      theParElement = theParElement/replace(/>/g, "&gt;");      
     }
     copyTextarea.value = theParElement;
    } else {               
     if (copyWhat == "text") {
      copyTextarea.value = theParElement.innerText;
     } else {
      copyTextarea.value = theParElement.innerHTML;
     }  
    }
    copyTextarea.select();
    document.body.append(copyTextarea);
    navigator.clipboard.writeText(copyTextarea.value);    
    // Select and delete temp textarea.
    let tempTextarea = document.getElementById("temp-uFy95-unlikelyID-5TwU8");
    tempTextarea.remove();        
   }
  }
 };
  
 if (useID == 1) {  
  theParElement = document.getElementById(parElement);
 }
 if (useClass == 1) {
  theParElement = document.getElementsByClassName(parElement)[theParElementIndex];
 }
 if (useData == 1) {
  theParElement = document.querySelectorAll("[data-" + parElement + "]")[theParElementIndex];
 }
 if (useTag == 1) {
  theParElement = document.getElementsByTagName(parElement)[theParElementIndex];
 } 
 if (useVar == 1) {
  theParElement = parElement;
 }
 // Run copy event from configurations.
 copyTheText();
}

function showTermTitleWithLink(cur, curData, curTitle) { 
 if (!cur.hasAttribute("data-termtitle")) {
  cur.setAttribute("data-termtitle", "0");
 }
 if (!cur.hasAttribute("data-title") && cur.hasAttribute("title")) {
  cur.setAttribute("data-title", cur.title);
  cur.removeAttribute("title");  
 }
 if (!cur.hasAttribute("onmouseout")) {
  cur.setAttribute("onmouseout", cur.getAttribute("onmouseover"));
 } 
 if (curData == 1) {
  curTitle = 0;
  setTimeout(function() {
  if (cur.getElementsByTagName("a")[0].getAttribute('data-keepdefinitionbox') == 0) {
    cur.remove();     
   }
  }, 200);
  return;
 }
 // Tools to make unique id for created html.
 var setCurTermTitleStorage = function() {
  if (sessionStorage.termTitleStorage) {   
   if (sessionStorage.termTitleStorage == "NaN") {        
    sessionStorage.termTitleStorage = 0;
   } else {
    sessionStorage.termTitleStorage = Number(sessionStorage.termTitleStorage) + 1;   
   }    
   } else {   
    sessionStorage.termTitleStorage = 1;    
   }
  };  
 // Functio Variables
 var curTermOffsetTop, tempTermBox, tempTermBoxScrollHeight;
 var termTitleWithLinkData, termTitleWithLinkDefinition, termTitleWithLinkTerm, termTitleArray, termTitleArrayLen, 
     termTitleLinkArray, termTitleLinkArrayLen, termLinkArray, termLinkArrayLen,
     termBox, termBoxid, termBoxHTML, termLinkBox, termBoxTop, termBoxPos, termLinkTag;
 var termLink = "javascript:void(0)";
 var sourcePage = "Source Page";
 var termTitleStyle = "display:none";
 var closeLinkText = "";
 var multipeTermLinks = 0;
 termLinkBox = ""; 
 termTitleWithLinkData = curData;
 termTitleWithLinkTerm = cur.innerHTML;
 termTitleWithLinkDefinition = curData.title;
 // MOUSE OVER HTML
 curTermOffsetTop = cur.parentElement.offsetTop;
 if (curData.termtitle == 0) {
  var makeTempThenBox = function(temp) {
   termTitleWithLinkData.termtitle = 1;
   if (temp == 0) {
    tempTermBox = document.getElementById(termBoxid);
    tempTermBoxScrollHeight = tempTermBox.scrollHeight;
   } else {
    tempTermBoxScrollHeight = 0;
   }
   termBox = document.createElement("span");
   // Function in file.
   termBoxid = removeSpaceInVariable(termTitleWithLinkTerm);
   termBoxid += sessionStorage.termTitleStorage;
   setCurTermTitleStorage();  
   termBox.id = termBoxid;
   termBox.setAttribute("data-keepdefinitionbox", 0);
   termBox.setAttribute("onmouseover", "this.dataset.keepdefinitionbox = 1");
   termBox.setAttribute("onmouseleave", "showTermTitleWithLink(this, 1)");

   if (termTitleWithLinkDefinition.indexOf("::") > -1) {
    termTitleArray = termTitleWithLinkDefinition.split("::");
    termTitleArrayLen = termTitleArray.length;
    termTitleStyle = "color: black; width: auto";
    if (termTitleArrayLen > 2) {
     if (termTitleArray[1].indexOf(",") > -1) {
      termTitleLinkArray = termTitleArray[1].split(","); 
      termTitleLinkArrayLen = termTitleLinkArray.length;      
       (function() {
        if (termTitleArray[2].indexOf("-:-") > -1) {
         let updateNeeded;         
         multipeTermLinks = 1;
         termLinkArray = termTitleArray[2].split("-:-");
         termLinkArrayLen = termLinkArray.length;
         let usingBrackets = 0;
         for (i = 0; i < termLinkArrayLen; i++) {
          if (termTitleLinkArray[i].indexOf("[") > -1 && termTitleLinkArray[i].indexOf("]") > -1) {
           usingBrackets = 1; break;
          }
         }
         let tempTermLinkBox = "";
         for (i = 0; i < termLinkArrayLen; i++) {
          
           
           if (termTitleLinkArray[i].indexOf("[") > -1 && termTitleLinkArray[i].indexOf("]") > -1) {
            if (termTitleLinkArray[i].indexOf("["+i+"]") > -1) {
             termLink = termLinkArray[i];
             sourcePage = termTitleLinkArray[i].replace("["+i+"]", "");
            } else {
             if (termTitleLinkArray[i].indexOf("[l]") > -1) {
              termLink = termLinkArray[i];
              sourcePage = termTitleLinkArray[i].replace("[l]", "");
             } else {
              let j;
              for (ii = 0; ii < termLinkArrayLen; ii++) {
               if (termTitleLinkArray[i].indexOf("["+ii+"]") > -1) {
                j = ii;
                break;
               } else {
                j = -1;
               }
              }
              if (j == -1) {
              termLink = termLinkArray[i];
              sourcePage = termTitleLinkArray[i];
              } else {
              termLink = termLinkArray[j];
              sourcePage = termTitleLinkArray[i].replace("["+j+"]", "");              
              }
             }
            }          
           } else {           
            termLink = termLinkArray[i];
            sourcePage = termTitleLinkArray[i];                        
           }
           if (i == termLinkArrayLen-1) closeLinkText = ""; else  closeLinkText = ", ";
           tempTermLinkBox += ' ' +
            '<a style="' + termTitleStyle + '" href="' + termLink + 
            '" target="_blank" rel="external" ' +
            'data-keepdefinitionbox="0" ' +
            'onmouseover="this.dataset.keepdefinitionbox = 1;" ' +
            'onmouseout="this.dataset.keepdefinitionbox = 0;">' + sourcePage + '</a>' + closeLinkText;
         }
         termLinkBox = tempTermLinkBox;
        } else {        
        if (termTitleArray[1].indexOf("[") > -1 && termTitleArray[1].indexOf("]") > -1) {
         if (termTitleLinkArrayLen > 2) {
          let updateNeeded;
         }
         termLink = termTitleArray[2];
         closeLinkText = ", ";
         for (i = 0; i < termTitleLinkArrayLen; i++) {
          if (termTitleLinkArray[i].indexOf("[l]") > -1) {
           sourcePage = termTitleLinkArray[i].replace("[l]", "");
          } else {           
           closeLinkText += termTitleLinkArray[i];
          }
         }
        } else {
       termLink = termTitleArray[2];
       sourcePage = termTitleLinkArray[0]; 
       closeLinkText = ", " + termTitleLinkArray[1];      
      }      
     }
    }) ();      
   } else {
    termLink = termTitleArray[2];
    sourcePage = termTitleArray[1];
   } 
  } else {     
   termLink = termTitleArray[1];
  }
 }

   if (multipeTermLinks == 0) {
    termLinkBox = ' ' +
     '<a style="' + termTitleStyle + '" href="' + termLink + 
     '" target="_blank" rel="external" ' +
     'data-keepdefinitionbox="0" ' +
     'onmouseover="this.dataset.keepdefinitionbox = 1;" ' +
     'onmouseout="this.dataset.keepdefinitionbox = 0;">' + sourcePage + '</a>' + closeLinkText;
   } 

   if (cur.offsetTop > 50 || curTermOffsetTop > 50) {
    if (cur.parentElement.nodeName != "BODY") {    
     termBoxPos = "absolute;";            
     if (temp == 1) {
      termBoxTop = (cur.parentElement.offsetTop - 30) + "px;";     
     } else {
      termBoxTop = (cur.parentElement.offsetTop - tempTermBoxScrollHeight - 5) + "px;";
     }     
    } else {
     termBoxPos = "relative;";
     termBoxTop = "15px;";
    }   
   }
   else {
    termBoxPos = "absolute;";
    termBoxTop = (cur.offsetTop + 15) + "px;";
   }

  termBox.setAttribute("style", 
   "display: inline;" +
   "position: " + termBoxPos +
   "top:" + termBoxTop +
   "left: 0px;" +
   "padding: 5px;" +   
   "border: 1px solid black;" +
   "background: lightyellow;" +
   "color: black;" +
   "margin-bottom: 20px;" +   
   "height: auto;" +
   "width: auto;");  

  if (termTitleWithLinkDefinition.indexOf("::") > -1) {
   termBox.innerHTML = termTitleArray[0] + termLinkBox;
   } else {
   termBox.innerHTML = termTitleWithLinkDefinition + termLinkBox;
   }
   if (temp == 0) {
    tempTermBox.remove();
    cur.insertAdjacentElement("afterend", termBox);  
   } else {
    cur.insertAdjacentElement("afterend", termBox);  
   }   
  };
  makeTempThenBox(1);
  makeTempThenBox(0);
 } else {
  termTitleWithLinkData.termtitle = 0;
  if (cur.nextElementSibling) {
   termBoxHTML =  document.getElementById(cur.nextElementSibling.id);
   setTimeout(function() {
    if (termBoxHTML.dataset.keepdefinitionbox == 0) {
     termBoxHTML.remove();
    }
   }, 500);
  }
 }
}

function findArrayMax(arr) {
 if (arr == undefined) { return; } 
 var hasNestedArray = 0;  var theFinalArray = "";
 
 var recurseCheckNestedArray = function(arr) {
  for (i = 0; i < arr.length; i ++) {
   if (typeof arr[i] == "object") {    
    hasNestedArray = 1;        
    break;
   } else {
    let skip;
   }
  }
 }; 
 recurseCheckNestedArray(arr);
 if (hasNestedArray == 1) {
  theFinalArray = String(arr);  
  theFinalArray = theFinalArray.split(",");
  for (i in theFinalArray) {theFinalArray[i] = Number(theFinalArray[i]);}  
  return Math.max.apply(null, theFinalArray); 
 } else {
  return Math.max.apply(null, arr);
 } 
}
function findArrayMin(arr) {
 if (arr == undefined) { return; } 
 var hasNestedArray = 0;  var theFinalArray = "";
 
 var recurseCheckNestedArray = function(arr) {
  for (i = 0; i < arr.length; i ++) {
   if (typeof arr[i] == "object") {    
    hasNestedArray = 1;        
    break;
   } else {
    let skip;
   }
  }
 }; 
 recurseCheckNestedArray(arr);
 if (hasNestedArray == 1) {
  theFinalArray = String(arr);  
  theFinalArray = theFinalArray.split(",");
  for (i in theFinalArray) {theFinalArray[i] = Number(theFinalArray[i]);}  
  return Math.min.apply(null, theFinalArray); 
 } else {
  return Math.min.apply(null, arr);
 } 
}

function toggleButtonSwitch(cur, curRun) {
 if (cur == undefined) { return; }
 if (curRun == undefined) { curRun = "0"; }
 if (cur.dataset.toggleX == false) { return; }
 if (cur.dataset.togglebuttonswitch == -1) { 
  cur.dataset.togglebuttonswitch = 1; 
  //cur.setAttribute("onclick", "toggleButtonSwitch(this)"); 
  cur.setAttribute("onclick", cur.getAttribute("onclick").replace("toggleButtonSwitch(this," + cur.dataset.toggleX + ")", "toggleButtonSwitch(this)"));
  return; 
 }
 if (cur.dataset.togglebuttonswitch == -2) { 
  cur.dataset.togglebuttonswitch = 0; 
  cur.setAttribute("onclick", cur.getAttribute("onclick").replace("toggleButtonSwitch(this," + cur.dataset.toggleY + ")", "toggleButtonSwitch(this)"));
  return; 
 }
 if (cur.dataset.togglebuttonswitch == 0 || cur.hasAttribute("data-togglebuttonswitch") == false) {  
  cur.dataset.togglebuttonswitch = -1;    
  cur.setAttribute("onclick", cur.getAttribute("onclick").replace("toggleButtonSwitch(this)", "toggleButtonSwitch(this," + cur.dataset.toggleX + ")"));
  cur.click();
 } else {
  cur.dataset.togglebuttonswitch = -2;
  if (cur.dataset.toggleY == false) {    
   cur.setAttribute("onclick", "toggleButtonSwitch(this)");   
  } else {
   cur.setAttribute("onclick", cur.getAttribute("onclick").replace("toggleButtonSwitch(this)", "toggleButtonSwitch(this," + cur.dataset.toggleY + ")"));
  }
  cur.click();
 }
}

function makeRandomSequence(randomLength = 8, randomData = ["digits", "lowerCaseCharacters", "upperCaseCharacters"]) {
  let randomObject = {
   "digits": "0123456789",
   "lowerCaseCharacters": "abcdefghijklmnopqrstuvwxyz",
   "upperCaseCharacters": "ABCDEFGHIJKLMNOPQRSTUVWXYZ"  
  };  
  let randomCharacters = "";
  for (i = 0; i < randomLength; i++) {
   let randomDataType = // 0 to 2, or 0 to lenth of parameter randomData
    Math.floor(Math.random() * randomData.length);
    
   let randomDigit    = // random integer from length of randomObject property
    Math.floor(Math.random() * randomObject[randomData[randomDataType]].length);
                            // [ object ]  [ array    [ index ]   in   ^ ------ ]
    
   randomCharacters  += // use above elements to append each random character
    randomObject[randomData[randomDataType]][randomDigit];
  }
 return randomCharacters;
 }