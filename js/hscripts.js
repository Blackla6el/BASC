function doAllStuffs() {

var holders;
fetch("../data/HkzqBHcEsppZ4QstJQT1VzRFmLARuVsCc4PZ6wau4ec3_holders.json")
    .then(Response => Response.json())
    .then(data => holders = data)

function filteroutMints(obj) {
    if (obj.mint_account !== "2RoBwLbLJ23Fw2HfYUHj4wKngHG3mu5H3yatyZbdUYpB" &&
        obj.mint_account !== "BWs7xGDmuE9qXKziMfxJNfV2BNQ89KRZy3mbdR1j7HNW" &&
        obj.mint_account !== "2sTYoLKEW292gP6WUHfxWBac2LeyHnnCnwA3WiNS8jp8" &&
        obj.mint_account !== "39uXNEg6SC3Yngvaj6aQGxmvWEP3qH8EqTWTSTUayBrk" &&
        obj.mint_account !== "3CL8TioQMjdiEuqo2kQ8mJWfh6kZV7KeZoxsgZ3rLQ3W" &&
        obj.mint_account !== "3iGZvZffYGqUwbnv3QoVNqGPRKMpE6uZYkUvcKewYfEn" &&
        obj.mint_account !== "3jExbXGp7pxQW7Yx549dvQBf59p6pQZycUNUKhQDH3Bv" &&
        obj.mint_account !== "3KBRp7M4u396qAeYhoxxjkGwmiTejxbn4hkJM561JdSu" &&
        obj.mint_account !== "3Ln2snTx22Ubayx68pjRa9f5dELm9v8YCsSZUx2hey9Y" &&
        obj.mint_account !== "3uLxTSqFtoPyH5gySRdFpfvX29H1qYvEng2CZjomiADe" &&
        obj.mint_account !== "4FyE2s6RupveKdJq15HeucF7nc67Xgq4vJ5PmCuVwDoi" &&
        obj.mint_account !== "4mV4B2Xwxubt5p96eDDceCNc1MRdLaKgp54BQiUmZKTT" &&
        obj.mint_account !== "4ynkiKT6irR7p6ER18bJvexA7cFRB6Bzvhrp7mT8vYEw" &&
        obj.mint_account !== "532bEL9jRg3ckH6xfFSYcVihNTpXRZA8c18EoKssuvZu" &&
        obj.mint_account !== "5rY2TNEqas4iPH7deqN74DBtqXqRu2kSSw1H5XMH7ES8" &&
        obj.mint_account !== "5Z2vGouYMeEQ1yzXpb12JPNdrfacmBT3i5qZj6vB6MMW" &&
        obj.mint_account !== "6eatcTF56vLCeJKTTLCreDAmy4wxj7hkej7oENCoJujD" &&
        obj.mint_account !== "6fW6tyaEtNLSuGNiRsMZaEnQvcGLWiCG63TDmy3bpDR6" &&
        obj.mint_account !== "6xzz956NcMxxww8GQAAyLYEBKiERHWbVjnC7wAT5wgSX" &&
        obj.mint_account !== "6YHUN5xft2mSZhjsnnkwxXpVsYcDpJyb6VRWjmqTs9RZ" &&
        obj.mint_account !== "7FM1G4s2B9sBG8JgNoKZrvjewhY8dujiygrTJAF8KD3A" &&
        obj.mint_account !== "7hdZpzQnJpJr6fMirkiTat6LyNg1tfH33Gm8PyY35B24" &&
        obj.mint_account !== "7jSn7Bsk8ZFHci6eEwfKUk7qFXn5GNuVvJZEJzSuUAw" &&
        obj.mint_account !== "7QDsD43AcLRs9pw7cQrwkY5FoM4RPsWXEBZPysYCyRaZ" &&
        obj.mint_account !== "88xsvRZZZTzY7cr2eCeK3cWqaTF9hsGBZLWygfGFU4sQ" &&
        obj.mint_account !== "8Bw15PdRCSeut6aPDdYavrDEzGUP6eRT1if8owt33v65" &&
        obj.mint_account !== "8ngGFrrTZ5nD8fvA4swTQLBdtSayyMvAhqmd3ZikzENa" &&
        obj.mint_account !== "8odX5fjW6CnYBihhkLZsRNyjQatKZTzhupK7BXiVtykW" &&
        obj.mint_account !== "8rQdRfQXp3Vk5Xf51vfXdfYKjrU69fxUtKxzFZ48suBg" &&
        obj.mint_account !== "9E8XAKk1L98avVULstNPTBmVJ3z9pKdL1123JTyvZWP7" &&
        obj.mint_account !== "9H4SkaJLDYhTYebV361MZuKieJM9H9gqbGugL9qpcAUZ" &&
        obj.mint_account !== "9Y9NV2Um6ZqaPdw4yHVvmnTyhRGcjfoMLMM9EaipEEnU" &&
        obj.mint_account !== "AhmZnf8Z9BcNcn1kACMUv2GcUYLEUCimWy1Z31aZuC3D" &&
        obj.mint_account !== "AVziapHR4hQF4DVd1Btgvx1EoqGZMY4TuUXi63CT57An" &&
        obj.mint_account !== "B3gSxhowoB1CmMdAPEUv1eVX2QrGG4Qoj2Tq2yYYF3uJ" &&
        obj.mint_account !== "BS6TBLxgxvgeJ4nNw9xgaXsWHcV36zY23b9Be7JDeNTM" &&
        obj.mint_account !== "CEZX7bjE163jUo4C5jwtqiN2Z252d4fyjyn5a9AMUHMQ" &&
        obj.mint_account !== "CijRZMKf5q3DbayzxC2dKJ9f8Y6A23M3eErUfxWyw9gG" &&
        obj.mint_account !== "CUjbEMJ8pMsGPXnKyHY3Bw52wWCphKSQVJJs2sik6igJ" &&
        obj.mint_account !== "Cx4a9B4BZv5otbwKL9HJ9jYx3X96qPQ3xSLTJyQmsTXV" &&
        obj.mint_account !== "DNARmP1jnVda61vkHWAMYcRwtTKZkahGscJz1UQKKPzv" &&
        obj.mint_account !== "DniwwntcJ77xHsnFsiTq17h4RYKXM7zfUARqvLWhH1y4" &&
        obj.mint_account !== "FcWkPBhpQk1mDkjMuQ3phu9LQSDGJThMgrSXFAP5afBq" &&
        obj.mint_account !== "FRwPpoGKjpsh8CqkfzCwDa3vycKeFCaN7A9CM2YM26yk" &&
        obj.mint_account !== "GrNTVVTgDwcYy5VPVb9HE8bLzN44HoPPvrmVvhZxuqQA" &&
        obj.mint_account !== "GuYhAfLixYKSeSZ3hpf3hMkGbnBzGWHEnXzmxMkMfyjd" &&
        obj.mint_account !== "GzdGyWsEJMvsnVcjZgNdH7Hp4GGs4HAXxMeiZCGvu9sj" &&
        obj.mint_account !== "H5o9mCRTKeJR2QShvgTir6nN4YaHvVYKNRyZCY11c5GJ" &&
        obj.mint_account !== "HG64fEQGiHsWDsnzpnCFCRUpfQnd7a9etfSUL1pAc4B2" &&
        obj.mint_account !== "HSQCF4nS63CM4mBUfyQC61QqT5NqM4JG1SJYxUCyxQyD" &&
        obj.mint_account !== "J23QYEGz3EqQYwwasm9AD9w7nwhCB4dj5feExdE36DUZ" &&
        obj.mint_account !== "rEP7au6ubvJrt37SoAdbwvEVtSaucDx2T9KN17BcWLA" &&
        obj.mint_account !== "RrD2JZiW8Zc4X5QR2KWLSmjgF6WAaNbpMB51ZT8QzhC" &&
        obj.mint_account !== "USipFDnvHv3taH98F7gVVvxmF1PAadNDfX8BKLR2hSr") {
        return true;
    }
    return false;
}
  
function filteroutMEWallet(obj) {
    if (obj.owner_wallet !== "GUfCR9mK6azb9vcpsxgXyj7XRPAKJd4KMHTTVvtncGgp") {
        return true;
    }
    return false;
}

function getNestedValue(obj, key) {
    return key.split(".").reduce(function(result, key) {
        return result[key]
    }, obj);
}

function groupByKey(array, key) {
    return array
        .reduce((hash, obj) => {
            if (obj[key] === undefined) return hash;
            return Object.assign(hash, {
                [obj[key]]: (hash[obj[key]] || []).concat(obj)
            })
        }, {})
}

function doStuffs() {
var filteredHolders = holders.filter(filteroutMints)
filteredHolders = filteredHolders.filter(filteroutMEWallet)

var pole = groupByKey(filteredHolders, 'owner_wallet')

var outside = [];
var polecounter = Object.keys(pole).length;
for (var propName in pole) {
    var inside = {};
    inside.wallet = propName;

    var ze = [];
    var lo = pole[propName].length
    var le = 0
    while (le <= lo - 1) {
        var zze = {};
        zze.mint = getNestedValue(pole[propName], [le] + ".mint_account");
        ze.push(zze);
        le = le + 1
    }
    inside.mints = ze;
    outside.push(inside);

}

var sortoutside = outside.sort(function(a, b) {
    return b.mints.length - a.mints.length
});
}
function generateHolderWallets() {
	var totalholdercount = sortoutside.length
	var holdercount = 0
	while (holdercount <= totalholdercount - 1) {
	    var table = document.getElementById("myTable");
	    var tr = document.createElement("tr");
	    var td = document.createElement('td');
	    var td2 = document.createElement('td');
	    td.appendChild(document.createTextNode(getNestedValue(sortoutside,holdercount + ".wallet")));
	    td2.appendChild(document.createTextNode(getNestedValue(sortoutside,holdercount + ".mints").length));
	    tr.appendChild(td);
	    tr.appendChild(td2);
	    table.appendChild(tr);
	    holdercount = holdercount + 1;
	}
}
doStuffs();
generateHolderWallets();
}
