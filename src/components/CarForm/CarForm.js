const CarForm = () => {
    return (
        <form>
            <input type="text" placeholder={'model'}/>
            <input type="text" placeholder={'price'}/>
            <input type="text" placeholder={'year'}/>
            <button>Save</button>
        </form>
    );
};

export {CarForm};