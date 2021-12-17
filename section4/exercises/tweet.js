/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
constructor(author, content, timeStamp) {
  this.author = author;
  this.content = content;
  this.timeStamp = timeStamp;
  this.numberOfLikes = 0;
  this.comments = [];
}
incrementLikes() {
  this.numberOfLikes++
}

addComment(newComment) {
  this.comments.push(newComment)
}
};

var tweet1 = new Tweet ("@jovan", "You're telling me a Shrimp fried this rice?", "11/19/2020 21:02:11");
var tweet2 = new Tweet ("@caucasianjames", "Y'all mind if I have a good week?", "12/13/2021 09:01:00");
var tweet3 = new Tweet ("@coffee_dad", "Need a coffee", "12/15/2020, 07:00:01")


tweet1.incrementLikes()
tweet1.incrementLikes()
tweet1.addComment("Shut up")
tweet2.incrementLikes()
tweet2.addComment("No")
tweet2.addComment("Yes")
tweet3.incrementLikes()
tweet1.addComment("LOL")
tweet3.incrementLikes()
tweet2.addComment("Maybe")
tweet2.incrementLikes()
tweet1.incrementLikes()
tweet3.incrementLikes()
tweet3.addComment("Me too dad")
tweet3.incrementLikes()

console.log(tweet1);
console.log(tweet2);
console.log(tweet3);
