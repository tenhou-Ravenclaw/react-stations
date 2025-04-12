// @ts-check

import { useState } from "react"

/**
 * @param {{ 
 *   breeds: Record<string, string[]>,
 *   selectedBreed: string,
 *   setSelectedBreed: (breed: string) => void,
 *   onShowImages: () => void
 * }} props
 * @returns {JSX.Element}
 */
export const BreedsSelect = ({ breeds, selectedBreed, setSelectedBreed, onShowImages }) => {
  return (
    <div className="breeds-select-container">
      <select
        name="breeds"
        id="breeds-select"
        value={selectedBreed}
        onChange={(e) => setSelectedBreed(e.target.value)}
      >
        <option value="">犬種を選択してください</option>
        {Object.keys(breeds).map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
      <div>
        <button
          type="button"
          onClick={onShowImages}
        >
          表示
        </button>
      </div>
    </div>
  )
}

export default BreedsSelect
