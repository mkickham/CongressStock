// Alpha Advantage API Key: X9E9ATLQ0OND2ML6
const apiKey1 = 'X9E9ATLQ0OND2ML6';
const apiUrl1 = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo'

// The House of Representatives
const apiKey2 = 'KEY HERE'
const apiUrl2 = 'https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json'

// The Senate
const apiKey3 = 'KEY HERE'
const apiUrl3 = 'https://senate-stock-watcher-data.s3-us-west-2.amazonaws.com/aggregate/all_transactions.json'

const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const submitForm = document.getElementById('submit-form')

submitForm.addEventListener('submit', async function(event){
    event.preventDefault();
    const searchStock = document.getElementById('search').value
    const searchPpl = document.getElementById('searchPpl').value
    const apiURL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${searchStock}&apikey=${apiKey1}`
    try {
        const response = await fetch(apiURL)
        const data = await response.json()
        console.log(data)
        const houseResponse = await fetch(apiUrl2)
        const houseData = await houseResponse.json()
        console.log(houseData);
        const filterHouse = houseData.filter(function(item){
            return (item.representative.toLowerCase() === searchPpl.toLowerCase().trim())
        })
        console.log(filterHouse);
        //const congressResponse = await fetch(apiUrl3)
        //const congressData = await congressResponse.json()
    } catch (error) {
        console.log('error', error);
    }

})

// fetch(apiUrl1, {
//     method: 'GET',
//     header: {
//         'Authorization': `Bearer ${apiKey1}`
//     }
// })
    
// .then (Response => Response.json())
// .then (data => {
//      console.log(data);
// })
// .catch (console => {
//     console.error('Error', error);
// });

// fetch(apiUrl2, {
//     method: 'GET',
// })
    
// .then (Response => Response.json())
// .then (data => {
//      console.log(data);
// })
// .catch (console => {
//     console.error('Error', error);
// });

// fetch(apiUrl3, {
//     method: 'GET',
// })
    
// .then (Response => Response.json())
// .then (data => {
//      console.log(data);
// })
// .catch (console => {
//     console.error('Error', error);
// });

// function searchCong(){
//     console.log(data)
//     var congress = document.getElementById('');
// }