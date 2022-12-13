import fetch from 'node-fetch'

async function getRequest() {
  try {
    const response = await fetch('https://api.printful.com/store/products', {
      headers: {
        Authorization: 'Bearer JumRRORilzbrN4en0sEjJ5BJZvnARiz3Y5Si7lbi'
      }
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = (await response.json())

    console.log('result is: ', JSON.stringify(result, null, 4));

  } catch (error) {
    if (error instanceof Error) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
};

getRequest()

export default getRequest