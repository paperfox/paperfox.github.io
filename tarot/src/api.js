import axios from 'axios';

const returnInstaFeed = async () => {
  let domainUrl ="https://graph.instagram.com/me/media?";
  let fields ="fields=media_url,permalink";
  var access_token = "IGQWRPUjZAFZA204V1MzV0VId0R4VjhIc2NvY2k0aUt4bDExYWU5dkRsQWVITFgzNHZALR1paYVZAROXppQjNRQ3luXzhGbHBIaGszeTlqcUlFZA0ZATd2l2LWU0TEVnenI1MW0zLTdaTjNiYlRiUkJ1SmhTWl9KOExBejAZD";
  var fullUrl = domainUrl + fields + '&access_token=' + access_token;

  const response = await axios.get(fullUrl);
  const imageData = response.data.data;
  console.log(imageData);

  return imageData;
};

export default returnInstaFeed;