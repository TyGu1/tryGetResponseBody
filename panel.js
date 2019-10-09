chrome.devtools.network.onRequestFinished.addListener(request => {
  request.getContent((body) => {
    if (request.request && request.request.url) {
      if (request.request.url.includes('https://www.r-bloggers.com')) {
        if(body.includes("lkjdaölkjfdsaölkj")){
          alert("MATCH");
        }
        if(body.includes("MCMC")){
          alert("YES");
        }
        chrome.runtime.sendMessage({
            response: body
        });
      }
    }
  });
});

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    console.log(response.farewell);
  });
});