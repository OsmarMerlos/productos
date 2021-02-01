function palindromo()
{
	var word=prompt("PLS write a word").toLowerCase();
 
	word=word.replace(/ /g, "");
 
	for (var i=0;i<word.length;i++){
		if(word[i]!=word[word.length-i-1]){
			return false;
		}
	}
	return true;
}
 
if(palindromo())
{
    alert("This is a palíndromo, thanks");
   
}else{
    alert("This isn't a palíndromo, try again");

}