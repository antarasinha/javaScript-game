
function interviewQuestion(job){
    var ask='take your time and be comfortable';
    if(job==='teacher')
        {
            return function (name){
                console.log('which subject you teach'+' '+name+' '+ask);
            }
        }
        else if(job==='engineer')
            {
                 return function (name){
                console.log('which branch do you belong to?'+' '+name+' '+ask);
            }}
            else{
                 return function (name){
                console.log('What do you do?'+' '+name+' '+ask);
            }
            }
        }

var teachers=interviewQuestion('teacher');
var engineer=interviewQuestion('engineer');
var bank=interviewQuestion('bank');
teachers('asmita');
teachers('shobha');
engineer('antra');
engineer('megha');
bank('prabodh kr. sinha');