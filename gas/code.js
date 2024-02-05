const WEBHOOK_URL = PropertiesService.getScriptProperties("WEBHOOK_URL")


function myFunction() {
   let payload =
  {
    "content": "今日何した？"
  };
  const replyHeaders = {
    'Content-Type': 'application/json'
  };
  let options =
  {
    "method": "post",
    'headers': replyHeaders,
    "payload": JSON.stringify(payload)
  };

  UrlFetchApp.fetch(WEBHOOK_URL, options);
}