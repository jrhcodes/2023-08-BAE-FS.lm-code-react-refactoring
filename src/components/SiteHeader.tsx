import React from 'react';



export const SiteHeader: React.FC<{ nav: string[] }> = ({ nav }) => {
    return (<header className="site-header" >
        < div className="site-identity" >
            <a>
                <img
                    className="eefe-logo"
                    src="/icons8-space-64.png"
                    alt="eefe spaceship logo"
                />
            </a>
            <h1>Extraterrestrial Excursions for Earthlings</h1>
        </div >
        <ul className="go-somewhere">
            {nav.map((place: string) => {
                return (
                    <li key={place}>
                        <a>{place}</a>
                    </li>
                );
            })}
        </ul>
    </header >);

}