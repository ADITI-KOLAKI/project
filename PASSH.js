function chkUsn(event)
{
var myPassword=event.currentTarget;
var pos=myPassword.value.search(/^[A-Z]{1}[a-z]{6}\d{2}/);
if(pos!=0)
{
alert(" The password you entered("+myPassword.value+
") is not in the correct form. \n"+
"It should be written in the form : "+
"(X(1 uppercaseletter)XXXXXX(6 lowercaseletters)DD(2 Digits) \n"+
"please create a strong password");
myPassword.focus();
myPassword.select();
return false;
}
else
return true;
} 