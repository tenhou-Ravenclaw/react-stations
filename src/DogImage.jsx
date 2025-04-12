// @ts-check
import { useState, useEffect } from 'react'

/**
 * @param {{ imageUrl: string }} props
 * @returns {JSX.Element}
 */
export const DogImage = ({ imageUrl }) => {
  return (
    <img src={imageUrl} alt="dog" />
  )
}

/**
 * @param {(url: string) => void} setDogUrl
 */
export const updateDogUrl = (setDogUrl) => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setDogUrl(data.message);
    })
}

export default DogImage
