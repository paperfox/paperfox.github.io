import React, { useState, useEffect } from 'react';
// import ImageShow from './ImageShow';
// import returnInstaFeed from './api';

function InstagramPage({ instData }) {
  const [counter, setCounter] = useState(0);
  const [instaPost, setInstaPost] = useState([])


  // const returnInstaFeed = async () => {
  //   let domainUrl ="https://graph.instagram.com/me/media?";
  //   let fields ="fields=media_url";
  //   var access_token = "IGQWRPUjZAFZA204V1MzV0VId0R4VjhIc2NvY2k0aUt4bDExYWU5dkRsQWVITFgzNHZALR1paYVZAROXppQjNRQ3luXzhGbHBIaGszeTlqcUlFZA0ZATd2l2LWU0TEVnenI1MW0zLTdaTjNiYlRiUkJ1SmhTWl9KOExBejAZD";
  //   var fullUrl = domainUrl + fields + '&access_token=' + access_token;

  //   const response = await axios.get(fullUrl);
  //   const imageData = response.data.data;
  //   console.log(response.data.data);

  //   return imageData;
  // };

  // setCounter(counter + 1)
 console.log(instData);

    const [images, setImages] = useState([]);

    // const handleSubmit = async (term) => {
    //   const result = await searchImages(term);
    //   setImages(result);
    // }
    // return (
    //   <div>
    //     <ImageList images={images} />
    //   </div>
    // );

  return (
    <div className="container-xxl">
        <h1 className="text-center">Instagram Feed</h1>
        <div className="row">
          {/* <ImageShow /> */}
          {/* <ImageList images={images} /> */}
        </div>

        {/* {sectionContent.filter(desc => desc.id.includes('Major')).map(sectionHeading => (
            // <SectionDesc sectionData={sectionHeading} key={sectionHeading.id} />
            <ImageShow key/>
          // <ImageList images={images} />
          ))} */}

        <div className="row justify-content-center mb-4">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            {/* <img id={insta[0].id}className="w-100 mb-4" src={insta[0].media_url} /> */}
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <img id="17892962417934574" className="w-100 mb-4" src="https://scontent-bos5-1.cdninstagram.com/v/t51.29350-15/436914286_347746804946564_6918957213436276893_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=zXoyyLX91bQAb5CdEBI&_nc_ht=scontent-bos5-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCCGsWRpZ11nMs9hq6PJ_y_tQctYWmhBjz3f-4SBPKH4A&oe=6620B79A" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <img id="17892962417934574" className="w-100 mb-4" src="https://scontent-bos5-1.cdninstagram.com/v/t51.29350-15/436914286_347746804946564_6918957213436276893_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=zXoyyLX91bQAb5CdEBI&_nc_ht=scontent-bos5-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCCGsWRpZ11nMs9hq6PJ_y_tQctYWmhBjz3f-4SBPKH4A&oe=6620B79A" />
          </div>
        </div>
    </div>
  );
}

export default InstagramPage;