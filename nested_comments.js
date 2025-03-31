const initialComments = [
  {
    id: 1,
    text: "This is a comment _id 1",
    replies: [
      {
        id: 2,
        text: "This is a reply _id 2",
        replies: [
          {
            id: 3,
            text: "This is a nested reply _id 3",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    text: "This is another comment _id 4",
    replies: [
      {
        id: 5,
        text: "This is another reply _id 5",
        replies: [],
      },
    ],
  },
];

const comments = initialComments;

showComment(initialComments);

function showComment(comments) {
  for (let i = 0; i < comments.length; i++) {
    let comment = comments[i];
    console.log(comment.id, comment.text);
    if (comment.id == 2) {
      console.log("comment with id", comment.replies);
    }
    if (comment.replies) {
      showComment(comment.replies);
    }
  }
}

function findCommentById(comments, id) {
  let comment = comments.find((c) => c.id == id);

  if (!comment) {
    comment = comments.find((c) => c.replies && findCommentById(c.replies, id));
  }
  console.log("comment", comment);
}

function addCommentById(comments, id, comment) {
  
}

console.log("val", findCommentById(initialComments, 2));
