$(document).ready(function ()
{

//$('h1').hide();
//$('h1#header1').hide();
//$('h1.header2').hide();
//$('h1.header2').hide();

$('.header2').hide();
//$('p span').css('color','red');
$('span').css('color','red');
//$('ul#checkList li:first').css('color','blue');
//$('ul#checkList li:last').css('color','green');
$('ul#checkList li:even').css('color','green');
$('ul#checkList li:odd').css('color','blue');
//$('ul#checkList li:odd').css('background-color','yellow');
$('ul#checkList li:nth-child(3n)').css('background-color','yellow');
$('ul#checkList li:nth-child(3n)').css('list-style','none');
//$(':button').hide();
//$(':submit').hide();
//$(':text').hide();
$('[href]').css('color','red');
$('a[href="http://www.vanishtachangea.com"]').css('color',"purple");
//$('*').hide();
    $("#btn1").click(function()
    {
        //alert('button1 clicked');
       
        $('.para111').hide();
    });
    $("#btn2").on ('click',function()
    {
        alert('button1 clicked');
        //$('.para11').text("Hello");
        $('.para111').show();
    });
});
