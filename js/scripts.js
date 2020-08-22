let inputSearch = null,
    buttonSearch = null,
    panelUsers = null,
    panelStatistics = null
    users = [];

window.addEventListener('load', async () => {
    mapElements();
    await fetchUsers();

    addEvents();

    render();
})

function mapElements() {
    inputSearch = document.querySelector('#inputSearch');
    buttonSearch = document.querySelector('#buttonSearch');
    panelUsers = document.querySelector('#panelUsers');
    panelStatistics = document.querySelector('#panelStatistics');
}

async function fetchUsers () {

    try {
        const response = await fetch("https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo")
        const json     = await response.json();

        const { results } = json;

        users = results.map( user => {
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

    } catch(error) {
        console.log(error)
    }

}

function addEvents() {
    inputSearch.addEventListener( 'keyup', handleKeyUp );
}

function handleKeyUp(event) {
    const textToSearch = event.target.value;
    users = users.filter( user => user.name.includes(textToSearch) )

    render()
}

function render() {
    renderUsersPanel()
}

function renderUsersPanel() {
    let renderHTML = '';

    renderHTML += '<ul>';

    users.forEach( user => {
        renderHTML += `
            <li>
                <img src="${user.thumbnail}"  />
                ${user.name}
            </li>
        `
    })

    renderHTML += '</ul>';

    panelUsers.innerHTML = renderHTML
}