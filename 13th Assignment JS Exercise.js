// 1
function hourSecFunc() {
    var sec = document.getElementById('hourSec').value;
    var show = '';
    if (sec < 0) {
        show = "Please Enter a Positive Number";
    } else if(sec == '') {
        show = "Please Enter a Number";
    }else {
        show = "There are " + (sec * 60 * 60) + " Seconds in " + sec + " Hours";
    }
    document.getElementById('hourSecOut').innerHTML = show;
}
// 2
function ageFunc() {
    var age = document.getElementById('age').value;
    var show = '';
    if (age < 0) {
        show = "Please Do Not Enter a Negative Number";
    } else if(age == '') {
        show = "Please Enter a Numbers";
    } else {
        show = "Your are " +( age * 365) + " Days old.";
    }
    document.getElementById('ageOut').innerHTML = show;
}
// 3
function arrFunc() {
    var arr1 = document.getElementById('arr1').value;
    var arr2 = document.getElementById('arr2').value;
    var arr3 = document.getElementById('arr3').value;
    var arr4 = document.getElementById('arr4').value;
    var arr5 = document.getElementById('arr5').value;
    if (arr1 > 0) {
       document.getElementById('arrOut1').innerHTML = -Math.abs(arr1) + ", ";
    } else {
       document.getElementById('arrOut1').innerHTML = Math.abs(arr1) + ", ";
    }
    if (arr2 > 0) {
       document.getElementById('arrOut2').innerHTML = -Math.abs(arr2) + ", ";
    } else {
       document.getElementById('arrOut2').innerHTML = Math.abs(arr2) + ", ";
    }
    if (arr3 > 0) {
       document.getElementById('arrOut3').innerHTML = -Math.abs(arr3) + ", ";
    } else {
       document.getElementById('arrOut3').innerHTML = Math.abs(arr3) + ", ";
    }
    if (arr4 > 0) {
       document.getElementById('arrOut4').innerHTML = -Math.abs(arr4) + ", ";
    } else {
       document.getElementById('arrOut4').innerHTML = Math.abs(arr4) + ", ";
    }
    if (arr5 > 0) {
       document.getElementById('arrOut5').innerHTML = -Math.abs(arr5);
    } else {
       document.getElementById('arrOut5').innerHTML = Math.abs(arr5);
    }
}
// 4
function lengthFunc() {
    var str1 = document.getElementById('string1').value;
    var str2 = document.getElementById('string2').value;

    if (str1.length === str2.length) {
        document.getElementById('lengthOut').innerHTML = "Equal";
    } else {
        document.getElementById('lengthOut').innerHTML = "Not Equal";
    }
    document.getElementById('length1').innerHTML = "String 1 Length is " + str1.length;
    document.getElementById('length2').innerHTML = "String 2 Length is " + str2.length;
}
// 5
function arFunc() {
    var ar1 = document.getElementById('ar1').value;
    var ar2 = document.getElementById('ar2').value;
    var ar3 = document.getElementById('ar3').value;
    var ar4 = document.getElementById('ar4').value;
    var ar5 = document.getElementById('ar5').value;
    document.getElementById('arOut1').innerText = ar1.toString() + " , ";
    document.getElementById('arOut2').innerText = ar2.toString() + " , ";
    document.getElementById('arOut3').innerText = ar3.toString() + " , ";
    document.getElementById('arOut4').innerText = ar4.toString() + " , ";
    document.getElementById('arOut5').innerText = ar5.toString();
    
}
// 6
function leapFunc() {
    var leap = document.getElementById('leap').value;
    var show = '';
    if (leap < 1900 || leap > 2021) {
        show = "Please Enter Year Between 1900 - 2021";
    } else {
        switch (leap) {
            case '1904':
                show="Yes, it is a Leap Year";
                break;
        
            case '1908':
                show="Yes, it is a Leap Year";
                break;
        
            case '1912':
                show="Yes, it is a Leap Year";
                break;
        
            case '1916':
                show="Yes, it is a Leap Year";
                break;
        
            case '1920':
                show="Yes, it is a Leap Year";
                break;
        
            case '1924':
                show="Yes, it is a Leap Year";
                break;
        
            case '1928':
                show="Yes, it is a Leap Year";
                break;
        
            case '1932':
                show="Yes, it is a Leap Year";
                break;
        
            case '1936':
                show="Yes, it is a Leap Year";
                break;
        
            case '1940':
                show="Yes, it is a Leap Year";
                break;
        
            case '1944':
                show="Yes, it is a Leap Year";
                break;
        
            case '1948':
                show="Yes, it is a Leap Year";
                break;
        
            case '1952':
                show="Yes, it is a Leap Year";
                break;
        
            case '1956':
                show="Yes, it is a Leap Year";
                break;
        
            case '1960':
                show="Yes, it is a Leap Year";
                break;
        
            case '1964':
                show="Yes, it is a Leap Year";
                break;
        
            case '1968':
                show="Yes, it is a Leap Year";
                break;
        
            case '1972':
                show="Yes, it is a Leap Year";
                break;
        
            case '1976':
                show="Yes, it is a Leap Year";
                break;
        
            case '1980':
                show="Yes, it is a Leap Year";
                break;
        
            case '1984':
                show="Yes, it is a Leap Year";
                break;
        
            case '1988':
                show="Yes, it is a Leap Year";
                break;
        
            case '1992':
                show="Yes, it is a Leap Year";
                break;
        
            case '1996':
                show="Yes, it is a Leap Year";
                break;
        
            case '2000':
                show="Yes, it is a Leap Year";
                break;
        
            case '2004':
                show="Yes, it is a Leap Year";
                break;
        
            case '2008':
                show="Yes, it is a Leap Year";
                break;
        
            case '2012':
                show="Yes, it is a Leap Year";
                break;
        
            case '2016':
                show="Yes, it is a Leap Year";
                break;
        
            case '2020':
                show="Yes, it is a Leap Year";
                break;
        
            default:
                show="No, it is not a Leap Year";
                break;
        }
    }
    document.getElementById('leapOut').innerHTML = show;
}
// 7
function coronaFunc() {
    var recoverCase = document.getElementById("coronaRecover").value;
    var newCase = document.getElementById("coronaNew").value;
    var totalCase = document.getElementById("coronaTotal").value;
    var show = "";

    if ((newCase >= recoverCase) || (newCase >= totalCase)) {
        show = "Corona New Cases Should be Less than Recovery and Total Cases";
    } else if (totalCase <= recoverCase) {
        show = "Corona Recovery Cases should be less than Total Cases";
    } else {
        var days = totalCase / (recoverCase - newCase);
        show = "Corona Cases will became zero in " + Math.round(days) + " Days";
    }
    document.getElementById("coronaOut").innerHTML = show;

}