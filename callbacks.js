// Task 1: Callback Basics
function getUserCB1(id, callback) {
    setTimeout(() => {
        callback({ id: id, name: "Ram" });
    }, 2000);
}

getUserCB1(1, (user) => {
    console.log(user.name); // Ram
});

// Task 2: Callback Hell
function getUserCB2(id, cb) {
    setTimeout(() => {
        console.log("User fetched");
        cb({ id, name: "Ram" });
    }, 1000);
}
function getPostsCB(userId, cb) {
    setTimeout(() => {
        console.log("Posts fetched");
        cb(["post1", "post2"]);
    }, 1000);
}
function getCommentsCB(postId, cb) {
    setTimeout(() => {
        console.log("Comments fetched");
        cb(["nice", "good"]);
    }, 1000);
}

setTimeout(() => {
    getUserCB2(1, (user) => {
        getPostsCB(user.id, (posts) => {
            getCommentsCB(posts[0], (comments) => {
                console.log("User:", user);
                console.log("Posts:", posts);
                console.log("Comments:", comments);
            });
        });
    });
}, 3000); 


// Task 3: Promises
function getUserPromise(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User fetched");
            resolve({ id, name: "Ram" });
        }, 1000);
    });
}
function getPostsPromise(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Posts fetched");
            resolve(["post1", "post2"]);
        }, 1000);
    });
}
function getCommentsPromise(postId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Comments fetched");
            resolve(["nice", "good"]);
        }, 1000);
    });
}

setTimeout(() => {
    let userData, postsData;

    getUserPromise(1)
        .then((user) => {
            userData = user;
            return getPostsPromise(user.id);
        })
        .then((posts) => {
            postsData = posts;
            return getCommentsPromise(posts[0]);
        })
        .then((comments) => {
            console.log("User:", userData);
            console.log("Posts:", postsData);
            console.log("Comments:", comments);
        })
        .catch((err) => console.error(err));
}, 7000); 


// Task 4: Async/Await

function getUserAsync(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User fetched");
            resolve({ id, name: "Ram" });
        }, 1000);
    });
}
function getPostsAsync(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Posts fetched");
            resolve(["post1", "post2"]);
        }, 1000);
    });
}
function getCommentsAsync(postId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Comments fetched");
            resolve(["nice", "good"]);
        }, 1000);
    });
}

async function showData() {
    try {
        const user = await getUserAsync(1);
        const posts = await getPostsAsync(user.id);
        const comments = await getCommentsAsync(posts[0]);
        console.log("User:", user);
        console.log("Posts:", posts);
        console.log("Comments:", comments);
    } catch (err) {
        console.error(err);
    }
}

setTimeout(() => {
    showData();
}, 11000); 