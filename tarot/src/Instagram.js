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
  }, [fullUrl]);
  console.log(instaPost)
  return (
    <div className="container-xxl">
      <div className="row justify-content-center">
        <div className="col-md-11 col-lg-10">
          <h1 className="text-center">Instagram Feed</h1>
          <p className="mb-5 text-center">A good sampling of my current work based on my latest instagram updates. Click on any image to see the full post over there.</p>
          <div className="row justify-content-center">
            {instaPost.map((instaData) => {
              return (
                <InstaImage
                  key={instaData.id}
                  dataId={instaData.id}
                  mediaUrl={instaData.media_url}
                  link={instaData.permalink}
                />
              )
            })}
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-4 align-self-stretch rounded instagram-link">
                <a href="https://www.instagram.com/paperfoxmakesart/" target="_blank" rel="noreferrer"  className="d-flex align-items-center">
                  <p className="text-center align-middle">View more on instagram</p>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstagramPage;