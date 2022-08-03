
/* 
    Holding necessary elements because of they are required for events.
*/

const githubSearchForm = document.getElementById("github-form");
const githubSearchNameInput = document.getElementById("githubname");
const clearLastUsersButton = document.getElementById("clear-last-users");
const lastUsersUl = document.getElementById("last-users");

const github = new Github();
const ui = new UI();

eventListeners();

function eventListeners() {

    // this event for search button.
    githubSearchForm.addEventListener("submit", getUsersData);

    // this event for clear all searched.
    clearLastUsersButton.addEventListener("click", clearAllSearched);


    // this event running on after page loaded
    document.addEventListener("DOMContentLoaded", getAllSearched);

}


function getUsersData(e) {

    // username from input with trim.
    let username = githubSearchNameInput.value.trim();

    // if username has been empty, returning a alert.
    if (username === "") {

        alert("Invalid account.")

    } else {

        github.getGithubData(username)

            .then(response => {

                // If searched user is not exist in Github, the request return a message as "Not Found".

                if (response.user.message === "Not Found") {

                    ui.showErrorUI("Wrong username.");

                } else {

                    console.log(response);
                    ui.addSearchedUserToUI(username);
                    Storage.addSearchedUserToStorage(username);
                    ui.showUserInfo(response.user);
                    ui.showUserRepos(response.usersRepo);

                }
            })

            .catch(err => ui.showErrorUI(err));
    }

    ui.clearInput();

    // .preventDefault(); function for not refreshing, after submit process.

    e.preventDefault();

}


function clearAllSearched() {

    // Taking a confirm for deleting the searched users.
    if (confirm("Do you confirm?")) {

        // if is it okey, cleaning from ui and storage.

        Storage.clearAllSearchedUsersFromStorage();

        ui.clearAllSearchedFromUI();

    }
}


function getAllSearched() {

    let users = Storage.getSearchedUsersFromStorage();

    // adding to ui the all of data from storage.

    let result = "";

    users.forEach(user => {

        result += `<li class="list-group-item">${user}</li>`;

    });

    lastUsersUl.innerHTML = result;

}