import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    const {Images, isLoading} = useFetchGifs(category);
    

  return (
    <div>
        <h3>{category}</h3>
        
        {isLoading && (<div>Loading...</div>)  }
       
        <div className="card-grid">
            {
                Images.map(({id, title, imgUrl}) => (
                    <GifItem key={id} title={title} imgUrl={imgUrl}/>
                ))
            }
        </div>
        
    </div>
  )
}
