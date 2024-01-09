const ageCalculator = () => {
   const inp = new Date(document.getElementById('date-inp').value);

   const ageInMS = Date.now() - inp.getTime();  // getTime() returns the number of milliseconds since January 1, 1970 00:00:00.

   const ageDate = new Date(ageInMS);
   const age = ageDate.getUTCFullYear() - 1970;
   const months = ageDate.getUTCMonth();
   const day = ageDate.getUTCDate();  

   document.getElementById("years").innerHTML = age;
   document.getElementById("months").innerHTML = months;
   document.getElementById("days").innerHTML = day;

};

document.querySelector('.btn').addEventListener("click", ageCalculator);