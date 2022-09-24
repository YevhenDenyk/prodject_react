import css from './Car.module.css'

const Car = ({car}) => {
    const {id, model, price, year} = car
    return (
        <div className={css.Car}>
            <div>
                <div> id: {id}</div>
                <div> model: {model}</div>
                <div> price: {price}</div>
                <div> year: {year}</div>
            </div>
            <div className={css.tools}>
                <button> Update </button>
                <button> Delete </button>
            </div>
        </div>
    );
};

export {Car};