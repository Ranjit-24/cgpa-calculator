var add_course_but = document.getElementById("add_course_but")
add_course_but.addEventListener("click",addcourse)
function addcourse(){
    let course_div=document.getElementById("each_Course_detail")
    let new_div = document.createElement("div")
    new_div.innerHTML='<input type="number" class="course_grade" id="course_grade_1"><input type="number" class="course_credit" id="course_credit_1">'
    course_div.appendChild(new_div)
    console.log("hello")
}