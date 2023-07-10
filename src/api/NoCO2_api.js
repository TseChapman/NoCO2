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

export async function getEmissionHistory(uid) {
  if (uid == null) return;
  try {
    const url = "https://noco2.azurewebsites.net/api/get-emission-history";
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

    const textData = await response.text();
    const responseData = JSON.parse(textData);
    //console.log("GetEmissionHistory Response:")
    //console.log(responseData);
    return responseData.History;
  } catch (error) {
    console.error(error);
  }
}

export async function getEmissionStatistics(uid) {
  if (uid == null) return;
  try {
    const url = "https://noco2.azurewebsites.net/api/get-emission-statistics";
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

    const textData = await response.text();
    const responseData = JSON.parse(textData);
    //console.log("GetEmissionStatistics Response:")
    //console.log(responseData);
    return responseData.Statistics;
  } catch (error) {
    console.error(error);
  }
}