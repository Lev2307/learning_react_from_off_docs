import { useState } from "react";

export default function Picture() {
    const [clicked, isClicked] = useState(false);

    let backgroundClassName = 'background';
    let pictureClassName = 'picture';
    if (clicked) {
      pictureClassName += ' picture--active';
    } else {
      backgroundClassName += ' background--active';
    }
    return (
      <div className={backgroundClassName} onClick={() => isClicked(false)}>
        <img
            onClick={e => {
                e.stopPropagation();
                isClicked(true);
            }}
            className={pictureClassName}
          alt="Rainbow houses in Kampung Pelangi, Indonesia"
          src="https://i.imgur.com/5qwVYb1.jpeg"
        />
      </div>
    );
  }
  