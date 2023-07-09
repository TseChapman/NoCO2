export async function createUser(uid) {
  if (uid == null) return;
  try {
    const url = "https://noco2.azurewebsites.net/api/create-user";
    const data = {
      UserKey: uid
    };
    const requestOptions = {
      //mode: 'no-cors',
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error('Request failed');
    }
    //const textData = await response.text();
    //const responseData = JSON.parse(textData);
    //console.log("CreateUser Response:")
    //console.log(responseData.reply);
  } catch (error) {
    console.error(error);
  }
}