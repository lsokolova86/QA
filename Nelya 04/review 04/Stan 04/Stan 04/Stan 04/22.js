let isNothingHappened; // can be true || false

let willPassExam =  new Promise(function(resolved, reject){
    if (isNothingHappened){
        let message = "I got a diploma";
        resolved(message);
    }
    else {
        let reason = new Error("Oops, something happened");// usually write trhough error
        reject(reason);
    }
}) 

let checkEvents = function(){
    willPassExam
    .then(function(noEvents){
        console.log(noEvents);
    })
    .catch(function(error){
        console.log(error.message);
    });
};
checkEvents()