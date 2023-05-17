
// eslint-disable-next-line react/prop-types
const HomeCard = ({data}) => {
    // eslint-disable-next-line react/prop-types
    const {organize, photo} = data;
    return (
        <div>
            <div className="card w-96 glass">
  <img src={photo} alt="car!"/>
  <div className="card-body">
    <h2 className="card-title">{organize}</h2>
  </div>
</div>
        </div>
    );
};

export default HomeCard;