import React from 'react';
import classes from './ProductDetails.module.css';

const ProductDetails = (props) => {
    const colorOption = props.data.colorOptions.map((item, pos) => {
        const classArr = [classes.ProductImage];
        if(pos === props.currentPreviewImagePos) classArr.push(classes.SelectProductImage);
        return (
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} 
            alt={item.styleName} onClick = {() => props.onColorOptionClick(pos)} />
        );
    })

    const featureList = props.data.featureList.map((item, pos) => {
        const classArr = [classes.FeatureItem];
        if(pos === props.currentButton) classArr.push(classes.SelectFeatureItem);
        return (
            <button key={pos} className={classArr.join(' ')}
            onClick={() => props.onButtonClick(pos)}>{item}</button>
        );
    });

    return (
        <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{props.data.title}</h1>
          <p className={classes.ProductDescription}>{props.data.description}</p>
          <h3 className={classes.SectionHeading}>Select Color</h3>
          <div>
            {colorOption}
          </div>
          <h3 className={classes.SectionHeading}>Features</h3>
          <div>
            {featureList}
          </div>
          <button className={classes.PrimaryButton}>Buy Now</button>
        </div>
    );
};


export default ProductDetails;