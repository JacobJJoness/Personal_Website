//Data from: https://data.giss.nasa.gov/gistemp
//Mean from: https://earthobservatory.nasa.gov/


//Using chart.js to create a chart



chart();
//getData function graps from a stored .csv into response
//the data variable then formats the response from stream data
// text data.
// rows is an array taken from data which is split by line breaks, but cuts off the first row
// as it is just data headers from the csv
// year and temp(temperature not temporary) are intialized but not used until later

// we then take our rows element, and iterate through it using foreach
// in the call back function we set a column variable and split each row
// using commas as a delimiter.
// and then we take the first two items of the array and
// push item one to year, and item two to temp(this is as they are stored in the csv file)

async function getData(){
    const response = await fetch('./miscFiles/zonAnn.csv');
    const data = await response.text();

    const rows = data.split("\n").slice(1);
    const year = [];
    const temp = [];

    rows.forEach(ele =>{
        const column = ele.split(',');
        year.push(column[0]);
        temp.push(parseFloat(column[1])+14);
    });

    return ({year, temp});
    
}


//chart()
//we await getData, and set it to a data object
// we then grab our item(canvas) to insert the chart
// now is when we start using the chart.js notation for our chart.
// essentially we use the data object to distribute correct data
// all over the chart.
async function chart(){
    let data = await getData();
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.year ,
            datasets: [
            {
                label: 'Temperature',
                data: data.temp,
                
                backgroundColor:['rgba(25,99,132,0.2)'],
                borderColor:['rgba(35, 189, 163,.9)'],
                
                borderWidth: 1
            }]
        },
        
    } );
}
