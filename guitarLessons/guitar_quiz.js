
document.getElementById("gq").onsubmit=function() {
    part1 = parseInt(document.querySelector('input[name = "part1"]:checked').value);
    part2 = parseInt(document.querySelector('input[name = "part2"]:checked').value);
    part3 = parseInt(document.querySelector('input[name = "part3"]:checked').value);
    part4 = parseInt(document.querySelector('input[name = "part4"]:checked').value);
    part5 = parseInt(document.querySelector('input[name = "part5"]:checked').value);
    part6 = parseInt(document.querySelector('input[name = "part6"]:checked').value);
    part7 = parseInt(document.querySelector('input[name = "part7"]:checked').value);
    part8 = parseInt(document.querySelector('input[name = "part8"]:checked').value);

    result = part1 + part2 + part3 + part4 + part5 + part6 + part7 + part8;

    document.getElementById("grade").innerHTML = result + '/8';


    return false; // required to not refresh the page; just leave this here
} //this ends the submit function