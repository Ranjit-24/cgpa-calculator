function num_of_sem(){
    return document.getElementById("num_of_sem").value
}
function addsemester(){
    numofsem=num_of_sem()
    var sem_div=document.getElementById("each_semester_detail")
    if(numofsem == ""){
        sem_div.innerHTML=""
    }
    else{
        for(var i=1;i<=numofsem;i++){
            let txt = `<div>\n<h2>Semester ${i}</h2>\n<div id="each_course_detail_insem${i}">\n<div id="course1_detail">\n<input type="number" class="course_grade_sem${i}" placeholder="Grade">\n<input type="number" class="course_credit_sem${i}" placeholder="Credit">\n</div>\n</div>\n<button id="add_course_but" onclick="addcourse(${i})">Add Course</button>\n</div>`
            let new_sem_div=document.createElement("div")
            new_sem_div.innerHTML=txt
            sem_div.appendChild(new_sem_div)
        }
    }
}
function addcourse(sem_num){
    let course_div = document.getElementById(`each_course_detail_insem${sem_num}`)
    let new_div = document.createElement("div")
    new_div.innerHTML=`<input type="number" class='course_grade_sem${sem_num}' placeholder="Grade">\n<input type="number" class="course_credit_sem${sem_num}" placeholder="Credit">`
    course_div.appendChild(new_div)
}
function set_of_values(tags_array){
    let value_array= []
    for(let a of tags_array){
        value_array.push(Number(a.value))
    }
    return value_array
}
function calculate(){
    let grade_value=credit_value=[]
    for(let j=1;j<=num_of_sem();j++){
        let grade=document.querySelectorAll(`.course_grade_sem${j}`)
        let credit=document.querySelectorAll(`.course_credit_sem${j}`)
        grade_value=grade_value.concat(set_of_values(grade))
        credit_value=credit_value.concat(set_of_values(credit))
    }
    console.log(credit_value)
    console.log(grade_value)
}
