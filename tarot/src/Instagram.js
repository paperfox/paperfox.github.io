import React, { useState, useEffect } from 'react';
import InstaImage from './InstaImage';

function InstagramPage() {
  const [instaPost, setInstaPost] = useState([]);

  let domainUrl ="https://graph.instagram.com/me/media?";
  let fields ="fields=media_url,permalink";
  var access_token = "IGQWRPUjZAFZA204V1MzV0VId0R4VjhIc2NvY2k0aUt4bDExYWU5dkRsQWVITFgzNHZALR1paYVZAROXppQjNRQ3luXzhGbHBIaGszeTlqcUlFZA0ZATd2l2LWU0TEVnenI1MW0zLTdaTjNiYlRiUkJ1SmhTWl9KOExBejAZD";
  var fullUrl = domainUrl + fields + '&access_token=' + access_token;

  useEffect(() => {
    fetch(fullUrl)
    .then((response) => response.json())
    .then((data) => {
      setInstaPost(data.data);
    });
  }, []);

          // console.log(instaPost);
  return (
    <div className="container-xxl">
      <h1 className="text-center">Instagram Feed</h1>
      <div className="row justify-content-center">
        {instaPost.map((instaData) => {
          return (
            <InstaImage
              dataId={instaData.id}
              mediaUrl={instaData.media_url}
              link={instaData.permalink}
            />
          )
        })}
      </div>
    </div>
  );
}

export default InstagramPage;