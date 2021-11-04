


function getOddOccurrence(arr, arr_size)
{
    for (let i = 0; i < arr_size; i++) {
         
        let count = 0;
         
        for (let j = 0; j < arr_size; j++)
        {
            if (arr[i] == arr[j])
                count++;
        }
        if (count % 2 != 0){
            // console.log('---OUTPUT---');
            console.log( arr[i]);
        }
    }
    // return -1;
}
 // driver code
let arr = [ 2, 3, 5, 4, 5, 2, 4, 3, 5, 2, 4, 4, 2 ];
let n = arr.length;


 
        // Function calling
        getOddOccurrence(arr, n)