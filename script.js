// Lilah Fraser, codingBat problems 21-30, due: May 8 2020

// countEvens
function countEvens(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            count++;
        }
    }
        return count;

}
// countHi

function countHi(string) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string.substring(i, i + 1) == 'h') {
            if (string.substring(i + 1, i + 2) == 'i') {
                count += 1;
            }
        }
    }
    return count;
}

// no14
function no14(arr) {
    var one = 0;
    var four = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            one += 1;
        }
        if (arr[i] == 4) {
            four += 1;
        }
    }
        if(one==0 || four ==0){
            return true;
        }
        return false;
}

//either24
function either24(arr) {
    var two = 0;
    var four = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 2 && arr[i + 1] == 2) {
            two +=1;
        }
        if (arr[i] == 4 && arr[i + 1] == 4) {
            four +=1;
        }
    }
    if (two != 0 && four != 0) {
        return false;
    }
    if(two == 0 && four == 0) {
        return false;
    }
        return true;
}

//makeChocolate

function makeChocolate(small,  big,  goal) {
    if (big * 5 + small < goal | small < goal % 5) {
        return -1;
    }
    if (big * 5 <= goal) {
        return goal - big * 5;
    }
        return goal % 5;

}

//luckySum
function luckySum (a,b,c){
    if(a == 13){
        return 0;
    }
    if(b == 13){
        return a;
    }
    if(c == 13){
        return a+b;
    }
    return a+b+c;


}

//*********maxBlock this one i really dont know where to start
function maxBlock(string){

}

//linearIn
function linearIn(outer, inner){
        var number = 0;
        for(var i=0; i<outer.length; i++){
            if(outer[i] == inner[number]){
                number += 1;
            }
            if(number> inner.length-1){
                return true;
            }
        }
        return false;

}

//countTriple
function countTriple(string) {
    var count = 0;
    for(var i=0; i<string.length; i++){
        if(string.substring(i,i+1)==string.substring(i+1,i+2) && string.substring(i,i+1)==string.substring(i+2,i+3)){
            count += 1;
        }
    }
    return count;
}


//******sameEnds
function sameEnds(string) {
    if(string.length < 2){
        return "";
    }
    var q = 0;
    if(string.length %2 == 0){
        q = string.length/2;
    }else{
        q = (string.length-1)/2;
    }
    console.log(q);
    for(var i=q; i>0; i--){
        console.log("comparing " + string.substring(0,i) + " and " + string.substring(string.length-(i+1)));
        if(string.substring(0,i)==string.substring(string.length-(i))){
            console.log(string.substring(0,i));
            return string.substring(0,i);
        }else{
        }
    }
    return "";
}

function tester() {
    document.getElementById("result").innerHTML += countEvens([6,9,4,2,1]);
    document.getElementById("result").innerHTML += countHi("lilah fraserhi hi");
    document.getElementById("result").innerHTML += no14([6,9,4,2,1]);
    document.getElementById("result").innerHTML += either24([6,9,4,2,1]);
    document.getElementById("result").innerHTML += makeChocolate(5, 8, 10);
    document.getElementById("result").innerHTML += luckySum(5,8,1);
    document.getElementById("result").innerHTML += linearIn([1,3,4,5][7,8]);
    document.getElementById("result").innerHTML += countTriple("hiiigoopfffnfier");
    document.getElementById("result").innerHTML += sameEnds("lljdfbdjfhbvdfll");

}
