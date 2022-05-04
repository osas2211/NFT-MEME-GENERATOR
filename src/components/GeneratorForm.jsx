import React from 'react'
import Robot from './Robot'
import MemeDeck from './MemeDeck';

export default function GeneratorForm() {

    const [memeUrl, setMemeUrl] = React.useState("http://vignette1.wikia.nocookie.net/meme/images/7/71/BusinessCat2.jpg")
    const [btnText, setBtnText] = React.useState("Generate");
    const [sparks, setSparks] = React.useState("")
    const [vibrate, setVibrate] = React.useState("")
    const [memes, setMemes] = React.useState([])
    const [imageHelper, setImageHelper] = React.useState("")
    const [imgFile, setImageFile] = React.useState();
    const [memeHeader, setMemeHeader] = React.useState("")
    const [memeFooter, setMemeFooter] = React.useState("")
    


    const handleSubmit = (e)=>{
        e.preventDefault()
        const img = new Image()
        img.src = memeUrl
        

        img.onerror = () => {
            let hasImage = false;
            setImageHelper("d-block")
            console.log('Error: ', hasImage);
        };

        img.onload = ()=>{
            setImageHelper("")
            // update button text
           setBtnText("Generating...")
           // turn on robot sparks
           setSparks("blink-1")
           // start container shake
           setVibrate("vibrate-1")
           // output meme and stop animations
           if (imgFile){
            const fileReader = new FileReader()
            fileReader.onloadend = ()=>{
                setImageFile(this.result)
            }
        }
           setTimeout(() => {
            setBtnText("Generate")
            setSparks("")
            setVibrate("")

            // Generate meme
            setMemes(prevMemes => [
                ...prevMemes, 
                {
                    image: imgFile ? imgFile : memeUrl,
                    header: memeHeader,
                    footer: memeFooter
                }
            ])}, 2500
        )
        }
    }
  return (
    <>
        <div className={"form-container " + vibrate}>
            <div className="form-container-inner">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="screw screw-top screw-top-left screw-paused"></div>
                    <h1 className="mb-0">Meme Nft Marketplace</h1>
                    <div className="screw screw-top screw-top-right screw-paused"></div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="headerText" className="d-flex">Header text</label>
                        <input type="text" value={memeHeader} onChange={(e)=> setMemeHeader(e.target.value)} className="form-control form-control-sm" id="headerText" maxLength="65" autoFocus
                        autoComplete="off" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="footerText">Footer text</label>
                        <input type="text" value={memeFooter} onChange={(e)=> setMemeFooter(e.target.value)}  className="form-control form-control-sm" id="footerText" maxLength="65" autoComplete="off" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="footerText">Select an image file</label>
                        <input type="file" accept="image/*" name='Choose Image' onChange={e => setImageFile(e.target.files[0].name)} className="form-control form-control-sm" id="footerText" maxLength="65" autoComplete="off" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="memeURL" className="d-flex justify-content-between align-items-baseline">
                            Image URL     <small className="text-muted">Required</small>
                        </label>

                        <input type="url" className="form-control form-control-sm" id="memeURL" onChange={(e)=> setMemeUrl(e.target.value)} value={memeUrl} placeholder="http//..." autoComplete="off"
                        required />

                        <small id="memeHelper" className={"form-text text-muted text-initial " + imageHelper}>
                        <strong>Link error:</strong> No image found...
                        </small>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary btn-block w-100 text-center mt-1 mb-3">
                            {btnText}
                        </button>
                    </div>
                </form>
                <div className="d-flex justify-content-between">
                    <div className="screw screw-bottom screw-bottom-left screw-paused"></div>
                    <div className="screw screw-bottom screw-bottom-right screw-paused"></div>
                </div>
                <Robot sparks={sparks}/>
            </div>
        </div>
        <MemeDeck memes={memes}/>
    </>
  )
}
