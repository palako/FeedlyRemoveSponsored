function removeSponsoredItems() {
    var allSponsored = document.evaluate("//a[@class='ago' and text()=\"Sponsored\"]/..", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    if (allSponsored != null) {
        if(allSponsored.snapshotLength>0) {
            console.log("Removed " + allSponsored.snapshotLength + " ads");
        }
        for (var i=0; i < allSponsored.snapshotLength; i++) {
            var sponsored = allSponsored.snapshotItem(i);
            sponsored.parentNode.removeChild(sponsored);
        }
    }
}

removeSponsoredItems();
setInterval(removeSponsoredItems, 1000);