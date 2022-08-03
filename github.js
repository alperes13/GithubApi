

// Creating a class there for Github users information and repos.

class Github {

    /* 
    
        Async function working with promise object. And there is no matter to write return. Its can work with fetch 
    in integrated, there is "await" key for waiting to pending status of which request send. Await's goal to ensure 
    synchoronus programming in asynchoronous building. 
    
    */



    // There is funciton feeding with asynch key, and taken a argument.

    async getGithubData(username) {

        // Sending get request to Github and waiting status with "await" key.

        const responseUser = await fetch(`https://api.github.com/users/${username}`);


        // There is get request for user repos.

        const responseRepoByUser = await fetch(`https://api.github.com/users/${username}/repos`);

        // There is 2 code, after pending status, defining variables. But its defining with .json() function.

        const userData = await responseUser.json();
        const repoDataByUser = await responseRepoByUser.json();

        // We can return many object in a object.

        return {

            user: userData,
            usersRepo: repoDataByUser

        }
    }
}