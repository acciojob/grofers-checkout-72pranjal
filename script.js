const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let allPrices = document.querySelectorAll('.price')
    let sum = 0;
    allPrices.forEach(item=> {
        sum+= +item.innerText
    })
    console.log(sum)
    let newRow = document.createElement('tr')
    let tBody = document.querySelector('tbody')
    tBody.append(newRow)
    let newCell = document.createElement('td')
    newCell.innerText = `Total Price ${sum}`
	newCell.id = 'ans'
    newRow.append(newCell)
  
};

getSumBtn.addEventListener("click", getSum);

