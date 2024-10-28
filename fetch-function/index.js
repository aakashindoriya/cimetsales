import {universityData} from "./data.js"
function getFirstQustion(universityData){
    const ans1=[]
universityData.departments.map((el)=>el.courses.map((el)=>el.students.map((el)=>{
    const {assignments,final,midterm }=el.grades
    const {name,studentId}=el
    const assignmentsVatage=(assignments.reduce((ac,el)=>{return ac+el},0)/assignments.length)*0.4
    let gpa=((assignmentsVatage+(final*0.30)+(midterm*0.3))/20).toFixed(2)
    ans1.push({name,studentId,gpa})
    return {name,studentId,gpa}
})))
return ans1
}

function getSecondQustion(universityData){

    return universityData.departments.map((el)=>{
        return el.courses.map((ele)=>{
            const {courseId,credits,title,schedule}=ele
            return {courseId,credits,title,schedule}
        })
    })
}

function getThirdQustion(universityData){
    return universityData.departments.map((el)=>{
        const {name,id,head}=el
        return {departmentName:name,departmentId:id,faculty:head}
    })
}

function finalQustion(universityData){
   return universityData.departments.map((el)=>el.courses.map((el)=>{
       
       
   }))
}
console.log(universityData,finalQustion(universityData))