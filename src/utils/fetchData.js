export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'db6be94a2bmsh64119778b24126cp13fecbjsnf9bbda614e4c',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
export const YoutubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'db6be94a2bmsh64119778b24126cp13fecbjsnf9bbda614e4c',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };


export const fetchData = async (url,options) => {
    const response =await fetch(url ,options);
    const data = await response.json();
    return data;
}