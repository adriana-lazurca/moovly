import { Menu } from '../menu/Menu';


export const Layout = (props) => {
    return (
        <section>
            <header>
                <Menu />
            </header>

            <main>
                {props.children}
            </main>
        </section>
    );
}