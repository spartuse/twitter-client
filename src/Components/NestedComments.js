function NestedComments() {

    var arr = [
      {
        comment: 'hi',
        replies: [{ comment: 'hello to you', replies: [] }, { comment: 'hello to you', replies: [] }],
      },
      {
        comment:"hi 2",
        replies: []
    
      }
    ];

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].replies.length; j++) {
        console.log(arr[i].replies[j].comment);
      }
      console.log(arr[i]);
    }
  }

  return (
    <div></div>
  )

  export default NestedComments; 