const WEBHOOK_URL = PropertiesService.getScriptProperties().getProperty("WEBHOOK_URL")!


function myFunction() {
  const colorCode = parseInt("ff6fac", 16);
  let today = new Date();
  let date_string = Utilities.formatDate(today, 'JST', 'yyyy-MM-dd');
  let payload =
  {
    "avatar_url":"https://lh3.googleusercontent.com/d/1nOOSH_vTrLR8_kJl1TM_lc_3CZpGZCd4",
    "content": "今日何した？",
    "embeds": [
      {
        // 本文
        "title": "今日何した？", 
        "color": colorCode,
        "fields": [
          {
            "name": ":date:今日の日付",
            "value": date_string,
            "inline": true
          },
        ],
        "footer": {
          "text": "https://github.com/Tom-game-project/what-did-you-do-today-bot",
          "icon_url": "https://lh3.googleusercontent.com/d/1B4NImJgaULqngOJClCN2NIPYK21M9mdS"
        },
      }
    ]
  };
  const replyHeaders = {
    'Content-Type': 'application/json'
  };
  let options:GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
    "method": "post",
    'headers': replyHeaders,
    "payload": JSON.stringify(payload)
  };

  UrlFetchApp.fetch(WEBHOOK_URL, options);
}
