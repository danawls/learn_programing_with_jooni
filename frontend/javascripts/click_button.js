const title = document.querySelector(".hello:first-child h1");

title.innerText = "This is spy";

function handleClick() {
    title.style.color = "blue";
}

function handleMouseEnter () {
    title.style.color = "red";
}

function handleMouseLeave () {
    title.style.color = "brown";
}

/** 
 * @access 오오 이 주석 신기방기하다아앙
*/
function handleWindowResize () {
    document.body.style.backgroundColor= "azure";
}

function handleWindowCopy () {
    alert ("copier!");
}

/** 1. 클릭했을 때 블루로 변경 2. 호버 상태에서 레드 3. 마우스가 떠나면 브라운으로 변경 */
title.addEventListener("click", handleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);

console.dir(title.style.color);