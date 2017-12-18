/**
 * Created by sagares on 24/07/17.
 */
$(document).ready(function() {
    $('#skipYT').on("click", function(){
        chrome.tabs.executeScript({code : "runIt();"});
    });
});
