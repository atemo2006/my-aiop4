// create a basic js story app that uses tenses to make the string.
alert
var noun = prompt(' what is your name ');
var name = noun;
var verb = prompt(' what are you doing ');
var action = verb;
var nextaction = verb;
var adjective = prompt(' please type an adjective ');
var describe = adjective;
var country = prompt(' please enter the name of a country. ');
var place = country;
var time = prompt(' please enter a time(day, week, month, year,o\'clock. ');
var when = time;
var nounthing = prompt(' please enter a noun. ');
var personal = nounthing;
alert(" you\'re all done, ready for the answer? ");
var story = name + ' loves ' + action + '.' ;
story += ' the people around you think you\'re ';
story += " keeping up the good work is what has made you who you are ";
story += name;
story += '  the cottage boy ';
story += nextaction.toUpperCase();
story += ' never give up .';
story += describe + '.';
story += personal += '.';
story += ' practice your code as much as you can '
story += place + '.';
story += when;
story += ' Okay then its time to code ';
story += place + ".";
story += when;
story += ' lets get at it ';
story += action;
story += '  we have now come to the end of the story. ';
document.write(story)
console.log(story)
console.log(story.length)