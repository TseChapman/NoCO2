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

export async function getUserActivities(uid) {
  if (uid == null) return;
  try {
    const url = "https://noco2.azurewebsites.net/api/get-user-activities";
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
    //console.log("GetUserActivities Response:")
    //console.log(responseData);
    const activities = {
      Transports: responseData.Transports ? responseData.Transports : [],
      Foods: responseData.Foods? responseData.Foods : [],
      Utilities: responseData.Utilities? responseData.Utilities : []
    };
    //console.log(activities);
    return activities;
  } catch (error) {
    console.error(error);
  }
}

export async function submitUserActivities(uid, activities) {
  if (uid == null || activities == null) return;
  try {
    const url = "https://noco2.azurewebsites.net/api/submit-user-activity";
    const data = {
      UserKey: uid,
      Transports: activities?.Transports,
      Foods: activities?.Foods,
      Utilities: activities?.Utilities
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
    //console.log("SubmitUserActivities Response:")
    //console.log(responseData);
  } catch (error) {
    console.error(error);
  }
}