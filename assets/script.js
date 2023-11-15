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

fetch(apiUrl1, {
    method: 'GET',
    header: {
        'Authorization': `Bearer ${apiKey1}`
    }
})
    
.then (Response => Response.json())
.then (data => {
     console.log(data);
})
.catch (console => {
    console.error('Error', error);
});

fetch(apiUrl2, {
    method: 'GET',
})
    
.then (Response => Response.json())
.then (data => {
     console.log(data);
})
.catch (console => {
    console.error('Error', error);
});

fetch(apiUrl3, {
    method: 'GET',
})
    
.then (Response => Response.json())
.then (data => {
     console.log(data);
})
.catch (console => {
    console.error('Error', error);
});

function searchCong(){
    console.log(data)
    var congress = document.getElementById('');
}