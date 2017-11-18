
function fillBlanks(){
    let fillBlankScore = 0;
    let answer1 = ["统一建模语言","封装性","继承性","多态性"];
    let hisAnswer11 = document.getElementById("11");
    let hisAnswer121 = document.getElementById("121");
    let hisAnswer122 = document.getElementById("122");
    let hisAnswer123 = document.getElementById("123");
    let hisAnswer = [hisAnswer11,hisAnswer121,hisAnswer122,hisAnswer123];
    for(let i in answer1){
        if(answer1[i] === hisAnswer[i]){
            fillBlankScore += 5;
        }
    }
    return fillBlankScore;
}
function onlyChoice() {
    let onlyChoiceScore = 0;
    let hisAnswer21 = document.getElementsByName("21");
    let hisAnswer22 = document.getElementsByName("22");
    if(hisAnswer21[1].checked){
        onlyChoiceScore += 10;
    }
    if(hisAnswer22[0].checked){
        onlyChoiceScore += 10;
    }
    return onlyChoiceScore;
}
function moreChoice() {
    let moreChoiceScore = 0;
    let hisAnswer31 = document.getElementsByName("31");
    let hisAnswer32 = document.getElementsByName("32");
    if(hisAnswer31[0].checked && hisAnswer31[1].checked && hisAnswer31[3].checked &&(!hisAnswer31[2].checked)){
        moreChoiceScore += 10;
    }
    if(hisAnswer32[0].checked && hisAnswer32[1].checked && hisAnswer32[2].checked && (!hisAnswer32[3].checked)){
        moreChoiceScore += 10;
    }
    return moreChoiceScore;
}

function panDuan() {
    let panDuanScore = 0;
    let hisAnswer41 = document.getElementsByName("41");
    let hisAnewer42 = document.getElementsByName("42");
    if(hisAnswer41[1].checked){
        panDuanScore += 10;
    }
    if(hisAnewer42[0].checked){
        panDuanScore +=10;
    }
    return panDuanScore;
}
function jianDa() {
    let jianDaScore = 0;
    let answer51 = "模型是对现实世界的简化和抽象，模型是对所有研究的系统，过程，事物或概念的一种表达形式，可以是物理实体；可以是某图形；或者是一种数学表达式"
    let hisAnswer51 = document.getElementById("51");
    if(hisAnswer51 === answer51){
        jianDaScore += 20;
    }
    return jianDaScore;
}

function sumbit() {
    let allScore = 0;
    allScore = fillBlanks() +onlyChoice() +moreChoice() +panDuan()+jianDa();
    document.getElementById("allscores").innerHTML = "得分:" + allScore;
    alert("the all score is "+ allScore);
}