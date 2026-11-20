{ 
    function getData(data){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve({
                    name: 'Ali Khan',
                    data
                })
            }, 2000);
        });
    };

    async function fetchData() {
        let res1 = await getData(1);
        console.log(res1);
        let res2 = await getData(2);
        console.log(res2);
        let res3 = await getData(3);
        console.log(res3);
        let res4 = await getData(4);
        console.log(res4);
        let res5 = await getData(5);
        console.log(res5);
    }

    fetchData();
}
{
    (async function getData() {
        try{
            const response = await fetch('https://6897ec0fddf05523e55dc456.mockapi.io/p1/baby');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    })()

}