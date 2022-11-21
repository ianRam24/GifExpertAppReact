
export default function GifCard({title,image}) {
  return (
    <div className="card"><img src={image} alt={title} />
        <p>{title}</p>
    </div>
  )
}
