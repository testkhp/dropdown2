//gnb에 마우스 올렸을 때 서브메뉴 다나오게 처리
const gnbWrap = document.querySelector(".gnbWrap");

const depth1 = document.querySelectorAll(".gnb > li");
//gnb_bg 대상 선택
const gnbBg = document.querySelector(".gnb_bg");

//댑스2 5마리 다중선택
const depth2 = document.querySelectorAll(".depth2");

let depth2Height = document.querySelector(".depth2 li").offsetHeight;
let count = 0;
let maxHeight = 0;
let dep2HeightArr = []; //각 li태그 자식들 높이들 전부 더해서 배열의 형태로 저장

    gnbWrap.addEventListener("mouseenter",function(){

        for(let i=0; i < depth1.length; i++)
        {   
            count = depth1[i].querySelectorAll("li").length;
            dep2HeightArr[i] = depth2Height * count;

            depth2[i].style.height = dep2HeightArr[i] + "px";


            if(maxHeight < dep2HeightArr[i]){  

                maxHeight = dep2HeightArr[i];
            }
        }
        // maxHeight = Math.max(...dep2HeightArr);
        gnbBg.style.height = maxHeight+"px";
    });

    gnbWrap.addEventListener("mouseleave",function(){

        for(let i=0; i < depth1.length; i++)
        {   
        
            depth2[i].style.height = "0px";
            gnbBg.style.height = "0px";
        }

      
    });

