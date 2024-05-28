// error handling

// 1. using try catch block

try{
    // code that may throw an error
    let result = riskyOperation();
    console.log('Operation result:', result); // log the result if no error occurs
}catch(error){
    // handle the error
    console.error('An error occured:', error.message);
}finally{
    // code that will run regardless of an error
    console.log('Operation completed.')
}
function riskyOperation(){
    if(Math.random() > 0.5){
        throw new Error('Something went wrong');
    }
    return 'Success!';
}

// 2. Using Promise

// 3. Using async await
// use try catch block in async block, put await function in try block to catch the error
async function asyncOperation(){
    try{
        let result = await riskyAsyncOperation();
        console.log('async operation result:', result);
    }catch(error){
        console.log('An error occurred in async operation:', error.message);
    }
}
async function riskyAsyncOperation(){
    return new Promise((resolve, reject) => {
        if(Math.random() > 0.5){
            resolve('Success!');
        }else{
            reject(new Error('Something went wrong!'));
        }
    })
}
asyncOperation();