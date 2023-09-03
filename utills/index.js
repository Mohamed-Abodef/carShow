// const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla&limit=5';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '4f1b709abbmsh74c7db979dc0c24p15105fjsne933553c59ad',
// 		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

export async function fetchCar(make,model,limit){

    const header ={
            'X-RapidAPI-Key': '4f1b709abbmsh74c7db979dc0c24p15105fjsne933553c59ad',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    
const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&limit=${limit}`,{
    headers:header
});
const result = await response.json()
    return result;
}
export const calculateCarRent = (city_mpg, year) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };
  