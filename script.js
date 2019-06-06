function FunFact() {

    var facts = [
      'likes to box', 
      'can\'t walk backwards',
      'can jump three times their own height', 
      'can carry things in their pouch'
    ];
    
    var myFact = facts[Math.round(Math.random()*(facts.length-1))];
  
    document.getElementById('facts').innerHTML = '<div> The Kangaroo ' + myFact + '.</div>'
}