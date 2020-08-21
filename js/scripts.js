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

        handleTiping(allUsers)

    } catch(error) {
        console.log(error)
    }

}


function handleTiping(users) {
    const $form = document.querySelector('#form-users')

    $form.addEventListener('submit', (event) => {
       event.preventDefault();
    })

    const inputSearch = document.querySelector('[name="search"]')

    inputSearch.addEventListener('keyup', (event) => {

        const text = event.target.value;

        users.map( user => {
            user.name.indexOf()
        })

        const filteredUsers = users.filter( user => user.name )

        console.log(filteredUsers)

    })
}