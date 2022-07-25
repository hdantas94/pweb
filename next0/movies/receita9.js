import { useRouter } from 'next/router'


export default function TheAnimes({data}){

   
    const router = useRouter()

    if (router.isFallback) {
      return <div>Carregando...</div>
    }


    const title = data.data.title
    const episodes = data.data.episodes
    const score = data.data.score
    const image = data.data.images.jpg.image_url
    const synopsis = data.data.synopsis
    
    return (

        <div className="Principal">
            <style jsx>
            {`
                .Principal{
                    display: flex;
                    flex-direction: column;
                    margin: auto;
                    padding: 10px;
                    align-items: center;
                    max-width: 500px;
                }
                ul {
                    list-style: none;
                }
                ul li {
                    margin-bottom: 5px;
                }
            `}
            </style>

            <ul>
                <li> Título: {title}</li>
                <li> Episódios: {episodes} episódio(s)</li>
                <li> Score: {score}</li>
                <li>Sinopse: {synopsis}</li>
            </ul>

            <div>
                <img src={image} />
            </div>


        </div>     

    )

}

export async function getStaticPaths(){

    return {

        paths:[

            {params: {id: "40456"}},

            {params: {id: "34566"}},

            {params: {id: "40085"}},

        ],

        fallback: true 

    }

}

export async function getStaticProps({ params }) {

    console.log(params)
    const res = await fetch(`https://api.jikan.moe/v4/anime/${params.id}`)

    const data = await res.json();

    return {

      props: {

        data

      }

    }

}