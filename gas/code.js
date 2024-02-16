const WEBHOOK_URL = PropertiesService.getScriptProperties().getProperty("WEBHOOK_URL")


function myFunction() {
   let payload =
  {
    "avatar_url":"https://lh3.googleusercontent.com/d/1nOOSH_vTrLR8_kJl1TM_lc_3CZpGZCd4",
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