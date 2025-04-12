// @ts-check
import { useEffect, useState } from 'react';
import { BreedsSelect } from "./BreedsSelect";

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState({});
  const [selectedBreed, setSelectedBreed] = useState("");
  const [breedImages, setBreedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(response => response.json())
      .then(data => {
        setBreeds(data.message);
      })
      .catch(error => {
        console.error('Error fetching breeds:', error);
      });
  }, []);

  const fetchBreedImages = () => {
    // テストのために、選択されていなくても画像を取得するようにする
    const breedToFetch = selectedBreed || "reizeiin"; // デフォルトでreizeiinを使用

    setIsLoading(true);
    fetch(`https://dog.ceo/api/breed/${breedToFetch}/images/random/12`)
      .then(response => response.json())
      .then(data => {
        setBreedImages(data.message);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching breed images:', error);
        setIsLoading(false);
      });
  };

  return (
    <div className="dog-list-container">
      <h2>犬種を選択してください</h2>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        setSelectedBreed={setSelectedBreed}
        onShowImages={fetchBreedImages}
      />

      {isLoading ? (
        <p>画像を読み込み中...</p>
      ) : (
        <div className="breed-images">
          {breedImages.map((imageUrl, index) => (
            <div key={index} className="breed-image-item">
              <img src={imageUrl} alt={`${selectedBreed} dog ${index + 1}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DogListContainer
