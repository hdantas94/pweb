export default function Movies({data}){

    return (

        <div>

            <div>

            {data.Search.map( (m) => <div>{m.Title} --- {m.Year}...<img src={m.Poster}></img></div>  )}               

            </div>

        </div>

    )

}

export async function getServerSideProps(context){

    const res = await fetch(`http://www.omdbapi.com/?apikey=678e6ae&s=rings`)
  
    const data = await res.json()
  
    return {
  
        props: {
  
            data
  
        }
  
    }
  
  }

