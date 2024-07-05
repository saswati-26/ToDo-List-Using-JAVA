
function checkPin()
{
    var mypin=document.getElementById("pincode").value;
    if(isNaN(mypin))
    {
        alert("Pincode should contain only digits");
        return false;
    }
    if(mypin.length != 6)
    {
        alert("Pincode should contain only 6 dogits");
        return false;
    }
    else
    return true;
}
function checkName()
{
    var myname=document.getElementById("fname").value;
    
    var keyCode = window.event.keyCode;
    if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32)
    {
        window.event.returnValue=false;
        alert("Only alphabets or space..please");
    }

    
    
}
function checkMobile()
{
    var mnum=document.getElementById("phone").value;
    var flag=true;
    if(isNaN(mnum))
    {
        alert("Number should contain only digits");
        flag=false;
    }
    if(mnum.length != 10 && !isNaN(mnum))
    {
        alert("Mobile number should be 10 digits");
        flag=false;
    }
    alert(mnum);
    return flag;
}
function checkCity()
{
    
    
    var keyCode = window.event.keyCode;
    if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32)
    {
        window.event.returnValue=false;
        alert("Only alphabets or space..please");
    }
    
}

