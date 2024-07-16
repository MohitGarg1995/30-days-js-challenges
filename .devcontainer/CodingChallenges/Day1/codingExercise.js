// const student_ID = 701;
// const student_Name = "Mohit Garg"
// const enrollStatus = true;
// // Multiple Out Put Print using Table Style
// console.table(["Student ID:- "+student_ID,"Student Name:- "+student_Name,"Enroll Status:- "+enrollStatus]);



// let FIname ="Mohit Garg" //String
// let height = 5.6 // Number

// // Object
// const basicDetails = {
//     address : "123, Hamirpur Himachal Pradesh",
//     age : 28,
//     email : "mohitgargs1995@google.com",
//     collage_year : "3rd Year",
//     subjects : ["Python","AI","Cyber Security","Java Script"]  // Array
// }

// //Array
// const inClass = ["lecture",1,"Status",true]

// console.log("About Student \n", ["Name:- "+FIname,"Height:- "+height,"Age:- "+basicDetails.age, "Email ID:- "+basicDetails.email,"Current Collage Year:- "+ basicDetails.collage_year,"Subjects:- "+basicDetails.subjects,"Today Class Attend:- "+inClass])


//FIRST PROBLEM:-

let userName1 = "Mohit Garg";
let userId1 = 758;
let isLogedIn1 = true;

const projectsDetails ={
    projectName : "HRMS",
    projectManager: "Rama Rao",
    reportingManager: "Prasanna",
    deadline: undefined,
    projectCode: 2011,
}
const projectMembers = ["ram", "john", "harry",{"TeamLead":"raja babu", "reportingManager":"Hitesh"}, {"architecture":"abhay deol"}]
const membersList = projectMembers.map((list,index,arr) => {
   if(typeof list === "object"){
    return JSON.stringify(list)
    }
    return list;
}).join(", ");
// const projectMembersString = projectMembers.map(member => {
//     if (typeof member === 'object') {
//         return JSON.stringify(member);
//     }
//     return member;
// }).join(', ');


console.table([
    `The name of the user ${userName1}`,
    "user id is", userId1,
    "Is he logged in today" + isLogedIn1
])

console.table([`Name of the Project --->${projectsDetails.projectName}`,
    `Project Manager is ---> ${projectsDetails.projectManager}`,
    // `Project members are --->${projectMembers[0] + projectMembers[1]}`]
    `Project members are ---> ${projectMembers[0]} ${projectMembers[1]} ${projectMembers[3].TeamLead} ${projectMembers[4].architecture}`],
)


console.table([{ 'All Projects members list': projectMembers.map(member => (typeof member === 'object' ? JSON.stringify(member) : member)).join(', ') }]);
console.log("All Projects members list", membersList);