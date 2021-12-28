import React from 'react';
import styles from './SelectCuisine.module.scss';
const SelectCuisine = ({ cuisineValue, setCuisineValue }) => {
    return (
        <select
            className={styles['select-cuisine']}
            name=""
            id=""
            value={cuisineValue}
            onChange={(e) => setCuisineValue(e.target.value)}
        >
            <option value="default">Cuisine</option>
            <option value="african">African</option>
            <option value="american">American</option>
            <option value="british">British</option>
            <option value="cajun">Cajun</option>
            <option value="caribbean">Caribbean</option>
            <option value="chinese">Chinese</option>
            <option value="eastern">Eastern</option>
            <option value="european">European</option>
            <option value="french">French</option>
            <option value="german">German</option>
            <option value="greek">Greek</option>
            <option value="indian">Indian</option>
            <option value="irish">Irish</option>
            <option value="italian">Italian</option>
            <option value="japanese">Japanese</option>
            <option value="jewish">Jewish</option>
            <option value="korean">Korean</option>
            <option value="latin-american">Latin American</option>
            <option value="mediterranean">Mediterranean</option>
            <option value="mexican">Mexican</option>
            <option value="middle-eastern">Middle Eastern</option>
            <option value="nordic">Nordic</option>
            <option value="southern">Southern</option>
            <option value="spanish">Spanish</option>
            <option value="thai">Thai</option>
            <option value="vietnamese">Vietnamese</option>
        </select>
    );
}

export default SelectCuisine;