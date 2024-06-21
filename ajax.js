const url = 'https://blockchain.info/ticker';

// function recuperePrix(){
    
// let request = new XMLHttpRequest();

// request.open('GET', url);
// request.responseType = 'json';
// request.send();

// request.onload = function () {
//     if (request.readyState === XMLHttpRequest.DONE) {
//         if (request.status === 200) {
//             let response = request.response;
//             document.querySelector('#price_label').textContent=response.EUR.last
//            console.log(response.EUR.last);
//         }else{
//             alert('Un probleme est survenu, merci de revenir apres')
//         }
//     }
// }
// }

// setInterval(recuperePrix,5000)

//API GET bitcoin with fetch

async function recuperePrix(){
//     try {
//         const req = await fetch(url, {method: 'GET' })
        
//         if(!req.ok){
//             alert('Une erreur est survenue, ressayez plutard')
//         }else{
//             let data = await req.json();
//             // console.log(data);
//             document.querySelector('#price_label').textContent=data.EUR.last
// //            console.log(response.EUR.last);
//         }
//     } catch (error) {
//         console.log(error.message);
//     }


    axios.get(url)
        .then(function(res){
            let data = res.data
            document.querySelector('#price_label').textContent=data.EUR.last
        })
        .catch(function(error){
            console.log(error.stack);
        })

}

setInterval(recuperePrix,1000)




