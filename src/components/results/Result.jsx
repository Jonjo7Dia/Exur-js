import classes from './Result.module.css';
import { useEffect, useState } from "react";

function Result(props){

    const [imageData, setImageData] = useState('');
    useEffect(() =>{
        fetch(`https://pfp-public-productdb-api.azurewebsites.net/api/picture/${props.result.productPictures[0].pictureId}`)
            .then(response => response.blob())
            .then(image => {
                const localUrl = URL.createObjectURL(image);
                setImageData(localUrl);
            });
    }, []);
    return (
        <div className={classes.result}>
          <div className={classes.resultImage}>
            <img src={imageData} alt="" />
          </div>
          <div className={classes.resultName}>
              <h1>{props.result.name}</h1>
          </div>
        </div>
      );
}

export default Result;