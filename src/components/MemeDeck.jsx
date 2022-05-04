import React from 'react'

export default function MemeDeck({ memes }) {
    const deleteMeme = event => {
        if (!event.target.closest('.meme')) return;
        event.target.remove();
      };
  return (
    <div  onClick={deleteMeme} className="meme-deck d-flex flex-wrap align-items-start">
      <div className="meme-deck-scroll d-flex flex-wrap justify-content-center align-items-start">
        {
            memes.length !== 0 && memes.map((meme, id)=>(
                <div className="meme bounceIn">
                    <span className="header-text">{meme.header}</span>
                    <span className="footer-text">{meme.footer}</span>
                    <img src={meme.image} key={id} alt='meme'/>
                </div>
            ))
        }
      </div>
    </div>
  )
}
