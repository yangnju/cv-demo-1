let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `
/*你好，我是一名前端新人
 *接下来我要加样式了
 * 我要加的样式是
*/
#div1{
    border: 1px solid red;
    height: 300px;
    width: 300px;
}
/*接下来
 *我要开始画一个太极图形
 *首先先把方形变为圆形
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/*背景要变为黑白两色
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*接下来要加两个小的圆形
*/
#div1::before{
    height: 150px;
    width: 150px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    height: 150px;
    width: 150px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let n = 0;
let string2='';

let step = () => {
    setTimeout(() => {
        if(string[n] === "\n"){
            string2 += "<br>";
        } else if(string[n] === " "){
            string2 += "&nbsp;";
        } else {
            string2 += string[n];
        }

    html.innerHTML = string2;
    style.innerHTML = string.substring(0,n);
    window.scrollTo(0,9999);
    html.scrollTo(0,9999);
    if (n < string.length-1) {
        n += 1;
        step();
        };
    }, 50);
};
step();
