import { Person, AgeCompare, Demographics, LifeLeft } from './../js/calc.js';


$(document).ready(function(){
  const compareArray = [];
  $('form#enter-age').submit(function(event){
    event.preventDefault();
    const ageInYears = parseInt($("input#age-entry").val());
    if (isNaN(ageInYears)) {
      alert("please enter a numeric value");
    } else {
      const yourAge = new Person(ageInYears);
      const country = $('#country').val();
      const gender = $('#gender').val();
      const yourDemograph = new Demographics(country, gender);
      const yourExpect = yourDemograph.lifeExpectancy();
      compareArray.push(yourExpect);
      const countdown = new LifeLeft(compareArray);
      $('#intro').hide(100);
      $('#hidden-div-1').show(100);
      $('#age-in-seconds').empty().append(yourAge.ageInSeconds());
    }
  });
  $('form#exact-age').submit(function(event){
    event.preventDefault();
    const birthMonth = $('#month-born').val();
    const birthDay = $('#day-born').val();
    const yearBorn = parseInt($('#year-born').val());
    const now = moment();
    const nowString = now.toString();
    const birthString = moment('' + birthMonth + '-' + birthDay + '-' + yearBorn + '').toString();
    const userCompare = new AgeCompare(nowString, birthString);
    compareArray.push(userCompare.yearsExactly());
    if (isNaN(yearBorn)) {
      alert("please enter a numeric value");
    } else if (yearBorn > 2017 || yearBorn < 500){
      alert("please don't lie about your birth year");
    } else {
      const userLifeExp = new LifeLeft(compareArray);
      $('.section-two').hide(100);
      $('#exact-second-count').empty().append(userCompare.secondsExactly());
      $('#exact-day-count').empty().append(userCompare.daysExactly());
      $('#exact-week-count').empty().append(userCompare.weeksExactly());
      $('#merc-stats').empty().append(userCompare.mercuryYears());
      $('#venus-stats').empty().append(userCompare.venusYears());
      $('#mars-stats').empty().append(userCompare.marsYears());
      $('#jupiter-stats').empty().append(userCompare.jupiterYears());
      $('#life-expect').empty().append(userLifeExp.difference());
      $('#hidden-div-exact').show(100);
      $('.first-response').hide();
    };
  });
});
