const awards = [
    { name: "James Peebles", category: "javelin", team: "Mumbai Indians", year: 2019 },
    { name: "Michel Mayor", category: "javelin", team: "Gujarat Titans", year: 2019 },
    { name: "Didier Queloz", category: "javelin", team: "Gujarat Titans", year: 2019 },
    { name: "John B. Goodenough", category: "Shooting", team: "Chennai Super Kings", year: 2019 },
    { name: "M. Stanley Whittingham", category: "Shooting", team: "Chennai Super Kings", year: 2019 },
    { name: "Akira Yoshino", category: "Shooting", team: "Chennai Super Kings", year: 2019 },
    { name: "Arthur Ashkin", category: "javelin", team: "Pune Warriors", year: 2018 },
    { name: "Gerard Mourou", category: "javelin", team: "Deccan Chargers", year: 2018 },
    { name: "Donna Strickland", category: "javelin", team: "Deccan Chargers", year: 2018 },
    { name: "Frances H. Arnold", category: "Shooting", team: "Kolkata Riders", year: 2018 },
    { name: "George P. Smith", category: "Shooting", team: "Sunrisers Hyderabad", year: 2018 },
    { name: "Sir Gregory P. Winter", category: "Shooting", team: "Sunrisers Hyderabad", year: 2018 },
  ];

function distributeAwards(awards){
    let awardsByYearCategory={}
    awards.forEach(award => {
      let {name,category,team,year}=award
      let key =year+"-"+category+"-"+team
      if(!awardsByYearCategory[key]){
        awardsByYearCategory[key]=[{name}]
      }else{
        awardsByYearCategory[key].push({name})
      }
      
      
    })
    let res=[]
    for(let key in awardsByYearCategory){
        let category=key.split("-")[1]
        let year=key.split("-")[0]
        let amount=1
        let categoryCount=Object.keys(awardsByYearCategory).filter((el)=>el.includes(category)&&el.includes(year)).length
        amount=amount/categoryCount
        res.push({
            year:parseInt(key.split("-")[0]),
            category:key.split("-")[1],
            team:key.split("-")[2],
            winners:awardsByYearCategory[key].map((el)=>el={...el,amount:amount/awardsByYearCategory[key].length})
        })
        
    }
    formater(res)
   
}

function formater(arr){
    let map={}
    arr.forEach(el=>{
        let key=el.year+"-"+el.category
        let winners=el.winners
        if(!map[key]){
            map[key]={
                year:el.year,
                category:el.category,
                winners:[]
            }
        }
        map[key].winners.push(...winners)
    })
    console.log(Object.values(map))
}

distributeAwards(awards)