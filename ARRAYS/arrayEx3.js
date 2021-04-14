// nested array 
const jrDev = ['HTML','CSS','JS','PYTHON','SQL','NOSQL','REACT']
const midDev = [jrDev,'DOCKER','API','NEXTJS','PANDAS']
const srDev = [jrDev,midDev,'AZURE','AWS','C#','JAVA','GO']
const BocaCode = [jrDev,midDev,srDev]

console.log("All Jr Dev's Need to Know ",BocaCode[0][0],BocaCode[0][1],BocaCode[0][2])
console.log("All Mid Dev's Need to Know ",BocaCode[1][1],BocaCode[1][2],BocaCode[1][3])
console.log("All Sr Dev's Need to Know ",BocaCode[2][2],BocaCode[2][3],BocaCode[2][4])