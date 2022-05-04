import React from 'react'

export default function MemeDeck({ memes }) {
    const deleteMeme = event => {
        if (!event.target.closest('.meme')) return;
        event.target.parentElement.remove();
      };
  return (
    <div  className="meme-deck d-flex flex-wrap align-items-start">
      <div className="meme-deck-scroll d-flex flex-wrap justify-content-center align-items-start">
        {
            memes.length !== 0 && memes.map((meme, id)=>(
                <>
                    <div className="meme bounceIn" key={id}>
                        <div className='meme_details' onClick={deleteMeme}>
                            <span className="header-text">{meme.header}</span>
                            <span className="footer-text">{meme.footer}</span>
                            <img src={meme.image} alt='meme'/>
                        </div>
                        <button className='btn btn-primary w-100 btn-lg text-uppercase'>mint nft</button>
                    </div>
                </>
            ))
        }
      </div>
    </div>
  )
}
