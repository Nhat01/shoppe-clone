import { useParams } from 'react-router-dom'
import { listAll, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { storage } from '../../firebase/config';

function Upload() {
  const [imageUploads, setImageUploads] = useState([])
  const [imageList, setImageList] = useState([])
  const imageLists = []

  let {slug} = useParams()
  const imageListRef = ref(storage, `images/${slug}`);

  const temp = imageList.map((image) => {
    return {
      url: image,
      num: Number(image.split('-')[2].split(".")[0])
    }
  })
  temp.sort((a, b) => { return a.num - b.num; });
  temp.forEach((item) => {
    imageLists.push(item.url)
  })
  console.log(imageLists);

  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      setImageUploads((prevState) => [...prevState, newImage]);
    }
  }

  const handleClick = () => {
    // console.log(imageList.sort((a, b) => a.localeCompare(b)));
    if (imageUploads === null) return;

    imageUploads.forEach(imageUpload => {
      const imageRef = ref(storage, `images/${slug}/${imageUpload.name}`)
      uploadBytes(imageRef, imageUpload).then(() => {
        console.log('uploaded');
      })
    })
  }

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList(prev => [...prev, url])
        })
      })
    })
  },[])
  return (
    <div>
      <input type="file" multiple onChange={handleChange}/>
      <button onClick={handleClick}>Upload</button>

      {imageListRef.fullPath.split('/')[1] === slug ? imageLists.map((url, index) =>(
        <img src={url} alt="" key={index}/>
      )) : null}
    </div>
  )
}

export default Upload;
