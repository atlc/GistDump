let testCases = [8888675309, 2055551234, 448889996214, 13345679876, 9875432]

function formatPhoneFromInt(num) {
  let areaCode = (num - (num % 10000000)) / 10000000
  let localNum = num % 10000000
  let firstThree = (localNum - (localNum % 10000)) / 10000
  let lastFour = localNum - (firstThree * 10000)
  if (num >= 10000000000) {
    let countryCode = (num - (num % 10000000000)) / 10000000000
    console.log(`+${countryCode} (${Math.abs(countryCode * 1000 - areaCode)}) ${firstThree}-${lastFour}`)
  } else if (num <=10000000) {
    console.log(`${firstThree}-${lastFour}`)
  } else {
    console.log(`(${areaCode}) ${firstThree}-${lastFour}`)
  }
}

function uglyFormatterWithoutLocalVars(num) {
  (num >= 10000000000) ? console.log(`+${(num - (num % 10000000000)) / 10000000000} (${Math.abs((num - (num % 10000000000)) / 10000000000 * 1000 - ((num - (num % 10000000)) / 10000000))}) ${((num % 10000000) - ((num % 10000000) % 10000)) / 10000}-${(num % 10000000) - ((((num % 10000000) - ((num % 10000000) % 10000)) / 10000) * 10000)}`)
    : (num <=10000000) ? console.log(`${((num % 10000000) - ((num % 10000000) % 10000)) / 10000}-${(num % 10000000) - ((((num % 10000000) - ((num % 10000000) % 10000)) / 10000) * 10000)}`)
    : console.log(`(${(num - (num % 10000000)) / 10000000}) ${((num % 10000000) - ((num % 10000000) % 10000)) / 10000}-${(num % 10000000) - ((((num % 10000000) - ((num % 10000000) % 10000)) / 10000) * 10000)}`)
}

let ugliestOneLinerFormatterWithoutLocalVars = (num) => (num >= 10000000000) ? console.log(`+${(num - (num % 10000000000)) / 10000000000} (${Math.abs((num - (num % 10000000000)) / 10000000000 * 1000 - ((num - (num % 10000000)) / 10000000))}) ${((num % 10000000) - ((num % 10000000) % 10000)) / 10000}-${(num % 10000000) - ((((num % 10000000) - ((num % 10000000) % 10000)) / 10000) * 10000)}`) : (num <=10000000) ? console.log(`${((num % 10000000) - ((num % 10000000) % 10000)) / 10000}-${(num % 10000000) - ((((num % 10000000) - ((num % 10000000) % 10000)) / 10000) * 10000)}`) : console.log(`(${(num - (num % 10000000)) / 10000000}) ${((num % 10000000) - ((num % 10000000) % 10000)) / 10000}-${(num % 10000000) - ((((num % 10000000) - ((num % 10000000) % 10000)) / 10000) * 10000)}`)

for (phone in testCases) {
  formatPhoneFromInt(testCases[phone])
  uglyFormatterWithoutLocalVars(testCases[phone])
  ugliestOneLinerFormatterWithoutLocalVars(testCases[phone]) 
}

// (888) 867-5309
// (888) 867-5309
// (888) 867-5309
// (205) 555-1234
// (205) 555-1234
// (205) 555-1234
// +44 (888) 999-6214
// +44 (888) 999-6214
// +44 (888) 999-6214
// +1 (334) 567-9876
// +1 (334) 567-9876
// +1 (334) 567-9876
// 987-5432
// 987-5432
// 987-5432