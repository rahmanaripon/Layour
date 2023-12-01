import { Link } from "react-router-dom"

const Card = ({ info }) => {

  console.log("In the card: ", info);

  const { title, description, images, id, } = info

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={images[0]} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Cart</button>
            <Link to={`/Products/${id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card