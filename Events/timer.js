let BombTimer = setTimeout(() => console.log('🎇🎇BOOOOM🎇🎇'), 200);

if(Math.random() < 0.5){
    clearTimeout(BombTimer);
    console.log('bomb diffused');
}