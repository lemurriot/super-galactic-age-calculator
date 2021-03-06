

export class Person {
  constructor(ageInYears) {
    this.ageInYears = ageInYears;
  }

  ageInSeconds() {
    const thisAgeInSeconds = this.ageInYears * 31557600;
    return thisAgeInSeconds;
  }
};


export class AgeCompare {
  constructor(nowString, birthString) {
    this.nowString = nowString;
    this.birthString = birthString;
  }

  secondsExactly() {
    const exactSeconds = moment(this.nowString).diff(this.birthString, 'seconds');
    return exactSeconds;
  }

  daysExactly() {
    const exactDays = moment(this.nowString).diff(this.birthString, 'days');
    return exactDays;
  }

  weeksExactly() {
    const exactWeeks = moment(this.nowString).diff(this.birthString, 'weeks');
    return exactWeeks;
  }

  yearsExactly() {
    const exactYears = moment(this.nowString).diff(this.birthString, 'days') / 365.25;
    return exactYears;
  }

  mercuryYears() {
    const mercYears = moment(this.nowString).diff(this.birthString, 'days') / 365.25 / .24;
    return mercYears;
  }

  venusYears() {
    const venusYears = moment(this.nowString).diff(this.birthString, 'days') / 365.25 / .62;
    return venusYears;
  }

  marsYears() {
    const marsYears = moment(this.nowString).diff(this.birthString, 'days') / 365.25 / 1.88;
    return marsYears;
  }
  jupiterYears() {
    const jupiterYears = moment(this.nowString).diff(this.birthString, 'days') / 365.25 / 11.86;
    return jupiterYears;
  }
};


export class Demographics {
  constructor(country, gender) {
  this.country = country;
  this.gender = gender;
  }

  lifeExpectancy() {
    let countryA = this.country;
    const liveExpectancy = {
      'Afghanistan': 60.5,
      'Albania': 77.8,
      'Algeria': 75.6,
      'Angola': 52.4,
      'Antigua and Barbuda':76.4,
      'Argentina': 76.3,
      'Armenia': 74.8,
      'Australia': 82.8,
      'Austria': 81.5,
      'Azerbaijan': 72.7,
      'Bahamas': 76.1,
      'Bahrain': 76.9,
      'Bangladesh': 71.8,
      'Barbados': 75.5,
      'Belarus': 72.3,
      'Belgium': 81.1,
      'Belize': 70.1,
      'Benin': 60,
      'Bhutan': 69.8,
      'Bolivia': 70.7,
      'Bosnia and Herzegovina': 77.4,
      'Botswana': 65.7,
      'Brazil': 75,
      'Brunei': 77.7,
      'Bulgaria': 74.5,
      'Burkina Faso': 59.9,
      'Burundi': 59.6,
      'Cambodia': 68.7,
      'Cameroon': 57.3,
      'Canada': 82.2,
      'Cape Verde': 73.3,
      'Central African Republic': 52.5,
      'Chad': 53.1,
      'Chile': 80.5,
      'China': 76.1,
      'Colombia': 74.8,
      'Comoros': 63.5,
      'Congo': 64.7,
      'Costa Rica': 79.6,
      'Ivory Coast': 53.3,
      'Croatia': 78,
      'Cuba': 79.1,
      'Cyprus': 80.5,
      'Czech Republic': 78.8,
      'Denmark': 80.6,
      'Djibouti': 63.5,
      'Dominican Republic': 73.9,
      'North Korea': 70.6,
      'Congo': 59.8,
      'Ecuador': 76.2,
      'Egypt':70.9,
      'El Salvador': 73.5,
      'Equatorial Guinea': 58.2,
      'Eritrea': 64.7,
      'Estonia': 77.6,
      'Ethiopia': 64.8,
      'Fiji': 69.9,
      'Finland': 81.1,
      'France': 82.4,
      'Gabon': 66,
      'Gambia': 61.1,
      'Georgia': 74.4,
      'Germany': 81,
      'Ghana': 62.4,
      'Greece': 81,
      'Grenada': 73.6,
      'Greenland': 71.83,
      'Guatemala': 71,
      'Guinea': 59,
      'Guinea-Bissau': 58.9,
      'Guyana': 66.2,
      'Haiti': 63.5,
      'Honduras': 74.6,
      'Hungary': 75.9,
      'Iceland': 82.7,
      'India': 68.3,
      'Indonesia': 69.1,
      'Iran': 75.5,
      'Iraq': 68.9,
      'Ireland': 81.4,
      'Israel': 82.5,
      'Italy': 82.7,
      'Jamaica': 76.2,
      'Japan': 83.7,
      'Jordan': 74.1,
      'Kazakhstan': 70.2,
      'Kenya': 63.4,
      'Kiribati': 66.3,
      'Kuwait': 74.7,
      'Kyrgyzstan': 71.1,
      'Laos': 65.7,
      'Latvia': 74.6,
      'Lebanon': 74.9,
      'Lesotho': 53.7,
      'Liberia': 61.4,
      'Libya': 72.7,
      'Lithuania': 73.6,
      'Luxembourg': 82,
      'Macedonia': 75.7,
      'Madagascar': 65.5,
      'Malawi': 58.3,
      'Malaysia': 75,
      'Maldives': 78.5,
      'Mali': 58.2,
      'Malta': 81.7,
      'Mauritania': 63.1,
      'Mauritius': 74.6,
      'Mexico': 76.7,
      'Micronesia': 69.4,
      'Moldova': 72.1,
      'Mongolia': 68.8,
      'Montenegro': 76.1,
      'Morocco': 74.3,
      'Mozambique': 57.6,
      'Myanmar': 66.6,
      'Namibia': 65.8,
      'Nepal': 69.2,
      'Netherland': 81.9,
      'New Zealand': 81.6,
      'Nicaragua': 74.8,
      'Niger': 61.8,
      'Nigeria': 54.5,
      'Norway': 81.8,
      'Oman': 76.6,
      'Pakistan': 66.4,
      'Panama': 77.8,
      'Papua New Guinea': 62.9,
      'Paraguay': 74,
      'Peru': 75.5,
      'Phillipines': 68.5,
      'Poland': 77.56,
      'Portugal': 81.1,
      'Qatar': 78.2,
      'Romania': 75,
      'Russia': 70.5,
      'Rwanda': 66.1,
      'Saint Lucia': 75.2,
      'Saint Vincent': 73.2,
      'Samoa': 74,
      'Sao Tome and Principe': 67.5,
      'Saudi Arabia': 74.5,
      'Senegal': 66.7,
      'Serbia': 75.6,
      'Seychelles': 73.2,
      'Sierra Leone': 50.1,
      'Singapore': 83.1,
      'Slovakia': 76.7,
      'Slovenia': 80.8,
      'Solomon Islands': 69.2,
      'Somalia': 55,
      'South Africa': 62.9,
      'Korea': 82.3,
      'Spain': 82.8,
      'Sudan': 64.1,
      'Suriname': 71.6,
      'Swaziland': 58.9,
      'Sweden': 82.4,
      'Switzerland': 83.4,
      'Syria': 64.5,
      'Tajikistan': 69.7,
      'Tanzania': 61.8,
      'Thailand': 74.9,
      'Togo': 59.9,
      'Tonga': 73.5,
      'Trinidad and Tobago': 71.2,
      'Tunisia': 75.3,
      'Turkey': 75.4,
      'Turkmenistan': 66.3,
      'Uganda': 62.3,
      'Ukraine': 71.3,
      'United Arab Emirates': 77.1,
      'United Kingdom': 81.2,
      'United States': 79.3,
      'Uruguay': 77,
      'Uzbekistan': 69.4,
      'Vanuatu': 72,
      'Venezuela': 74.1,
      'Vietnam': 76,
      'Yemen': 65.7,
      'Zambia': 61.8,
      'Zimbabwe': 60.7
  }
    let countryAvg = liveExpectancy[countryA];
    let genderedAvg = countryAvg * .05;
    if (this.gender == 'neutral') {
      return countryAvg;
    } else if (this.gender == 'male') {
      return countryAvg - genderedAvg;
    } else {
      return countryAvg + genderedAvg;
    }
  }
};


export class LifeLeft {
  constructor(compareArray) {
    this.compareArray = compareArray;
  }
  difference() {
    if (this.compareArray[0] < this.compareArray[1]) {
      let returnVal = this.compareArray[1] - this.compareArray[0];
      let returnMerc = returnVal / .24;
      let returnVen = returnVal / .62;
      let returnMar = returnVal / 1.88;
      let returnJup = returnVal / 11.68;
      return `Warning! Our records indicate that, statistically, you are on borrowed time. You should have kicked it ${returnVal} years ago on Earth. You'd have been a goner ${returnMerc} years ago on Mercury, and ${returnVen} years on Venus. You'd have breathed your last breathe ${returnMar} & ${returnJup} years ago on Mars and Jupiter, respectively, assuming you had breath to breathe. We hear its smoggy on Jupiter.`;
    } else if (this.compareArray[0] > this.compareArray[1]) {
      let returnVal = this.compareArray[0] - this.compareArray[1];
      let returnMerc = returnVal / .24;
      let returnVen = returnVal / .62;
      let returnMar = returnVal / 1.88;
      let returnJup = returnVal / 11.68;
      return `Our records indicate that, statistically, you are likely to die in ${returnVal} years. This is a part of the human condition, and indeed a pre-condition of life itself. On Venus, all other things being equal, we expect your demise in ${returnVen} years. Mars, ${returnMar} years. On Jupiter, only ${returnJup} years.  To optimize existence, we'd recommend going to Mercury, where you can live sweet life for another ${returnMerc} years. Bring sunscreen.`;
    } else {
       return "Looks like time has caught up to you, congrats on living up to you're statistical life expectancy. Try not to die, if you live longer it brings up the whole life expectancy average for the rest of us. If you do go to Mars, bring a water bottle.";
    }
  }
};


// function Person(ageInYears) {
//   this.ageInYears = ageInYears;
// }
//
// Person.prototype.ageInSeconds = function() {
//   const thisAgeInSeconds = this.ageInYears * 31557600;
//   console.log(thisAgeInSeconds);
//   return thisAgeInSeconds;
// };

// function AgeCompare(nowString, birthString) {
//   this.nowString = nowString;
//   this.birthString = birthString;
// }
// AgeCompare.prototype.secondsExactly = function() {
//   const exactSeconds = moment(this.nowString).diff(this.birthString, 'seconds');
//   return exactSeconds;
// };
// AgeCompare.prototype.daysExactly = function() {
//   const exactDays = moment(this.nowString).diff(this.birthString, 'days');
//   return exactDays;
// };
// AgeCompare.prototype.weeksExactly = function() {
//   const exactWeeks = moment(this.nowString).diff(this.birthString, 'weeks');
//   return exactWeeks;
// };
// AgeCompare.prototype.yearsExactly = function(){
//   const exactYears = moment(this.nowString).diff(this.birthString, 'days') / 365.25;
//   return exactYears;
// };
// AgeCompare.prototype.mercuryYears = function() {
//   const mercYears = moment(this.nowString).diff(this.birthString, 'days') / 365.25 / .24;
//   return mercYears;
// };
// AgeCompare.prototype.venusYears = function() {
//   const venusYears = moment(this.nowString).diff(this.birthString, 'days') / 365.25 / .62;
//   return venusYears;
// };
// AgeCompare.prototype.marsYears = function() {
//   const marsYears = moment(this.nowString).diff(this.birthString, 'days') / 365.25 / 1.88;
//   return marsYears;
// };
// AgeCompare.prototype.jupiterYears = function() {
//   const jupiterYears = moment(this.nowString).diff(this.birthString, 'days') / 365.25 / 11.86;
//   return jupiterYears;
// };


// function Demographics(country, gender) {
//   this.country = country;
//   this.gender = gender;
// }
//
// Demographics.prototype.lifeExpectancy = function() {
//   const countryA = this.country;
//   const liveExpectancy = {
//   	'Afghanistan': 60.5,
//     'Albania': 77.8,
//     'Algeria': 75.6,
//     'Angola': 52.4,
//     'Antigua and Barbuda':76.4,
//     'Argentina': 76.3,
//     'Armenia': 74.8,
//     'Australia': 82.8,
//     'Austria': 81.5,
//     'Azerbaijan': 72.7,
//     'Bahamas': 76.1,
//     'Bahrain': 76.9,
//     'Bangladesh': 71.8,
//     'Barbados': 75.5,
//     'Belarus': 72.3,
//     'Belgium': 81.1,
//     'Belize': 70.1,
//     'Benin': 60,
//     'Bhutan': 69.8,
//     'Bolivia': 70.7,
//     'Bosnia and Herzegovina': 77.4,
//     'Botswana': 65.7,
//     'Brazil': 75,
//     'Brunei': 77.7,
//     'Bulgaria': 74.5,
//     'Burkina Faso': 59.9,
//     'Burundi': 59.6,
//     'Cambodia': 68.7,
//     'Cameroon': 57.3,
//     'Canada': 82.2,
//     'Cape Verde': 73.3,
//     'Central African Republic': 52.5,
//     'Chad': 53.1,
//     'Chile': 80.5,
//     'China': 76.1,
//     'Colombia': 74.8,
//     'Comoros': 63.5,
//     'Congo': 64.7,
//     'Costa Rica': 79.6,
//     'Ivory Coast': 53.3,
//     'Croatia': 78,
//     'Cuba': 79.1,
//     'Cyprus': 80.5,
//     'Czech Republic': 78.8,
//     'Denmark': 80.6,
//     'Djibouti': 63.5,
//     'Dominican Republic': 73.9,
//     'North Korea': 70.6,
//     'Congo': 59.8,
//     'Ecuador': 76.2,
//     'Egypt':70.9,
//     'El Salvador': 73.5,
//     'Equatorial Guinea': 58.2,
//     'Eritrea': 64.7,
//     'Estonia': 77.6,
//     'Ethiopia': 64.8,
//     'Fiji': 69.9,
//     'Finland': 81.1,
//     'France': 82.4,
//     'Gabon': 66,
//     'Gambia': 61.1,
//     'Georgia': 74.4,
//     'Germany': 81,
//     'Ghana': 62.4,
//     'Greece': 81,
//     'Grenada': 73.6,
//     'Greenland': 71.83,
//     'Guatemala': 71,
//     'Guinea': 59,
//     'Guinea-Bissau': 58.9,
//     'Guyana': 66.2,
//     'Haiti': 63.5,
//     'Honduras': 74.6,
//     'Hungary': 75.9,
//     'Iceland': 82.7,
//     'India': 68.3,
//     'Indonesia': 69.1,
//     'Iran': 75.5,
//     'Iraq': 68.9,
//     'Ireland': 81.4,
//     'Israel': 82.5,
//     'Italy': 82.7,
//     'Jamaica': 76.2,
//     'Japan': 83.7,
//     'Jordan': 74.1,
//     'Kazakhstan': 70.2,
//     'Kenya': 63.4,
//     'Kiribati': 66.3,
//     'Kuwait': 74.7,
//     'Kyrgyzstan': 71.1,
//     'Laos': 65.7,
//     'Latvia': 74.6,
//     'Lebanon': 74.9,
//     'Lesotho': 53.7,
//     'Liberia': 61.4,
//     'Libya': 72.7,
//     'Lithuania': 73.6,
//     'Luxembourg': 82,
//     'Macedonia': 75.7,
//     'Madagascar': 65.5,
//     'Malawi': 58.3,
//     'Malaysia': 75,
//     'Maldives': 78.5,
//     'Mali': 58.2,
//     'Malta': 81.7,
//     'Mauritania': 63.1,
//     'Mauritius': 74.6,
//     'Mexico': 76.7,
//     'Micronesia': 69.4,
//     'Moldova': 72.1,
//     'Mongolia': 68.8,
//     'Montenegro': 76.1,
//     'Morocco': 74.3,
//     'Mozambique': 57.6,
//     'Myanmar': 66.6,
//     'Namibia': 65.8,
//     'Nepal': 69.2,
//     'Netherland': 81.9,
//     'New Zealand': 81.6,
//     'Nicaragua': 74.8,
//     'Niger': 61.8,
//     'Nigeria': 54.5,
//     'Norway': 81.8,
//     'Oman': 76.6,
//     'Pakistan': 66.4,
//     'Panama': 77.8,
//     'Papua New Guinea': 62.9,
//     'Paraguay': 74,
//     'Peru': 75.5,
//     'Phillipines': 68.5,
//     'Poland': 77.56,
//     'Portugal': 81.1,
//     'Qatar': 78.2,
//     'Romania': 75,
//     'Russia': 70.5,
//     'Rwanda': 66.1,
//     'Saint Lucia': 75.2,
//     'Saint Vincent': 73.2,
//     'Samoa': 74,
//     'Sao Tome and Principe': 67.5,
//     'Saudi Arabia': 74.5,
//     'Senegal': 66.7,
//     'Serbia': 75.6,
//     'Seychelles': 73.2,
//     'Sierra Leone': 50.1,
//     'Singapore': 83.1,
//     'Slovakia': 76.7,
//     'Slovenia': 80.8,
//     'Solomon Islands': 69.2,
//     'Somalia': 55,
//     'South Africa': 62.9,
//     'Korea': 82.3,
//     'Spain': 82.8,
//   	'Sudan': 64.1,
//     'Suriname': 71.6,
//     'Swaziland': 58.9,
//     'Sweden': 82.4,
//     'Switzerland': 83.4,
//     'Syria': 64.5,
//     'Tajikistan': 69.7,
//     'Tanzania': 61.8,
//     'Thailand': 74.9,
//     'Togo': 59.9,
//     'Tonga': 73.5,
//     'Trinidad and Tobago': 71.2,
//     'Tunisia': 75.3,
//     'Turkey': 75.4,
//     'Turkmenistan': 66.3,
//     'Uganda': 62.3,
//     'Ukraine': 71.3,
//     'United Arab Emirates': 77.1,
//     'United Kingdom': 81.2,
//     'United States': 79.3,
//     'Uruguay': 77,
//     'Uzbekistan': 69.4,
//     'Vanuatu': 72,
//     'Venezuela': 74.1,
//     'Vietnam': 76,
//     'Yemen': 65.7,
//     'Zambia': 61.8,
//     'Zimbabwe': 60.7
//   };
//
//  const countryAvg = liveExpectancy[countryA];
//  const genderedAvg = countryAvg * .05;
//  if (this.gender == 'neutral') {
//    return countryAvg;
//  } else if (this.gender == 'male') {
//    return countryAvg - genderedAvg;
//  } else {
//    return countryAvg + genderedAvg;
//  }
// };



// function LifeLeft(compareArray) {
//   this.compareArray = compareArray;
// }
//
// LifeLeft.prototype.difference = function() {
//   if (this.compareArray[0] < this.compareArray[1]) {
//     const returnVal = this.compareArray[1] - this.compareArray[0];
//     const returnMerc = returnVal / .24;
//     const returnVen = returnVal / .62;
//     const returnMar = returnVal / 1.88;
//     const returnJup = returnVal / 11.68;
//     return "Warning! Our records indicate that, statistically, you are on borrowed time. You should have kicked it " + returnVal + " years ago on Earth. You'd have been a goner " + returnMerc + " years ago on Mercury, and " + returnVen + " years on Venus. You'd have breathed your last breathe " + returnMar + " & " + returnJup + " years ago on Mars and Jupiter, respectively, assuming you had breath to breathe. We hear its smoggy on Jupiter.";
//   } else if (this.compareArray[0] > this.compareArray[1]) {
//     const returnVal = this.compareArray[0] - this.compareArray[1];
//     const returnMerc = returnVal / .24;
//     const returnVen = returnVal / .62;
//     const returnMar = returnVal / 1.88;
//     const returnJup = returnVal / 11.68;
//     return "Our records indicate that, statistically, you are likely to die in " + returnVal + " years. This is a part of the human condition, and indeed a pre-condition of life itself. On Venus, all other things being equal, we expect your demise in " + returnVen + " years. Mars, " + returnMar + " years. On Jupiter, only " + returnJup + " years.  To optimize existence, we'd recommend going to Mercury, where you can live sweet life for another " + returnMerc + " years. Bring sunscreen.";
//   } else {
//      return "Looks like time has caught up to you, congrats on living up to you're statistical life expectancy. Try not to die, if you live longer it brings up the whole life expectancy average for the rest of us. If you do go to Mars, bring a water bottle.";
//   }
// };












// exports.personModule = Person;
// exports.ageCompareModule = AgeCompare;
// exports.demographicsModule = Demographics;
// exports.lifeLeftModule = LifeLeft;
