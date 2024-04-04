
// console.log("Hello World");

// Display image
let image = document.getElementById('imageId');
// console.log(image);
image.addEventListener('change', (e) => {
    document.getElementById('forImg').src = URL.createObjectURL(e.target.files[0]);
})

// About Section first name
let firstName = document.getElementById('firstName');
// console.log(firstName);
firstName.addEventListener('input', () => {
    document.getElementById('fullName').textContent = firstName.value;
});

// About Section middle name
let middleName = document.getElementById('mName');
// console.log(middleName);
middleName.addEventListener('change', () => {
    document.getElementById('fullName').textContent = firstName.value + middleName.value;
});

// About Section last name
let lastName = document.getElementById('lName');
// console.log(lastName);
lastName.addEventListener('change', () => {
    document.getElementById('fullName').textContent = firstName.value + " " + middleName.value + " " + lastName.value;
});

// About Section Designation
let des = document.getElementById('designation');
des.addEventListener('change', () => {
    document.getElementById('userDesignation').textContent = "Designation: " + des.value;
});

// About Section Address
let address = document.getElementById('addrress');
address.addEventListener('change', () => {
    document.getElementById('userAddress').textContent =
        "Address: " + address.value;
});

// About Section Email
let email = document.getElementById('email');
email.addEventListener('change', () => {
    document.getElementById('userEmail').textContent =
        "Email: " + email.value;
});

// About Section Phone
let number = document.getElementById('number');
number.addEventListener('change', () => {
    document.getElementById('userPhone').textContent =
        "Phone No: " + number.value;
})

//  About Section Summary
let summarry = document.getElementById('summary');
summarry.addEventListener('change', () => {
    document.getElementById('userSummary').textContent =
        "Summary: " + summarry.value;
})

//  Skillsss

let skill = document.getElementById('skill');
skill.addEventListener('input', () => {
    document.getElementById('userSkills').textContent =
        skill.value;
})

// Achievment Section title
let title = document.getElementById('title');
// console.log(title);
title.addEventListener('input', () => {
    document.getElementById('userTitle').textContent =
        "Title: " + title.value;
})

// Achievment Section Description
let description = document.getElementById('description');
description.addEventListener('input', () => {
    document.getElementById('userDescription').textContent =
        "Description: " + description.value;
})

// Experience Section title

let expTitle = document.getElementById('expTitle');
expTitle.addEventListener('input', () => {
    document.getElementById('userExpTitle').textContent =
        "Title: " + expTitle.value;
})

// Experience Section Company
let expCompany = document.getElementById('expCompany');
expCompany.addEventListener('input', () => {
    document.getElementById('userExpCompany').textContent =
        "Company: " + expCompany.value;
})

// Experience Section Location
let expLocation = document.getElementById('expLocation');
expLocation.addEventListener('input', () => {
    document.getElementById('userExpLocation').textContent =
        "Location: " + expLocation.value;
})

// Experience Section Description
let expDescription = document.getElementById('expDescription');
expDescription.addEventListener('input', () => {
    document.getElementById('userExpDescription').textContent =
        "Description: " + expDescription.value;
})

// Experience Section Start Date
let expSDate = document.getElementById('expDate');
expSDate.addEventListener('input', () => {
    document.getElementById('userExpDate').textContent =
        "Start Date: " + expSDate.value;
})

// Experience Section End Date
let expEDate = document.getElementById('endDate');
expEDate.addEventListener('input', () => {
    document.getElementById('userEndDate').textContent =
        "End Date: " + expEDate.value;
})


// Education Section School
let school = document.getElementById('school');
school.addEventListener('input', () => {
    document.getElementById('userSchool').textContent =
        "School: " + school.value;
})

// Education Section Degree
let degree = document.getElementById('degree');
degree.addEventListener('input', () => {
    document.getElementById('userDegree').textContent =
        "Degree: " + degree.value;
})

// Education Section City
let city = document.getElementById('city');
city.addEventListener('input', () => {
    document.getElementById('userCity').textContent =
        "City: " + city.value;
})

// Education Section Start Date
let sDate = document.getElementById('sDate');
sDate.addEventListener('input', () => {
    document.getElementById('userStartDate').textContent =
        "Start Date: " + sDate.value;
})


// Education Section End Date
let eDate = document.getElementById('eDate');
eDate.addEventListener('input', () => {
    document.getElementById('eduEndDate').textContent =
        "End Date: " + eDate.value;
})

// Education Section Description
let description1 = document.getElementById('description1');
description1.addEventListener('input', () => {
    document.getElementById('userDescription1').textContent =
        "Description: " + description1.value;
})


// Projects Section Name
let name1 = document.getElementById('projectName1');
name1.addEventListener('input', () => {
    document.getElementById('userProjectName').textContent =
        "Name: " + name1.value;
})

// Projects Section Link
let link1 = document.getElementById('projectLink1');
link1.addEventListener('input', () => {
    document.getElementById('userProjectLink').textContent =
        "Link: " + link1.value;
})

// Projects Section Description
let description2 = document.getElementById('projectDescription1');
description2.addEventListener('input', () => {
    document.getElementById('userProjectDescription').textContent =
        "Description: " + description2.value;
})




// Printing Resume
function printDiv(divId) {
    var printContents = document.getElementById(divId).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}


// create skill section

// function createNewSkill() {
//     let skillContainer = document.getElementById('skillContainer');
//     let newSkill = document.createElement('div');

//     newSkill.innerHTML = `
//     <div class="border-2 border-black mt-5 p-4">
//             <div class="flex gap-8">
//               <div>
//                 <label for="title" class="font-bold">
//                   Skills <br />
//                   <input
//                     type="text"
//                     name=""
//                     id="skill"
//                     class="w-96 border-2 border-black font-normal p-1"
//                   />
//                 </label>
//               </div>
//             </div>
//           </div>
//           <button
//             class="bg-blue-500 p-1 w-12 text-xl rounded-lg mt-2 text-white font-bold"
//             id="createNewSkill"
//             onclick="createNewSkill()"
//           >
//             +
//           </button>
//     `;
//     skillContainer.appendChild(newSkill);
// }


// let dwnldBtn = document.getElementById('downloadCv');
function generatePDF() {
    const element = document.getElementById("preview-sc");

    html2pdf().from(element).save('download.pdf');
}

function downloadCode() {
    generatePDF();
    // setTimeout(function () { window.location = window.location; }, 3000);
}

document.getElementById('logoutButton').addEventListener('click', logout);
function logout() {
    // Clear local storage data related to the logged-in user
    localStorage.removeItem('users');

    alert('You have been logged out.');
    // Optionally, redirect to the home page or perform any other action
    window.location.href = 'index.html'; // Redirect to the home page
}

