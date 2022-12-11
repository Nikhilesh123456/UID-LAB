function clearScreen() 
{
    document.getElementById("invalue").value = "";
    document.getElementById("result").value = "";
}
function interchange()
{
    clearScreen()
    var p = document.getElementById("invalue").value;
    var q = document.getElementById("result").value;
    document.getElementById("invalue").value = q;
    document.getElementById("result").value = p;
}

function display(value)
{
    document.getElementById("invalue").value += value;
}

function calculate1() 
{
    var p = document.getElementById("invalue").value;
    var q = eval(p);
    document.getElementById("result").value = 2.47105381 * q;
}

function calculate2() 
{
    var p = document.getElementById("invalue").value;
    var q = eval(p);
    document.getElementById("result").value = 4046.856 * q;
}

function calculate3() 
{
    var p = document.getElementById("invalue").value;
    var q = eval(p);
    document.getElementById("result").value = 0.394 * q;
}
function calculate4() 
{
    var p = document.getElementById("invalue").value;
    var q = eval(p);
    document.getElementById("result").value =  q/2.47105381;
}

function calculate5() 
{
    var p = document.getElementById("invalue").value;
    var q = eval(p);
    document.getElementById("result").value =  q/4046.856;
}

function calculate6() 
{
    var p = document.getElementById("invalue").value;
    var q = eval(p);
    document.getElementById("result").value =  q/0.394;
}