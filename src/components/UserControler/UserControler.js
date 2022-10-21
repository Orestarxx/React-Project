import css from './controlerStyle.module.css'

const UserControler = () => {

    return (

        <div className={css.dropdown}>
            <button className={css.dropbtn}>Join</button>
            <div className={css.dropdownContent}>
                <a href="#">Register</a>
                <a href="#">Login</a>
                <a href="#">Settings</a>
            </div>
        </div>
    );
};

export {UserControler};