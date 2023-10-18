var a;
function pass()
{
    if(a == 1)
    {
        document.getElementById('password').type='password';
        document.getElementById('pass-icon').scr='Eye.svg';
        a = 0;
    }
    else
    {
        document.getElementById('password').type='text';
        document.getElementById('pass-icon').scr='Eyetwo.svg';
        a = 1;
    }
}



var b;
function passed()
{
    if(b == 1)
    {
        document.getElementById('passwordtwo').type='password';
        document.getElementById('pass-icontwo').scr='Eye.svg';
        b = 0;
    }
    else
    {
        document.getElementById('passwordtwo').type='text';
        document.getElementById('pass-icontwo').scr='Eyetwo.svg';
        b = 1;
    }
}


let elInput = document.querySelector(".span__first")
let elspan = document.querySelector(".tit")

elInput.addEventListener("keyup", function() {
    elspan.textContent = elInput.value
})