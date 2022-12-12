const fs = require('fs/promises')

 const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	try{
		await fs.writeFile(fileName, fileContent)
		
	}
	catch(err){
		console.log(err)
	}
	}
 myFileWriter("file.txt", "Hello")
 const myFileReader = async (fileName) => {
	try{
	const data = await fs.readFile(`${fileName}`, "utf-8")
		console.log(data)
	}
	catch(err){
		console.log(err)
	}
	
	// write code here
	// dont chnage function name
 }
 myFileReader("file.txt")



 const myFileUpdater = async (fileName, fileContent) => {
	try{
		await fs.appendFile(fileName, fileContent)
	}catch(err){
		console.log(err)
	}
	// write code here
	
	// dont chnage function name

 }
 myFileUpdater("file.txt", "World")
 const myFileDeleter = async (fileName) => {
	try{
		fs.unlink(fileName)
	}
	catch(err){
		console.log(err)
	}
	
	
	// write code here
	// dont chnage function name
 }

 myFileDeleter("file.txt")
 module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }