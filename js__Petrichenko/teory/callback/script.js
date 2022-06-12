function first(){
    setTimeout(function(){
        console.log(1);
    },500);
}

function second(){
    console.log(2);
}

first();
second();


function learnJavascript(lang,callback){
console.log(`i learn: ${lang}`);
callback();
}

function done(){
    console.log('i passed this lesson');
}

learnJavascript('Javascript', done);