// @ts-check
import { DogImage, updateDogUrl } from "./DogImage.jsx";
import { useState } from 'react';

export const Description = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/maltese/n02085936_3239.jpg');

  return (
    <main>
      <h2>犬の画像を表示するサイトです</h2>
      <DogImage imageUrl={dogUrl} />
      <div>
        <button type='button' onClick={() => updateDogUrl(setDogUrl)}>
          更新
        </button>
      </div>
    </main>
  )
}

export default Description
