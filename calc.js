var Quest = new Array(30);  //this sets up an array for all of the answers that are given 
var myContents = ["Severe", "Moderate", "Mild", "You're all good"];
function populate() { 
// alert("function populate started"); 
// this function gives each of the answers 0 points so if someone doesn't answer a question 
// the whole thing will continue to work 
for(var i=0; i<30; i++) { Quest[i]=0; } 
} 
var anxiety=0;
var depression=0;
var bipolar=0;
var ed=0;
var schiz=0;
var ptsd=0;
var disruptive=0;

function total() { 
// alert("function total started"); 
// this function adds the number of points each answer is worth together 
 myScore=0; 
 for (var i=0; i<30; i++) { 
  myScore=myScore+Quest[i];
  if(i===0 && Quest[i]>3){
    anxiety++;
  }
  else if(i===1 && Quest[i]>3){
    depression++;
  }
  else if(i===2 && Quest[i]>3){
    depression++;
  }
  else if(i===3 && Quest[i]>3){
    anxiety++;
  }
  else if(i===4 && Quest[i]>3){
    bipolar++;
  }
  else if(i===5 && Quest[i]>3){
    anxiety++;
  }
  else if(i===6 && Quest[i]>3){
    depression++;
  }
  else if(i===7 && Quest[i]>3){
    ed++;
  }
 
 else if(i===8 && Quest[i]>3){
    schiz++;
  }
  else if(i===9 && Quest[i]>3){
    anxiety++;
  }
  else if(i===10 && Quest[i]>3){
    ptsd++;
  }
  else if(i===11 && Quest[i]>3){
    anxiety++;
  }
  else if(i===12 && Quest[i]>3){
    ed++;
  }
  else if(i===13 && Quest[i]>3){
    anxiety++;
  }
  else if(i===14 && Quest[i]>3){
    disruptive++;
  }
  else if(i===15 && Quest[i]>3){
    depression++;
  }

  else if(i===16 && Quest[i]>3){
    depression++;
  }
  else if(i===17 && Quest[i]>3){
    schiz++;
  }
  else if(i===18 && Quest[i]>3){
    schiz++;
  }
  else if(i===19 && Quest[i]>3){
    depression++;
  }
  else if(i===20 && Quest[i]>3){
    anxiety++;
  }
  else if(i===21 && Quest[i]>3){
    bipolar++;
  }
  else if(i===22 && Quest[i]>3){
    anxiety++;
  }
 
 else if(i===23 && Quest[i]>3){
    disruptive++;
  }
  else if(i===24 && Quest[i]>3){
    ptsd++;
  }
  else if(i===25 && Quest[i]>3){
    schiz++;
  }
  else if(i===26 && Quest[i]>3){
    anxiety++;
  }
  else if(i===27 && Quest[i]>3){
    ptsd++;
  }
  else if(i===28 && Quest[i]>3){
    schiz++;
  }
  else if(i===29 && Quest[i]>3){
    ptsd++;
  }
  
 } 
 analyzer(myScore); 
 
} 


 let typeArray= new Array(7);

 var myContentsPtr;
function analyzer (myScore) { 
// this function uses the total calculated score to figure out which personality type they are 

if (myScore <= 40) {
    myContentsPtr = 3;
} else if (myScore > 40 && myScore <= 70) {
    myContentsPtr = 2;
} else if (myScore > 70 && myScore <= 100) {
    myContentsPtr = 1;
} else if (myScore > 100 && myScore <= 150) {
    myContentsPtr = 0;
}
myDisplay(myContents[myContentsPtr]);
 


 typeArray[0]=anxiety;
 typeArray[1]=depression;
 typeArray[2]=bipolar;
 typeArray[3]=ed;
 typeArray[4]=schiz;
 typeArray[5]=ptsd;
 typeArray[6]=disruptive;
 typeOf();
 if(indexMax === 0){
    if(myContentsPtr===0){
     
        document.getElementById("description").innerHTML = ("Based on your recent mental health survey results, we recommend considering a consultation with a mental health professional. Please prioritize your mental health and consider scheduling an appointment with a psychologist, psychiatrist, or therapist.");
     
    }
    if(myContentsPtr==3){
        document.getElementById("description").innerHTML =(" Based on your responses, it appears that your score indicates a relatively low level of concern for mental well-being. We invite you to explore our mental health website, where you can find valuable resources, support, and information to maintain and enhance your mental well-being. Our platform offers articles, tips, and tools designed to promote positive mental health and provide assistance if needed.<a href='selfcare.html'>Check out our self care section!</a>")
    }
    if(myContentsPtr===2){
        document.getElementById("description").innerHTML = ("1.	Practice relaxation techniques: Techniques such as deep breathing, progressive muscle relaxation, or mindfulness meditation can help reduce feelings of anxiety.<br>2.	Stay active: Regular exercise has been shown to be effective in reducing anxiety levels. Even a short walk or some light stretching can make a difference.");
    }
    if(myContentsPtr===1){
        
        document.getElementById("description").innerHTML =("Traditional anti-anxiety drugs such as benzodiazepines (typically prescribed for short-term use) such as Xanax (alprazolam), Klonopin (clonazepam), Valium (diazepam), and Ativan (lorazepam) work quickly, typically bringing relief within 30 minutes to an hour.<br> (WHO verified)")
    }
   
 }

 if(indexMax === 1){
    if(myContentsPtr===0){
      
        document.getElementById("description").innerHTML = ("Based on your recent mental health survey results, we recommend considering a consultation with a mental health professional. Please prioritize your mental health and consider scheduling an appointment with a psychologist, psychiatrist, or therapist.")
    }
    if(myContentsPtr==3){
        document.getElementById("description").innerHTML =(" Based on your responses, it appears that your score indicates a relatively low level of concern for mental well-being. We invite you to explore our mental health website, where you can find valuable resources, support, and information to maintain and enhance your mental well-being. Our platform offers articles, tips, and tools designed to promote positive mental health and provide assistance if needed.<a href='selfcare.html'>Check out our self care section!</a>")
    }
    if(myContentsPtr===2){
        document.getElementById("description").innerHTML = ("1.	Establish a routine: Maintaining a consistent daily routine can provide structure and stability, which may help alleviate symptoms of depression.5.	Challenge negative thoughts: Cognitive-behavioral techniques, such as cognitive restructuring, can help identify and challenge negative thought patterns that contribute to depression.");
    }
    if(myContentsPtr===1){
        document.getElementById("description").innerHTML =("TTCAs are an older class of antidepressants that work by increasing levels of serotonin and norepinephrine in the brain. Some suggestions: Amitriptyline, Nortriptyline, Imipramine <br> (WHO verified)")
    }
   
 }

 if(indexMax === 2){
    if(myContentsPtr===0){
      
        document.getElementById("description").innerHTML = ("Based on your recent mental health survey results, we recommend considering a consultation with a mental health professional. Please prioritize your mental health and consider scheduling an appointment with a psychologist, psychiatrist, or therapist.")
    }
    if(myContentsPtr==3){
        
        document.getElementById("description").innerHTML =(" Based on your responses, it appears that your score indicates a relatively low level of concern for mental well-being. We invite you to explore our mental health website, where you can find valuable resources, support, and information to maintain and enhance your mental well-being. Our platform offers articles, tips, and tools designed to promote positive mental health and provide assistance if needed.<a href='selfcare.html'>Check out our self care section!</a>")
    }
    if(myContentsPtr===2){
        document.getElementById("description").innerHTML = ("1.Practice stress management: Implement stress-reduction techniques such as deep breathing, mindfulness meditation, yoga, or progressive muscle relaxation to help manage stress and prevent mood swings. 2.	Ensure adequate sleep: Prioritize good sleep hygiene by maintaining a consistent sleep schedule, creating a comfortable sleep environment, and practicing relaxation techniques before bedtime.");
    }
    if(myContentsPtr===1){
        document.getElementById("description").innerHTML =("It first start by prescribing mood stabilizer medicines likelithium, valproic acid(depakene), divalproex sodium( depakote). If you still don't get any relief use 1.Quetiapine fumarate 2.Lumateperone(caplyta) 3.Lurasidone(Latuda)<br> (WHO verified)")
    }
   
 }
 if(indexMax === 3){
    if(myContentsPtr===0){
     
        document.getElementById("description").innerHTML = ("Based on your recent mental health survey results, we recommend considering a consultation with a mental health professional. Please prioritize your mental health and consider scheduling an appointment with a psychologist, psychiatrist, or therapist.")
    }
    if(myContentsPtr==3){
        document.getElementById("description").innerHTML =(" Based on your responses, it appears that your score indicates a relatively low level of concern for mental well-being. We invite you to explore our mental health website, where you can find valuable resources, support, and information to maintain and enhance your mental well-being. Our platform offers articles, tips, and tools designed to promote positive mental health and provide assistance if needed.<a href='selfcare.html'>Check out our self care section!</a>")
    }
    if(myContentsPtr===2){
        document.getElementById("description").innerHTML = ("1.	Challenge negative thoughts: Cognitive-behavioral techniques can help identify and challenge distorted thoughts and beliefs about food, weight, and body image. Work on cultivating a more positive and compassionate mindset toward yourself. 2.	Address underlying issues: Explore any underlying emotional or psychological factors that may be contributing to disordered eating behaviors, such as stress, low self-esteem, perfectionism, or past trauma. ");
    }
    if(myContentsPtr===1){
        document.getElementById("description").innerHTML =("Tricyclic antidepressants, Bupropion (Aplenzin, Forfivo, Wellbutrin),Selective serotonin reuptake inhibitors (SSRIs)<br> (WHO verified)")

    }
   
 }
 if(indexMax === 4){
    if(myContentsPtr===0){
      
        document.getElementById("description").innerHTML = ("Based on your recent mental health survey results, we recommend considering a consultation with a mental health professional. Please prioritize your mental health and consider scheduling an appointment with a psychologist, psychiatrist, or therapist.")
    }
    if(myContentsPtr==3){
        document.getElementById("description").innerHTML =(" Based on your responses, it appears that your score indicates a relatively low level of concern for mental well-being. We invite you to explore our mental health website, where you can find valuable resources, support, and information to maintain and enhance your mental well-being. Our platform offers articles, tips, and tools designed to promote positive mental health and provide assistance if needed.<a href='selfcare.html'>Check out our self care section!</a>")
    }
    if(myContentsPtr===2){
        document.getElementById("description").innerHTML = ("1.	Social support: Build a supportive network of friends, family members, or peers who understand your condition and can offer encouragement, validation, and practical assistance when needed. 5.	Safety planning: Develop a safety plan in collaboration with your healthcare team and loved ones to address potential crisis situations and ensure access to support when needed");
    }
    if(myContentsPtr===1){
        document.getElementById("description").innerHTML =("asenapine, clozapine,iloperidone,cariprazine<br> (WHO verified)");
      
    }
   
 }
 if(indexMax === 5){
    if(myContentsPtr===0){
      
        document.getElementById("description").innerHTML = ("Based on your recent mental health survey results, we recommend considering a consultation with a mental health professional. Please prioritize your mental health and consider scheduling an appointment with a psychologist, psychiatrist, or therapist.")
    }
    if(myContentsPtr==3){
        document.getElementById("description").innerHTML =(" Based on your responses, it appears that your score indicates a relatively low level of concern for mental well-being. We invite you to explore our mental health website, where you can find valuable resources, support, and information to maintain and enhance your mental well-being. Our platform offers articles, tips, and tools designed to promote positive mental health and provide assistance if needed.<a href='selfcare.html'>Check out our self care section!</a>")
    }
    if(myContentsPtr===2){
        document.getElementById("description").innerHTML = ("1.	Express yourself: Find healthy ways to express and process your emotions, whether through journaling, creative arts, or talking with a trusted confidant. Expressing yourself can help release pent-up emotions and promote healing. 2.	Be patient and compassionate: Recovery from PTSD is a gradual process, and it's essential to be patient and compassionate with yourself as you navigate your journey toward healing. Celebrate small victories and acknowledge your resilience in coping with challenging symptoms.");
    }
    if(myContentsPtr===1){
        document.getElementById("description").innerHTML =("asenapine, clozapine,iloperidone,cariprazine<br> (WHO verified)");
      
    }
   
 }
 if(indexMax === 6){
   
    if(myContentsPtr===0){
       
        document.getElementById("description").innerHTML = ("Based on your results, we recommend considering a consultation with a mental health professional. Please prioritize your mental health and consider scheduling an appointment with a psychologist, psychiatrist, or therapist.")
    }
    if(myContentsPtr==3){
        document.getElementById("description").innerHTML =(" Based on your responses, it appears that your score indicates a relatively low level of concern for mental well-being. We invite you to explore our mental health website, where you can find valuable resources, support, and information to maintain and enhance your mental well-being. Our platform offers articles, tips, and tools designed to promote positive mental health and provide assistance if needed.<a href='selfcare.html'>Check out our self care section!</a>")
    }
    if(myContentsPtr===2){
        document.getElementById("description").innerHTML = ("1.	Provide positive role models: Surround individuals with positive role models who demonstrate pro-social behaviors and healthy coping mechanisms. Encourage interactions with peers, mentors, or community members who can provide support and guidance. 2.	Monitor progress and adjust interventions: Regularly monitor progress and evaluate the effectiveness of interventions. Adjust strategies as needed based on individual needs and response to treatment.");
    }
    if(myContentsPtr===1){
        document.getElementById("description").innerHTML =("Selective serotonin reuptake inhibitors (SSRIs) such as fluoxetine (Prozac), sertraline (Zoloft), or escitalopram (Lexapro) may be prescribed for mood disorders <br> (WHO verified)");
      
    }
   
 }
} 


function myDisplay(myContents) { 
//This function will open a new window and show the results calculated 
// alert(myContents); **use alert for testing only**. 
document.getElementById("result").innerHTML = (myContents);
} 

function saver(q, points) { 
// this function puts the points that each answer is worth into the array 
 q=q-1; 
 Quest[q]=points 
} 
let indexMax;
function typeOf(){
  var max= Math.max(...typeArray);
  indexMax=typeArray.indexOf(max);
    if(typeArray[0]===0){
        document.getElementById("type").innerHTML = ("Invalid");
        return;
    }
  if(indexMax==0){
    document.getElementById("type").innerHTML = ("Anxiety");
    
  }
  if(indexMax==1){
    document.getElementById("type").innerHTML = ("Depression");
  }
  if(indexMax==2){
    document.getElementById("type").innerHTML = ("Bipolar Disorder");
  }
  if(indexMax==3){
    document.getElementById("type").innerHTML = ("Eating Disorder");
  }
  if(indexMax==4){
    document.getElementById("type").innerHTML = ("Schizophrenia");
  }
  if(indexMax==5){
    document.getElementById("type").innerHTML = ("Post Traumatic Stress");
  }
  if(indexMax==6){
    document.getElementById("type").innerHTML = ("Disruptive Behaviour");
  }

  
}


