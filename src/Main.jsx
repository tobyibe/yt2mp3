import React, {useState} from 'react'

const Main = () => {
    const [url,setUrl] = useState(""); 
    const [statusMessage,setStatusMessage] = useState("");
    const [thumbNail,setThumbNail] = useState();
    const [downloadUrl, setDownloadUrl] = useState();
    async function query(e) {
        e.preventDefault();
        const searchParams = new URLSearchParams(url.split('?')[1]);
        var id = searchParams.get("v");
        if (id === null){
            let parts = url.split(/[/?]+/)
            id = parts[2];
        }
        if (id.length !== 11){
            setStatusMessage("Inavlid Link")
            return
        }

        const queryUrl = "https://youtube-mp3-download1.p.rapidapi.com/dl?id="+id;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8f2089f90dmshf4137e3ce12458dp1c586ajsn45dd70f6055b',
                'X-RapidAPI-Host': 'youtube-mp3-download1.p.rapidapi.com'
            }
        };
        setStatusMessage("Download Loading")
        const response = await fetch(queryUrl,options);
        const result = await response.json()
        if (response.status !== 200){
            setStatusMessage("Download Failed");
            return;
        }
        setStatusMessage ("Download Successful. Click Image to download")
        setThumbNail(result.thumb);
        setDownloadUrl(result.link);
        console.log(downloadUrl);
        console.log(thumbNail);


    }
  return (
    <div className='sm:text-start text-center  flex flex-col items-center dark:bg-gray-700 dark:text-gray-300 transition-all p-10 space-y-5 bg-slate-100 border-2 rounded-lg m-5'>
        <p className=' text-2xl sm:text-5xl font-bold'> Free YouTube To MP3 Converter and Downloader</p>
        <p className='text-xl'>Simply Paste the YouTube Video URL below</p>
        <form className='sm:flex space-y-5 sm:space-y-0 sm:space-x-5 sm:w-full '>
            <input placeholder='Enter YouTube Link...' className='rounded shadow-2xl w-full  text-lg text-black' onChange={(event) => setUrl(event.target.value)}></input>
            <button className='px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-800 rounded-lg bg-slate-300 hover:bg-slate-400 transition-all' onClick={query}>Convert</button>            
        </form>
        <p>{statusMessage}</p>
        <a href={downloadUrl} className='w-96'> 
            <img src={thumbNail} className=' w-full rounded-lg shadow-2xl hover:scale-105 transition-all' />
        </a>
     

    </div>
  )
}

export default Main