// Algorithm Sorter
// 
// Daniel Dousek
//
// Displays a randomized graph allowing the user to select different 
// sorting algorithems and visual see how each algorithem works.
  var numOfLine = 0;
  var a = 0;
  var b =0;
  var x = 0;
  var ColCounter =0;
  const ObjHeights = [];
  const Objects = [];
  const ChangeCol = [];
        
  let n = ObjHeights.length;
//################################################
  
  while (numOfLine+1 <= document.getElementById('BigContainer').clientWidth/7){
    var div = document.createElement('div');

    div.className =("frequencyItem");
    div.id =("frequencyItem"+numOfLine);
    console.log()
    $('.Sortings').append(div);
  
    numOfLine++;
  }

function randomizeGraph(){
    
    while (numOfLine+1 <= document.getElementById('BigContainer').clientWidth/3){
        var diver = document.createElement('div');
    
        diver.className =("frequencyItem");
        diver.id =("frequencyItem"+numOfLine);
        console.log()
        //$('.Sortings').append(diver);
    
        numOfLine++;
      }
    

    x=0;

  $('.frequencyItem').each(function() {
    var h = Math.floor(Math.random() * numOfLine) + 30;
    $(this).css("height", h);
    $(this).css("backgroundColor","white");
    Objects[numOfLine] = $(this);
   
    ObjHeights[x] = h;
    x++;
  });

}

function lockButtin(active){
 
    
    const buttons = document.querySelectorAll("Button");
  
  
    if(active){

        buttons.forEach(function(ele){
            ele.disabled = true;
            ele.style.opacity =0.5;
            ele.style.setProperty('--td-background-color', '#ff0000');
            ele.style.setProperty('--col', '#ff0000');
            console.log("color change");
        })

    }else{
        buttons.forEach(function(ele){
            ele.disabled = false;
            ele.style.opacity =1;
            ele.style.setProperty('--td-background-color', '#20bf6b');
            ele.style.setProperty('--col', '#20bf6b');
            
        })
    }
       
    
    
}


//SORTING ALGORITHEMS
//########################################################################################################
  function insertionSort(inputArr) {
        let tempCount =0;
        const ChangeCol = [];
        var ColCounter =0;
        for(let i = 0; i<n; i++){
           
            setTimeout(function() {
                
                //change starting color
                $('#frequencyItem'+(i-1)).css("backgroundColor", "grey");  
                $('#frequencyItem'+i).css("backgroundColor", "green");

                let current = ObjHeights[i];          
                let j = i-1;

                for(var x =0; x<=ColCounter;x++){  
                    $('#frequencyItem'+ChangeCol[x]).css("backgroundColor", "grey");
                }   
                //Find position for lower value
                while ((j > -1) && (current <  ObjHeights[j])) {          
                    ObjHeights[j+1] = ObjHeights[j];
                        $('#frequencyItem'+(j+1)).css("height", ObjHeights[j]);
                        $('#frequencyItem'+j).css("backgroundColor", "red"); 
                        ChangeCol[ColCounter] = j;   
                        ColCounter ++;             
                     j--;    
                    
                }
               
                //Wait to change colors back to grey
               // setTimeout(function() {
                      
                //},50*i)
              
                //put in new position
                ObjHeights[j+1] = current;
                $('#frequencyItem'+(j+1)).css("height", current);  

                //recall function
                
                if(i == (n-1)){
                   
                    lockButtin(false);
                }
            }, 50*i)

        }

        for(var x =0; x<=ColCounter;x++){  
            $('#frequencyItem'+ChangeCol[x]).css("backgroundColor", "white");
        } 
        /*if ( i < n) {
            const ChangeCol = [];
            var ColCounter =0;
            i++;

            setTimeout(function() {
                tempCount++;
                //change starting color
                $('#frequencyItem'+(i-1)).css("backgroundColor", "grey");  
                $('#frequencyItem'+i).css("backgroundColor", "green");

                let current = inputArr[i];          
                let j = i-1;
                  
                //Find position for lower value
                while ((j > -1) && (current <  inputArr[j])) {          
                    inputArr[j+1] = inputArr[j];
                        $('#frequencyItem'+(j+1)).css("height", inputArr[j]);
                        $('#frequencyItem'+j).css("backgroundColor", "red"); 
                        ChangeCol[ColCounter] = j;   
                        ColCounter ++;             
                     j--;    
                    
                }
               
                //Wait to change colors back to grey
                setTimeout(function() {
                    for(var x =0; x<=ColCounter;x++){  
                        $('#frequencyItem'+ChangeCol[x]).css("backgroundColor", "grey");
                    }     
                },50)
              
                //put in new position
                inputArr[j+1] = current;
                $('#frequencyItem'+(j+1)).css("height", current);  

                //recall function
                insertionSort(ObjHeights);
                if(tempCount == (n-1)){
                    console.log("works");
                    lockButtin(false);
                }
            }, 50)

            
            
               
        }*/
     
    //return inputArr;
}

function bubbleSort(){

    const ChangeCol = [];
    for(let z = 0;z <n;z++){
       
       setTimeout(function(){
       
        for(var x =0; x<=ColCounter;x++){  
            $('#frequencyItem'+ChangeCol[x]).css("backgroundColor", "white");
        } 
        for(let b = 0; b< n; b++){
                 
                
                if(ObjHeights[b+1] < ObjHeights[b]){
                    $('#frequencyItem'+(b+1)).css("height", ObjHeights[b]);
                    $('#frequencyItem'+b).css("height", ObjHeights[b+1]);
                    $('#frequencyItem'+b).css("backgroundColor", "red");
                    var tempValue = ObjHeights[b];
                    ObjHeights [b] = ObjHeights[b+1];
                    ObjHeights[b+1] = tempValue;
        
                    ChangeCol[ColCounter] = b;   
                    ColCounter ++; 
                }
        }
       
        if(z== n-1){
            lockButtin(false);
        }
        },50*z)
        
    }
}

function selectionSort(){

    const ChangeCol = [];
    for(let s = 0;s < n;s++){
        setTimeout(function(){
            tempMinValuePos = s;
            tempMinValue = 0;

            for(var x =0; x<=ColCounter;x++){  
                $('#frequencyItem'+ChangeCol[x]).css("backgroundColor", "white");
            } 
            ColCounter =0; 

            for(let d =s;d < n;d++){
                if(ObjHeights[d] < ObjHeights[tempMinValuePos]){
                    tempMinValuePos = d;
                } 
            }
            tempMinValue = ObjHeights[s];
            ObjHeights[s] = ObjHeights[tempMinValuePos];
            ObjHeights[tempMinValuePos] = tempMinValue;
           
            $('#frequencyItem'+(s)).css("height", ObjHeights[s]);
            $('#frequencyItem'+(tempMinValuePos)).css("height", ObjHeights[tempMinValuePos]);
            $('#frequencyItem'+(tempMinValuePos)).css("backgroundColor", "red");
            $('#frequencyItem'+(s)).css("backgroundColor", "green");

            ChangeCol[ColCounter] = tempMinValuePos;   
            ColCounter ++; 
            ChangeCol[ColCounter] = s;
           

            if(s==(n-1)){
               
                lockButtin(false);
            }
        },50*s)
        
    }
    
}

 

//########################################################################################################
randomizeGraph();


document.getElementById("BubbleBtn").onclick = function(){
    n = ObjHeights.length;
 
    lockButtin(true);
    bubbleSort();

    
}

document.getElementById("selectionSort").onclick = function(){
    n = ObjHeights.length;
    
    lockButtin(true);
    selectionSort();
}

document.getElementById("InsertionSort").onclick = function(){
    n = ObjHeights.length;
  
    lockButtin(true);
    insertionSort(ObjHeights);
    
};
document.getElementById("RandomizeBtn").onclick = function(){
    numOfLine = 0;
    randomizeGraph()
};



