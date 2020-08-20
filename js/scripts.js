let allUsers = [];

window.addEventListener('load', () => {
    fetchUsers();
})

async function fetchUsers () {

    try {
        const response = await fetch("https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo")
        const json     = await response.json();

        const { results } = json;

        allUsers = results.map( user => {
            const {
                name: { first, last },
                dob: { age },
                picture: { thumbnail }
            } = user;

            return {
                name: `${first} ${last}`,
                age,
                thumbnail,
            }
        })

        console.log(allUsers)

    } catch(error) {
        console.log(error)
    }

}
