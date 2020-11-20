window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>StartDate</th><th>Actions</th></tr>";
    let innerHtml = `${headerHtml}`;
    let employeePayrollList =  createEmployeePayrollJSON();
    for(const empPayrollData of employeePayrollList){
        innerHtml = `${innerHtml}
        <tr> 
            <td><img class = "profile" src = "${empPayrollData._profilePic}" alt = ""></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>${getDeptHtml(empPayrollData._department)}</td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>
            <td>
                <img name = "${empPayrollData._id}" src = "../assets/icons/delete-black-18dp.svg" onclick = "remove(this)" alt = "delete">
                <img name = "${empPayrollData._id}" src = "../assets/icons/create-black-18dp.svg" onclick = "update(this)" alt = "edit">
            </td>
        </tr>
        `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}  
const getDeptHtml = (deptList) => {
    let deptHtml ='';
    for (const dept of deptList){
        deptHtml = `${deptHtml}<div class = "dept-label">${dept}</div>`;
    }
    return deptHtml;
}


createEmployeePayrollJSON = () =>{
    let employeePayrollList = [
        {
            _name : 'Shivam',
            _gender: 'Male',
            _department: [
                'HR',
                'Finance'
            ],
            _salary: '400000',
            _startDate: '1 November 2020',
            _note: '',
            _id: new Date().getTime(),
            _profilePic:  '../assets/profile-images/Ellipse -3.png'
        },
        {
            _name : 'Nadal',
            _gender: 'Male',
            _department: [
                'Engineering',
            ],
            _salary: '400000',
            _startDate: '1 November 2020',
            _note: '',
            _id: new Date().getTime(),
            _profilePic:  '../assets/profile-images/Ellipse -5.png'
        }
    ];
    return employeePayrollList;
} 