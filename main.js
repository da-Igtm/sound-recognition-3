function identifySound(){
        console.log("Daksh");
        navigator.mediaDevices.getUserMedia({
audio:true
     });
     classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ZrhAkRb8O/model.json",model_ready); 
}
function model_ready(){
        console.log("model is ready");
        classifier.classify(gotResults); 
}
var cat = 0;
var dog = 0;
var cow = 0;
var lion = 0;
function gotResults(error,results){
        if(error){
console.error(error);
}
else{
        random_number_r=Math.floor(Math.random()*256);
        random_number_g=Math.floor(Math.random()*256);
        random_number_b=Math.floor(Math.random()*256);

label= results[0].label;
confidence=results[0].confidence;
document.getElementById("confidence_label").innerHTML="confidence= "+confidence;
document.getElementById("hearing_label").innerHTML="Sound belongs to= "+label;
document.getElementById("hearing_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
document.getElementById("confidence_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
console.log(label);
if(label=="meowing"){
cat++;
}
else if(label=="roaring"){
lion++;
}
else if(label=="barking"){
dog++;
}
}
document.getElementById("cow").innerHTML="cow= "+cow;
document.getElementById("lion").innerHTML="lion= "+lion;
document.getElementById("cat").innerHTML="cat= "+cat;
document.getElementById("dog").innerHTML="dog= "+dog;
}