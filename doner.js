const donors = [
    {
        name: "John Doe",
        blood: "O+",
        city: "Harare",
        phone: "+263771111111"
    },
    {
        name: "Mary Smith",
        blood: "A+",
        city: "Bulawayo",
        phone: "+263772222222"
    },
    {
        name: "David Moyo",
        blood: "B+",
        city: "Mutare",
        phone: "+263773333333"
    },
    {
        name: "Sarah Ncube",
        blood: "AB+",
        city: "Gweru",
        phone: "+263774444444"
    }
];

function displayDonors(data) {

    const container =
        document.getElementById("donorContainer");

    container.innerHTML = "";

    data.forEach(donor => {

        container.innerHTML += `
            <div class="donor-card">

                <h2>${donor.name}</h2>

                <p><strong>Blood:</strong> ${donor.blood}</p>

                <p><strong>City:</strong> ${donor.city}</p>

                <p><strong>Phone:</strong> ${donor.phone}</p>

                <button>
                    Contact Donor
                </button>

            </div>
        `;
    });
}

function searchDonors() {

    const query =
        document.getElementById("searchInput")
        .value
        .toUpperCase();

    const filtered =
        donors.filter(
            donor =>
                donor.blood.includes(query)
        );

    displayDonors(filtered);
}

displayDonors(donors);
