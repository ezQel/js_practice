let emojis = '😂👌';

for(let emoji of emojis){
    console.log(emoji.codePointAt(0) + " " + emoji.charCodeAt(0) + emoji);
} 