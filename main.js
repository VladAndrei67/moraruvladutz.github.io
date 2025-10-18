window.onload = function() {
    var slider = document.getElementById("myRange");
    var box = document.getElementById("myBox");
    var picture = document.getElementById("slidePicture")
    var Channel = document.getElementById("Channel");
    var cover = document.getElementsByClassName("cover")[0];
    box.value = slider.value;
    picture.src = channels()+slider.value+".jpg";
    slider.oninput = function(){
        box.value = this.value;
        picture.src = channels()+this.value+".jpg";
        if (window.innerWidth < 711) {
            cover.style.width = (this.max-this.value)*(100/this.max)/1.02+'vw';
          }
        else
            cover.style.width = (this.max-this.value)*1/2.4+'rem';
    }
    box.oninput = function(){
        slider.value = this.value;
        if(parseInt(this.value)>parseInt(slider.max))
            {
                alert("Diminishing returns!");
                this.value=slider.max;
            }
        picture.src = channels()+this.value+".jpg";
    }
    Channel.oninput = function(){
        picture.src = channels()+slider.value+".jpg";
    }
    function channels(){
        if(Channel.checked)
            return "OIII/";
        else
            return "Ha/";
    }
const ButtonSteps = document.getElementsByClassName("toggle-button")[0];
const ButtonStack = document.getElementsByClassName("toggle-button")[1];
const Steps = document.getElementsByClassName("StepByStep")[0];
const Stack = document.getElementsByClassName("EditorContainer")[0];

Steps.style.display = 'none';
ButtonSteps.addEventListener("click", () => {
    if(Steps.style.display == 'none')
        Steps.style.display ='flex';
    else
        Steps.style.display ='none';
});

Stack.style.display = 'none';
ButtonStack.addEventListener("click", () => {
    if(Stack.style.display == 'none')
        Stack.style.display ='flex';
    else
        Stack.style.display ='none';
});
}
