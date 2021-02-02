
async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  console.log(json)
  console.log(json.length)
  // 🔥 start here: write code to loop through the rides

  let rides = json
  for(i=0; i<rides.length; i++) {
    let ride = rides[i]
    for(r=0; r<ride.length; r++) { 
      if (ride.length > 1) { 
      levelOfService = 'Noober Pool'
    } else if (ride[0].purpleRequested) { 
      levelOfService = 'Noober Purple'
    } else if (ride[0].numberOfPassengers > 3) { 
      levelOfService = 'Noober XL'
    } else { 
      levelOfService = 'Noober X'
    }
  }
  console.log(levelOfService)
  }
}

window.addEventListener('DOMContentLoaded', pageLoaded)
