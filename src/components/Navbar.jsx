import { Menubar } from 'primereact/menubar';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const items = [
        {
            label: 'Router',
            icon: 'pi pi-palette',
            items: [
                {
                    label: 'Styled',
                    url: '/theming'
                },
                {
                    label: 'Unstyled',
                    url: '/unstyled'
                }
            ]
        },
        {
            label: 'Programmatic',
            icon: 'pi pi-link',
            command: () => {
                <Link to='/installation' />;
            }
        },
        {
            label: 'External',
            icon: 'pi pi-home',
            items: [
                {
                    label: 'React.js',
                    url: 'https://react.dev/'
                },
                {
                    label: 'Vite.js',
                    url: 'https://vitejs.dev/'
                }
            ]
        }
    ];

    return (
        <div className="card bg-red-200 h-20 flex items-center justify-end">
            <div className='block'>
            <Menubar model={items} />
            </div>
        </div>
    )
}
        