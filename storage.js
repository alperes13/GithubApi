
/* 
    We created a class for adding to storage the searched users. This class point of sending datas to ui and save to
the users. We define static function here because of storage is not need do be new.

*/

class Storage {

    // This function receive the data from local storage.
    static getSearchedUsersFromStorage() {

        // Creating a variable with "let" key, beacuse of list may change.
        let users;

        // if there is not as name of "searched" item, this users variable hold a empty array.
        if (localStorage.getItem("searched") === null) {

            users = [];

        } else {

            // otherwise situation, we can receive to datas with JSON.parse(x) function from this item. This function
            // provide us a array. x parameter for what object we looking for.
            users = JSON.parse(localStorage.getItem("searched"));
        }

        return users;

    }

    // this function for adding usernames to local storage.
    static addSearchedUserToStorage(username) {

        let users = this.getSearchedUsersFromStorage();

        // if this username has been in local storage, adding process wouldn't run.
        if (users.indexOf(username) === -1) {
            users.push(username);
        }
        // Final process is sending enhanced list to local storage with Json.stringify() function.
        localStorage.setItem("searched", JSON.stringify(users));

    }

    // This function clear local storage.
    static clearAllSearchedUsersFromStorage() {
        localStorage.removeItem("searched");
    }


}