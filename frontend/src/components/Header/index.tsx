import head from '../../assets/img/header.svg'

import './Styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={head} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por<a href="https://www.instagram.com/personal_tailanrk/"> @personal_tailanrk.ig</a>
                </p>
            </div>
        </header>
    )
}

export default Header
