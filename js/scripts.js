let inputSearch = null,
    buttonSearch = null,
    panelUsers = null,
    panelStatistics = null

let  users = [];

window.addEventListener('load', async () => {
    mapElements();
    await fetchUsers();

    console.log(users)
})

function mapElements() {
    inputSearch = document.querySelector('#inputSearch');
    buttonSearch = document.querySelector('#buttonSearch');
    panelUsers = document.querySelector('#panelUsers');
    panelStatistics = document.querySelector('#panelStatistics');
}

inputSearch = document.querySelector('#inputSearch');

inputSearch.addEventListener('keyup', event=>{

    console.log('digitei', inputSearch.value)
    
    for(i=0; i<=users.length-1; i++){
        //console.log(users[i].name)
        if(users[i].name.indexOf(inputSearch.value)>-1){
            //console.log("verdadeiro")
            console.log('Results:',users[i].name, users[i].age, users[i].thumbnail,)
        } 
    }
    
});
    

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

        handleTiping(allUsers)

    } catch(error) {
        console.log(error)
    }

}
