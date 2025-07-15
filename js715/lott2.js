
// 排序前
let sortBefore = document.getElementById("sortBefore");
// 排序後
let sortAfter = document.getElementById("sortAfter");
// 第二區號碼
let secNo = document.getElementById("secNo");

// 威力彩
function getLott(tp, firstMax, firstNum, secMax) {
    // 第一區：1-38取6個
    console.log(secMax);
    // 建立存放號碼的空陣列
    let lott = [];
    // while
    if (tp === 2) {//如果是大樂透取7個號碼
        firstNum = firstNum + 1;
    }//因為放在迴圈會一直跑 要移出來

    while (1) {

        // 檢查是已經有N個號碼
        if (lott.length == firstNum) {
            break;
        }

        // 亂數取號碼
        let lottNo = Math.floor(Math.random() * firstMax) + 1;

        // 檢查是否重覆
        if (!lott.includes(lottNo)) {   // 沒有重覆
            lott.push(lottNo);  // 增加號碼到陣列中            
        }


    }

    // 未排序
    sortBefore.textContent = "排序前號碼:" + lott;
    // 排序
    lott.sort((a, b) => {
        return a - b;
    })
    sortAfter.textContent = "排序後號碼:" + lott;
    // 第二區：1-8取1個
    secNo.textContent = "";
    if (tp === 1) {//威力彩
        secNo.textContent = "第二區號碼:" + (Math.floor(Math.random() * secMax) + 1);

    } else if (tp === 2) {//大樂透
        secNo.textContent = "特別號" + lott.pop();//最後一個值並移除
    }
}
