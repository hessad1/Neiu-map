function MakeBlue(selector) {
    if (selector === "ath4630") {
        var Fi = "p" + selector;
        var svgObject = document.getElementById("InnerCity").contentDocument;
    console.log(svgObject);
    var selectedPath = svgObject.getElementById(Fi);
    if (selectedPath.style.opacity === "0"){
        selectedPath.style.opacity = ".75";
    }else{
        selectedPath.style.opacity = "0"
    }
    }else if(selector === "ath817"){
        var Fi = "p" + selector;
        var svgObject = document.getElementById("Elcentro").contentDocument;
    console.log(svgObject);
    var selectedPath = svgObject.getElementById(Fi);
    if (selectedPath.style.opacity === "0"){
        selectedPath.style.opacity = ".75";
    }else{
        selectedPath.style.opacity = "0"
    }
    }else {
    var Fi = "p" + selector; 
    var svgObject = document.getElementById("MAP").contentDocument;
    console.log(svgObject);
    var selectedPath = svgObject.getElementById(Fi);
    if (selectedPath.style.opacity === "0"){
        selectedPath.style.opacity = ".75";
    }else{
        selectedPath.style.opacity = "0"
    }
}
}