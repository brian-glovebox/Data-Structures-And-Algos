// The trick to this question is realizing that you need to restructure the data. Notice that we use a hash map to store all the comments with their parents. We also created the map in one pass through the array.

const printComments = comments => {
    const mapping = restructureComments(comments);
    // go through all the comments without a parent
    for (let c of mapping[null].children) {
        printComment(mapping[c], mapping, "");
    }
};

// recursively print the comments
const printComment = (comment, mapping, tab) => {
    console.log(`${tab}${comment.body}`);
    for (let child of mapping[comment.id].children) {
        printComment(mapping[child], mapping, tab + "  ");
    }
};

const restructureComments = comments => {
    const commentsMapping = {};
    for (let comment of comments) {
        if (commentsMapping[comment.id]) {
            commentsMapping[comment.id].body = comment.body;
            commentsMapping[comment.id].parent = comment.parent;
        } else {
            commentsMapping[comment.id] = comment;
            commentsMapping[comment.id].children = [];
        }

        if (commentsMapping[comment.parent]) {
            commentsMapping[comment.parent].children.push(comment.id);
        } else {
            commentsMapping[comment.parent] = {
                id: comment.parent,
                children: [comment.id]
            };
        }
    }
    return commentsMapping;
};