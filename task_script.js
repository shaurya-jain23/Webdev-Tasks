fetch('https://www.coursehubiitg.in/api/codingweek/contributions')
  .then(response => response.json())
  .then(data => {
    // 'data' will contain the array of objects with details
    data.sort(function(a,b){
      return b.points-a.points;
    })
    // Iterate over each object and access the properties
    for(let val = 0 ;val<data.length; val++) {
      const name = data[val].name;
      const points = data[val].points;
      const avatar = data[val].avatar;
    
      console.log(val)
      document.getElementById(`rank${val+1}score`).innerHTML = points;
      document.getElementById(`rank${val+1}name`).innerHTML = name;
      document.getElementById(`rank${val+1}`).style.backgroundImage = `url(${avatar})`;
      
      // Do whatever you want with the details
      console.log('Name:', name);
      console.log('Points:', points);
      console.log('Avatar:', avatar);
      console.log('---');
    };
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Error:', error);
  });