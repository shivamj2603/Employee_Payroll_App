window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>StartDate</th><th>Actions</th></tr>";
    const innerHtml = `${headerHtml}
    <tr> 
        <td><img class = "profile" src = "../assets/profile-images/Ellipse 1.png" alt = ""></td>
        <td>Maria</td>
        <td>Female</td>
        <td>
            <div class = "dept-label">HR</div>
            <div class = "dept-label">Finance</div>
        </td>
        <td>400000</td>
        <td>1 October 2020</td>
        <td>
            <img id = "1" src = "../assets/icons/delete-black-18dp.svg" onclick = "remove(this)" alt = "delete">
            <img id = "1" src = "../assets/icons/create-black-18dp.svg" onclick = "update(this)" alt = "edit">
        </td>
    </tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}  