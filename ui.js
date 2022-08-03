class UI {

    constructor() {

        /* 
        
            We were taken necessary elements from html.index and defining them as variables. Feeding this
        variables with "this" key for using in function as object's features.
        
        */

        this.profileDiv = document.getElementById("profile");
        this.repoDiv = document.getElementById("repos");
        this.lastUsers = document.getElementById("last-users");
        this.githubNameInput = document.getElementById("githubname");
        this.cardBody = document.querySelector(".card-body");
        this.repoTittle = document.getElementById("LastRepository");

    }




    // Creating a function for cleaning input after searching. 

    clearInput() {

        this.githubNameInput.value = "";

    }




    // We created function for showing in ui to information of user we searched. There is a parameter for user response. 

    showUserInfo(user) {

        this.repoTittle.removeAttribute("hidden");

        if (user.email === null) {
            user.email = "Unknown";
        }

        this.profileDiv.innerHTML = `

        <div class="card card-body mb-3">
                    <div class="row">
                      <div class="col-md-4">
                        <a href="${user.html_url}" target = "_blank">
                         <img class="img-fluid mb-2" src="${user.avatar_url}"> </a>
                         <hr>
                         <div id="fullName"><strong>${user.name}</strong></div>
                         <hr>
                         <div id="bio">${user.bio}</div>
                        </div>
                      <div class="col-md-8">
                            <button class="btn btn-secondary">
                                  Followers  <span class="badge badge-light">${user.followers}</span>
                            </button>
                            <button class="btn btn-info">
                                 Following  <span class="badge badge-light">${user.following}</span>
                              </button>
                            <button class="btn btn-danger">
                                Repositories  <span class="badge badge-light">${user.public_repos}</span>
                            </button>
                            <hr>
                            <li class="list-group">
                                <li class="list-group-item borderzero">
                                    <img src="images/company.png" width="30px"> <span id="company">${user.company}</span>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/location.png" width="30px"> <span id = "location">${user.location}</a>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/mail.png" width="30px"> <span id="mail">${user.email}</span>
                                    
                                </li>
                                
                            </div>
                               
                            
                      </div>
                </div>
        
        `

    }



    // Create function here for error situation. Its taking a parameter for message.

    showErrorUI(message) {

        // There is a div alert from Boostrap for message.

        const div = document.createElement("div");
        div.className = "alert alert-danger";
        div.role = "alert";
        div.textContent = message;

        this.cardBody.appendChild(div);

        setTimeout(() => {
            div.remove();
        }, 2000);
    }



    /* 
    
        We have to created a function for user repos. They are coming in a Array.
    
    */

    showUserRepos(userRepos) {

        this.userRepo = userRepos;

        this.repoDiv.innerHTML = `

                <div class="mb-2 card-body">
                    <div class="row">
                        <div class="col-md-2">
                            <a href="${this.userRepo[0].html_url}" target = "_blank" id = "repoName">${this.userRepo[0].name}</a>
                        </div>
                        <div class="col-md-6">
                            <button class="btn btn-secondary">
                                Stars  <span class="badge badge-light" id="repoStar">${this.userRepo[0].stargazers_count}</span>
                            </button>

                            <button class="btn btn-info">
                                Forks  <span class="badge badge-light" id ="repoFork">${this.userRepo[0].forks_count}</span>
                            </button>
                            
                        </div>
                    </div>

                </div>
        
        `;
    }

    /* 
    
        We have added last searched users to local storage, we creating a function for adding ui the last user we searched. 
    There is a parameter for username. 
    
    */
    addSearchedUserToUI(username) {

        let users = Storage.getSearchedUsersFromStorage();

        // If value of parameter undefined in local storage, we can continue to ui process.

        if (users.indexOf(username) === -1) {

            const li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = username;
            this.lastUsers.appendChild(li);

        }




    }

    // This function for clear all of the last search elements on ui. Its faster with while loop.

    clearAllSearchedFromUI() {
        while (this.lastUsers.firstElementChild !== null) {
            this.lastUsers.removeChild(this.lastUsers.firstElementChild);
        }
    }

}