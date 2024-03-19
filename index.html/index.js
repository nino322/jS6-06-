//საჭიროა შევქმნათ აპლიკაცია რომელიც `Fetch User` ღილაკზე დაჭერით მოგცემს საშუალებას რომ წამოვიღოთ მომხმარებლის ინფორმაცია
//**https://randomuser.me/api** მოცემული მისამართიდან და მიღებული მონაცემები დავხატოთ ინფერფეისში.
document.getElementById('fetch-btn').addEventListener('click', fetchUser);

function fetchUser() {
    fetch('https://randomuser.me/api')
    .then(response => response.json())
    .then(data => {
        const user = data.results[0];
        document.getElementById('user-picture').src = user.picture.medium;
        document.getElementById('user-name').textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;
        document.getElementById('user-email').textContent = user.email;
        document.getElementById('user-city').textContent = user.location.city;
        document.getElementById('user-info').style.display = 'block';
    })
    .catch(error => console.log('Error fetching user:', error));
}