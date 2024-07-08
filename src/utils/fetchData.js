export const exerciseOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};



export const youtubeoptions = {
	method: 'GET',
	headers: {
	  'x-rapidapi-key': 'e45bdb690fmsh48d6a5b21416233p1165e0jsn1b44af66a0ff',
	  'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
	}
  };
  
  

export const fetchData = async (url, options) => {
    const response = await fetch(url,options);
    const data = await response.json();

    return data;
}