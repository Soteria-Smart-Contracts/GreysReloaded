SwitchPage("mint");
let CollectionNum = 501;
let updown;

document.getElementById("txviewer").style.display = "none";

function setUpdown(direction){
    document.getElementById("CollectionContainer").innerHTML = "";
    if (direction == "up"){
        CollectionNum = 1;
        updown = "up";
    }
    if (direction == "down"){
        CollectionNum = 10000;
        updown = "down";
    }
    ShowCollection();
}

function ShowCollection(){
    let index = CollectionNum;

    if (updown == "down"){
        while(index > (CollectionNum - 100)){
            if (index < 1 || index > 501){
                break;
            }
            let indexid = index;
            newcard = document.createElement("div");
            newcard.className = "NFTcard";
            newcard.id = indexid;
            let img = '<img class="nftimage" src="src/images/collection/' + indexid + '.PNG"></img>"';
            let BlockscoutLink = 'https://blockscout.com/etc/mainnet/token/0x18265d64393Ca917995Abf34bf73d39952f2D85b/instance/' + indexid +  '/token-transfers';
            newcard.innerHTML = img + '<a class="nftID head">GreysReloaded ID:</a>' + '<br>' + '<a class="nftID">' + indexid + '</a>' + '<br>' + '<a class="nftID scout" href="' + BlockscoutLink + '" target="_blank">View On Blockscout</a>';
            document.getElementById("CollectionContainer").appendChild(newcard);
            index--;
        }
    } 

    if (updown == "up"){
        while(index < (CollectionNum + 100)){
            if (index < 1 || index > 501){
                break;
            }
            let indexid = index;
            newcard = document.createElement("div");
            newcard.className = "NFTcard";
            newcard.id = indexid;
            let img = '<img class="nftimage" src="src/images/collection/' + indexid + '.PNG"></img>"';
            let BlockscoutLink = 'https://blockscout.com/etc/mainnet/token/0x18265d64393Ca917995Abf34bf73d39952f2D85b/instance/' + indexid +  '/token-transfers';
            newcard.innerHTML = img + '<a class="nftID head">GreysReloaded ID:</a>' + '<br>' + '<a class="nftID">' + indexid + '</a>' + '<br>' + '<a class="nftID scout" href="' + BlockscoutLink + '" target="_blank">View On Blockscout</a>';
            document.getElementById("CollectionContainer").appendChild(newcard);
            index++;
        }
    }

    CollectionNum = index;
}


function SwitchPage(page) {
    document.getElementById("txviewer").style.display = "none";
    if(page == "mint"){
        document.getElementById("wallet").style.display = "none";
        document.getElementById("collection").style.display = "none";
        document.getElementById("minting").style.display = "block";
    }
    if(page == "wallet"){
        document.getElementById("minting").style.display = "none";
        document.getElementById("collection").style.display = "none";
        document.getElementById("wallet").style.display = "block";
    }
    if(page == "collection"){
        document.getElementById("minting").style.display = "none";
        document.getElementById("wallet").style.display = "none";
        document.getElementById("collection").style.display = "block";
    }

}

function GetRank(id){
    let index = 0;
    while(index < 10000){
        if (rankingorder[index] == id){
            return index + 1;
        }
        index++;
    }
}


function LoadNFTs() {
    let index = 0;
    while(index < ids.length){
        newcard = document.createElement("div");
        id = ids[index];
        rank = GetRank(id);
        newcard.className = "NFTcard";
        newcard.id = index;
        let img = '<img class="nftimage" src="src/images/collection/' + id + '.PNG"></img>"';
        let BlockscoutLink = 'https://blockscout.com/etc/mainnet/token/0x18265d64393Ca917995Abf34bf73d39952f2D85b/instance/' + ids[index] +  '/token-transfers';
        newcard.innerHTML = img + '<a class="nftID head">GreysReloaded ID:</a>' + '<br>' + '<a class="nftID">' + id + '</a>' + '<br>' + '<a class="nftID scout" href="' + BlockscoutLink + '" target="_blank">View On Blockscout</a>';
        document.getElementById("WalletContainer").appendChild(newcard);
        index++;
    }

}

