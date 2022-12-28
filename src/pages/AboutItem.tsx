import { useParams } from 'react-router-dom'

export const AboutItem = () => {
  const params = useParams();

  return(
    <div>
      Pagina About {params.slug?.toUpperCase()}:
    </div>
  )
}