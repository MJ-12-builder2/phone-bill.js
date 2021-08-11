
  const sent = itemString.split(',');
  let total = 0;
  
  for (var i=0; i<sent.length; i++){ 
  		const cost = sent[i].trim(); 
  		if(cost.startsWith('c')){
          total += 2.75;
        }else if(cost.startsWith('s')){
          total += 0.65;
     }
        console.log(total);
   }
      	return 'R' + total.toFixed(2);

