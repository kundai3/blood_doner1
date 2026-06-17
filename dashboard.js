function animateNumber(id, target){

    let count = 0;

    const increment = target / 100;

    const interval = setInterval(() => {

        count += increment;

        if(count >= target){

            document.getElementById(id).innerText = target;
            clearInterval(interval);

        } else {

            document.getElementById(id).innerText =
                Math.floor(count);

        }

    },20);
}

animateNumber("totalDonors", 500);
animateNumber("totalRequests", 120);
animateNumber("livesSaved", 80);
animateNumber("activeHospitals", 15);

const requests = [

{
patient:"John Banda",
blood:"O+",
hospital:"Parirenyatwa",
status:"Urgent"
},

{
patient:"Mary Dube",
blood:"A-",
hospital:"Mpilo",
status:"Critical"
},

{
patient:"Peter Ncube",
blood:"B+",
hospital:"UBH",
status:"Pending"
}

];

const table =
document.getElementById("requestTable");

requests.forEach(request => {

table.innerHTML += `
<tr>

<td>${request.patient}</td>

<td>${request.blood}</td>

<td>${request.hospital}</td>

<td>${request.status}</td>

</tr>
`;

});
