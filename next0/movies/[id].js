import useSWR from 'swr'
import { useRouter } from 'next/router'

export default function TheMovies() {
    const {id} = useRouter().query

    const{data, error} = useSWR(`https://www.omdbapi.com/?apikey=678e6ae&i=${id}`, async (u) => {
    const res = await fetch(u)
    const json = await res.json();
    return json;
    })

    if (error) return <div>Erro ba requisição/resposta </div>

    if (!data) return <div>Carregando...</div>

    if (data.Error) <div>Erro</div>

    return (
        <div>
            <div>{data.Title} --- {data.Year}</div>
            <div>{data.Plot}</div>
            <div>
                <img src={data.Poster} width="300" height="400"/>
            </div>
        </div>
    )
}