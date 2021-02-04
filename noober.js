async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  //grab JSON array
  for (let i = 0; i < json.length; i++) {   
    let ride = json[i]
  //one level deeper
  for (let l = 0; l < ride.length; l++) {  
    let leg = ride[l]
    
  // declare variables:
      let passengerNumberOfPassengers = leg.numberOfPassengers
      let passengerName = `${leg.passengerDetails.first} ${leg.passengerDetails.last}`
      let passengerPhone = leg.passengerDetails.phoneNumber
      let passengerPickupAddressLine1 = leg.pickupLocation.address
      let passengerPickupAddressLine2 = `${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}`
      let passengerDropoffAddressLine1 = leg.dropoffLocation.address
      let passengerDropoffAddressLine2 = `${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}`

  // determine rides and add html snippets 
      let levelOfService
      if (ride.length > 1) {
        levelOfService = "Noober Pool"
        let outputElement = document.querySelector(".rides")  
        outputElement.insertAdjacentHTML("beforeend",
          `
            <h1
              class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              <i class="fas fa-car-side"></i>
              <span>${levelOfService}</span>
            </h1>

            <div class="border-4 border-gray-900 p-4 my-4 text-left">
              <div class="flex">
                <div class="w-1/2">
                  <h2 class="text-2xl py-1">${passengerName}</h2>
                  <p class="font-bold text-gray-600">${passengerPhone}</p>
                </div>
                <div class="w-1/2 text-right">
                  <span class="rounded-xl bg-gray-600 text-white p-2">
                  ${passengerNumberOfPassengers} passengers
                  </span>
                </div>
              </div>
              <div class="mt-4 flex">
                <div class="w-1/2">
                  <div class="text-sm font-bold text-gray-600">PICKUP</div>
                  <p>${passengerPickupAddressLine1}</p>
                  <p>${passengerPickupAddressLine2}</p>
                </div>
                <div class="w-1/2">
                  <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                  <p>${passengerDropoffAddressLine1}</p>
                  <p>${passengerDropoffAddressLine2}</p>
                </div>
              </div>
            </div>
          `
        )

      } else if (leg.purpleRequested == true) {                // if purpleRequest = true, then level of service = Noober Purple = always 1
        levelOfService = "Noober Purple"
        let outputElement = document.querySelector(".rides")   // PRINTING - Noober Purple
        outputElement.insertAdjacentHTML("beforeend",
          `
            <h1
              class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              <i class="fas fa-car-side"></i>
              <span>${levelOfService}</span>
            </h1>

            <div class="border-4 border-purple-500 p-4 my-4 text-left">
              <div class="flex">
                <div class="w-1/2">
                  <h2 class="text-2xl py-1">${passengerName}</h2>
                  <p class="font-bold text-gray-600">${passengerPhone}</p>
                </div>
                <div class="w-1/2 text-right">
                  <span class="rounded-xl bg-purple-600 text-white p-2">
                    ${passengerNumberOfPassengers} passengers
                  </span>
                </div>
              </div>
              <div class="mt-4 flex">
                <div class="w-1/2">
                  <div class="text-sm font-bold text-gray-600">PICKUP</div>
                  <p>${passengerPickupAddressLine1}</p>
                  <p>${passengerPickupAddressLine2}</p>
                </div>
                <div class="w-1/2">
                  <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                  <p>${passengerDropoffAddressLine2}</p>
                  <p>${passengerDropoffAddressLine2}</p>
                </div>
              </div>
            </div>
          `
        )

      } else if (leg.numberOfPassengers > 3) {                 // if number of total people is > 3, then level of service = Noober XL
        levelOfService = "Noober XL"
        let outputElement = document.querySelector(".rides")   // PRINTING - Noober XL
        outputElement.insertAdjacentHTML("beforeend",
          `
            <h1
              class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              <i class="fas fa-car-side"></i>
              <span>${levelOfService}</span>
            </h1>

            <div class="border-4 border-gray-900 p-4 my-4 text-left">
              <div class="flex">
                <div class="w-1/2">
                  <h2 class="text-2xl py-1">${passengerName}</h2>
                  <p class="font-bold text-gray-600">${passengerPhone}</p>
                </div>
                <div class="w-1/2 text-right">
                  <span class="rounded-xl bg-gray-600 text-white p-2">
                  ${passengerNumberOfPassengers} passengers
                  </span>
                </div>
              </div>
              <div class="mt-4 flex">
                <div class="w-1/2">
                  <div class="text-sm font-bold text-gray-600">PICKUP</div>
                  <p>${passengerPickupAddressLine1}</p>
                  <p>${passengerPickupAddressLine2}</p>
                </div>
                <div class="w-1/2">
                  <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                  <p>${passengerDropoffAddressLine1}</p>
                  <p>${passengerDropoffAddressLine2}</p>
                </div>
              </div>
            </div>
          `
        )

      } else {                                                 // else Noober X
        levelOfService = "Noober X"
        let outputElement = document.querySelector(".rides")   // PRINTING - Noober X
        outputElement.insertAdjacentHTML("beforeend",
          `
            <h1
              class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              <i class="fas fa-car-side"></i>
              <span>${levelOfService}</span>
            </h1>

            <div class="border-4 border-gray-900 p-4 my-4 text-left">
              <div class="flex">
                <div class="w-1/2">
                  <h2 class="text-2xl py-1">${passengerName}</h2>
                  <p class="font-bold text-gray-600">${passengerPhone}</p>
                </div>
                <div class="w-1/2 text-right">
                  <span class="rounded-xl bg-gray-600 text-white p-2">
                  ${passengerNumberOfPassengers} passengers
                  </span>
                </div>
              </div>
              <div class="mt-4 flex">
                <div class="w-1/2">
                  <div class="text-sm font-bold text-gray-600">PICKUP</div>
                  <p>${passengerPickupAddressLine1}</p>
                  <p>${passengerPickupAddressLine2}</p>
                </div>
                <div class="w-1/2">
                  <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                  <p>${passengerDropoffAddressLine1}</p>
                  <p>${passengerDropoffAddressLine2}</p>
                </div>
              </div>
            </div>
          `
        )
      }
    }
  }
}


window.addEventListener('DOMContentLoaded', pageLoaded)