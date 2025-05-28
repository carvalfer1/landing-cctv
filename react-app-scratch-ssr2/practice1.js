const counts = [
    "900,google.com",
    "60,mail.yahoo.com",
    "10,mobile.sports.yahoo.com",
    "40,sports.yahoo.com",
    "300,yahoo.com",
    "10,stackoverflow.com",
    "2,en.wikipedia.org",
    "1,es.wikipedia.org",
    "1,mobile.sports"
  ]
  function getCounts(counts) {
      // code here
      console.log("Hello  world");
    //   let aux = [];
    //   let count = 0;
    //   let splited = [];
    //   for (i = 0; i < counts.length; i++) {
        
    //     count = (counts[i].split(",")[0]);
    //     splited = counts[i].split(",")[1].split(".");

        
    //   }

    counts.reduce((prev, curr, idx)=> {
        const line = curr.split(',')
        const amt = line[0]
        const domain = line[1]
        const splitDomain = domain.split('.')
        const PrevKeys = Object.keys(prev)
        if(splitDomain.length===1){
            return {...prev, [domain]: prev[domain] ? prev[domain]+amt}
        }





    }, {})
      console.log(aux);
      
  }
  getCounts(counts);
  /*
  1320 com
  900 google.com
  410 yahoo.com
  60 mail.yahoo.com
  10 mobile.sports.yahoo.com
  50 sports.yahoo.com
  10 stackoverflow.com
  3 org
  3 wikipedia.org
  2 en.wikipedia.org
  1 es.wikipedia.org
  1 mobile.sports
  1 sports
  */