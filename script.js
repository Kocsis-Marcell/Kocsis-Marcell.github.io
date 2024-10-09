document.getElementById('generateUserBtn').addEventListener('click', generateUser);

function generateUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            displayUser(user);
        })
        .catch(error => {
            console.error('Hiba a felhasználó generálása során:', error);
        });
}

function displayUser(user) {
    const userContainer = document.getElementById('userContainer');
    userContainer.innerHTML = `
        <div class="user-card">
            <img src="${user.picture.large}" alt="Felhasználó képe">
            <h3>${user.name.first} ${user.name.last}</h3>
            <p>Email: ${user.email}</p>
            <p>Telefonszám: ${user.phone}</p>
            <p>Lokáció: ${user.location.city}, ${user.location.country}</p>
        </div>
    `;
}
