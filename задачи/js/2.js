const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}];

    function getWorthyWorkers(workers){
        const filteredWorkers=[];
        
        workers.forEach(currentWorker => {
          if(currentWorker.salary>1000){
              filteredWorkers.push(currentWorker.name);
          }
            
        });

        return filteredWorkers;
    }




console.log(getWorthyWorkers(workers))