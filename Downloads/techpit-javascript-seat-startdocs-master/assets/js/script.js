let timer;
let studentNumberList = [];

const setTargetStudents = function(studentNumber){
  for(let i = 1; i <= studentNumber;i++){
    studentNumberList.push(i);
  }
  const absenteeNumbers = document.querySelector("#absence").value;
  const splitedAbsenteeNumbers = absenteeNumbers.split(",").map(function(item, index){
    return parseInt(item);
  });

  studentNumberList = studentNumberList.filter(function(student){
    return !splitedAbsenteeNumbers.includes(student);
  })
}

const shuffleArray = function(){
  for(let i = studentNumberList.length; i > 0; i--){
    const randomNum = Math.floor(Math.random() * i);
    let tmp = studentNumberList[i - 1];
    studentNumberList[i - 1] = studentNumberList[randomNum];
    studentNumberList[randomNum] = tmp;
  }
}

const showSeatBoxes = function(){
  let insertHTML = '';
  studentNumberList.forEach(function(num){
    insertHTML += '<div class="seat__item">' + num + '</div>';
  })
  document.querySelector('#seat').innerHTML = insertHTML;
}

const soundPlay = function(){
  const audioElement = new Audio();
  audioElement.src = 'assets/audio/drum.mp3';
  audioElement.play();

  audioElement.addEventListener('ended', function(){
    clearInterval(timer);
  })
}

document.querySelector('#btn-start').addEventListener('click', function(){
  const studentNumber = document.querySelector("#studentNumber").value;
  if(studentNumber === ""){
    alert('人数が未入力です！入力してからスタートボタンを押してください。');
    return false;
  }

  if(studentNumber > 50){
    alert('人数は50人以内に設定してください!');
    return false;
  }
  document.querySelector('.c-overlay').classList.add("is-closed");

  setTargetStudents(studentNumber);

  timer = setInterval(function(){
    shuffleArray();
    showSeatBoxes();
  },50);

  soundPlay();
});