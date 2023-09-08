document.write("Hello World");
// document.write( "Hello World" )

/*
const a = 3;
const b = "5";
const c = "です";
alert( a + b + c );
*/
/* 関数の練習 */
tashizan( 3, 5 );//引数に渡す値
function tashizan( num1, num2 ) {
    const result = num1 + num2;
    document.write( result )
}
alert(document.getElementById("second").innerHTML);
document.getElementById("second").innerHTML="書き換えました";
const firstdiv = document.getElementById("first").innerHTML;
document.getElementById("second").innerHTML= firstdiv;
const btn = document.getElementById("btn")
btn.addEventListener("click", function(){
  alert("送信してよろしいですか？");
})