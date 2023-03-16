let horror = ["Midsommar", "Hereditary", "Get Out"];

var photos = [
"https://www.indiewire.com/wp-content/uploads/2020/07/midsommar2.jpg",
    
"https://images.squarespace-cdn.com/content/v1/511eea22e4b06642027a9a99/1532449879047-9FQ3FYK5ZZL2WQLWEW9D/Hereditary.jpg",
    
"https://m.media-amazon.com/images/I/91yhYRckRvL._SL1500_.jpg"
];

$(".horror").click(function() {
    let photo =[0, 1, 2];
    
for (let photo of photos){
$("body").append("<img src=" + photo + ">");
}
    
});

//declare your new array here