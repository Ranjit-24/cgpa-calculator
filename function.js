function addsemester(){
    let numofsem=document.getElementById("num_of_sem").value
    let sem_div=document.getElementById("each_semester_detail")
    if(numofsem == ""){
        sem_div.innerHTML=""
    }
    else{
        for(var i=1;i<=numofsem;i++){
            let txt = `<div>\n<h2>Semester ${i}</h2>\n<div id="each_course_detail_insem${i}">\n<div id="course1_detail">\n<input type="number" class="course_grade">\n<input type="number" class="course_credit">\n</div>\n</div>\n<button id="add_course_but" onclick="addcourse(${i})">Add Course</button>\n</div>`
            let new_sem_div=document.createElement("div")
            new_sem_div.innerHTML=txt
            sem_div.appendChild(new_sem_div)
        }
    }
}
function addcourse(sem_num){
    let course_div = document.getElementById(`each_course_detail_insem${sem_num}`)
    let new_div = document.createElement("div")
    new_div.innerHTML='<input type="number" class="course_grade" id="course_grade_1">\n<input type="number" class="course_credit" id="course_credit_1">'
    course_div.appendChild(new_div)
}