var p=document.getElementById("output")
function num_of_sem(){
    return document.getElementById("num_of_sem").value;
}
function addsemester(){
    numofsem=num_of_sem()
    if(numofsem==1){
        document.getElementById("outputscreen_span").innerText="GPA";
    }
    else{
        document.getElementById("outputscreen_span").innerText="CGPA";
    }
    var sem_div=document.getElementById("each_semester_detail")
    if(numofsem == ""){
        sem_div.innerHTML=""
    }
    else{
        for(var i=1;i<=numofsem;i++){
            let txt = `<div>\n<h2>Semester ${i}</h2>\n<div id="each_course_detail_insem${i}">\n<div id="course1_detail">\n<input type="number" class="course_grade_sem${i} input_values" id="course_grade${i}1" oninput="autoshiftinput(this,course_credit${i}1)" placeholder="Grade">\n<input type="number" class="course_credit_sem${i} input_values" id="course_credit${i}1" oninput="autoshiftinput(this,course_grade${i}2)" placeholder="Credit">\n</div>\n</div>\n<button id="add_course_but" onclick="addcourse(${i})">Add Course</button>\n</div>`
            let new_sem_div=document.createElement("div")
            new_sem_div.innerHTML=txt
            sem_div.appendChild(new_sem_div)
        }
    }
}let count=1
let oldsemnum=0
function addcourse(sem_num){
    if(sem_num != oldsemnum){
        count=1
    }
    count++
    let course_div = document.getElementById(`each_course_detail_insem${sem_num}`)
    let new_div = document.createElement("div")
    new_div.innerHTML=`<input type="number" class='course_grade_sem${sem_num} input_values' id="course_grade${sem_num}${count}" oninput="autoshiftinput(this,course_credit${sem_num}${count})" placeholder="Grade">\n<input type="number"  class="course_credit_sem${sem_num} input_values" id="course_credit${sem_num}${count}" oninput="autoshiftinput(this,course_grade${sem_num}${count+1})" placeholder="Credit">`
    course_div.appendChild(new_div)
    oldsemnum=sem_num
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
    let totalcredit=numerator=cgpa=0
    for(let j=1;j<=num_of_sem();j++){
        let grade=document.querySelectorAll(`.course_grade_sem${j}`)
        let credit=document.querySelectorAll(`.course_credit_sem${j}`)
        grade_value=grade_value.concat(set_of_values(grade))
        credit_value=credit_value.concat(set_of_values(credit))
    }
    
    for(let i=0;i<grade_value.length;i++){
        totalcredit=totalcredit+credit_value[i]
        numerator=numerator+(grade_value[i]*credit_value[i])
    }
    cgpa=numerator/totalcredit
    let a=num_of_sem()
    if(a==''){
        p.innerText=0
    }
    else{
        p.innerText=cgpa
    }
}
function autoshiftinput(change,nextinput){
    function shift(change,nextinput){
        if((Number(change.value)>=0)&&(Number(change.value)<=10)){
            if(change.value != ''){
                nextinput.focus()
            }
        }
    }
    setTimeout(shift,900,change,nextinput)
}
