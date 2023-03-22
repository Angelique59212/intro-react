import './Sidebar.css';

export const Sidebar = function ({children}) {
    return (
        <div className= 'sidebar'>
            <div className='sidebar-header'>
                <p>
                    Vous êtes connectés en tant que ...
                </p>
            </div>
            <div className='sidebar-content'>
                {children.map((child, index) => <div key={index} className='sidebar-link'>{child}</div>)}
            </div>
            <div className='sidebar-footer'>
                <p>Interface admin</p>
            </div>
        </div>
    )
}