https://teachablemachine.withgoogle.com/models/2KT_8m9d7/model.json

Webcam.set ({

    width : 350,
    
    height : 300 ,
    
    image_format : 'png',
    
    png_quality : 90
    
    });
    
    camera = document.getElementById("camera");
    
    Webcam.attach('#camera')
    
    function snapshot() {
    
        Webcam.snap(function(data_uri)
    
        {
    
      document.getElementById("result").innerHTML = '<img id = "captured_image" src ="'+ data_uri +'"/>';
    
        });
    
    }
    
          console.log("ml5 version" , ml5.version);
    
          classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/2KT_8m9d7/model.json", modelLoaded);


          function check() {
        
            img = document.getElementById('captured_image');
     
            classifier.classify(img , gotResult);
     
     
     
           }
     
     
           function gotResult(error , results) {
     
             if (error) {
     
             console.log(error);
     
             } else {
     
               console.log(results)
     
               document.getElementById("result_hand_name").innerHTML = results[0].label ;
     
               document.getElementById("result_hand_name2").innerHTML = results[1].label;
     
               Prediction_1 = results[0].label ;
     
               Prediction_2 = results[1].label ;
     
               if  (results[0].label == "victory" ) {
     
               document.getElementById("gesture_emoji").innerHTML =  "" ;
     
               }
     
               if  (results[0].label == "best" ) {
     
                 document.getElementById("gesture_emoji").innerHTML =  " " ;
       
                 }
     
                 if  (results[0].label == "awesome" ) {
     
                   document.getElementById("gesture_emoji").innerHTML =  "  " ;
         
                   }
     
                   if  (results[1].label == "victory" ) {
     
                     document.getElementById("gesture_emoji2").innerHTML =  "" ;
           
                     }
           
                     if  (resultss[1].label == "best" ) {
           
                       document.getElementById("gesture_emoji2").innerHTML =  "" ;
             
                       }
           
                       if  (results[1].label == "awesome" ) {
           
                         document.getElementById("gesture_emoji2").innerHTML =  "  " ;
               
                         }
     
                 
       
     
             }
             
             function speak() {

              var synth = window.speechSynthesis ;
       
              speak_data_1 = " First Prediction Is " + Prediction_1 ;
       
              speak_data_2 = " Second Prediction Is " + Prediction_2 ;
       
               var utterThis = new SpeechSynthesisUtterance( speak_data_1 + speak_data_2);
       
               synth.speak(utterThis) ;
       
             }
       



            }
     
             
    
    