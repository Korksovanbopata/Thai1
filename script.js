function checkAnswer(button, correct) {
    if (correct === 'ถูก') {
        button.style.backgroundColor = "lightgreen";
        alert("ถูกต้อง!");
    } else {
        button.style.backgroundColor = "red";
        alert("ผิด! ลองใหม่ในข้อถัดไป");
    }
    
    document.querySelector('.next-btn').style.display = "block";
}

function nextQuestion(num) {
    if (num <= 10) {
        window.location.href = `question${num}.html`; 
        window.location.href = "result.html";
    }
}
