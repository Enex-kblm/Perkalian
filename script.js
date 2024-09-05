function calculate() {
    var fnum = document.getElementById('num1').value;
    var snum = document.getElementById('num2').value;
    
    var tot= parseInt(fnum) * parseInt(snum);

    document.getElementById("result").innerHTML=tot;
    document.getElementById("result1").innerText=`lain kali belajar itung sendiri yaaa`
}